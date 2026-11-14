import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/src/components/common/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { PageLoader } from "@/src/components/ui/PageLoader";
import Lenis from "lenis";

export const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const isFirstRender = useRef(true);

  // Prevent browser native scroll restoration to avoid initial jump to footer
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Initialize Lenis smooth scrolling once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    (window as any).__lenis = lenis;

    return () => {
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  // Single unified effect for initial load & route changes
  useEffect(() => {
    setIsLoading(true);

    window.scrollTo(0, 0);
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }

    const loadDuration = isFirstRender.current ? 400 : 300;
    isFirstRender.current = false;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadDuration);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  // Handle custom same-page click reloads
  useEffect(() => {
    const handleCustomReload = () => {
      setIsLoading(true);
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 350);
    };

    window.addEventListener("trigger-page-reload", handleCustomReload);
    return () => {
      window.removeEventListener("trigger-page-reload", handleCustomReload);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white relative">
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="global-page-loader" isLoading={isLoading} />}
      </AnimatePresence>
      <Navbar />
      <main className="flex-1 min-h-[80vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
