"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CSRSection from "@/components/CSRSection";
import { Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CSRPage() {
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
            <Heart size={14} color="var(--crimson-mid)" />
            <span>{t("csr.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("csr.title")}
          </h1>
          <p className="section-subtitle">
            {t("csr.subtitle")}
          </p>
        </div>
      </section>

      {/* MAKE Trust In-Depth Story */}
      <section style={{ backgroundColor: "var(--bg-surface)", padding: "60px 0", borderBottom: "1px solid var(--border-gold-subtle)" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", alignItems: "center" }} className="csr-story-grid">
            <div>
              <span className="crimson-badge" style={{ marginBottom: "12px" }}>{t("csr.storyBadge")}</span>
              <h2 className="font-serif" style={{ fontSize: "2rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                {t("csr.storyTitle")}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "20px" }}>
                {t("csr.storyP1")}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "24px" }}>
                {t("csr.storyP2")}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>{t("csr.bullet1")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>{t("csr.bullet2")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>{t("csr.bullet3")}</span>
                </div>
              </div>
            </div>

            <div>
              <div 
                style={{
                  background: "var(--crimson-light)",
                  border: "2px solid var(--crimson-border)",
                  borderRadius: "12px",
                  padding: "36px",
                  boxShadow: "0 10px 30px rgba(138, 13, 35, 0.06)",
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.45rem", color: "var(--crimson-dark)", fontWeight: 800, marginBottom: "8px" }}>
                  {t("csr.healthCardTitle")}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "20px" }}>
                  {t("csr.healthCardDesc")}
                </p>
                <div style={{ borderTop: "1px solid var(--crimson-border)", paddingTop: "16px", color: "var(--crimson-dark)", fontWeight: 700, fontSize: "0.9rem" }}>
                  ✓ {t("csr.healthCardStat")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CSR Initiatives Component */}
      <CSRSection />

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .csr-story-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </div>
  );
}
