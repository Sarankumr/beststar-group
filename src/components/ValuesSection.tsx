"use client";

import React from "react";
import Link from "next/link";
import { Shield, Sparkles, HeartPulse, CheckCircle2, Award, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValuesSection() {
  const { t } = useLanguage();

  const valuesItems = [
    {
      icon: <Zap size={24} color="var(--gold-700)" />,
      title: t("values.item1Title"),
      desc: t("values.item1Desc"),
      standard: "Continuous Co-Investment"
    },
    {
      icon: <Award size={24} color="var(--gold-700)" />,
      title: t("values.item2Title"),
      desc: t("values.item2Desc"),
      standard: "ISO 9001:2015 & MOHAP"
    },
    {
      icon: <Shield size={24} color="var(--gold-700)" />,
      title: t("values.item3Title"),
      desc: t("values.item3Desc"),
      standard: "Zero Harm Mandate"
    },
    {
      icon: <HeartPulse size={24} color="var(--gold-700)" />,
      title: t("values.item4Title"),
      desc: t("values.item4Desc"),
      standard: "99.8% Client Retention"
    }
  ];

  return (
    <section 
      id="values" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="site-container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Sparkles size={14} color="var(--gold-600)" />
            <span>{t("values.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("values.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("values.subtitle")}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {valuesItems.map((val, idx) => (
            <div 
              key={idx} 
              className="luxe-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid var(--border-gold-medium)",
                backgroundColor: "#FAF9F6"
              }}
            >
              <div>
                <div 
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    background: "var(--gold-100)",
                    border: "1px solid var(--gold-400)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  {val.icon}
                </div>

                <h3 
                  className="font-serif" 
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                  }}
                >
                  {val.title}
                </h3>

                <p 
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {val.desc}
                </p>
              </div>

              {/* Benchmark Standard */}
              <div 
                style={{
                  borderTop: "1px solid var(--border-gold-subtle)",
                  paddingTop: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {t("values.benchmark")}
                </span>
                <span 
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    color: "var(--gold-800)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <CheckCircle2 size={13} color="var(--gold-600)" />
                  {val.standard}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety, Health & Environment (HSE) Highlight Banner */}
        <div 
          style={{
            marginTop: "38px",
            background: "linear-gradient(135deg, #070A10 0%, #151B28 100%)",
            border: "1.5px solid rgba(212, 163, 40, 0.4)",
            borderRadius: "10px",
            padding: "30px 36px",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Shield size={18} color="var(--gold-400)" />
              <span className="font-serif" style={{ color: "var(--gold-400)", fontWeight: 700, letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                {t("values.hseTitle")}
              </span>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
              {t("values.hseDesc")}
            </p>
          </div>

          <Link
            href="/about-us#hse"
            style={{
              background: "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)",
              color: "#080C14",
              padding: "11px 24px",
              borderRadius: "4px",
              fontSize: "0.82rem",
              fontWeight: 800,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.08em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap"
            }}
          >
            <span>{t("common.learnMore")}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
