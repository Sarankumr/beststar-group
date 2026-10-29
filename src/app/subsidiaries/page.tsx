"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import { Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SubsidiariesPage() {
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
            <Layers size={14} />
            <span>{t("subsidiaries.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("subsidiaries.title")}
          </h1>
          <p className="section-subtitle">
            {t("subsidiaries.subtitle")}
          </p>
        </div>
      </section>

      {/* Full Grid with All Filter Tabs */}
      <SubsidiariesSection showFilters={true} />

      <Footer />
    </div>
  );
}
