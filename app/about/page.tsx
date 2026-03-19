import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Udhayakumar V, CEO & Founder of Geetorus — a passionate cybersecurity researcher, ethical hacker, and startup founder from Erode, Tamil Nadu.",
};

import AboutPageClient from "./AboutPageClient";
export default function AboutPage() {
  return <AboutPageClient />;
}
