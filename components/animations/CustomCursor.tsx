"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
      );
    };

    const handleLeave = () => setIsHidden(true);
    const handleEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.2 }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "radial-gradient(circle, #6b7280, #6366f1)",
            boxShadow: "none",
          }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.8 : 1,
          opacity: isHidden ? 0 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            border: "1px solid rgba(107, 114, 128, 0.3)",
            boxShadow: "0 0 10px rgba(0,240,255,0.2)",
          }}
        />
      </motion.div>
    </>
  );
}
