import { Resend } from "resend";
import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from '@react-email/components';

// Check if API key exists
if (!process.env.RESEND_KEY) {
  throw new Error("RESEND_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_KEY);

// Email template component
function ContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
  return React.createElement(Html, { lang: "en" },
    React.createElement(Head),
    React.createElement(Body, { style: { backgroundColor: '#ffffff', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif' } },
      React.createElement(Container, { style: { margin: '0 auto', padding: '20px 0 48px', maxWidth: '560px' } },
        React.createElement(Section, null,
          React.createElement(Heading, { style: { color: '#333', fontSize: '24px', fontWeight: 'bold', margin: '40px 0 20px', padding: '0' } }, "New Contact Form Submission"),
          React.createElement(Text, { style: { color: '#333', fontSize: '16px', lineHeight: '26px', margin: '12px 0' } },
            React.createElement('strong', null, "Name: "), name
          ),
          React.createElement(Text, { style: { color: '#333', fontSize: '16px', lineHeight: '26px', margin: '12px 0' } },
            React.createElement('strong', null, "Email: "), email
          ),
          React.createElement(Text, { style: { color: '#333', fontSize: '16px', lineHeight: '26px', margin: '12px 0' } },
            React.createElement('strong', null, "Message:")
          ),
          React.createElement(Text, { style: { color: '#333', fontSize: '16px', lineHeight: '26px', margin: '12px 0', padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #e1e1e1' } }, message),
          React.createElement(Hr, { style: { borderColor: '#cccccc', margin: '20px 0' } }),
          React.createElement(Text, { style: { color: '#8898aa', fontSize: '12px', margin: '20px 0 0 0' } }, "Sent from zynkrosystems.com contact form")
        )
      )
    )
  );
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
