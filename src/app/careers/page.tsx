"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";
import { Star, Award, BookOpen, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CareersPage() {
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
            <Star size={14} color="var(--gold-600)" />
            <span>{t("careers.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("careers.title")}
          </h1>
          <p className="section-subtitle">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      {/* Schemes & Benefits Detail */}
      <section style={{ backgroundColor: "var(--bg-deep)", padding: "60px 0" }}>
        <div className="site-container">
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title" style={{ fontSize: "1.85rem" }}>
              {t("careers.benefitsHeading")}
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              {t("careers.benefitsSub")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Award size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("careers.benefit1Title")}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {t("careers.benefit1Desc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <BookOpen size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("careers.benefit2Title")}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {t("careers.benefit2Desc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <HeartHandshake size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("careers.benefit3Title")}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {t("careers.benefit3Desc")}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Full Openings Grid with Application Modal */}
      <CareersSection />

      <Footer />
    </div>
  );
}
