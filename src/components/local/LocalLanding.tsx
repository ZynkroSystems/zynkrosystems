import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageSquare, Calendar, Award, TrendingUp, Clock, Zap, ArrowRight, MapPin, Star } from "lucide-react";

type PainPoint = { icon: any; text: string };
type Feature = { title: string; desc: string };
type Benefit = { title: string; desc: string };
type Step = { num: number; title: string; desc: string };
type Testimonial = { name: string; business: string; quote: string; result: string };

type LocalLandingProps = {
  city: string;
  niche: string;
  nicheAdjective?: string; // e.g., "plumbing", "cleaning"
  country?: string;
  slugPath: string;
  heroImage?: string;
  heroAlt?: string;
  
  // Customizable copy
  headline?: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  
  // Pain points (4 typical issues)
  painPoints?: PainPoint[];
  
  // What you get (3-4 key features)
  features?: Feature[];
  
  // Benefits/Outcomes
  benefits?: Benefit[];
  
  // Process steps
  steps?: Step[];
  
  // Testimonials
  testimonials?: Testimonial[];
  
  // Pricing hint
  priceFrom?: string;
  
  // Brand info
  brand?: { 
    name?: string; 
    url?: string; 
    phone?: string;
  };
  
  // Guarantee
  guarantee?: string;
  
  // Local trust signals
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
  
  priceFrom = "£200",
  
  brand = { 
    name: "ZynkroLabs", 
    url: "https://zynkrolabs.co.uk",
    phone: "020 1234 5678"
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
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4" />
                <span>Serving {niche} in {city}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {finalHeadline}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {finalSubheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-lg group"
                  onClick={() => window.location.href = primaryCTA.href}
                >
                  {primaryCTA.label}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2"
                  onClick={() => {
                    const target = document.querySelector(secondaryCTA.href.startsWith('#') ? secondaryCTA.href : '');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {secondaryCTA.label}
                </Button>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="font-medium">45-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="font-medium">From {priceFrom}</span>
                </div>
                {businessesServed && (
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-medium">{businessesServed}+ businesses served</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={heroImage}
                  alt={alt}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Sound familiar?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Here's what's costing {city} {niche.toLowerCase()} leads every single day:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((pain, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="h-14 w-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <pain.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{pain.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 bg-card border-2 border-primary/20 rounded-xl p-8 text-center shadow-lg">
            <p className="text-lg leading-relaxed">
              Every missed call, delayed response, or forgotten follow-up is revenue walking out the door. 
              We fix that with automation built specifically for busy {city} {niche.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What you get: A complete lead-capture system
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to capture, nurture, and convert more leads in {city}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Outcomes Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The results {city} {niche.toLowerCase()} see
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-2 border-success/20 bg-card hover:border-success/50 transition-all hover:shadow-xl text-center">
                <CardContent className="pt-10 pb-10">
                  <div className="h-16 w-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, fast, and built for {city} businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <Card className="border-2 hover:border-primary/50 transition-all h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg group"
              onClick={() => window.location.href = primaryCTA.href}
            >
              Start Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials (if provided) */}
      {testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What {city} {niche.toLowerCase()} are saying
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Real businesses, real results
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((test, i) => (
                <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">"{test.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold">{test.name}</p>
                      <p className="text-sm text-muted-foreground">{test.business}</p>
                      <p className="text-sm text-success font-semibold mt-2">{test.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border-4 border-primary rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to stop losing leads in {city}?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book your free audit now. We'll show you exactly where you're losing money—and how to fix it fast.
            </p>
            
            {/* Value Stack */}
            <div className="bg-muted rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="font-semibold mb-3">Your free audit includes:</p>
              <ul className="space-y-2 text-left text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Full lead-flow analysis (£300 value)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Custom automation roadmap for your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Competitor website review</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>No obligation, no pressure</span>
                </li>
              </ul>
            </div>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl px-12 py-8 shadow-xl group mb-6"
              onClick={() => window.location.href = primaryCTA.href}
            >
              Book My Free {city} Audit
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>45-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Local {city} support</span>
              </div>
            </div>
            
            {brand.phone && (
              <div className="mt-8 pt-8 border-t">
                <p className="text-muted-foreground mb-2">Prefer to talk? Call us:</p>
                <a href={`tel:${brand.phone}`} className="text-2xl font-bold text-primary hover:underline">
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