import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/lib/constants";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return services.map((service) => ({ serviceId: service.id }));
}

interface Props {
  params: Promise<{ serviceId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);
  if (!service) return notFound();

  return <ServicePageClient service={service} />;
}
