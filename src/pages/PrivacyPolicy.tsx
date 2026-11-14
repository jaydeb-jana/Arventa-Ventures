import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, FileText, Server, Globe, Mail } from "lucide-react";
import { Section } from "@/src/components/ui/Section";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      icon: <FileText className="w-5 h-5" />,
      title: "1. Introduction",
      content: `Welcome to Arventa Ventures. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you. This policy applies to all information collected through our website, mobile application, and/or any related services, sales, marketing, or events.`
    },
    {
      id: "data-collection",
      icon: <Database className="w-5 h-5" />,
      title: "2. The Data We Collect",
      content: `Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
      
      • Identity Data: includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.
      • Contact Data: includes billing address, delivery address, email address and telephone numbers.
      • Financial Data: includes bank account and payment card details.
      • Transaction Data: includes details about payments to and from you and other details of products and services you have purchased from us.
      • Technical Data: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.`
    },
    {
      id: "data-usage",
      icon: <Eye className="w-5 h-5" />,
      title: "3. How We Use Your Data",
      content: `We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      
      • Where we need to perform the contract we are about to enter into or have entered into with you.
      • Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
      • Where we need to comply with a legal obligation.
      
      We do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message.`
    },
    {
      id: "data-sharing",
      icon: <Globe className="w-5 h-5" />,
      title: "4. Disclosures of Data",
      content: `We may share your personal data with the parties set out below for the purposes set out in the table above.
      
      • Internal Third Parties: Other companies in the Arventa Ventures Group acting as joint controllers or processors.
      • External Third Parties: Service providers acting as processors based in various jurisdictions who provide IT and system administration services. Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers.
      • Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets.
      
      We require all third parties to respect the security of your personal data and to treat it in accordance with the law.`
    },
    {
      id: "data-security",
      icon: <Lock className="w-5 h-5" />,
      title: "5. Data Security",
      content: `We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
      
      We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.`
    },
    {
      id: "data-retention",
      icon: <Server className="w-5 h-5" />,
      title: "6. Data Retention",
      content: `We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
      
      To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.`
    },
    {
      id: "legal-rights",
      icon: <Shield className="w-5 h-5" />,
      title: "7. Your Legal Rights",
      content: `Under certain circumstances, you have rights under data protection laws in relation to your personal data. You have the right to:
      
      • Request access to your personal data.
      • Request correction of your personal data.
      • Request erasure of your personal data.
      • Object to processing of your personal data.
      • Request restriction of processing your personal data.
      • Request transfer of your personal data.
      • Right to withdraw consent.
      
      If you wish to exercise any of the rights set out above, please contact us.`
    },
    {
      id: "contact",
      icon: <Mail className="w-5 h-5" />,
      title: "8. Contact Us",
      content: `If you have any questions about this privacy policy or our privacy practices, please contact us at:
      
      Email: info@arventaventures.online
      Address: Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442
      
      You have the right to make a complaint at any time to the relevant supervisory authority for data protection issues. We would, however, appreciate the chance to deal with your concerns before you approach the authority so please contact us in the first instance.`
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
              <Shield className="w-4 h-4 text-orange-500 mr-2" />
              Data Protection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Policy</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We are committed to safeguarding your privacy. This policy outlines our data processing practices and your rights regarding your personal information.
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
