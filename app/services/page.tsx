import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Geetorus offers cybersecurity consulting, ethical hacking, web security testing, AI solutions, training & workshops, and SOC-as-a-service.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
