import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/lib/constants";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return services.map((service) => ({ serviceId: service.id }));
}

type Props = {
  params: {
    serviceId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.serviceId);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.serviceId);
  if (!service) return notFound();

  return <ServicePageClient service={service} />;
}
