import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  // Placeholder content - in production, this would fetch from CMS or markdown files
  const post = {
    title: "5 Signs Your Business Is Losing Money to Manual Processes",
    date: "2025-03-15",
    category: "Business Automation",
    content: `
      <p>Most small businesses don't realise how much revenue slips through the cracks every single day. Manual processes, delayed follow-ups, and outdated systems cost UK businesses thousands in lost opportunities.</p>
      
      <h2>1. Enquiries Take Hours (or Days) to Get a Response</h2>
      <p>If someone fills out your contact form and waits 24 hours for a reply, they've likely already moved on to your competitor. Speed wins.</p>
      
      <h2>2. Your Team Spends Hours on Repetitive Admin</h2>
      <p>Manually entering data, sending the same emails, chasing payments - these tasks eat time that could be spent closing deals or serving customers.</p>
      
      <h2>3. You're Missing Calls and Losing Leads</h2>
      <p>Missed calls rarely call back. If your phone rings and no one picks up, that's revenue walking out the door.</p>
      
      <h2>4. Follow-Ups Are Inconsistent or Forgotten</h2>
      <p>Without a system, follow-ups rely on memory and manual effort. That's when leads go cold and opportunities vanish.</p>
      
      <h2>5. You Have No Clear View of What's Working</h2>
      <p>If you can't track where leads come from, which channels convert, or where drop-offs happen, you're flying blind.</p>
      
      <h2>The Solution: Automation</h2>
      <p>Every one of these problems can be solved with the right automation systems. We help businesses identify exactly where they're losing money and build systems that recover it - automatically.</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | ZynkroSystems Blog</title>
        <meta name="description" content="Most small businesses don't realise how much revenue slips through the cracks. Here are the warning signs that automation could save your business thousands." />
        <meta property="og:title" content={`${post.title} | ZynkroSystems Blog`} />
        <meta property="og:description" content="Most small businesses don't realise how much revenue slips through the cracks. Here are the warning signs that automation could save your business thousands." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://zynkrosystems.com/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | ZynkroSystems Blog`} />
        <meta name="twitter:description" content="Most small businesses don't realise how much revenue slips through the cracks." />
        <link rel="canonical" href={`https://zynkrosystems.com/blog/${slug}`} />
      </Helmet>

      <div>
        {/* Article Header */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center text-muted-foreground mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to see where your business is losing money?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free £300 Automation ROI Audit and we'll show you exactly where automation can recover lost
              revenue.
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
