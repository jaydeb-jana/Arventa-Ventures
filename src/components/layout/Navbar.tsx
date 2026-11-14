import { useState, useEffect } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Industries", path: "/industries" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const shouldShowLangSwitcher = 
    location.pathname.startsWith('/location') ||
    location.pathname.includes('/in/');

  const handleNavClick = (targetPath: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === targetPath) {
      window.dispatchEvent(new CustomEvent("trigger-page-reload"));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled || mobileMenuOpen
            ? "bg-background border-border py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 z-50 relative"
            >
              <img
                src="https://i.ibb.co/0pgK7VwT/FB-IMG-1786329349374.jpg"
                alt="Arventa Ventures Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto rounded-xl object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                Arventa Ventures
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

                        <div className="flex items-center gap-3">
              {shouldShowLangSwitcher && (
              <>
                {/* Language Selector */}
                <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as any)}
                className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-full px-3 py-1.5 outline-none focus:border-orange-500 transition-colors cursor-pointer appearance-none pr-8 relative shadow-lg"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2394a3b8%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
              >
                <option value="en">English</option>
                <option value="bn">Bengali</option>
                <option value="hi">Hindi</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
                <option value="mr">Marathi</option>
                <option value="gu">Gujarati</option>
              </select>
              </>
            )}

              <div className="hidden lg:flex items-center gap-4">
                <Button asChild variant="outline" className="border-slate-700">
                  <a href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">Let's Talk</a>
                </Button>
                <Button asChild>
                  <Link to="/contact" onClick={() => handleNavClick('/contact')}>Start a Project</Link>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden relative z-50 p-2 text-slate-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
</div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 pb-12 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col min-h-full">
              {[
                ...navLinks,
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`py-4 text-xl font-semibold tracking-tight border-b border-border/50 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-4 mt-8 pb-8">
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact" onClick={() => handleNavClick('/contact')}>Start a Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-700 text-white hover:bg-slate-800"
                >
                  <a href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">Let's Talk</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
