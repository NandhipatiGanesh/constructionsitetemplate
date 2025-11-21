import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, service, date, time, message } = body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // 1) Email to Admin
    const adminHtml = `
      <h2>New Appointment Request</h2>
      <p>You have received a new appointment request:</p>
      <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        ${service ? `<li><strong>Service:</strong> ${service}</li>` : ""}
        ${
          date || time
            ? `<li><strong>Preferred:</strong> ${date || ""} ${time || ""}</li>`
            : ""
        }
        ${
          message
            ? `<li><strong>Message:</strong><br>${message.replace(
                /\n/g,
                "<br>"
              )}</li>`
            : ""
        }
      </ul>
    `;

    await resend.emails.send({
      from: "SL Builders <onboarding@resend.dev>", // later switch to your verified domain
      to: "slbuilders1511@gmail.com", // admin email
       replyTo: email,   
      subject: `New Appointment Request from ${fullName}`,
      html: adminHtml,
    });

    // 2) Confirmation email to user
    const userHtml = `
      <p>Hi <strong>${fullName}</strong>,</p>
      <p>Thank you for submitting your appointment request with <strong>SL Builders</strong>. We have received your information and will get back to you shortly.</p>
      <p>If you have any urgent questions, feel free to contact us:</p>
      <p>
        📞 <a href="tel:+919686660444">+91 9686660444</a><br />
        ✉️ <a href="mailto:Slbuilders1511@gmail.com">Slbuilders1511@gmail.com</a>
      </p>
      <p>Gandimysamma, Hyderabad, Telangana, India - 500043<br/>
      Mon — Sat: 8:00 AM — 8:00 PM</p>
    `;

    await resend.emails.send({
      from: "SL Builders <onboarding@resend.dev>",
      to: email,
      subject: "Appointment Request Received - SL Builders",
      html: userHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your appointment request has been submitted successfully. We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit. Please check your connection and try again.",
      },
      { status: 500 }
    );
  }
}
