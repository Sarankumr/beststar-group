"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, FileSpreadsheet, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InvestorSection() {
  const { t } = useLanguage();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section 
      id="investor" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "var(--bg-deep)",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
      }}
    >
      <div className="site-container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <TrendingUp size={14} color="var(--gold-600)" />
            <span>{t("investor.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("investor.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("investor.subtitle")}
          </p>
        </div>

        {/* 3 Investor Pillar Cards */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "26px",
            marginBottom: "44px",
          }}
        >
          <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
            <div className="gold-badge" style={{ marginBottom: "14px" }}>
              {t("investorExtra.pillar1Badge")}
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "10px" }}>
              {t("investorExtra.pillar1Title")}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
              {t("investorExtra.pillar1Desc")}
            </p>
            <div style={{ borderTop: "1px solid var(--border-gold-subtle)", paddingTop: "14px", marginTop: "16px", color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700 }}>
              {t("investorExtra.pillar1Check")}
            </div>
          </div>

          <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
            <div className="gold-badge" style={{ marginBottom: "14px" }}>
              {t("investorExtra.pillar2Badge")}
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "10px" }}>
              {t("investorExtra.pillar2Title")}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
              {t("investorExtra.pillar2Desc")}
            </p>
            <div style={{ borderTop: "1px solid var(--border-gold-subtle)", paddingTop: "14px", marginTop: "16px", color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700 }}>
              {t("investorExtra.pillar2Check")}
            </div>
          </div>

          <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
            <div className="gold-badge" style={{ marginBottom: "14px" }}>
              {t("investorExtra.pillar3Badge")}
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "10px" }}>
              {t("investorExtra.pillar3Title")}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
              {t("investorExtra.pillar3Desc")}
            </p>
            <div style={{ borderTop: "1px solid var(--border-gold-subtle)", paddingTop: "14px", marginTop: "16px", color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700 }}>
              {t("investorExtra.pillar3Check")}
            </div>
          </div>
        </div>

        {/* Factsheet Download Strip */}
        <div 
          style={{
            background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%)",
            border: "2px solid var(--border-gold-medium)",
            borderRadius: "12px",
            padding: "36px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            boxShadow: "0 10px 30px rgba(184, 134, 11, 0.08)"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-700)", fontFamily: "var(--font-serif)", fontSize: "0.85rem", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "6px" }}>
              <FileSpreadsheet size={16} />
              <span>{t("investorExtra.factsheetStripLabel")}</span>
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "8px" }}>
              {t("investor.factsheetTitle")}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", maxWidth: "680px", margin: 0 }}>
              {t("investor.factsheetDesc")}
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={handleDownload}
              className="btn-luxury-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Download size={15} color="var(--gold-700)" />
              <span>{downloadSuccess ? t("investor.downloaded") : t("investor.downloadFactsheet")}</span>
            </button>

            <Link
              href="/contact"
              className="btn-luxury-gold"
            >
              <span>{t("investor.partnerWithUs")}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
