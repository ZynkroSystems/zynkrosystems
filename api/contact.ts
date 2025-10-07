import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactLeadEmail from "../emails/ContactLeadEmail";

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
    const data = await (typeof req.body === "string" ? JSON.parse(req.body) : req.body);

    if (!data.name || !data.email) {
      return res.status(400).json({ error: "Missing required fields (name, email)" });
    }

    // Compose a great subject line
    const badge =
      data.serviceType === "demo" ? "Demo 24h" :
      data.serviceType === "audit" ? "Audit" :
      data.serviceType === "both" ? "Demo + Audit" :
      "Lead";
    const city = data.city ? ` • ${data.city}` : "";
    const subject = `[${badge}] ${data.name}${city}`;

    // Add source path from referrer or default
    const sourcePath = data.sourcePath || req.headers.referer || "";

    // Render HTML + text
    const html = await render(ContactLeadEmail({ ...data, sourcePath }));
    const text = await render(ContactLeadEmail({ ...data, sourcePath }), { plainText: true });

    console.log("Attempting to send email with:", { 
      name: data.name, 
      email: data.email, 
      subject,
      sourcePath 
    });

    const emailData = {
      from: "ZynkroSystems <onboarding@resend.dev>",
      to: "angelo@zynkrosystems.com",
      reply_to: data.email, // One-click reply to the lead
      subject,
      html,
      text,
      tags: [
        { name: "source", value: data.utm?.utm_source || "direct" },
        { name: "type", value: badge }
      ],
    };

    console.log("Email data being sent:", {
      from: emailData.from,
      to: emailData.to,
      reply_to: emailData.reply_to,
      subject: emailData.subject,
    });
    
    const result = await resend.emails.send(emailData);
    
    console.log("Resend API response:", JSON.stringify(result, null, 2));

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
      ok: true,
      id: result.data.id
    });
  } catch (error) {
    console.error("Email send error:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ 
      ok: false,
      error: "Failed to send message",
      details: String(error)
    });
  }
}
