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

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Arventa Ventures | Digital Marketing, Web & App Development Agency"
        description="Arventa Ventures is a premier full-service digital agency providing high-ROI digital marketing, Meta Ads, SEO, custom website development, mobile application development, and enterprise tech solutions."
        keywords="web development agency, app development company, software development, custom tech services, digital marketing agency, best digital marketing agency in kolkata, meta ads service, SEO agency Kolkata, performance marketing, Arventa Ventures"
        canonicalUrl="/"
        structuredData={homeSchema}
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
