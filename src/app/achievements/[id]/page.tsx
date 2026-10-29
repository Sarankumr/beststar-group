import React from "react";
import { notFound } from "next/navigation";
import { ACHIEVEMENTS } from "@/data/companyData";
import AchievementDetailClient from "@/components/AchievementDetailClient";

export async function generateStaticParams() {
  return ACHIEVEMENTS.map((item) => ({
    id: item.id,
  }));
}

export default async function AchievementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const achievement = ACHIEVEMENTS.find((item) => item.id === id);

  if (!achievement) {
    notFound();
  }

  return <AchievementDetailClient achievement={achievement} />;
}
