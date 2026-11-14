import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ShieldAlert, CheckCircle, Scale, AlertTriangle, Mail, BookOpen } from "lucide-react";
import { Section } from "@/src/components/ui/Section";

export default function Terms() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    {
      id: "acceptance",
      icon: <CheckCircle className="w-5 h-5" />,
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Arventa Ventures website, engaging our services, or interacting with our content, you accept and agree to be bound by the terms and provisions of this agreement. 
      
      In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: "services",
      icon: <FileText className="w-5 h-5" />,
      title: "2. Description of Services",
      content: `Arventa Ventures is a digital marketing agency providing services including, but not limited to, search engine optimization (SEO), pay-per-click (PPC) management, social media marketing, content creation, and web design.
      
      We reserve the right to either modify or discontinue, including any of the website's features, at any time with or without notice to you. We will not be liable to you or any third party should we exercise such right. Any new features that augment or enhance the then-current services on this site shall also be subject to these Terms of Service.`
    },
    {
      id: "intellectual-property",
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "3. Intellectual Property Rights",
      content: `All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs and agreements, are the property of or licensed to Arventa Ventures and as such are protected from infringement by local and international legislation and treaties.
      
      • You may not reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by us.
      • Client deliverables produced by Arventa Ventures remain our intellectual property until full payment has been received, at which point ownership transfers as stipulated in the specific client agreement.`
    },
    {
      id: "user-conduct",
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "4. User Conduct",
      content: `You agree to use our website and services only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others or otherwise cause damage to the site or the content.
      
      You agree not to add to, subtract from, or otherwise modify the content, or to attempt to access any content that is not intended for you. You agree not to use the site in any manner that might interfere with the rights of third parties.`
    },
    {
      id: "limitation",
      icon: <Scale className="w-5 h-5" />,
      title: "5. Limitation of Liability",
      content: `Arventa Ventures shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Arventa Ventures has been advised of the possibility of such damages.
      
      We make no guarantees regarding the specific marketing results, ROI, or search engine rankings, as these depend on third-party platforms and market variables beyond our direct control, unless explicitly stated in a signed service level agreement.`
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "6. Contact Information",
      content: `If you have any questions or concerns regarding these Terms and Conditions, please contact our legal team:
      
      Email: info@arventaventures.online
      Address: Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442`
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-slate-900/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-8 shadow-sm">
              <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Conditions</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              These terms govern your use of our website and services. Please read them carefully to understand your rights and obligations as a partner of Arventa Ventures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium">
                Last Updated: August 10, 2026
              </div>
              <div className="text-sm text-slate-500">Effective Immediately</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <Section className="py-16 md:py-24 relative z-10" containerClassName="px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sidebar / TOC */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 flex-shrink-0"
          >
            <div className="sticky top-32 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hidden lg:block">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeSection === section.id 
                        ? "bg-orange-500/10 text-orange-500 font-semibold" 
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                    }`}
                  >
                    <span className={activeSection === section.id ? "text-orange-500" : "text-slate-500"}>
                      {section.icon}
                    </span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-[2rem] p-6 sm:p-8 md:p-12">
              <div className="space-y-16">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-32 relative"
                    id={section.id}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-orange-500 shadow-inner flex-shrink-0">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="text-slate-300 text-base md:text-lg leading-relaxed space-y-6">
                      {section.content.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.includes('•')) {
                          const items = paragraph.split('\n');
                          return (
                            <ul key={pIndex} className="list-none space-y-4 mt-6 mb-8 p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                              {items.map((item, iIndex) => {
                                if (item.trim().startsWith('•')) {
                                  return (
                                    <li key={iIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                      </div>
                                      <span className="text-slate-300">{item.replace('•', '').trim()}</span>
                                    </li>
                                  );
                                }
                                return <p key={iIndex}>{item}</p>;
                              })}
                            </ul>
                          );
                        }
                        return (
                          <p key={pIndex} className="text-slate-300/90">
                            {paragraph.trim()}
                          </p>
                        );
                      })}
                    </div>

                    {index !== sections.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-8 left-6 w-0.5 h-8 bg-gradient-to-b from-slate-800 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </Section>
    </div>
  );
}
