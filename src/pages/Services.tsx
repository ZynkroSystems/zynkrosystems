import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, RefreshCcw, CheckCircle2, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 border-2 border-success/20 px-4 py-2 text-sm font-semibold text-success mb-6">
            <Clock className="h-4 w-4" /> Done in 14 Days
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop losing leads to slow websites and manual follow-ups.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We rebuild your website, automate your busywork, and guarantee you see more calls and bookings. Or we work free until you do.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-xl group">
            Book Free £300 Audit
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Three ways we fix your lead flow
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick one or combine all three. Most clients start with automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Websites */}
            <Card className="flex flex-col border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Website Rebuild</CardTitle>
                <p className="text-sm text-muted-foreground font-normal">Your site looks fine but doesn't convert</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Problem:</h4>
                    <p className="text-sm text-muted-foreground">
                      Visitors land on your site. They leave without calling. You don't know why.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">What We Fix:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Mobile-friendly design that loads fast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Clear call-to-action on every page</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Lead capture forms that actually work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Google-friendly structure for local search</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Result:</h4>
                    <p className="text-sm text-success font-medium">
                      More visitors turn into enquiries. Simple as that.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold">Typical Timeline:</span>
                    <span className="text-sm text-muted-foreground">10-14 days</span>
                  </div>
                  <Button variant="cta" className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Automation - FEATURED */}
            <Card className="flex flex-col border-4 border-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-wide">
                ⚡ MOST POPULAR
              </div>
              <CardHeader className="pt-12">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">Business Automation</CardTitle>
                <p className="text-sm text-muted-foreground font-normal">Manual follow-ups are killing your conversion rate</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Problem:</h4>
                    <p className="text-sm text-muted-foreground">
                      Leads come in. You're busy on a job. By the time you reply, they've already called someone else.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">What We Automate:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Instant SMS reply when leads submit a form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Automatic email sequences for warm-up</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Calendar links so customers book themselves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Notifications straight to your phone</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Result:</h4>
                    <p className="text-sm text-success font-medium">
                      Never miss a lead again. Save 10+ hours per week on admin.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold">Typical Timeline:</span>
                    <span className="text-sm text-muted-foreground">7-14 days</span>
                  </div>
                  <Button variant="cta" className="w-full group shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Retainers */}
            <Card className="flex flex-col border-2 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <RefreshCcw className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">Ongoing Support</CardTitle>
                <p className="text-sm text-muted-foreground font-normal">Keep your system running and improving</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Problem:</h4>
                    <p className="text-sm text-muted-foreground">
                      Systems break. Performance drops. You need updates but have no time to manage it.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">What We Handle:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Monthly performance reports with clear numbers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Content updates and tweaks as you need them</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Priority support when something breaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>Ongoing optimization to improve results</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">The Result:</h4>
                    <p className="text-sm text-success font-medium">
                      Peace of mind. Your system keeps working while you run your business.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold">Typical Timeline:</span>
                    <span className="text-sm text-muted-foreground">Ongoing monthly</span>
                  </div>
                  <Button variant="cta" className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Prop Below Cards */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-8 pb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">14 Days</div>
                    <p className="text-sm text-muted-foreground">From audit to launch</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">45 Days</div>
                    <p className="text-sm text-muted-foreground">Lead flow guarantee</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Done-for-you setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How we get you live in 14 days</h2>
            <p className="text-lg text-muted-foreground">
              No months-long projects. No endless revisions. Just fast, focused execution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: 1,
                title: "Free Audit Call",
                desc: "We spend 15 minutes finding where you're losing leads and money right now.",
                time: "Day 1",
                color: "primary"
              },
              {
                num: 2,
                title: "We Build Everything",
                desc: "New website, automated workflows, integrations. You approve the final version before launch.",
                time: "Days 2-12",
                color: "secondary"
              },
              {
                num: 3,
                title: "Launch & Monitor",
                desc: "We flip the switch, monitor performance, and make adjustments based on real data.",
                time: "Day 14+",
                color: "success"
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <Card className="border-2 h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-${step.color} text-${step.color}-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg`}>
                      {step.num}
                    </div>
                    <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wide">
                      {step.time}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What happens after we launch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, text: "More enquiries convert because they get instant replies" },
              { icon: Clock, text: "You save 10+ hours per week on manual admin tasks" },
              { icon: CheckCircle2, text: "Every lead gets followed up automatically" },
              { icon: Zap, text: "You can track exactly what's working and what isn't" }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-success/50 transition-all">
                <CardContent className="pt-6 pb-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-success" />
                  </div>
                  <p className="font-medium pt-2">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-card border-4 border-primary rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stop guessing. Start measuring.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Book a free £300 Automation ROI Audit. We'll show you exactly where you're losing leads and how to fix it.
            </p>
            <Button variant="cta" size="lg" className="text-xl px-12 py-8 shadow-xl group">
              Book Your Free Audit
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>15-minute call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>No pressure pitch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Clear action plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}