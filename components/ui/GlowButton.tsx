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
      background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
      boxShadow: "0 0 20px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)",
      color: "#0a0a0a",
    },
    secondary: {
      background: "linear-gradient(135deg, #00ff9f, #00f0ff)",
      boxShadow: "0 0 20px rgba(0,255,159,0.3), 0 0 40px rgba(0,255,159,0.1)",
      color: "#0a0a0a",
    },
    outline: {
      background: "transparent",
      boxShadow: "0 0 15px rgba(0,240,255,0.1)",
      color: "#00f0ff",
      border: "1px solid rgba(0,240,255,0.4)",
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
