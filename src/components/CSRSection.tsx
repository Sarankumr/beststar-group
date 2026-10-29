"use client";

import React from "react";
import Link from "next/link";
import { Heart, GraduationCap, Stethoscope, Leaf, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CSRSection() {
  const { t } = useLanguage();

  const csrItems = [
    {
      icon: <GraduationCap size={26} color="var(--crimson-mid)" />,
      badge: "Education & Skills",
      title: t("csr.item1Title"),
      desc: t("csr.item1Desc"),
      stat: t("csr.item1Stat")
    },
    {
      icon: <Stethoscope size={26} color="var(--crimson-mid)" />,
      badge: "Healthcare Outreach",
      title: t("csr.item2Title"),
      desc: t("csr.item2Desc"),
      stat: t("csr.item2Stat")
    },
    {
      icon: <Leaf size={26} color="var(--crimson-mid)" />,
      badge: "Eco Responsibility",
      title: t("csr.item3Title"),
      desc: t("csr.item3Desc"),
      stat: t("csr.item3Stat")
    }
  ];

  return (
    <section 
      id="csr" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "#FAF8F5",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
      }}
    >
      <div className="site-container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Heart size={14} color="var(--crimson-mid)" />
            <span>{t("csr.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("csr.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("csr.subtitle")}
          </p>
        </div>

        {/* 3 CSR Cards */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "26px",
          }}
        >
          {csrItems.map((csr, idx) => (
            <div 
              key={idx}
              className="luxe-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid var(--border-gold-medium)",
              }}
            >
              <div>
                <div 
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    background: "var(--crimson-light)",
                    border: "1px solid var(--crimson-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  {csr.icon}
                </div>

                <span className="crimson-badge" style={{ marginBottom: "12px" }}>
                  {csr.badge}
                </span>

                <h3 className="font-serif" style={{ fontSize: "1.28rem", color: "var(--text-primary)", marginBottom: "10px" }}>
                  {csr.title}
                </h3>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "18px" }}>
                  {csr.desc}
                </p>
              </div>

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
                  {t("csr.tangibleMilestone")}
                </span>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--crimson-mid)" }}>
                  {csr.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Foundation CTA */}
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <Link
            href="/csr"
            className="btn-luxury-outline"
            style={{ padding: "13px 32px" }}
          >
            <span>{t("csr.exploreBtn")}</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
