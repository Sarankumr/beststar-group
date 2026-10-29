"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorSection from "@/components/InvestorSection";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InvestorCentrePage() {
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
            <TrendingUp size={14} />
            <span>{t("investor.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("investor.title")}
          </h1>
          <p className="section-subtitle">
            {t("investor.subtitle")}
          </p>
        </div>
      </section>

      {/* Financial Governance Highlights */}
      <section style={{ backgroundColor: "var(--bg-deep)", padding: "60px 0" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                AED 1B+
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                {t("investor.valuationTitle")}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {t("investor.valuationDesc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                100%
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                {t("investor.autonomyTitle")}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {t("investor.autonomyDesc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                4 Hubs
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                {t("investor.resilienceTitle")}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {t("investor.resilienceDesc")}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Investor Pillars & Downloadable Factsheet */}
      <InvestorSection />

      <Footer />
    </div>
  );
}
