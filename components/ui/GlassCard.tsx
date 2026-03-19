"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "blue" | "green" | "purple";
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "blue",
}: GlassCardProps) {
  const glowMap = {
    blue: "rgba(0,240,255,0.15)",
    green: "rgba(0,255,159,0.15)",
    purple: "rgba(139,92,246,0.15)",
  };

  const borderMap = {
    blue: "rgba(0,240,255,0.25)",
    green: "rgba(0,255,159,0.25)",
    purple: "rgba(139,92,246,0.25)",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: `0 0 30px ${glowMap[glowColor]}, 0 0 60px ${glowMap[glowColor].replace("0.15", "0.07")}`,
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
