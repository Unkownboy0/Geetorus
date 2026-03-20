import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blogPosts";

const ADMIN_EMAIL = process.env.SUBSCRIBE_TO_EMAIL || process.env.CONTACT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildNewsletterDigest(origin: string) {
  const lines: string[] = [
    "Thanks for subscribing to the Geetorus newsletter!",
    "",
    "Here are the latest posts:",
  ];

  blogPosts.slice(0, 5).forEach((post) => {
    lines.push(`- ${post.title}`);
    lines.push(`  ${origin}/blog/${post.slug}`);
  });

  lines.push("", `Read more at: ${origin}/blog`);
  return lines.join("\n");
}

async function sendResendEmail({
  from,
  to,
  subject,
  text,
}: {
  from: string;
  to: string;
  subject: string;
  text: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from, to, subject, text }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed (${res.status}): ${body}`);
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email?.toString()?.trim();

  if (!email || !validateEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const origin = new URL(req.url).origin;
  const from =
    SMTP_FROM || `no-reply@${new URL(process.env.NEXT_PUBLIC_SITE_URL ?? origin).hostname}`;

  const adminText = `New newsletter subscription: ${email}\n\nVisit: ${req.url}`;
  const newsletterText = buildNewsletterDigest(origin);

  // Send notifications: admin and subscriber
  const canSendEmail = Boolean(RESEND_API_KEY) || (SMTP_HOST && SMTP_USER && SMTP_PASS);
  if (!canSendEmail) {
    console.warn(
      "[subscribe] no email provider configured; skipping welcome email.",
      email
    );
    return NextResponse.json({
      success: true,
      message: "Subscribed (email not sent; no provider configured).",
    });
  }

  const adminEmail = ADMIN_EMAIL;
  const sendToAdmin = Boolean(adminEmail);

  // Prefer Resend if configured (easier than SMTP and avoids authentication issues)
  let doSmtpFallback = true;
  if (RESEND_API_KEY) {
    try {
      if (sendToAdmin && adminEmail) {
        await sendResendEmail({
          from,
          to: adminEmail,
          subject: "New newsletter subscription",
          text: adminText,
        });
      }

      await sendResendEmail({
        from,
        to: email,
        subject: "Welcome to Geetorus!",
        text: newsletterText,
      });

      return NextResponse.json({
        success: true,
        message: "Thanks! You've been subscribed and a welcome email has been sent.",
      });
    } catch (err) {
      console.error("[subscribe] failed sending email via Resend, trying SMTP fallback", err);
      doSmtpFallback = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
      if (!doSmtpFallback) {
        return NextResponse.json(
          { success: false, error: "Failed to send subscription email via Resend and no SMTP configured." },
          { status: 500 }
        );
      }
    }
  }

  // Fallback to SMTP (nodemailer) if configured
  if (doSmtpFallback && SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      if (sendToAdmin && adminEmail) {
        await transporter.sendMail({
          from,
          to: adminEmail,
          subject: "New newsletter subscription",
          text: adminText,
        });
      }

      await transporter.sendMail({
        from,
        to: email,
        subject: "Welcome to Geetorus!",
        text: newsletterText,
      });

      return NextResponse.json({
        success: true,
        message: "Thanks! You've been subscribed and a welcome email has been sent.",
      });
    } catch (err: any) {
      console.error("[subscribe] failed sending email", err);

      if (err?.code === "EAUTH" || (err?.responseCode === 534 && /Application-specific password required/i.test(err?.response || ""))) {
        return NextResponse.json(
          {
            success: false,
            error:
              "SMTP authentication failed: Google requires an app-specific password or OAuth2 for 2FA accounts. " +
              "Set SMTP_USER with an app password, or use RESEND_API_KEY instead.",
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { success: false, error: "Failed to send subscription email. Check server logs." },
        { status: 500 }
      );
    }
  }

  // Should never get here, but fallback just in case
  console.log("[subscribe] new subscriber:", email);
  return NextResponse.json({
    success: true,
    message: "Subscribed (logged locally).",
  });
}
