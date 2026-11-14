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
    company: "",
    service: "Select a service...",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Arventa Ventures",
    "description": "Get in touch with Arventa Ventures for digital marketing inquiries, free SEO audits, Meta Ads strategy, and growth consultations.",
    "url": "https://arventaventures.online/contact"
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
    const text = `*New Inquiry from ${formData.firstName} ${formData.lastName}*
*Company:* ${formData.company || 'Not provided'}
*Email:* ${formData.email}
*Service Interested In:* ${formData.service}

*Project Details:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917872490719?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Contact Us | Arventa Ventures - Start Your Project Today"
        description="Connect with Arventa Ventures. Request a free digital marketing audit, discuss Meta & Google Ads campaigns, or talk to our growth specialists."
        keywords="Contact Arventa Ventures, Digital Marketing Audit, Hire SEO Agency, Meta Ads Specialist, Arventa Ventures Contact"
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
                      href="https://maps.app.goo.gl/Uz4GYtFuQ692XVQG8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                    >
                      <MapPin size={16} /> Open in Google Maps <ArrowRight size={14} />
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
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Form Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
              
              {isSubmitted ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Sent Successfully</h3>
                  <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                    Thank you for reaching out. We will review your details and contact you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-12 px-8 rounded-full">
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Send an Inquiry</h3>
                    <p className="text-slate-400">Please provide as much detail as possible so we can properly evaluate your request.</p>
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
                          className="w-full appearance-none bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                        >
                          <option disabled>Select a service...</option>
                          <option>Paid Acquisition (Google/Meta Ads)</option>
                          <option>SEO & Organic Growth</option>
                          <option>Social Media & Content</option>
                          <option>Conversion Rate Optimization (CRO)</option>
                          <option>Full-Scale Agency Partnership</option>
                        </select>
                        {/* Custom Select Arrow */}
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                      <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold shadow-xl shadow-orange-500/20 group">
                        Submit Inquiry 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-center text-slate-500 text-sm mt-4">
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
    </div>
  );
}
