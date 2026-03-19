import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
  description: "Read this cybersecurity article on the Geetorus blog.",
};

import BlogPostClient from "./BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
