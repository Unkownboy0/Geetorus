import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Geetorus security tools: Secure Link Detection System, AI Threat Scanner, LearnHub, and Pentest Toolkit.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
