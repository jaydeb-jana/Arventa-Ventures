import { SEO } from "@/src/components/common/SEO";
import {
  HeroSection,
  TrustIndicators,
  IntroSection,
  ProblemStatement,
  SolutionSection,
  CoreServicesPreview,
  TechSolutionsHighlight,
  VideoMarketingHighlight,
} from "@/src/components/sections/HomePart1";
import {
  MetricsSection,
  ProcessSection,
  SEOSpecialization,
  PaidAdsSpecialization,
  SocialMediaSpecialization,
  ContentMarketingFocus,
  PortfolioHighlights,
} from "@/src/components/sections/HomePart2";
import {
  WhyChooseUs,
  Testimonials,
  CaseStudyOne,
  CaseStudyTwo,
  IndustriesGrid,
  CreativeShowcase,
  TechStack,
} from "@/src/components/sections/HomePart3";
import {
  GlobalReach,
  PricingPreview,
  ClientOnboarding,
  MarketingAuditOffer,
  HomeFAQ,
  BlogPreview,
} from "@/src/components/sections/HomePart4";
import {
  MissionVision,
  GuaranteeSection,
  FinalCTA,
} from "@/src/components/sections/HomePart5";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arventa Ventures",
    "url": "https://arventaventures.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arventaventures.online/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arventa Ventures",
    "url": "https://arventaventures.online",
    "logo": "https://arventaventures.online/images/arventa-og-banner.webp",
    "image": "https://arventaventures.online/images/about-team-hq.webp",
    "telephone": "+917872490719",
    "email": "info@arventaventures.online",
    "hasMap": "https://share.google/9g673CLWFHS9j6tb9",
    "sameAs": [
      "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
      "https://www.instagram.com/arventaventures/",
      "https://share.google/9g673CLWFHS9j6tb9"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Purba Gopinathpur, Chapatala More",
      "addressLocality": "Contai",
      "addressRegion": "West Bengal",
      "postalCode": "721442",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Arventa Ventures - Best Digital Marketing Agency in Contai | Web & App Development Company Kanthi"
        description="Arventa Ventures is the premier digital marketing agency, web development company, and app development firm headquartered in Contai (Kanthi), Purba Medinipur. High-ROI Meta Ads, local Google SEO, sub-second React websites, and custom mobile applications."
        keywords="best digital marketing agency in contai, digital marketing agency in kanthi, web development company in contai, app development company in contai, website design in kanthi, software company in contai, best digital marketing agency in kolkata, meta ads service contai, SEO agency contai, purba medinipur digital marketing, কাঁথির সেরা ডিজিটাল মার্কেটিং এজেন্সী, কাঁথিতে ওয়েব ডেভেলপমেন্ট, Arventa Ventures"
        canonicalUrl="/"
        structuredData={[homeSchema, localBusinessSchema]}
      />
      {/* Part 1 (8 Sections) */}
      <HeroSection />
      <TrustIndicators />
      <IntroSection />
      <ProblemStatement />
      <SolutionSection />
      <CoreServicesPreview />
      <TechSolutionsHighlight />
      <VideoMarketingHighlight />

      {/* Part 2 (7 Sections) */}
      <MetricsSection />
      <ProcessSection />
      <SEOSpecialization />
      <PaidAdsSpecialization />
      <SocialMediaSpecialization />
      <ContentMarketingFocus />
      <PortfolioHighlights />

      {/* Part 3 (7 Sections) */}
      <WhyChooseUs />
      <Testimonials />
      <CaseStudyOne />
      <CaseStudyTwo />
      <IndustriesGrid />
      <CreativeShowcase />
      <TechStack />

      {/* Part 4 (6 Sections) */}
      <GlobalReach />
      <PricingPreview />
      <ClientOnboarding />
      <MarketingAuditOffer />
      <HomeFAQ />
      <BlogPreview />

      {/* Part 5 (3 Sections) */}
      <MissionVision />
      <GuaranteeSection />
      <FinalCTA />
    </div>
  );
}
