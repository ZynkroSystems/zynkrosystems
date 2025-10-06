import { Resend } from "resend";

// Check if API key exists
if (!process.env.RESEND_KEY) {
  throw new Error("RESEND_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_KEY);

// Simple email template function
function createEmailHTML(name: string, email: string, message: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif; background-color: #ffffff; margin: 0; padding: 20px;">
      <div style="max-width: 560px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; font-size: 24px; font-weight: bold; margin: 40px 0 20px; padding: 0;">New Contact Form Submission</h1>
        
        <p style="color: #333; font-size: 16px; line-height: 26px; margin: 12px 0;">
          <strong>Name:</strong> ${name}
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 26px; margin: 12px 0;">
          <strong>Email:</strong> ${email}
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 26px; margin: 12px 0;">
          <strong>Message:</strong>
        </p>
        
        <div style="color: #333; font-size: 16px; line-height: 26px; margin: 12px 0; padding: 12px; background-color: #f9f9f9; border-radius: 4px; border: 1px solid #e1e1e1;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <hr style="border-color: #cccccc; margin: 20px 0;">
        
        <p style="color: #8898aa; font-size: 12px; margin: 20px 0 0 0;">
          Sent from zynkrosystems.com contact form
        </p>
      </div>
    </body>
    </html>
  `;
}

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
      to: "angelo.rosu2001@gmail.com",
      subject: `New enquiry from ${name}`,
      html: createEmailHTML(name, email, message),
    };

    console.log("Email data being sent:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasHTML: !!emailData.html
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
