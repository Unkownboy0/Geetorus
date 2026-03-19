import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest cybersecurity insights, AI security tools, and ethical hacking tutorials from the Geetorus team.",
};

export default function BlogPage() {
  return <BlogClient />;
}
