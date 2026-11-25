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
const DEFAULT_TITLE = "Arventa Ventures - Best Digital Marketing Agency in Contai | Web & App Development";
const DEFAULT_DESCRIPTION = "Arventa Ventures is the premier digital marketing agency, web development company, and app development firm in Contai (Kanthi), Purba Medinipur. High-ROI Meta Ads, Google Ads, SEO, and sub-second web applications.";
const DEFAULT_KEYWORDS = "best digital marketing agency in contai, digital marketing agency in kanthi, web development company in contai, app development company in contai, website design in kanthi, software company in contai, best digital marketing agency in kolkata, video making services near me, meta ads service, meta ads services near me, low budget digital marketing agency, affordable digital marketing agency, local SEO services, performance marketing agency, Arventa Ventures, কাঁথির সেরা ডিজিটাল মার্কেটিং এজেন্সি";
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

  // Base Organization & LocalBusiness Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "DigitalMarketingAgency"],
    "name": "Arventa Ventures",
    "alternateName": ["Arventa", "Arventa Ventures Contai", "Arventa Ventures Kanthi"],
    "url": DEFAULT_DOMAIN,
    "logo": `${DEFAULT_DOMAIN}/logo.png`,
    "image": `${DEFAULT_DOMAIN}/images/about-team-hq.webp`,
    "description": DEFAULT_DESCRIPTION,
    "telephone": "+917872490719",
    "email": "info@arventaventures.online",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Purba Gopinathpur, Chapatala More",
      "addressLocality": "Contai",
      "addressRegion": "West Bengal",
      "postalCode": "721401",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.7781,
      "longitude": 87.7516
    },
    "hasMap": "https://share.google/9g673CLWFHS9j6tb9",
    "areaServed": [
      { "@type": "City", "name": "Contai" },
      { "@type": "City", "name": "Kanthi" },
      { "@type": "AdministrativeArea", "name": "Purba Medinipur" },
      { "@type": "City", "name": "Digha" },
      { "@type": "City", "name": "Mandarmani" },
      { "@type": "City", "name": "Egra" },
      { "@type": "City", "name": "Ramnagar" },
      { "@type": "City", "name": "Haldia" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "State", "name": "West Bengal" },
      { "@type": "Country", "name": "India" }
    ],
    "founder": {
      "@type": "Person",
      "name": "Jaydeb Jana",
      "jobTitle": "Founder & CEO",
      "url": `${DEFAULT_DOMAIN}/ceo`
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing, Web & App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development in Contai",
            "description": "High-performance React 19 & Next.js custom web applications with sub-second loading speeds."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development in Contai",
            "description": "Cross-platform iOS and Android mobile app development for businesses in Purba Medinipur."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Google Maps Ranking in Contai",
            "description": "Local SEO and Google Business Profile optimization to rank #1 in Contai and Purba Medinipur."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads & Performance Marketing",
            "description": "Algorithmic Facebook & Instagram advertising powered by Meta Conversions API."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "4K On-Location Video Production in Contai",
            "description": "Cinematic commercial shoots for showrooms, clinics, resorts, and education institutes."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
      "https://www.instagram.com/arventaventures/",
      "https://x.com/arventaventures",
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
