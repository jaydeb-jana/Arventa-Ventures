import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/src/data";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen pt-24 items-center justify-center">
        <SEO title="Post Not Found" noindex={true} />
        <h1 className="text-4xl font-bold text-white mb-6">Post Not Found</h1>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const blogArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Arventa Ventures"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arventaventures.online/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://arventaventures.online/blog/${post.id}`
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title={`${post.title} | Arventa Ventures Blog`}
        description={post.description}
        keywords={`${post.category}, Digital Marketing, ${post.title}, Arventa Ventures Blog`}
        canonicalUrl={`/blog/${post.id}`}
        ogType="article"
        ogImage={post.image}
        structuredData={blogArticleSchema}
      />
      <Section className="pb-0">
        <Link
          to="/blog"
          className="inline-flex items-center text-orange-500 hover:text-orange-400 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
        </Link>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm">
            <span className="text-orange-500 font-medium bg-orange-500/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-slate-500">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            {post.description}
          </p>
        </div>
      </Section>

      <div className="max-w-5xl mx-auto px-6 w-full mb-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/post-${post.id}/1200/600`;
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Section className="pt-0">
        <div 
          className="max-w-3xl mx-auto blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-border">
          <div className="bg-card p-8 rounded-2xl text-center border border-border">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to scale your business?</h3>
            <p className="text-slate-400 mb-8">
              Let's implement these strategies for your brand. Get in touch with our experts today.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
