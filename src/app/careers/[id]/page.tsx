import React from "react";
import { notFound } from "next/navigation";
import { CAREER_OPENINGS } from "@/data/companyData";
import JobDetailClient from "@/components/JobDetailClient";
import type { Metadata } from "next";

interface CareerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return CAREER_OPENINGS.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = CAREER_OPENINGS.find((j) => j.id === id);

  if (!job) {
    return {
      title: "Job Opening | Best Star Group FZE",
    };
  }

  return {
    title: `${job.title} | Careers at Best Star Group FZE`,
    description: job.overview || job.description,
  };
}

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { id } = await params;
  const job = CAREER_OPENINGS.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
