import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, TrendingUp, Award, Zap, ArrowRight, Sparkles, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-success/20 bg-success/10 px-4 py-2 text-sm font-semibold text-success backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse" /> 
                <span>45-day lead flow guarantee</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                We rebuild and automate your business so you never miss a lead again
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop losing customers to broken websites, slow responses, and manual work. We identify the leaks in your sales process, rebuild what’s broken, and automate everything that wastes time so your business runs and grows on autopilot.     
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group" asChild>
                  <Link to="/contact">
                    Book Free Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2" asChild>
                  <Link to="/case-studies">
                    See Case Studies
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" /> 
                  <span className="font-medium">Fast delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" /> 
                  <span className="font-medium">Done for you</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" /> 
                  <span className="font-medium">Guaranteed results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-muted to-background rounded-2xl shadow-2xl p-8 border border-border">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
                  <img 
                    src="/hero-automation.jpg" 
                    alt="Business automation dashboard showing analytics and workflow management" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background border-2 border-border px-6 py-3 text-sm font-medium shadow-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> 
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center max-w-4xl mx-auto leading-tight">
            Every day your business runs manually, you're losing money.
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Sound familiar? Here's what's costing you leads right now:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Clock, text: "Missed calls that never call back." },
              { icon: Target, text: "Enquiries sitting in your inbox for days." },
              { icon: TrendingUp, text: "A website that looks fine but doesn't convert." },
              { icon: Zap, text: "Repetitive admin that eats your time." }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-center leading-relaxed">
              You didn’t start your business to chase emails and copy data between tools. We uncover every leak that’s slowing you down and replace it with automation systems that pay for themselves in weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Simple 3-Step Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Here’s how we transform your business
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start small or go all in. We meet you where you are.
            </p>
          </div>

          {(() => {
            const steps = [
              {
                num: 1,
                title: "Website Rebuild",
                kicker: "Launch a conversion ready site in days.",
                desc:
                  "Modern design, clear messaging, and high-intent pages wired for lead capture. Built mobile first and SEO ready.",
                color: "bg-primary text-primary-foreground",
              },
              {
                num: 2,
                title: "Automation Layer",
                kicker: "Turn enquiries into booked jobs automatically.",
                desc:
                  "Missed call to SMS, instant routing, CRM, sequences, booking links, and a simple dashboard so nothing slips.",
                color: "bg-secondary text-secondary-foreground",
              },
              {
                num: 3,
                title: "Ongoing Support",
                kicker: "Keep improving with monthly optimisations.",
                desc:
                  "Reporting, tweaks, SEO checks, and small enhancements so your system gets better every month.",
                color: "bg-success text-success-foreground",
              },
            ];

            return (
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative">
                    <Card className="border-2 hover:border-primary/50 transition-all h-full hover:shadow-xl">
                      <CardContent className="pt-8 pb-8">
                        <div
                          className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-2xl font-bold mb-6 shadow-lg`}
                          aria-hidden="true"
                        >
                          {step.num}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                        <p className="text-foreground font-medium mb-4">{step.kicker}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </CardContent>
                    </Card>

                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                        <ArrowRight className="h-8 w-8 text-muted-foreground/30" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })()}

          <div className="text-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg group" asChild>
              <Link to="/contact">
                Get My Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We’ll show you exactly what you need. No upselling.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Why businesses choose ZynkroSystems
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Done-for-you from day one", desc: "We handle everything — you just approve and go live" },
              { title: "Proven systems tested on real businesses", desc: "Battle-tested workflows that actually convert leads" },
              { title: "45-day lead flow guarantee", desc: "If we don't improve your results, we work free until you do" },
              { title: "Zero tech talk — just measurable ROI", desc: "Clear reporting on time saved and revenue increased" }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-success/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-8 pb-8 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success mb-6">
              <Sparkles className="h-4 w-4" /> Limited Availability
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What's included when you book your free audit
            </h2>
            <p className="text-lg text-muted-foreground">Everything you need to see what's possible</p>
          </div>
          <Card className="border-4 border-primary shadow-2xl bg-card">
            <CardContent className="pt-10 pb-10 space-y-6">
              {[
                { item: "Automation ROI Audit", value: 300 },
                { item: "Lead Follow-Up Script Pack", value: 100 },
                { item: "Performance Insights Dashboard", value: 150 },
                { item: "Priority Implementation Slot", value: 200 }
              ].map((line, i) => (
                <div key={i} className="flex justify-between items-center pb-6 border-b border-border last:border-0 last:pb-0">
                  <span className="font-semibold text-lg">{line.item}</span>
                  <div className="text-right">
                    <span className="text-muted-foreground line-through text-lg">£{line.value}</span>
                    <div className="text-success font-bold text-sm">FREE TODAY</div>
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t-2 border-dashed border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">Total Value:</span>
                  <span className="text-2xl font-bold line-through text-muted-foreground">£750</span>
                </div>
                <div className="bg-gradient-to-r from-success/20 to-primary/20 rounded-xl p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Your Price Today</div>
                  <div className="text-5xl font-bold text-primary">£0</div>
                  <div className="text-sm text-success font-semibold mt-2">100% Free — No Credit Card Required</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-10 text-center space-y-6">
            <Button variant="cta" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all group w-full sm:w-auto" asChild>
              <Link to="/contact">
                Claim My Free Audit Call
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">⚠️ Limited Capacity:</span> Only 5 new clients are accepted each month to ensure full delivery capacity. Audit spots usually fill by Friday — book early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Trusted by local businesses across the UK</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">From cleaners to plumbers to pet groomers — we help service businesses capture more leads</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                business: "Cleaning Company",
                result: "3x more bookings in first month",
                quote: "The automated follow-up system alone paid for itself in the first week."
              },
              { 
                business: "Plumbing Service",
                result: "Zero missed emergency calls",
                quote: "Every after-hours call now gets an instant SMS. Game changer."
              },
              { 
                business: "Pet Grooming",
                result: "Saved 15 hours/week on admin",
                quote: "Booking and invoicing is completely automated. I can focus on grooming."
              }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="pt-10 pb-10">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-primary font-bold text-sm mb-2">{item.business}</div>
                  <p className="font-bold text-lg mb-3">{item.result}</p>
                  <p className="text-muted-foreground italic">"{item.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Full Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-card border-4 border-primary rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Let's see how much time and revenue automation could unlock for your business.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Book your free £300 Automation ROI Audit now. No pressure, no pitch — just
            </p>
            <Button variant="cta" size="lg" className="text-xl px-12 py-8 shadow-xl hover:shadow-2xl transition-all group" asChild>
              <Link to="/contact">
                Book Free Audit
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground flex-wrap">
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
                <span>£750 value free</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}