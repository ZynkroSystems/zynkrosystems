import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Resend API endpoint - force rebuild
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\nCompany: ${formData.company}\nWebsite: ${formData.website}\n\nMessage:\n${formData.message}`,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours to schedule your free audit.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Sorry, there was an error sending your message. Please try again or email us directly at support@zynkrosystems.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Book Free Audit - £300 Automation ROI Assessment | ZynkroSystems</title>
        <meta name="description" content="Book your free £300 Automation ROI Audit. No pressure, no pitch. Discover exactly where your business is losing leads and how automation can recover them." />
        <meta property="og:title" content="Book Free Audit - £300 Automation ROI Assessment | ZynkroSystems" />
        <meta property="og:description" content="Book your free £300 Automation ROI Audit. Discover where your business is losing leads and how automation can fix it." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zynkrosystems.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Free Audit - £300 Automation ROI Assessment" />
        <meta name="twitter:description" content="Free audit worth £300. Discover where your business is losing leads." />
        <link rel="canonical" href="https://zynkrosystems.com/contact" />
      </Helmet>
      <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Free Automation Audit</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Worth £300. No pressure, no pitch. Just a clear assessment of what automation could unlock for your
            business.
          </p>
          <div className="inline-block bg-success/10 text-success px-4 py-2 rounded-lg font-semibold">
            45-Day Lead Flow Guarantee
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell us about your business</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="07123 456789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Current Website (if any)</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What challenges are you facing?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your current setup and what you'd like to improve..."
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Claim My Free £300 Audit"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from ZynkroSystems. We respect your
                    privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What to expect from your audit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Bottleneck Analysis</p>
                      <p className="text-sm text-muted-foreground">
                        We identify exactly where you're losing leads and revenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">ROI Projection</p>
                      <p className="text-sm text-muted-foreground">
                        Clear numbers showing potential time and cost savings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Custom Action Plan</p>
                      <p className="text-sm text-muted-foreground">
                        Specific recommendations tailored to your business
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Priority Implementation Slot</p>
                      <p className="text-sm text-muted-foreground">Reserved capacity if you decide to proceed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <p className="text-sm font-semibold mb-2">Limited Availability</p>
                  <p className="text-sm">
                    Only 5 new clients are accepted each month to ensure full delivery capacity. Audit spots
                    usually fill by Friday — book early.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Need to speak to someone first?</strong>
                    <br />
                    Email:{" "}
                    <a href="mailto:support@zynkrosystems.com" className="text-primary hover:underline">
                      support@zynkrosystems.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why businesses trust ZynkroSystems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">14 Days</div>
              <p className="text-sm text-muted-foreground">Average implementation time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">45 Days</div>
              <p className="text-sm text-muted-foreground">Lead flow guarantee period</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Focused on your ROI</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
