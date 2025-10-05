import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Local Plumbing Company: 3x Lead Volume in 30 Days",
      description: "Coming soon: How we rebuilt their website and automated lead capture to triple qualified enquiries.",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Construction Firm: Automated Quote System Saves 15 Hours/Week",
      description: "Coming soon: The automation system that eliminated manual quote follow-ups entirely.",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Estate Agent: Zero Missed Calls with Smart Booking System",
      description: "Coming soon: How intelligent scheduling recovered £40k in lost viewings annually.",
      status: "Coming Soon"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Real Business Results | ZynkroSystems</title>
        <meta name="description" content="See how ZynkroSystems helps UK small businesses triple leads, save hours, and recover lost revenue through website rebuilds and automation systems." />
        <meta property="og:title" content="Case Studies - Real Business Results | ZynkroSystems" />
        <meta property="og:description" content="See how ZynkroSystems helps UK small businesses triple leads, save hours, and recover lost revenue through website rebuilds and automation systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zynkrosystems.com/case-studies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Real Business Results | ZynkroSystems" />
        <meta name="twitter:description" content="See how ZynkroSystems helps UK small businesses triple leads, save hours, and recover lost revenue through website rebuilds and automation systems." />
        <link rel="canonical" href="https://zynkrosystems.com/case-studies" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real businesses. Real results.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              See how we help small businesses recover lost leads, save hours of admin time, and unlock consistent
              revenue growth through automation.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {caseStudies.map((study) => (
                <Card key={study.id} className="flex flex-col">
                  <CardHeader>
                    <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                      {study.status}
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-1">{study.description}</p>
                    <Button variant="outline" size="lg" disabled className="w-full">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want results like these for your business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free £300 Automation ROI Audit and discover exactly how much time and revenue automation could
              unlock for you.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Book My Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
