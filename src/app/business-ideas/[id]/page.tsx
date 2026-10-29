import React from "react";
import { notFound } from "next/navigation";
import { BUSINESS_IDEAS } from "@/data/companyData";
import BusinessIdeaDetailClient from "@/components/BusinessIdeaDetailClient";

export async function generateStaticParams() {
  return BUSINESS_IDEAS.map((idea) => ({
    id: idea.id,
  }));
}

export default async function BusinessIdeaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idea = BUSINESS_IDEAS.find((item) => item.id === id);

  if (!idea) {
    notFound();
  }

  return <BusinessIdeaDetailClient idea={idea} />;
}
