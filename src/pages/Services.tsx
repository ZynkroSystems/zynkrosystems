import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Zap, RefreshCcw } from "lucide-react";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - Website Rebuild & Automation Systems | ZynkroSystems</title>
        <meta name="description" content="ZynkroSites: modern responsive websites that convert. ZynkroFlow: business automation systems that save hours and capture every lead. Done-for-you in 14 days." />
        <meta property="og:title" content="Services - Website Rebuild & Automation Systems | ZynkroSystems" />
        <meta property="og:description" content="ZynkroSites: modern responsive websites that convert. ZynkroFlow: business automation systems that save hours and capture every lead." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zynkrosystems.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Website Rebuild & Automation Systems | ZynkroSystems" />
        <meta name="twitter:description" content="ZynkroSites: modern responsive websites that convert. ZynkroFlow: business automation systems." />
        <link rel="canonical" href="https://zynkrosystems.com/services" />
      </Helmet>
      <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Complete digital transformation for small businesses. We build, automate, and maintain everything your
            business needs to capture and convert leads automatically.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Websites */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Websites</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground">
                  Professional, conversion-optimized websites built to turn visitors into customers. Fully
                  responsive, fast-loading, and designed with your business goals in mind.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Modern responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Lead capture forms integrated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SEO-optimized structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mobile-first approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fast page load times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Easy content updates</span>
                  </li>
                </ul>
                <Button variant="cta" className="w-full mt-auto" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Automation */}
            <Card className="flex flex-col border-2 border-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Automation</CardTitle>
                <span className="text-xs text-primary font-semibold">MOST POPULAR</span>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground">
                  Transform your manual processes into automated workflows. Never miss a lead, automate follow-ups,
                  and free up hours of your time every week.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Instant lead notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Automated email sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SMS follow-up systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Calendar booking integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Custom workflow automation</span>
                  </li>
                </ul>
                <Button variant="cta" className="w-full mt-auto" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Retainers */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <RefreshCcw className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Retainers</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground">
                  Ongoing support and optimization to ensure your systems keep running smoothly and continue to
                  improve. We monitor, maintain, and enhance everything.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Priority support access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Continuous optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Content updates included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>System monitoring & alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Strategic consultation</span>
                  </li>
                </ul>
                <Button variant="cta" className="w-full mt-auto" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How it works</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Book Your Free Audit</h3>
                <p className="text-muted-foreground">
                  15-minute call to identify bottlenecks and lost revenue opportunities in your current setup.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Build Your System</h3>
                <p className="text-muted-foreground">
                  Complete rebuild and automation setup within 14 days. You review and approve before launch.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Launch & Monitor</h3>
                <p className="text-muted-foreground">
                  We launch your new system and monitor performance. Ongoing optimization ensures continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your free £300 Automation ROI Audit and discover exactly how much time and money automation can
            save your business.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Book Your Free Audit</Link>
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}
