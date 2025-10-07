import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageSquare, Calendar, Award, TrendingUp, Clock, Zap, ArrowRight, MapPin, Star } from "lucide-react";

type PainPoint = { icon: any; text: string };
type Feature = { title: string; desc: string };
type Benefit = { title: string; desc: string };
type Step = { num: number; title: string; desc: string };
type Testimonial = {
  isPlaceholder: boolean; name: string; business: string; quote: string; result: string 
};

type LocalLandingProps = {
  city: string;
  niche: string;
  nicheAdjective?: string;
  country?: string;
  slugPath: string;
  heroImage?: string;
  heroAlt?: string;
  
  headline?: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  
  painPoints?: PainPoint[];
  features?: Feature[];
  benefits?: Benefit[];
  steps?: Step[];
  testimonials?: Testimonial[];
  
  priceFrom?: string;
  
  brand?: { 
    name?: string; 
    url?: string; 
    phone?: string;
  };
  
  guarantee?: string;
  
  yearsInArea?: number;
  businessesServed?: number;
};

export default function LocalLanding({
  city,
  niche,
  nicheAdjective,
  country = "UK",
  slugPath,
  heroImage = "/placeholder-dashboard.jpg",
  heroAlt,
  
  headline,
  subheadline,
  primaryCTA = { 
    label: `Book Free ${city} Audit`, 
    href: `/contact?source=${encodeURIComponent(slugPath)}` 
  },
  secondaryCTA = { 
    label: "See How It Works", 
    href: "#how-it-works" 
  },
  
  painPoints = [
    { icon: Phone, text: "Missing calls during jobs and losing work to competitors" },
    { icon: MessageSquare, text: "Leads sitting in your inbox for days without follow-up" },
    { icon: Calendar, text: "Playing phone tag to book appointments" },
    { icon: Clock, text: "Spending hours on quotes and admin instead of paid work" }
  ],
  
  features = [
    { 
      title: "Lead-Capturing Website", 
      desc: "Fast, mobile-friendly site that turns visitors into enquiries with clear calls-to-action" 
    },
    { 
      title: "Instant Missed Call Response", 
      desc: "Every missed call gets an automatic SMS within 10 seconds—never lose a hot lead again" 
    },
    { 
      title: "Automated Follow-Up", 
      desc: "Email and SMS sequences that nurture leads and chase quotes automatically" 
    },
    { 
      title: "Online Booking System", 
      desc: "Let customers book appointments 24/7 without the back-and-forth" 
    }
  ],
  
  benefits = [
    { title: "Capture 3x more leads", desc: "Respond in seconds, not hours" },
    { title: "Save 15+ hours per week", desc: "Automate repetitive admin tasks" },
    { title: "Increase conversion by 40%", desc: "Never let quotes go cold" },
    { title: "Work less, earn more", desc: "Focus on the work, not chasing leads" }
  ],
  
  steps = [
    { 
      num: 1, 
      title: "Free Audit", 
      desc: `We analyse your current setup and show you exactly where you're losing leads in ${city}` 
    },
    { 
      num: 2, 
      title: "Rapid Build", 
      desc: "Website rebuilt in 3-5 days, automation connected within 2 weeks" 
    },
    { 
      num: 3, 
      title: "Launch & Support", 
      desc: "Go live with monitoring, tweaks, and ongoing optimisation" 
    }
  ],
  
  testimonials = [],
  
  priceFrom = "",
  
  brand = { 
    name: "ZynkroSystems", 
    url: "https://zynkrosystems.com",
    phone: "01604 123 456"
  },
  
  guarantee = "If we don't improve your lead flow in 45 days, we work free until you do.",
  
  yearsInArea,
  businessesServed
}: LocalLandingProps) {
  
  const finalHeadline = headline || `${niche} in ${city}: Stop Losing Leads to Slow Follow-Up`;
  const finalSubheadline = subheadline || `We rebuild your website and automate your follow-up so every lead gets instant attention—even when you're on a job. ${guarantee}`;
  const adjective = nicheAdjective || niche.toLowerCase().replace(/s$/, 'ing');
  const alt = heroAlt || `${niche} automation dashboard for ${city} businesses`;

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Serving {niche} in {city}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {finalHeadline}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {finalSubheadline}
              </p>
              
              {/* CTA Buttons - Stacked on Mobile */}
              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg group w-full sm:w-auto"
                  onClick={() => window.location.href = primaryCTA.href}
                >
                  <span className="truncate">{primaryCTA.label}</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto"
                  onClick={() => {
                    const target = document.querySelector(secondaryCTA.href.startsWith('#') ? secondaryCTA.href : '');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {secondaryCTA.label}
                </Button>
              </div>
              
              {/* Trust Signals - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-2 sm:pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0" />
                  <span className="font-medium">45-day guarantee</span>
                </div>
                {priceFrom && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0" />
                    <span className="font-medium">From {priceFrom}</span>
                  </div>
                )}
                {businessesServed && (
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="font-medium">{businessesServed}+ businesses served</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Hero Image - Hidden on Small Mobile */}
            <div className="relative hidden sm:block">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-primary/10">
                <img 
                  src={heroImage}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Mobile Optimized Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Sound familiar?
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here's what's costing {city} {niche.toLowerCase()} leads every single day:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {painPoints.map((pain, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <pain.icon className="h-6 w-6 sm:h-7 sm:w-7 text-destructive" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pain.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-8 sm:mt-12 bg-card border-2 border-primary/20 rounded-xl p-6 sm:p-8 text-center shadow-lg">
            <p className="text-base sm:text-lg leading-relaxed">
              Every missed call, delayed response, or forgotten follow-up is revenue walking out the door. 
              We fix that with automation built specifically for busy {city} {niche.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What you get
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Everything you need to capture, nurture, and convert more leads in {city}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            The results {city} {niche.toLowerCase()} see
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-2 border-success/20 bg-card hover:border-success/50 transition-all hover:shadow-xl text-center">
                <CardContent className="pt-8 pb-8 sm:pt-10 sm:pb-10">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-success" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

           {/* How It Works – Clear Fork (Demo vs Audit) */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              How it works
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Choose your starting point — we’ll handle the build for {city}
            </p>
          </div>

          {/* Step 1 – Explicit Choice */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="text-center mb-5 sm:mb-7">
              <div
                className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl sm:text-2xl shadow-lg"
                aria-hidden="true"
              >
                1
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold">Pick your path</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get a <strong>free 24-hour website demo</strong> <em>or</em> start with a <strong>free ROI audit</strong> to find bottlenecks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* DEMO PATH – Highlighted as Most Popular */}
              <Card className="relative border-2 hover:border-primary/60 transition-all hover:shadow-2xl">
                <span className="absolute -top-3 left-4 px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-semibold shadow">
                  Most popular
                </span>
                <CardContent className="pt-8 pb-6 sm:pt-10 sm:pb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Free 24-Hour Website Demo</h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Tell us your style (friendly, premium, professional). We’ll ship a working homepage prototype in 24 hours with emergency CTAs and fast lead capture.
                  </p>
                  <ul className="text-sm space-y-2 mb-6">
                    <li>• Mobile-first, ~1s load, click-to-call</li>
                    <li>• Quote form completes in ~45s</li>
                    <li>• Built for “emergency plumber {city}” searches</li>
                  </ul>
                  <a
                    href={`/contact?source=${slugPath.replace("/", "")}&offer=demo24`}
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                    aria-label="See my new site in 24 hours, free"
                  >
                    SEE MY NEW SITE IN 24H (FREE)
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground text-center">
                    No commitment — decide after you see it
                  </p>
                </CardContent>
              </Card>

              {/* AUDIT PATH */}
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="pt-8 pb-6 sm:pt-10 sm:pb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Free Automation ROI Audit</h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Keep your current site? We’ll map lead flow, missed-call capture, follow-ups, and booking — then show the cost of leaks and how to fix them.
                  </p>
                  <ul className="text-sm space-y-2 mb-6">
                    <li>• Missed-call → instant SMS plan</li>
                    <li>• Quote follow-up sequence blueprint</li>
                    <li>• Booking calendar + reminders setup plan</li>
                  </ul>
                  <a
                    href={`/contact?source=${slugPath.replace("/", "")}&offer=audit`}
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                    aria-label="Start my free audit"
                  >
                    START MY FREE AUDIT
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground text-center">
                    Includes competitor review & quick-win actions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Steps 2–3 – Execution & Launch */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                num: 2,
                title: "We build while you work (3–14 days)",
                desc:
                  "Choose demo? We finish your site in 3–5 days and connect automations (missed-call SMS, quote follow-up, booking calendar) within 2 weeks. You review, we tweak, you approve."
              },
              {
                num: 3,
                title: "Launch & stack wins",
                desc:
                  "Go live and switch on automations. We track calls captured, texts sent, quotes converted, and hours saved — then optimise based on real {city} customer behaviour."
              }
            ].map((step, i) => (
              <div key={i}>
                <Card className="border-2 hover:border-primary/50 transition-all h-full">
                  <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 shadow-lg"
                      aria-hidden="true"
                    >
                      {step.num}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dual CTAs – mirrors the fork for clarity */}
          <div className="text-center mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              variant="cta"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg"
              onClick={() => (window.location.href = `/contact?source=${slugPath.replace("/", "")}&offer=demo24`)}
            >
              GET MY 24H DEMO
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={() => (window.location.href = `/contact?source=${slugPath.replace("/", "")}&offer=audit`)}
            >
              START FREE AUDIT
            </Button>
          </div>

          {/* Micro-trust row */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <span className="inline-block mr-3">No credit card</span>•<span className="inline-block mx-3">45-day guarantee</span>•<span className="inline-block ml-3">Local support in {city}</span>
          </div>
        </div>
      </section>



     {/* Testimonials - Mobile Optimized */}
    {testimonials.length > 0 && (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            What {city} {niche.toLowerCase()} are saying
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
            Real businesses, real results
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, i) => {
              const isPlaceholder =
                test.isPlaceholder === true ||
                ["coming soon", "pilot", "local case studies coming soon"].includes(
                  (test.name || "").trim().toLowerCase()
                );

              return (
                <Card
                  key={i}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-xl"
                >
                  <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                    {/* only show stars for real testimonials */}
                    {!isPlaceholder && (
                      <div className="flex gap-1 mb-3 sm:mb-4" aria-hidden="true">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-muted-foreground italic mb-4 sm:mb-6 leading-relaxed">
                      “{test.quote}”
                    </p>

                    <div className="border-t pt-3 sm:pt-4">
                      <p className="font-bold text-sm sm:text-base">
                        {isPlaceholder ? "Pilot Program" : test.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {isPlaceholder ? `${city} ${niche}` : test.business}
                      </p>
                      {!!test.result && (
                        <p className="text-xs sm:text-sm text-success font-semibold mt-2">
                          {test.result}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    )}

      {/* Final CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-card border-2 sm:border-4 border-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to stop losing leads in {city}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Book your free audit now. We'll show you exactly where you're losing money—and how to fix it fast.
            </p>
            
            {/* Value Stack - Mobile Optimized */}
            <div className="bg-muted rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <p className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Your free audit includes:</p>
              <ul className="space-y-2 text-left text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                  <span>Full lead-flow analysis (£300 value)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                  <span>Custom automation roadmap for your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                  <span>Competitor website review</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                  <span>No obligation, no pressure</span>
                </li>
              </ul>
            </div>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 shadow-xl group mb-4 sm:mb-6 w-full sm:w-auto"
              onClick={() => window.location.href = primaryCTA.href}
            >
              <span className="truncate">BOOK MY FREE {city.toUpperCase()} AUDIT</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0" />
                <span>45-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0" />
                <span>Local {city} support</span>
              </div>
            </div>
            
            {brand.phone && (
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
                <p className="text-muted-foreground mb-2 text-sm sm:text-base">Prefer to talk? Call us:</p>
                <a href={`tel:${brand.phone}`} className="text-xl sm:text-2xl font-bold text-primary hover:underline inline-block">
                  {brand.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
      
    </div>
  );
}