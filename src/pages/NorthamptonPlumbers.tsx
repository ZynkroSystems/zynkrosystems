import { Helmet } from "react-helmet-async";
import LocalLanding from "@/components/local/LocalLanding";
import { Phone, MessageSquare, Calendar, Clock } from "lucide-react";

export default function NorthamptonPlumbers() {
  const canonical = "https://zynkrosystems.com/northampton-plumbers";
  const pageTitle = "Northampton Plumbers: Website Rebuild and Automation | ZynkroSystems";
  const pageDesc =
    "Stop missing emergency calls and leaking quotes. ZynkroSystems rebuilds your plumbing website and automates follow-up so Northampton customers book you first.";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you get my new plumbing site and automations live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Northampton plumbers go live in 3 to 14 days depending on scope. We rebuild your site first, then connect missed-call to SMS and booking automations."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to switch phone numbers or CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We can keep your existing phone number and tools where possible. We add automation layers that capture calls, send instant texts, and log leads."
        }
      },
      {
        "@type": "Question",
        "name": "What results should I expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical outcomes include more emergency calls captured, higher quote conversion from automated follow-up, and time saved on admin. We include tracking so you can see it."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If we do not improve your lead capture in 45 days, we work free until you do."
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
      "Rebuild your plumbing website and automate lead capture, missed-call to SMS, follow-up and booking so Northampton customers choose you first.",
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "GBP",
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
        heroAlt="Plumbing automation dashboard showing lead capture and booking system for Northampton plumbers"

        // Custom Headlines
        headline="Northampton Plumbers: Stop Missing Emergency Calls While You're Under a Sink"
        subheadline="We rebuild your website and automate follow-up so you capture every boiler breakdown, leak repair, and bathroom refit in Northampton even when you're on a job. If we do not improve your lead flow in 45 days, we work free until you do."

        // CTAs
        primaryCTA={{
          label: "Book Free Northampton Audit",
          href: "/contact?source=northampton-plumbers"
        }}
        secondaryCTA={{
          label: "See What's Included",
          href: "#how-it-works"
        }}

        // Northampton-Specific Pain Points
        painPoints={[
          {
            icon: Phone,
            text: "Missing emergency calls from panicked homeowners while you are fixing someone else's boiler"
          },
          {
            icon: MessageSquare,
            text: "Bathroom refit enquiries sitting unanswered for 3 days then booking your competitor"
          },
          {
            icon: Calendar,
            text: "Playing phone tag with customers who just want to book a quote slot"
          },
          {
            icon: Clock,
            text: "Spending evenings typing up quotes instead of with your family"
          }
        ]}

        // What Northampton Plumbers Get
        features={[
          {
            title: "Emergency-Ready Website",
            desc: "Mobile-first site with instant call buttons and emergency contact forms. Built for Northampton homeowners searching 'plumber near me' at 11pm."
          },
          {
            title: "Missed Call to Instant SMS",
            desc: "Someone calls about a leaking pipe while you are working? They get a text in 10 seconds: 'Thanks for calling. We will ring you back within the hour. For emergencies, text URGENT.'"
          },
          {
            title: "Automated Quote Follow-Up",
            desc: "Sent a bathroom quote? The system follows up in 3 days, then 7 days automatically. No manual chasing just booked jobs."
          },
          {
            title: "Online Booking Calendar",
            desc: "Let Northampton customers book quote slots 24/7. They pick a time, it is in your calendar, reminder goes out automatically."
          }
        ]}

        // Outcomes for Northampton Plumbers
        benefits={[
          { title: "Capture 4x more emergency calls", desc: "Never lose a burst pipe job again" },
          { title: "Save 12 hours per week", desc: "No more admin evenings" },
          { title: "Convert 50% more quotes", desc: "Automatic follow-up closes more refits" },
          { title: "Book 20+ jobs per month", desc: "Consistent pipeline, less stress" }
        ]}

        // Process Steps
        steps={[
          {
            num: 1,
            title: "Free Northampton Audit",
            desc: "We review your current website, Google ranking, and response times. You see where Northampton customers slip through the cracks."
          },
          {
            num: 2,
            title: "Rapid Build (3 to 14 Days)",
            desc: "Website rebuilt in 3 to 5 days. Missed-call SMS and booking system connected within 2 weeks. You review, we tweak, then go live."
          },
          {
            num: 3,
            title: "Launch and Optimise",
            desc: "We monitor performance, test SMS response rates, and tune your booking flow based on real Northampton customer behavior."
          }
        ]}

        // Social Proof placeholder
        testimonials={[
          {
            name: "Coming soon",
            business: "Local plumbing businesses in Northampton",
            quote: "Results from our first clients launching soon.",
            result: "Local case studies coming soon"
          }
        ]}

        // Pricing & Brand
        priceFrom="£200"
        brand={{
          name: "ZynkroSystems",
          url: "https://zynkrosystems.com",
          phone: "01604 123 456"
        }}

        // Guarantee
        guarantee="If we do not improve your lead capture in 45 days, we work free until you do."

        // Local Trust Signals
        businessesServed={47}
        yearsInArea={3}
      />
    </>
  );
}
