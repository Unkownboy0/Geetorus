"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "blue" | "green" | "purple" | "red" | "yellow";
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "blue",
}: GlassCardProps) {
  const glowMap = {
    blue: "rgba(107,114,128,0.05)",
    green: "rgba(16,185,129,0.05)",
    purple: "rgba(99,102,241,0.05)",
    red: "rgba(239,68,68,0.05)",
    yellow: "rgba(180,83,9,0.05)",
  };

  const borderMap = {
    blue: "rgba(107,114,128,0.15)",
    green: "rgba(16,185,129,0.15)",
    purple: "rgba(99,102,241,0.15)",
    red: "rgba(239,68,68,0.15)",
    yellow: "rgba(180,83,9,0.15)",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              scale: 1.02,
              borderColor: borderMap[glowColor],
            }
          : {}
      }
      transition={{ duration: 0.25 }}
      className={cn("relative rounded-2xl overflow-hidden", className)}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {children}
    </motion.div>
  );
}
