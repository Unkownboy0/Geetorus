"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function GlowButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: GlowButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = {
    primary: {
      background: "linear-gradient(135deg, #6b7280, #6366f1)",
      boxShadow: "none",
      color: "#0a0a0a",
    },
    secondary: {
      background: "linear-gradient(135deg, #10b981, #6b7280)",
      boxShadow: "none",
      color: "#0a0a0a",
    },
    outline: {
      background: "transparent",
      boxShadow: "none",
      color: "#6b7280",
      border: "1px solid rgba(107,114,128,0.3)",
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={cn(
        "relative rounded-xl font-semibold transition-all duration-300 cursor-pointer",
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={styles[variant] as React.CSSProperties}
    >
      {/* Shimmer overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        whileHover={{ opacity: 1 }}
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
