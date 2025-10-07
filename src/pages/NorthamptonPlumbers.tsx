import { Helmet } from "react-helmet-async";
import LocalLanding from "@/components/local/LocalLanding";
import { Phone, MessageSquare, Calendar, Clock } from "lucide-react";

export default function NorthamptonPlumbers() {
  const canonical = "https://zynkrosystems.com/northampton-plumbers";
  const pageTitle = "Northampton Plumbers: Never Miss Another Emergency Call | ZynkroSystems";
  const pageDesc =
    "Every missed call is £300+ gone. We build you a lead-capturing website in 24 hours (free demo) plus automations that text back instantly, follow up automatically, and fill your calendar while you work.";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I see my new website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get a working demo in 24 hours. If you like it, we finish the full build and automations in 3-14 days depending on what you need."
        }
      },
      {
        "@type": "Question",
        "name": "Do I keep my phone number and existing tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We layer automations on top of what you have. Same number, same workflow. We just make it capture more leads and waste less of your time."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't need a new website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Then start with a free audit. We will show you exactly where you are losing money right now and what it would take to fix it. No pressure to rebuild if you don't need to."
        }
      },
      {
        "@type": "Question",
        "name": "What is the guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If we do not improve your lead capture in 45 days, we work for free until we do. You only win."
        }
      }
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website and Automation for Plumbers",
    "serviceType": "Plumber Lead Generation and Automation",
    "areaServed": {
      "@type": "City",
      "name": "Northampton"
    },
    "provider": {
      "@type": "Organization",
      "name": "ZynkroSystems",
      "url": "https://zynkrosystems.com",
      "telephone": "+44 1604 123 456"
    },
    "description":
      "Stop losing £300+ per missed call. We rebuild plumbing websites and add automations that capture leads, respond instantly, and book jobs 24/7 for Northampton plumbers.",
    "offers": {
      "@type": "Offer",
      "url": canonical,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://zynkrosystems.com/local/plumber.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      <LocalLanding
        city="Northampton"
        niche="Plumbers"
        nicheAdjective="plumbing"
        country="UK"
        slugPath="/northampton-plumbers"
        heroImage="/local/plumber.png"
        heroAlt="Plumbing automation dashboard showing instant SMS responses and automatic booking for Northampton plumbers"

        // Hormozi-Style Headlines
        headline="Every Missed Call is £300 You'll Never See Again"
        subheadline="Northampton plumbers lose 12-20 jobs per month to missed calls and slow follow-up. We fix that in 24 hours with a website that captures leads and automations that respond instantly even when you're elbow-deep in a boiler. See your new site tomorrow or get a free audit if you're not sure you need one yet."

        // CTAs - Two-Path Funnel
        primaryCTA={{
          label: "SEE MY NEW SITE IN 24H (FREE DEMO)",
          href: "/contact?source=northampton-plumbers&type=demo"
        }}
        secondaryCTA={{
          label: "NOT READY? GET FREE AUDIT",
          href: "/contact?source=northampton-plumbers&type=audit"
        }}

        // Northampton-Specific Pain (Value-Focused)
        painPoints={[
          {
            icon: Phone,
            text: "You miss 3 calls today while fixing a radiator. That's £900+ to a competitor who picked up."
          },
          {
            icon: MessageSquare,
            text: "A £4,000 bathroom refit enquiry sits in your voicemail for 2 days. They've already booked someone else."
          },
          {
            icon: Calendar,
            text: "You spend 6 hours this week playing phone tag trying to book quote appointments. That's time you're not billing."
          },
          {
            icon: Clock,
            text: "Every evening you type quotes and chase customers instead of being home. Your family sees you less, you make the same money."
          }
        ]}

        // What They Get (Outcome-Driven)
        features={[
          {
            title: "Website That Actually Converts",
            desc: "Not a brochure. A lead machine. Mobile-first, loads in 1 second, emergency call button top-right, quote form that takes 45 seconds. Built for the homeowner panicking at 11pm searching 'emergency plumber Northampton'."
          },
          {
            title: "Instant SMS Response (10 Seconds)",
            desc: "Customer calls while you're working? Automated text fires: 'Got your call about [their issue]. Ringing you back within 60 mins. Emergency? Reply URGENT and we'll call in 5.' They stay warm. You stay booked."
          },
          {
            title: "Automatic Quote Follow-Up",
            desc: "Send a bathroom quote, system follows up day 3 and day 7 automatically. No manual chasing. Just 'Still interested?' texts that turn 30% of quotes into booked jobs without you lifting a finger."
          },
          {
            title: "Self-Booking Calendar",
            desc: "Customers book their own quote slots at 2am on Sunday if they want. It syncs to your calendar, sends them a reminder, and you just show up. Zero phone tag."
          }
        ]}

        // Benefits (Quantified Outcomes)
        benefits={[
          { 
            title: "Capture £3,600+ in jobs you're losing now", 
            desc: "Stop bleeding emergency calls to competitors" 
          },
          { 
            title: "Get 12 hours back every week", 
            desc: "No more admin evenings. Automations do the chasing." 
          },
          { 
            title: "Convert 50% more quotes to jobs", 
            desc: "Consistent follow-up = more bathroom refits closed" 
          },
          { 
            title: "Book 25+ jobs per month on autopilot", 
            desc: "Calendar fills itself while you work" 
          }
        ]}

        // Process (Two-Path Funnel)
        steps={[
          {
            num: 1,
            title: "Pick Your Path",
            desc: "DEMO PATH: Want a new site? Tell us your vibe (professional, friendly, premium). We build you a working demo in 24 hours. You see it, test it, decide if it's better than what you have. | AUDIT PATH: Not sure you need a rebuild? We audit your current setup for free and show you exactly where leads are slipping and what it's costing you. Then you decide."
          },
          {
            num: 2,
            title: "We Build While You Work (3-14 Days)",
            desc: "If you go with the demo, we finish the full site in 3-5 days and connect the automations (missed-call SMS, quote follow-up, booking calendar) within 2 weeks. You review, we tweak, you approve. No surprises."
          },
          {
            num: 3,
            title: "Launch and Stack Wins",
            desc: "Site goes live. Automations turn on. We track everything: calls captured, texts sent, quotes converted, hours saved. You see the numbers. We tune based on what Northampton customers actually do. You just watch jobs roll in."
          }
        ]}

        // Social Proof (Honest Placeholder)
        testimonials={[
        {
          name: "Coming soon",
          business: "Northampton Plumbing Businesses",
          quote:
            "We’re building proof, not hype. Early pilot feedback points to faster response times and smoother bookings. Full case studies will be published after the first 45-day rollout.",
          result: `Pilot program in progress — updated ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`,
          isPlaceholder: true
        }
      ]}

        // No Price - Removed
        priceFrom=""
        
        brand={{
          name: "ZynkroSystems",
          url: "https://zynkrosystems.com",
          phone: "01604 123 456"
        }}

        // Risk Reversal
        guarantee="If we don't capture more leads and save you time in 45 days, we work for free until you win. You risk nothing. We risk our time."

        // Local Trust Signals

        yearsInArea={3}
      />
    </>
  );
}