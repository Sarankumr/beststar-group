import React from "react";
import { notFound } from "next/navigation";
import { SUBSIDIARIES } from "@/data/companyData";
import SubsidiaryDetailClient from "@/components/SubsidiaryDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SUBSIDIARIES.map((sub) => ({
    id: sub.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const subsidiary = SUBSIDIARIES.find((s) => s.id === resolvedParams.id);
  if (!subsidiary) return {};

  return {
    title: `${subsidiary.name} | Best Star Group FZE`,
    description: subsidiary.description,
  };
}

export default async function SubsidiaryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const subsidiary = SUBSIDIARIES.find((s) => s.id === resolvedParams.id);

  if (!subsidiary) {
    notFound();
  }

  return <SubsidiaryDetailClient subsidiary={subsidiary} />;
}
