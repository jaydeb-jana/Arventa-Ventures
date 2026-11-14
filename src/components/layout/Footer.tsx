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
    <footer className="bg-slate-950 border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="https://i.ibb.co/0pgK7VwT/FB-IMG-1786329349374.jpg"
                alt="Arventa Ventures Logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto rounded-xl object-contain mb-4"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We don't just market brands — we build them. Full-service digital
              marketing agency driving measurable growth.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/19J9Nm6Gg6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full text-slate-400 hover:text-primary transition-colors border border-border"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/iamjaydebjana"
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
                { name: "Locations We Serve", path: "/locations" },
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
                { name: "Website Development", path: "/services" },
                { name: "App & Software Development", path: "/services" },
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
                  href="https://maps.app.goo.gl/Uz4GYtFuQ692XVQG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
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
                href="https://maps.app.goo.gl/Uz4GYtFuQ692XVQG8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg text-xs font-semibold border border-orange-500/20 transition-colors"
              >
                <MapPin size={14} /> View on Google Maps
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

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Arventa Ventures. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/faq"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
