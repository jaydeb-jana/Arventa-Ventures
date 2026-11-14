import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { faqData } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Frequently Asked Questions | Arventa Ventures FAQ"
        description="Find answers to common questions about Arventa Ventures' digital marketing services, SEO strategies, Meta Ads pricing, and onboarding process."
        keywords="Arventa Ventures FAQ, Digital Marketing Agency Questions, SEO FAQs, Meta Ads Cost"
        canonicalUrl="/faq"
        structuredData={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-slate-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-medium text-sm mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Questions</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our methodology, pricing, and how we engineer hyper-growth for our partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <Section className="py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-slate-900/80 border-orange-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${isOpen ? "text-white" : "text-slate-200"}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      isOpen 
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                        : "bg-slate-800 text-slate-400"
                    }`}>
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-slate-400 text-lg leading-relaxed border-t border-slate-800/50 mt-4 pt-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 border-t border-slate-800 bg-slate-900/50 relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-slate-700 shadow-xl">
            <MessageSquare className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat to our friendly team. We are always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20" asChild>
              <Link to="/contact">
                Contact Support <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-slate-700 text-white hover:bg-slate-800" asChild>
              <a href="mailto:info@arventaventures.online">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
