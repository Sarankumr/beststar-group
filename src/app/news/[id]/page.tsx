import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NEWS_ITEMS } from "@/data/companyData";
import NewsDetailClient from "@/components/NewsDetailClient";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = NEWS_ITEMS.find((n) => n.id === id);

  if (!item) {
    return {
      title: "Press Release Not Found | Best Star Group FZE",
    };
  }

  return {
    title: `${item.title} | Best Star Group Press Release`,
    description: item.summary,
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { id } = await params;
  const item = NEWS_ITEMS.find((n) => n.id === id);

  if (!item) {
    notFound();
  }

  return <NewsDetailClient newsItem={item} />;
}
