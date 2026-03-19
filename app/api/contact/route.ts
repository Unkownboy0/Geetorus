import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the message (in production, you'd send via Nodemailer/Resend/etc.)
    console.log("📧 New Contact Form Submission:", {
      name,
      email,
      subject,
      message: message.substring(0, 100),
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate email service
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Geetorus <noreply@geetorus.com>',
    //   to: [process.env.CONTACT_EMAIL!],
    //   subject: `[Geetorus Contact] ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Message received! We'll get back to you within 24 hours.",
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
