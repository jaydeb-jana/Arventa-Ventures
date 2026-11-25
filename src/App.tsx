/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/src/components/layout/Layout";
import { PageLoader } from "@/src/components/ui/PageLoader";

// Lazy-loaded route chunks to eliminate initial JS bottleneck
const Home = lazy(() => import("@/src/pages/Home"));
const About = lazy(() => import("@/src/pages/About"));
const Ceo = lazy(() => import("@/src/pages/Ceo"));
const Services = lazy(() => import("@/src/pages/Services"));
const ServiceDetail = lazy(() => import("@/src/pages/ServiceDetail"));
const ServiceLocationTemplate = lazy(() => import("@/src/pages/ServiceLocationTemplate"));
const LocationTemplate = lazy(() => import("@/src/pages/LocationTemplate"));
const InfoDetail = lazy(() => import("@/src/pages/InfoDetail"));
const Portfolio = lazy(() => import("@/src/pages/Portfolio"));
const Industries = lazy(() => import("@/src/pages/Industries"));
const Pricing = lazy(() => import("@/src/pages/Pricing"));
const Blog = lazy(() => import("@/src/pages/Blog"));
const BlogPost = lazy(() => import("@/src/pages/BlogPost"));
const FAQ = lazy(() => import("@/src/pages/FAQ"));
const PrivacyPolicy = lazy(() => import("@/src/pages/PrivacyPolicy"));
const Terms = lazy(() => import("@/src/pages/Terms"));
const Contact = lazy(() => import("@/src/pages/Contact"));
const NotFound = lazy(() => import("@/src/pages/NotFound"));

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader isLoading={true} />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="ceo" element={<Ceo />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:slug" element={<ServiceDetail />} />
                <Route path="services/:slug/in/:city" element={<ServiceLocationTemplate />} />
                <Route path="locations" element={<Navigate to="/location/contai" replace />} />
                <Route path="location/:city" element={<LocationTemplate />} />
                <Route path="info/:slug" element={<InfoDetail />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="industries" element={<Industries />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogPost />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="contact" element={<Contact />} />
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
