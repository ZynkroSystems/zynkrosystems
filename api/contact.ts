import { Resend } from "resend";

// Check if API key exists
if (!process.env.RESEND_KEY) {
  throw new Error("RESEND_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_KEY);

export default async function handler(req: any, res: any) {
  // Enable CORS for frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    console.log("Attempting to send email with:", { name, email, messageLength: message.length });
    console.log("RESEND_KEY exists:", !!process.env.RESEND_KEY);

    const emailData = {
      from: "Contact Form <onboarding@resend.dev>",
      to: "support@zynkrosystems.com",
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
          <hr>
          <p><small>Sent from zynkrosystems.com contact form</small></p>
        </div>
      `,
    };

    console.log("Email data:", emailData);
    const result = await resend.emails.send(emailData);

    console.log("Email sent successfully:", result);
    return res.status(200).json({ success: true, emailId: result.data?.id });
  } catch (error) {
    console.error("Email send error:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ 
      error: "Failed to send message",
      details: String(error)
    });
  }
}
