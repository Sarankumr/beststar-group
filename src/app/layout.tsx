import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beststargroup.com"),
  title: "Best Star Group FZE | A Diversified Global Conglomerate",
  description: "Official portal of Best Star Group FZE. Leading holding enterprise with operating verticals across Healthcare & Pharma, Facility Management, Logistics, Luxury Tourism, Automotive, and Power Infrastructure across UAE, Saudi Arabia, India, and Malaysia.",
  keywords: [
    "Best Star Group",
    "Best Star Group FZE",
    "Best Star Pharma",
    "Best Star Facility Management",
    "Best Star Cargo",
    "Best Star Tourism",
    "Ibunu Suwoothu Kamal",
    "UAE Conglomerate",
    "Ajmal Pharmacy",
    "KAFC Substation",
    "IGTS Technical Services",
    "Al Saqer Buses"
  ],
  authors: [{ name: "Best Star Group FZE" }],
  icons: {
    icon: "/images/logo-gold-dark.jpg",
    apple: "/images/logo-gold-dark.jpg",
  },
  openGraph: {
    title: "Best Star Group FZE | A Diversified Global Conglomerate",
    description: "Engineering Excellence. Transforming Horizons Across Healthcare, Infrastructure, Aviation & Global Logistics.",
    url: "https://www.beststargroup.com/",
    siteName: "Best Star Group FZE",
    images: [
      {
        url: "/images/logo-gold-dark.jpg",
        width: 1024,
        height: 1024,
        alt: "Best Star Group Luxury Gold Crest",
      },
      {
        url: "/images/logo-gold-ruby.jpg",
        width: 1024,
        height: 1024,
        alt: "Best Star Group Royal Velvet Crest",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

import FloatingChatWidget from "@/components/FloatingChatWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <FloatingChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
