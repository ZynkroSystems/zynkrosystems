import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      slug: "5-signs-your-business-needs-automation",
      title: "5 Signs Your Business Is Losing Money to Manual Processes",
      excerpt: "Most small businesses don't realise how much revenue slips through the cracks. Here are the warning signs that automation could save your business thousands.",
      date: "2025-03-15",
      category: "Business Automation"
    },
    {
      slug: "website-conversion-checklist",
      title: "The 10-Point Website Conversion Checklist Every Small Business Needs",
      excerpt: "Your website might look fine, but is it converting visitors into leads? Use this checklist to audit your site's performance.",
      date: "2025-03-10",
      category: "Web Design"
    },
    {
      slug: "why-businesses-fail-at-lead-followup",
      title: "Why 80% of Businesses Fail at Lead Follow-Up (And How to Fix It)",
      excerpt: "Speed matters. Learn why most enquiries go cold, and how simple automation can turn missed opportunities into closed deals.",
      date: "2025-03-05",
      category: "Lead Generation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Business Automation & Growth Tips | ZynkroSystems</title>
        <meta name="description" content="Expert insights on business automation, lead generation systems, and website optimization for UK small businesses. Learn how to stop losing leads and grow faster." />
        <meta property="og:title" content="Blog - Business Automation & Growth Tips | ZynkroSystems" />
        <meta property="og:description" content="Expert insights on business automation, lead generation systems, and website optimization for UK small businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zynkrosystems.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Business Automation & Growth Tips | ZynkroSystems" />
        <meta name="twitter:description" content="Expert insights on business automation, lead generation systems, and website optimization for UK small businesses." />
        <link rel="canonical" href="https://zynkrosystems.com/blog" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Growth Insights</h1>
            <p className="text-lg text-muted-foreground">
              Practical advice on automation, lead generation, and building systems that grow your business while you
              sleep.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                  <CardHeader>
                    <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                      {post.category}
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}
                    </div>
                    <Button variant="outline" size="lg" asChild className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop reading about automation and start using it. Book your free £300 audit today.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Book Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
