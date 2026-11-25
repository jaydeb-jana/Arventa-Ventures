import { useState, useEffect } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useTheme } from "@/src/contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
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
  const { theme, toggleTheme } = useTheme();

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
            ? "bg-slate-950/95 backdrop-blur-xl border-slate-800/80 py-3 sm:py-4"
            : "bg-transparent border-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 sm:gap-2.5 z-50 relative group shrink-0"
            >
              <img
                src="/images/arventa-logo.webp"
                alt="Arventa Ventures Logo"
                className="h-8 sm:h-10 w-auto rounded-xl object-contain shrink-0"
              />
              <span className="text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
                Arventa<span className="text-orange-500 hidden min-[360px]:inline"> Ventures</span>
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

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-all shadow-sm focus:outline-none cursor-pointer shrink-0"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-orange-500 transition-transform hover:-rotate-12" />
                )}
              </button>

              {shouldShowLangSwitcher && (
                <div className="relative inline-block shrink-0">
                  <select 
                    value={lang} 
                    onChange={(e) => setLang(e.target.value as any)}
                    aria-label="Select Language"
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-full pl-3 pr-7 sm:pr-8 py-1.5 outline-none focus:border-orange-500 transition-colors cursor-pointer shadow-lg appearance-none [&::-ms-expand]:hidden [-webkit-appearance:none] [-moz-appearance:none]"
                    style={{ 
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23f97316%27 stroke-width=%272.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E")', 
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'right 8px center' 
                    }}
                  >
                    <option value="en" className="bg-slate-900 text-white">English</option>
                    <option value="bn" className="bg-slate-900 text-white">Bengali</option>
                    <option value="hi" className="bg-slate-900 text-white">Hindi</option>
                    <option value="te" className="bg-slate-900 text-white">Telugu</option>
                    <option value="ta" className="bg-slate-900 text-white">Tamil</option>
                    <option value="mr" className="bg-slate-900 text-white">Marathi</option>
                    <option value="gu" className="bg-slate-900 text-white">Gujarati</option>
                  </select>
                </div>
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
                className="lg:hidden relative z-50 p-2 text-slate-200 hover:text-white rounded-lg hover:bg-slate-900/60 transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? <X size={24} className="text-orange-400" /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl lg:hidden pt-20 pb-10 px-5 sm:px-6 overflow-y-auto flex flex-col justify-between"
          >
            <nav className="flex flex-col pt-4">
              {[
                ...navLinks,
                { name: "CEO Office", path: "/ceo" },
                { name: "Contai Global HQ", path: "/location/contai" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`py-3.5 text-lg font-semibold tracking-tight border-b border-slate-800/60 transition-colors flex items-center justify-between ${
                    location.pathname === link.path
                      ? "text-orange-500 font-bold"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-500">→</span>
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-6">
                <Button asChild size="lg" className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20">
                  <Link to="/contact" onClick={() => handleNavClick('/contact')}>Start a Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800 rounded-xl"
                >
                  <a href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                    WhatsApp Jaydeb Jana (+91 7872490719)
                  </a>
                </Button>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="mt-8 pt-6 border-t border-slate-850 text-xs text-slate-400 space-y-1 text-center">
                <p className="font-semibold text-slate-300">Arventa Ventures Global HQ</p>
                <p>Chapatala More, Contai, West Bengal 721442</p>
                <p className="text-orange-400 font-mono pt-1">+91 7872490719 • info@arventaventures.online</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
