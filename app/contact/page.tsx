import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Geetorus for cybersecurity consulting, ethical hacking, AI solutions, or training inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
