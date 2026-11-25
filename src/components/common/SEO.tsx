import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "business.business";
  ogImage?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  hreflangs?: Array<{ lang: string; href: string }>;
  noindex?: boolean;
}

const DEFAULT_SITE_NAME = "Arventa Ventures";
const DEFAULT_TITLE = "Arventa Ventures - Best Digital Marketing Agency | Low Budget Packages, Meta Ads & SEO";
const DEFAULT_DESCRIPTION = "Arventa Ventures is the best digital marketing agency offering low budget packages, Meta Ads service, video making services near me, Google Ads & high-ROI SEO in Kolkata and worldwide.";
const DEFAULT_KEYWORDS = "best digital marketing agency, best digital marketing agency in kolkata, video making services near me, meta ads service, meta ads services near me, low budget digital marketing agency, affordable digital marketing agency, local SEO services, performance marketing agency, Arventa Ventures";
const DEFAULT_DOMAIN = "https://arventaventures.online";
const DEFAULT_OG_IMAGE = "https://arventaventures.online/images/arventa-og-banner.webp";

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
  hreflangs,
  noindex = false,
}) => {
  const fullTitle = title 
    ? `${title} | ${DEFAULT_SITE_NAME}` 
    : DEFAULT_TITLE;

  const currentCanonical = canonicalUrl 
    ? (canonicalUrl.startsWith("http") ? canonicalUrl : `${DEFAULT_DOMAIN}${canonicalUrl}`) 
    : DEFAULT_DOMAIN;

  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Arventa Ventures",
    "url": DEFAULT_DOMAIN,
    "logo": `${DEFAULT_DOMAIN}/logo.png`,
    "description": DEFAULT_DESCRIPTION,
    "telephone": "+917872490719",
    "email": "info@arventaventures.online",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
      "https://www.instagram.com/arventaventures/",
      "https://share.google/9g673CLWFHS9j6tb9"
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arventa Ventures" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={currentCanonical} />

      {/* Favicons (Google Search Compliant) */}
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon-48.png" />

      {/* Multilingual / Hreflang Tags */}
      {hreflangs && hreflangs.map((item) => (
        <link key={item.lang} rel="alternate" hrefLang={item.lang} href={item.href} />
      ))}

      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Custom Page Schema */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
