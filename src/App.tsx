/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/src/components/layout/Layout";

import Home from "@/src/pages/Home";
import About from "@/src/pages/About";
import Services from "@/src/pages/Services";
import Portfolio from "@/src/pages/Portfolio";
import Industries from "@/src/pages/Industries";
import Pricing from "@/src/pages/Pricing";
import Blog from "@/src/pages/Blog";
import BlogPost from "@/src/pages/BlogPost";
import FAQ from "@/src/pages/FAQ";
import PrivacyPolicy from "@/src/pages/PrivacyPolicy";
import Terms from "@/src/pages/Terms";
import Contact from "@/src/pages/Contact";
import Ceo from "@/src/pages/Ceo";
import ServiceDetail from "@/src/pages/ServiceDetail";
import InfoDetail from "@/src/pages/InfoDetail";
import LocationTemplate from "@/src/pages/LocationTemplate";
import ServiceLocationTemplate from "@/src/pages/ServiceLocationTemplate";
import Locations from "@/src/pages/Locations";
import NotFound from "@/src/pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="ceo" element={<Ceo />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="services/:slug/in/:city" element={<ServiceLocationTemplate />} />
              <Route path="locations" element={<Locations />} />
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
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
