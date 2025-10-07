// emails/ContactLeadEmail.tsx
import * as React from "react";
import {
  Html, Head, Preview, Body, Container, Section, Text,
  Heading, Hr, Link, Button
} from "@react-email/components";

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
  sourcePath?: string; // e.g. /northampton-plumbers
};

export default function ContactLeadEmail(props: Lead) {
  const badge =
    props.serviceType === "demo" ? "Demo (24h)" :
    props.serviceType === "audit" ? "Audit" :
    props.serviceType === "both" ? "Demo + Audit" :
    "Lead";

  const preheader = `${props.name} • ${badge} • ${props.city ?? ""}`.trim();

  const Row = ({ label, value }: {label: string; value?: string}) =>
    value ? (
      <Section style={{marginBottom: 8}}>
        <Text style={{margin: 0}}>
          <strong>{label}:</strong> {value}
        </Text>
      </Section>
    ) : null;

  return (
    <Html>
      <Head />
      <Preview>{preheader}</Preview>
      <Body style={{backgroundColor: "#0b0b0f", color: "#e7e7ea", fontFamily: "Inter, Arial, sans-serif"}}>
        <Container style={{maxWidth: 640, margin: "24px auto", padding: 24, background: "#121218", borderRadius: 16, border: "1px solid #1f2230"}}>
          <Heading style={{fontSize: 22, margin: "0 0 4px"}}>New Enquiry — <span style={{color: "#FFB020"}}>{badge}</span></Heading>
          <Text style={{marginTop: 0, color: "#9aa0ae"}}>{props.sourcePath ?? ""}</Text>
          <Hr style={{borderColor: "#1f2230", margin: "12px 0 16px"}} />

          {/* Core lead info */}
          <Row label="Name" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Phone" value={props.phone} />
          <Row label="Company" value={props.company} />
          <Row label="Website" value={props.website} />
          <Row label="City/Area" value={props.city} />
          <Row label="Preferred Contact" value={[props.contactMethod, props.contactTime].filter(Boolean).join(" @ ")} />
          <Row label="Timeline" value={props.timeline} />
          <Row label="Budget" value={props.budget} />
          <Row label="Heard About Us" value={props.hearAbout} />

          {props.message && (
            <>
              <Hr style={{borderColor: "#1f2230", margin: "12px 0"}} />
              <Heading as="h3" style={{fontSize: 16, margin: "0 0 8px"}}>Message</Heading>
              <Text style={{whiteSpace: "pre-wrap", marginTop: 0}}>{props.message}</Text>
            </>
          )}

          {/* Additional info */}
          {props.provideMoreInfo && (
            <>
              <Hr style={{borderColor: "#1f2230", margin: "12px 0"}} />
              <Heading as="h3" style={{fontSize: 16, margin: "0 0 8px"}}>Additional Info</Heading>
              <Row label="Service Type" value={props.serviceType} />
              <Row label="Leads / week" value={props.currentLeadVolume} />
              <Row label="Typical Response Time" value={props.responseTime} />
              <Row label="Biggest Challenge" value={props.biggestChallenge} />
              <Row label="Monthly Revenue" value={props.monthlyRevenue} />
            </>
          )}

          {/* UTM / attribution */}
          {(props.utm?.utm_source || props.utm?.referrer) && (
            <>
              <Hr style={{borderColor: "#1f2230", margin: "12px 0"}} />
              <Heading as="h3" style={{fontSize: 16, margin: "0 0 8px"}}>Attribution</Heading>
              <Row label="utm_source" value={props.utm?.utm_source} />
              <Row label="utm_medium" value={props.utm?.utm_medium} />
              <Row label="utm_campaign" value={props.utm?.utm_campaign} />
              <Row label="utm_term" value={props.utm?.utm_term} />
              <Row label="utm_content" value={props.utm?.utm_content} />
              <Row label="referrer" value={props.utm?.referrer} />
            </>
          )}

          {/* Quick actions */}
          <Hr style={{borderColor: "#1f2230", margin: "16px 0"}} />
          <Section style={{display: "flex", gap: 12}}>
            {props.phone && (
              <Button href={`tel:${props.phone}`} style={{background: "#FFB020", color:"#121218", borderRadius: 10, padding: "10px 14px"}}>
                Call {props.name.split(" ")[0]}
              </Button>
            )}
            <Button href={`mailto:${props.email}`} style={{background: "#2b2f42", color:"#e7e7ea", borderRadius: 10, padding: "10px 14px"}}>
              Reply via Email
            </Button>
          </Section>

          <Text style={{color:"#9aa0ae", fontSize:12, marginTop:16}}>
            Sent from zynkrosystems.com • This is a transactional lead alert.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
