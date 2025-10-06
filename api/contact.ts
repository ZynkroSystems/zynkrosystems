import { Resend } from "resend";
import { ContactEmail } from "./contact-email";

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
      to: "angelo@zynkrosystems.com", // Use verified email address
      subject: `New enquiry from ${name}`,
      react: ContactEmail({ name, email, message }),
    };

    console.log("Email data being sent:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasReactComponent: !!emailData.react
    });
    console.log("About to call resend.emails.send...");
    
    const result = await resend.emails.send(emailData);
    
    console.log("Raw Resend result:", result);
    console.log("Resend API response:", JSON.stringify(result, null, 2));
    console.log("Email ID:", result.data?.id);
    console.log("Resend error:", result.error);
    console.log("Success?", !!result.data?.id);

    if (result.error) {
      console.error("Resend returned an error:", result.error);
      return res.status(500).json({ 
        error: "Resend API error", 
        details: result.error 
      });
    }

    if (!result.data?.id) {
      console.error("No email ID returned - email may not have been sent");
      return res.status(500).json({ 
        error: "No email ID returned", 
        resendResponse: result 
      });
    }
    
    return res.status(200).json({ 
      success: true, 
      emailId: result.data.id,
      resendResponse: result
    });
  } catch (error) {
    console.error("Email send error:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ 
      error: "Failed to send message",
      details: String(error)
    });
  }
}
