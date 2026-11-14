import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(() => {
    try {
      return localStorage.getItem("arventa_whatsapp_tooltip_closed") !== "true";
    } catch {
      return true;
    }
  });

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    try {
      localStorage.setItem("arventa_whatsapp_tooltip_closed", "true");
    } catch {
      // ignore storage errors
    }
  };

  // WhatsApp number & custom encoded default message
  const phoneNumber = "917872490719";
  const defaultMessage = "Hi Arventa Ventures! I am interested in your digital marketing services. Please contact me.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Optional Notification Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 mr-1 bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 text-white rounded-2xl p-3.5 shadow-2xl max-w-[260px] relative text-xs md:text-sm flex items-start gap-2.5"
          >
            <button
              onClick={handleCloseTooltip}
              className="absolute -top-2 -left-2 bg-slate-800 text-slate-400 hover:text-white rounded-full p-1 border border-slate-700 shadow transition-colors"
              title="Close"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-emerald-400 mb-0.5">Need Digital Marketing Services?</p>
              <p className="text-slate-300 leading-tight">Chat with us directly on WhatsApp for quick inquiries!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse Effect Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 md:w-8 md:h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>

        {/* Hover label tooltip */}
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-800">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
