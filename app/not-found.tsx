"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import CyberBackground from "@/components/animations/CyberBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <CyberBackground />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(0,240,255,0.07), transparent 70%)" }}
      />
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-[12rem] font-black font-poppins leading-none mb-4"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
            }}
          >
            404
          </div>
          <div
            className="text-8xl font-black font-poppins -mt-20 mb-6"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            This page has vanished into the digital ether. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #00f0ff, #8b5cf6)" }}
            >
              <Home size={18} /> Go Home
            </Link>
            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#00f0ff] hover:bg-[rgba(0,240,255,0.05)] transition-all"
              style={{ border: "1px solid rgba(0,240,255,0.3)" }}
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
