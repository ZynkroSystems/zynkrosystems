import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { type BlogPost as BlogPostType, getPostBySlug } from "@/lib/blog";
import "highlight.js/styles/github-dark.css";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((postData) => {
        setPost(postData);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | ZynkroSystems Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | ZynkroSystems Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://zynkrosystems.com/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | ZynkroSystems Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
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

            <div className="flex items-center text-muted-foreground mb-8 space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </div>
              {post.author && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
              )}
              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:text-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {post.content}
              </ReactMarkdown>
            </div>
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
