import * as React from "react";
import { cn } from "@/src/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  containerClassName?: string;
  animate?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, containerClassName, children, animate = true, ...props },
    ref,
  ) => {
    const Component = animate ? motion.section : "section";

    const animationProps = animate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.7, ease: "easeOut" },
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        {...animationProps}
        {...props}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 relative z-10",
            containerClassName,
          )}
        >
          {children}
        </div>
      </Component>
    );
  },
);
Section.displayName = "Section";

export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-8 text-slate-400">{subtitle}</p>
      )}
    </div>
  );
};
