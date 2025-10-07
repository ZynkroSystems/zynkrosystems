import { Resend } from "resend";
import { render } from "@react-email/render";
import * as React from "react";
import {
  Html, Head, Preview, Body, Container, Section, Text,
  Heading, Hr, Button
} from "@react-email/components";

// Check if API key exists
if (!process.env.RESEND_KEY) {
  throw new Error("RESEND_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_KEY);

// Email template component (inline to avoid deployment issues)
type Lead = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  city?: string;
  contactMethod?: string;
  contactTime?: string;
  timeline?: string;
  budget?: string;
  hearAbout?: string;
  message?: string;
  provideMoreInfo?: boolean;
  serviceType?: string;
  currentLeadVolume?: string;
  responseTime?: string;
  biggestChallenge?: string;
  monthlyRevenue?: string;
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    referrer?: string;
  };
  sourcePath?: string;
};

function ContactLeadEmail(props: Lead) {
  const badge =
    props.serviceType === "demo" ? "Demo (24h)" :
    props.serviceType === "audit" ? "Audit" :
    props.serviceType === "both" ? "Demo + Audit" :
    "Lead";

  const preheader = `${props.name} • ${badge} • ${props.city ?? ""}`.trim();

  const Row = ({ label, value }: {label: string; value?: string}) =>
    value ? React.createElement(Section, { style: { marginBottom: 8 } },
      React.createElement(Text, { style: { margin: 0 } },
        React.createElement('strong', null, `${label}: `),
        value
      )
    ) : null;

  return React.createElement(Html, null,
    React.createElement(Head),
    React.createElement(Preview, null, preheader),
    React.createElement(Body, { style: { backgroundColor: "#0b0b0f", color: "#e7e7ea", fontFamily: "Inter, Arial, sans-serif" } },
      React.createElement(Container, { style: { maxWidth: 640, margin: "24px auto", padding: 24, background: "#121218", borderRadius: 16, border: "1px solid #1f2230" } },
        React.createElement(Heading, { style: { fontSize: 22, margin: "0 0 4px" } },
          "New Enquiry — ",
          React.createElement('span', { style: { color: "#FFB020" } }, badge)
        ),
        React.createElement(Text, { style: { marginTop: 0, color: "#9aa0ae" } }, props.sourcePath ?? ""),
        React.createElement(Hr, { style: { borderColor: "#1f2230", margin: "12px 0 16px" } }),
        
        // Core lead info
        React.createElement(Row, { label: "Name", value: props.name }),
        React.createElement(Row, { label: "Email", value: props.email }),
        React.createElement(Row, { label: "Phone", value: props.phone }),
        React.createElement(Row, { label: "Company", value: props.company }),
        React.createElement(Row, { label: "Website", value: props.website }),
        React.createElement(Row, { label: "City/Area", value: props.city }),
        React.createElement(Row, { label: "Preferred Contact", value: [props.contactMethod, props.contactTime].filter(Boolean).join(" @ ") }),
        React.createElement(Row, { label: "Timeline", value: props.timeline }),
        React.createElement(Row, { label: "Budget", value: props.budget }),
        React.createElement(Row, { label: "Heard About Us", value: props.hearAbout }),

        // Message
        props.message ? React.createElement(React.Fragment, null,
          React.createElement(Hr, { style: { borderColor: "#1f2230", margin: "12px 0" } }),
          React.createElement(Heading, { as: "h3", style: { fontSize: 16, margin: "0 0 8px" } }, "Message"),
          React.createElement(Text, { style: { whiteSpace: "pre-wrap", marginTop: 0 } }, props.message)
        ) : null,

        // Additional info
        props.provideMoreInfo ? React.createElement(React.Fragment, null,
          React.createElement(Hr, { style: { borderColor: "#1f2230", margin: "12px 0" } }),
          React.createElement(Heading, { as: "h3", style: { fontSize: 16, margin: "0 0 8px" } }, "Additional Info"),
          React.createElement(Row, { label: "Service Type", value: props.serviceType }),
          React.createElement(Row, { label: "Leads / week", value: props.currentLeadVolume }),
          React.createElement(Row, { label: "Typical Response Time", value: props.responseTime }),
          React.createElement(Row, { label: "Biggest Challenge", value: props.biggestChallenge }),
          React.createElement(Row, { label: "Monthly Revenue", value: props.monthlyRevenue })
        ) : null,

        // UTM / attribution
        (props.utm?.utm_source || props.utm?.referrer) ? React.createElement(React.Fragment, null,
          React.createElement(Hr, { style: { borderColor: "#1f2230", margin: "12px 0" } }),
          React.createElement(Heading, { as: "h3", style: { fontSize: 16, margin: "0 0 8px" } }, "Attribution"),
          React.createElement(Row, { label: "utm_source", value: props.utm?.utm_source }),
          React.createElement(Row, { label: "utm_medium", value: props.utm?.utm_medium }),
          React.createElement(Row, { label: "utm_campaign", value: props.utm?.utm_campaign }),
          React.createElement(Row, { label: "utm_term", value: props.utm?.utm_term }),
          React.createElement(Row, { label: "utm_content", value: props.utm?.utm_content }),
          React.createElement(Row, { label: "referrer", value: props.utm?.referrer })
        ) : null,

        // Quick actions
        React.createElement(Hr, { style: { borderColor: "#1f2230", margin: "16px 0" } }),
        React.createElement(Section, { style: { display: "flex", gap: 12 } },
          props.phone ? React.createElement(Button, { 
            href: `tel:${props.phone}`, 
            style: { background: "#FFB020", color:"#121218", borderRadius: 10, padding: "10px 14px" } 
          }, `Call ${props.name.split(" ")[0]}`) : null,
          React.createElement(Button, { 
            href: `mailto:${props.email}`, 
            style: { background: "#2b2f42", color:"#e7e7ea", borderRadius: 10, padding: "10px 14px" } 
          }, "Reply via Email")
        ),

        React.createElement(Text, { style: { color:"#9aa0ae", fontSize:12, marginTop:16 } },
          "Sent from zynkrosystems.com • This is a transactional lead alert."
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
    
    // Sanitized tag value (no spaces or special chars)
    const badgeTag =
      data.serviceType === "demo" ? "demo_24h" :
      data.serviceType === "audit" ? "audit" :
      data.serviceType === "both" ? "demo_audit" :
      "lead";
      
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
        { name: "type", value: badgeTag }
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
