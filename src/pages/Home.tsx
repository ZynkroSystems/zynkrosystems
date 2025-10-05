import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Target, TrendingUp, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ZynkroSystems - Business Automation & Website Rebuild for UK Small Businesses</title>
        <meta name="description" content="We rebuild and automate your business in 14 days so you never miss a lead again. Free £300 automation audit for UK small businesses. 45-day lead flow guarantee." />
        <meta property="og:title" content="ZynkroSystems - Business Automation & Website Rebuild for UK Small Businesses" />
        <meta property="og:description" content="Stop losing customers to bad websites and slow follow-ups. We rebuild and automate your business in 14 days with a 45-day lead flow guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zynkrosystems.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZynkroSystems - Business Automation & Website Rebuild" />
        <meta name="twitter:description" content="We rebuild and automate your business in 14 days so you never miss a lead again." />
        <link rel="canonical" href="https://zynkrosystems.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ZynkroSystems Ltd",
            "url": "https://zynkrosystems.com",
            "logo": "https://zynkrosystems.com/logo.png",
            "description": "Building automated growth systems for small businesses",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Northampton",
              "addressCountry": "UK"
            },
            "email": "support@zynkrosystems.com",
            "areaServed": "GB"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ZynkroSystems Ltd",
            "image": "https://zynkrosystems.com/logo.png",
            "telephone": "",
            "email": "support@zynkrosystems.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Northampton",
              "addressCountry": "UK"
            },
            "url": "https://zynkrosystems.com",
            "priceRange": "££"
          })}
        </script>
      </Helmet>
      <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We rebuild and automate your business in 14 days so you never miss a lead again.
              </h1>
              <p className="text-lg text-muted-foreground">
                Stop losing customers to bad websites and slow follow-ups. We'll find every leak in your sales
                process, rebuild it, and automate it for you or we work free until you see results.
              </p>
              <div className="space-y-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Book Your Free Automation Audit (Worth £300)</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  This 15-minute call will show you exactly how many hours and customers your business is losing
                  each week, and what automation can recover instantly.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Business automation illustration"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Every day your business runs manually, you're losing money.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground">Missed calls that never call back.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground">Enquiries sitting in your inbox for days.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground">A website that looks fine but doesn't convert.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground">Repetitive admin that eats your time.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
            You built your business to grow, not to babysit your inbox. We find every gap that's costing you leads
            and revenue, then fix it with automation systems that pay for themselves in weeks.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Here's how we rebuild and automate your business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Audit & Plan</h3>
              <p className="text-muted-foreground">
                Free £300 Automation ROI Audit identifying bottlenecks and lost leads.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Rebuild & Automate</h3>
              <p className="text-muted-foreground">
                Responsive website + connected systems that reply and schedule automatically.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-success text-success-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Monitor & Optimise</h3>
              <p className="text-muted-foreground">Ongoing support with reports and tweaks.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get My Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why businesses choose ZynkroSystems
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Done-for-you in 14 days</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast implementation that gets you results quickly
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Proven systems tested on real businesses</h3>
                  <p className="text-sm text-muted-foreground">Battle-tested automation workflows</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Guaranteed improvement</h3>
                  <p className="text-sm text-muted-foreground">45-day lead flow guarantee</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Zero tech talk — just measurable ROI</h3>
                  <p className="text-sm text-muted-foreground">Clear results you can understand</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What's included when you book your free audit
          </h2>
          <Card className="border-2 border-primary">
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-medium">Automation ROI Audit</span>
                <span className="text-muted-foreground">£300</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-medium">Lead Follow-Up Script Pack</span>
                <span className="text-muted-foreground">£100</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-medium">Performance Insights Dashboard</span>
                <span className="text-muted-foreground">£150</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-medium">Priority Implementation Slot</span>
                <span className="text-muted-foreground">£200</span>
              </div>
              <div className="flex justify-between items-center pt-4 text-xl font-bold">
                <span>Total Value: £750</span>
                <span className="text-primary text-2xl">Your Price: £0</span>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center space-y-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Claim My Free Audit Call</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              Only 5 new clients are accepted each month to ensure full delivery capacity. Audit spots usually
              fill by Friday — book early.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Real businesses. Real results.</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Placeholder cards for testimonials */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <p className="text-center text-muted-foreground">Testimonial coming soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's see how much time and revenue automation could unlock for your business.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your free £300 Automation ROI Audit now. No pressure, no pitch — just clarity on what's possible.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}
