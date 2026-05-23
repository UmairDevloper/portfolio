import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "muhammadumairullah669@gmail.com",
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });


    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      { error: "Email failed", details: error.message },
      { status: 500 },
    );
  }
}
