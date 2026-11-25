import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-border pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/images/arventa-logo.webp"
                alt="Arventa Ventures Logo"
                className="h-12 w-auto rounded-xl object-contain mb-4"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We don't just market brands — we build them. Full-service digital
              marketing agency driving measurable growth.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Arventa-Ventures-61573258438828/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full text-slate-400 hover:text-primary transition-colors border border-border"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/arventaventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full text-slate-400 hover:text-primary transition-colors border border-border"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/arventaventures"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full text-slate-400 hover:text-primary transition-colors border border-border"
                title="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://share.google/9g673CLWFHS9j6tb9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full text-slate-400 hover:text-primary transition-colors border border-border"
                title="Google Business Profile (GMB)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "CEO", path: "/ceo" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "FAQ", path: "/faq" },
                { name: "Contai Global HQ", path: "/location/contai" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Core Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Website Development", path: "/services/web-development" },
                { name: "App & Software Development", path: "/services/app-development" },
                { name: "Meta Ads & Performance", path: "/services/meta-ads" },
                { name: "SEO & Organic Growth", path: "/services/seo-services" },
                { name: "Video & Creator Marketing", path: "/services/video-marketing" },
                { name: "Brand Identity Design", path: "/services/branding" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: "Benefit of Arventa Ventures", path: "/info/benefit-of-arventa-ventures" },
                { name: "What is Arventa Ventures", path: "/info/what-is-arventa-ventures" },
                { name: "What is Digital Marketing", path: "/info/what-is-digital-marketing" },
                { name: "Benefit of Meta Ads", path: "/info/benefit-of-meta-ads" },
                { name: "Benefit of Social Media", path: "/info/benefit-of-social-media" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="https://share.google/9g673CLWFHS9j6tb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  title="View Arventa Ventures on Google"
                >
                  Purba Gopinathpur, Chapatala,
                  <br />
                  More, Contai, West Bengal 721442
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:info@arventaventures.online"
                  className="hover:text-white transition-colors"
                >
                  info@arventaventures.online
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="text-primary shrink-0" />
                <a
                  href="https://wa.me/917872490719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact on WhatsApp (+91 7872490719)
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://share.google/9g673CLWFHS9j6tb9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded-lg text-xs font-semibold border border-orange-500/30 transition-all hover:scale-[1.02]"
              >
                <MapPin size={14} className="text-orange-500" />
                <span>Google Business Profile (GMB)</span>
              </a>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center mt-2"
              >
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {currentYear} Arventa Ventures. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="text-slate-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/faq"
              className="text-slate-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
