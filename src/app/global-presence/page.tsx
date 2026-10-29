"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function GlobalPresenceContent() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country") || "UAE";
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Hero Banner */}
      <section 
        style={{
          position: "relative",
          paddingTop: "65px",
          paddingBottom: "55px",
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          <div className="section-label">
            <Globe size={14} />
            <span>{t("global.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("global.title")}
          </h1>
          <p className="section-subtitle">
            {t("global.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Global Presence Component */}
      <GlobalPresenceSection initialCountry={countryParam} />

      <Footer />
    </div>
  );
}

export default function GlobalPresencePage() {
  return (
    <Suspense fallback={<div>Loading global hubs...</div>}>
      <GlobalPresenceContent />
    </Suspense>
  );
}
