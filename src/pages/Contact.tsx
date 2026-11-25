import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, PhoneCall, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "Paid Acquisition (Google/Meta Ads)",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Arventa Ventures",
    "description": "Get in touch with Arventa Ventures at our Contai Headquarters for digital marketing inquiries, free SEO audits, Meta Ads strategy, web development, and app development consultations.",
    "url": "https://arventaventures.online/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Arventa Ventures Global Headquarters",
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
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Business Inquiry - Arventa Ventures*
*Name:* ${formData.firstName} ${formData.lastName}
*Company / Brand:* ${formData.company || 'Not provided'}
*Phone / WhatsApp:* ${formData.phone || 'Not provided'}
*Work Email:* ${formData.email}
*Service Interested In:* ${formData.service}

*Project Details & Goals:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917872490719?text=${encodedText}`;
    setIsSubmitted(true);

    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      const win = window.open(whatsappUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Contact Us in Contai (HQ) | Arventa Ventures - Start Your Project Today"
        description="Connect with Arventa Ventures at our Contai Global Headquarters (Chapatala More). Request a free SEO & digital marketing audit, discuss custom web & mobile app development, or book a strategy session with founder Jaydeb Jana."
        keywords="Contact Arventa Ventures, Digital Marketing Agency Contai, Web Development Company Contai, App Development Contai, Hire SEO Agency Contai, Meta Ads Specialist, Chapatala More Contai, কাঁথির ডিজিটাল মার্কেটিং, Arventa Ventures Contact"
        canonicalUrl="/contact"
        structuredData={contactSchema}
      />
      
      {/* Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-500/10 via-slate-900/5 to-transparent pointer-events-none"></div>

      <Section className="relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Let's Build Your <span className="text-orange-500">Growth Engine</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Ready to scale your revenue? Drop us a line, and our lead strategist will reach out within 24 hours to schedule your strategy session.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start group">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-orange-500 mr-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-slate-400 mb-1">For general inquiries and RFPs.</p>
                    <a href="mailto:info@arventaventures.online" className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
                      info@arventaventures.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-[#25D366] mr-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">WhatsApp Us</h4>
                    <p className="text-slate-400 mb-1">Instant chat support (Everyday, 9 AM - 9 PM).</p>
                    <a href="https://wa.me/917872490719" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#20b958] font-medium transition-colors">
                      +91 7872490719
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-orange-500 mr-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-slate-400 leading-relaxed mb-3">
                      Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442
                    </p>
                    <a
                      href="https://share.google/9g673CLWFHS9j6tb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                    >
                      <MapPin size={16} /> Google Business Profile & Maps <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Official Social & GMB Channels */}
                <div className="pt-6 border-t border-slate-800/80">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Official Agency Channels</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <a
                      href="https://www.facebook.com/p/Arventa-Ventures-61573258438828/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 hover:text-orange-400 text-slate-300 transition-colors flex items-center gap-2 font-medium"
                    >
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/arventaventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 hover:text-orange-400 text-slate-300 transition-colors flex items-center gap-2 font-medium"
                    >
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://share.google/9g673CLWFHS9j6tb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 font-semibold"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Google Business Profile (GMB)</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-10 border-t border-slate-800"
            >
              <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Trusted by industry leaders globally</p>
              <div className="flex flex-wrap gap-6 opacity-50 grayscale">
                {/* Simulated Logos */}
                <div className="flex items-center gap-2"><Building2 className="h-6 w-6" /><span className="text-xl font-bold font-serif">TechCorp</span></div>
                <div className="flex items-center gap-2"><Building2 className="h-6 w-6" /><span className="text-xl font-bold font-sans">RetailPrime</span></div>
                <div className="flex items-center gap-2"><Building2 className="h-6 w-6" /><span className="text-xl font-bold font-mono">fintech.io</span></div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Form Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
              
              {isSubmitted ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Forwarded to WhatsApp</h3>
                  <p className="text-slate-400 text-base mb-8 max-w-md mx-auto">
                    Your inquiry details have been forwarded to our direct WhatsApp line. If your chat didn't open automatically, click the button below to send:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/917872490719?text=${encodeURIComponent(`*New Business Inquiry - Arventa Ventures*\n*Name:* ${formData.firstName} ${formData.lastName}\n*Company:* ${formData.company || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Details:* ${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                    >
                      Open WhatsApp Direct <ArrowRight className="w-4 h-4" />
                    </a>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-12 px-8 rounded-full">
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Send an Inquiry</h3>
                    <p className="text-slate-400">Please provide your details. Clicking submit will directly launch WhatsApp with your pre-filled message.</p>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-300">
                          First Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-300">
                          Last Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-300">
                          Work Email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-300">
                          Phone / WhatsApp <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-300">
                        Company / Website
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                        placeholder="yourbrand.com"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="service" className="text-sm font-semibold text-slate-300">
                        Primary Goal / Service Needed
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 border border-slate-800 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 pr-12 text-slate-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all appearance-none [&::-ms-expand]:hidden [-webkit-appearance:none] [-moz-appearance:none] cursor-pointer"
                        >
                          <option disabled value="">Select a service...</option>
                          <option value="Paid Acquisition (Meta & Google Ads)">Paid Acquisition (Meta & Google Ads)</option>
                          <option value="SEO & Organic Growth">SEO & Google Maps 3-Pack</option>
                          <option value="Full-Stack Web & App Development">Full-Stack Web & App Development</option>
                          <option value="High-Hook Video & Creative Production">High-Hook Video & Creative</option>
                          <option value="Full-Scale Agency Partnership">Full-Scale Agency Partnership</option>
                        </select>
                        {/* Custom Select Arrow */}
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-orange-500">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-300">
                        Project Details <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-600 resize-none"
                        placeholder="Tell us about your brand, current challenges, and revenue goals..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full h-13 sm:h-16 rounded-xl sm:rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-bold shadow-xl shadow-orange-500/20 group justify-center">
                        Submit Inquiry 
                        <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-center text-slate-500 text-xs sm:text-sm mt-4">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contai Headquarters Map & Regional Directions Section */}
      <section className="py-12 md:py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Direct Contai Headquarters Walk-In
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Visit Us at Contai (কাঁথি) HQ
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operating directly at Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721401. Regional business owners and directors are welcome to schedule an in-person briefing with founder Jaydeb Jana.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://share.google/9g673CLWFHS9j6tb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
                >
                  <MapPin className="w-4 h-4" />
                  Get Google Maps Directions
                </a>
                <a
                  href="tel:+917872490719"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700"
                >
                  <PhoneCall className="w-4 h-4 text-orange-400" />
                  +91 7872490719
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-xl aspect-video sm:aspect-[21/9]">
              <iframe
                title="Arventa Ventures Contai Headquarters Location"
                src="https://maps.google.com/maps?q=Contai,%20Purba%20Medinipur,%20West%20Bengal%20721401&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
