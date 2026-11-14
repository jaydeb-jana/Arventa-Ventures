import React from "react";
import { motion } from "framer-motion";

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md pointer-events-auto"
    >
      {/* Top Animated Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 overflow-hidden z-[10000]">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-gradient-to-r from-primary via-orange-400 to-amber-300"
        />
      </div>

      {/* Centered Brand Loading Spinner */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Glowing aura ring */}
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-20 h-20 rounded-2xl border-2 border-transparent border-t-primary border-r-primary/50"
          />
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src="https://i.ibb.co/0pgK7VwT/FB-IMG-1786329349374.jpg"
              alt="Arventa Ventures"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-xl object-contain"
            />
          </motion.div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <span className="text-lg font-bold tracking-tight text-white block">
            Arventa Ventures
          </span>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <span className="text-xs text-slate-400 font-medium">Loading page</span>
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="inline-block w-1.5 h-1.5 rounded-full bg-primary"
            />
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="inline-block w-1.5 h-1.5 rounded-full bg-primary"
            />
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }}
              className="inline-block w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
