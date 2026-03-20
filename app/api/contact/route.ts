import { NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.CONTACT_EMAIL || "Geetorus@gmail.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

async function sendSMTPEmail({
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
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "587"),
    secure: SMTP_PORT === "465",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!/^[\d\s\-\+\(\)]{7,}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    const origin = new URL(request.url).origin;
    const from =
      SMTP_FROM ||
      `no-reply@${new URL(process.env.NEXT_PUBLIC_SITE_URL ?? origin).hostname}`;

    // Prepare email content
    const emailSubject = `[Geetorus Contact] ${subject}`;
    const emailText = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
`;

    // Log the submission
    console.log("📧 New Contact Form Submission:", {
      name,
      email,
      phone,
      subject,
      timestamp: new Date().toISOString(),
    });

    // Check if email provider is configured
    const canSendEmail = Boolean(RESEND_API_KEY) || (SMTP_HOST && SMTP_USER && SMTP_PASS);
    if (!canSendEmail) {
      console.warn("[contact] no email provider configured; skipping email send.");
      return NextResponse.json(
        {
          success: true,
          message: "Your mail has been successfully sended",
        },
        { status: 200 }
      );
    }

    // Try Resend first (if configured)
    if (RESEND_API_KEY) {
      try {
        await sendResendEmail({
          from,
          to: ADMIN_EMAIL,
          subject: emailSubject,
          text: emailText,
        });
        console.log("✅ Email sent via Resend to", ADMIN_EMAIL);

        // Send response email to user
        try {
          await sendResendEmail({
            from,
            to: email,
            subject: "Your mail has been successfully sended - Geetorus",
            text: `Hi ${name},\n\nThank you for contacting Geetorus. We have received your message and will get back to you soon.\n\nBest regards,\nGeetorus Team`,
          });
          console.log("✅ Response email sent to user:", email);
        } catch (userEmailError) {
          console.warn("⚠️ Failed to send user response email:", userEmailError);
        }
      } catch (resendError) {
        console.error("❌ Resend error:", resendError);
        // Fall back to SMTP if Resend fails and SMTP is configured
        if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
          try {
            await sendSMTPEmail({
              from,
              to: ADMIN_EMAIL,
              subject: emailSubject,
              text: emailText,
            });
            console.log("✅ Email sent via SMTP to", ADMIN_EMAIL);

            // Send response email to user via SMTP
            try {
              await sendSMTPEmail({
                from,
                to: email,
                subject: "Your mail has been successfully sended - Geetorus",
                text: `Hi ${name},\n\nThank you for contacting Geetorus. We have received your message and will get back to you soon.\n\nBest regards,\nGeetorus Team`,
              });
              console.log("✅ Response email sent to user:", email);
            } catch (userEmailError) {
              console.warn("⚠️ Failed to send user response email:", userEmailError);
            }
          } catch (smtpError) {
            console.error("❌ SMTP error:", smtpError);
            throw smtpError;
          }
        } else {
          throw resendError;
        }
      }
    } else if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      // Use SMTP if Resend not configured
      try {
        await sendSMTPEmail({
          from,
          to: ADMIN_EMAIL,
          subject: emailSubject,
          text: emailText,
        });
        console.log("✅ Email sent via SMTP to", ADMIN_EMAIL);

        // Send response email to user via SMTP
        try {
          await sendSMTPEmail({
            from,
            to: email,
            subject: "Your mail has been successfully sended - Geetorus",
            text: `Hi ${name},\n\nThank you for contacting Geetorus. We have received your message and will get back to you soon.\n\nBest regards,\nGeetorus Team`,
          });
          console.log("✅ Response email sent to user:", email);
        } catch (userEmailError) {
          console.warn("⚠️ Failed to send user response email:", userEmailError);
        }
      } catch (smtpError) {
        console.error("❌ SMTP error:", smtpError);
        throw smtpError;
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your mail has been successfully sended",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
