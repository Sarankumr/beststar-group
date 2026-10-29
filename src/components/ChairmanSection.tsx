"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, X, Award, CheckCircle2, ChevronRight, UserCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChairmanSection() {
  const { t, isRtl } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section 
      id="chairman" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "#FDFBF7",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
        overflow: "hidden",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        
        <div className="section-label">
          <Award size={14} color="var(--gold-600)" />
          <span>{t("chairman.badge")}</span>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="chairman-grid"
        >
          {/* Left Column: Portrait & Hallmark Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div 
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                background: "#FFFFFF",
                border: "1.5px solid var(--border-gold-medium)",
                borderRadius: "14px",
                padding: "24px",
                boxShadow: "0 15px 35px rgba(184, 134, 11, 0.08)",
              }}
            >
              {/* Crest Frame */}
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  height: "360px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "2px solid var(--gold-500)",
                  backgroundColor: "#070A10",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Alexander Wright — Chairman & Group CEO"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                
                {/* Gold Frame Trim */}
                <div 
                  style={{
                    position: "absolute",
                    inset: "10px",
                    border: "1px solid rgba(212, 163, 40, 0.5)",
                    pointerEvents: "none",
                  }}
                />

                <div 
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: isRtl ? "auto" : "12px",
                    right: isRtl ? "12px" : "auto",
                    background: "rgba(12, 18, 30, 0.9)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid #C5A059",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.3)"
                  }}
                >
                  <UserCheck size={14} color="#E8C887" />
                  <span className="font-serif" style={{ fontSize: "0.74rem", letterSpacing: "0.1em", color: "#E8C887", fontWeight: 700 }}>
                    OFFICE OF THE CHAIRMAN & GROUP CEO
                  </span>
                </div>
              </div>

              {/* Chairman Details */}
              <div style={{ borderTop: "1px solid var(--border-gold-subtle)", paddingTop: "14px" }}>
                <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "3px" }}>
                  {t("chairman.author")}
                </h3>
                <div style={{ color: "var(--gold-700)", fontSize: "0.86rem", fontFamily: "var(--font-serif)", fontWeight: 700, letterSpacing: "0.06em" }}>
                  {t("chairman.designation")}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "4px" }}>
                  {t("chairman.roleSubtitle")}
                </div>
              </div>

              {/* Corner Core Pillars */}
              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "8px",
                  marginTop: "16px",
                  paddingTop: "14px",
                  borderTop: "1px dashed var(--border-gold-medium)",
                  textAlign: "center"
                }}
              >
                <div style={{ background: "var(--gold-50)", padding: "8px 4px", borderRadius: "4px", border: "1px solid var(--border-gold-subtle)" }}>
                  <div className="font-serif" style={{ fontSize: "0.74rem", color: "var(--gold-800)", fontWeight: 800 }}>
                    {t("chairman.pillarsSafety")}
                  </div>
                  <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>
                    {t("chairman.safetySub")}
                  </div>
                </div>
                <div style={{ background: "var(--gold-50)", padding: "8px 4px", borderRadius: "4px", border: "1px solid var(--border-gold-subtle)" }}>
                  <div className="font-serif" style={{ fontSize: "0.74rem", color: "var(--gold-800)", fontWeight: 800 }}>
                    {t("chairman.pillarsService")}
                  </div>
                  <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>
                    {t("chairman.serviceSub")}
                  </div>
                </div>
                <div style={{ background: "var(--gold-50)", padding: "8px 4px", borderRadius: "4px", border: "1px solid var(--border-gold-subtle)" }}>
                  <div className="font-serif" style={{ fontSize: "0.74rem", color: "var(--gold-800)", fontWeight: 800 }}>
                    {t("chairman.pillarsQuality")}
                  </div>
                  <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>
                    {t("chairman.qualitySub")}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Address & Philosophy */}
          <div>
            <h2 className="section-title">
              {t("chairman.title")}
            </h2>

            {/* Featured Quote Callout */}
            <div 
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderLeft: isRtl ? "1px solid var(--border-gold-subtle)" : "4px solid var(--gold-600)",
                borderRight: isRtl ? "4px solid var(--gold-600)" : "1px solid var(--border-gold-subtle)",
                borderTop: "1px solid var(--border-gold-subtle)",
                borderBottom: "1px solid var(--border-gold-subtle)",
                padding: "24px 28px",
                borderRadius: "8px",
                marginBottom: "24px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
              }}
            >
              <Quote 
                size={34} 
                color="var(--gold-500)" 
                style={{ opacity: 0.25, position: "absolute", top: "12px", right: "16px" }} 
              />
              <p 
                className="font-editorial" 
                style={{
                  fontSize: "1.18rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                &ldquo;{t("chairman.quote")}&rdquo;
              </p>
            </div>

            {/* Narrative Excerpts */}
            <p style={{ color: "var(--text-primary)", fontSize: "1.02rem", lineHeight: 1.8, marginBottom: "16px" }}>
              {t("chairman.leadParagraph")}
            </p>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "26px" }}>
              {t("chairman.paragraph1")}
            </p>

            {/* Value Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.92rem" }}>
                <CheckCircle2 size={16} color="var(--gold-600)" />
                <span><strong>Open Innovation Strategy:</strong> {t("values.item1Desc")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.92rem" }}>
                <CheckCircle2 size={16} color="var(--gold-600)" />
                <span><strong>Global Horizons:</strong> {t("global.subtitle")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.92rem" }}>
                <CheckCircle2 size={16} color="var(--gold-600)" />
                <span><strong>Quality Benchmarks:</strong> {t("values.item2Desc")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-luxury-gold"
              >
                <span>{t("chairman.readFull")}</span>
                <ChevronRight size={16} />
              </button>

              <Link href="/about-us" className="btn-luxury-outline">
                <span>{t("common.aboutUs")}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Full Chairman Address Modal */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()} style={{ padding: "40px" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
              <div>
                <span className="gold-badge" style={{ marginBottom: "8px" }}>EXECUTIVE DISCLOSURE</span>
                <h3 className="font-serif" style={{ fontSize: "1.75rem", color: "var(--text-primary)", margin: 0 }}>
                  {t("chairman.title")}
                </h3>
                <div style={{ color: "var(--gold-700)", fontFamily: "var(--font-serif)", fontSize: "0.95rem", marginTop: "4px", fontWeight: 700 }}>
                  {t("chairman.author")} — {t("chairman.designation")}
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  background: "#F1EFEA",
                  border: "none",
                  borderRadius: "50%",
                  color: "var(--text-secondary)",
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.96rem", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "1.05rem" }}>
                {t("chairman.leadParagraph")}
              </p>
              <p>{t("chairman.paragraph1")}</p>
              <p>{t("chairman.paragraph2")}</p>
              <p>{t("chairman.paragraph3")}</p>
              <p>{t("chairman.paragraph4")}</p>
              <p>{t("chairman.paragraph5")}</p>
              <p>{t("chairman.paragraph6")}</p>
              <p style={{ fontStyle: "italic", color: "var(--gold-800)", fontWeight: 700 }}>
                &ldquo;{t("chairman.quote")}&rdquo;
              </p>
              <p>{t("chairman.paragraph8")}</p>
            </div>

            <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--border-gold-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                Official Communication • Best Star Group FZE Executive Board
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="btn-luxury-gold"
                style={{ padding: "9px 22px", fontSize: "0.8rem" }}
              >
                {t("common.close")}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
