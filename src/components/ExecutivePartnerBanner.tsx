"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Lightbulb, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExecutivePartnerBanner() {
  const { t } = useLanguage();

  return (
    <section 
      style={{
        position: "relative",
        padding: "80px 0 90px",
        backgroundColor: "#0C121E",
        borderTop: "2px solid #C5A059",
        color: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      {/* Background Subtle Radiant Gold Halos */}
      <div 
        style={{
          position: "absolute",
          top: "-20%",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Top Label & Headline */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px auto" }}>
          <div 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              padding: "4px 14px", 
              backgroundColor: "rgba(197, 160, 89, 0.12)", 
              border: "1px solid #C5A059", 
              borderRadius: "100px", 
              fontSize: "0.74rem", 
              fontWeight: 700, 
              color: "#E8C887",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            <Sparkles size={13} color="#C5A059" />
            <span>{t("partnerBanner.badge")}</span>
          </div>

          <h2 
            style={{ 
              fontFamily: "Playfair Display, Georgia, serif", 
              fontSize: "clamp(2rem, 3.4vw, 2.9rem)", 
              fontWeight: 800, 
              color: "#FFFFFF", 
              lineHeight: 1.2, 
              margin: "0 0 16px 0" 
            }}
          >
            {t("partnerBanner.title")} <span style={{ color: "#E8C887" }}>{t("partnerBanner.companyName")}</span>
          </h2>

          <p style={{ color: "#CBD5E0", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
            {t("partnerBanner.subtitle")}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          {/* Card 1: Enterprise Tenders & RFPs */}
          <div 
            style={{
              backgroundColor: "#162032",
              border: "1.5px solid rgba(197, 160, 89, 0.35)",
              borderRadius: "12px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.25s ease, border-color 0.25s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <div>
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(197, 160, 89, 0.15)",
                  border: "1px solid #C5A059",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                <Building2 size={24} color="#E8C887" />
              </div>

              <span style={{ fontSize: "0.72rem", color: "#C5A059", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>
                {t("partnerBanner.card1Badge")}
              </span>

              <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.25rem", color: "#FFFFFF", margin: "6px 0 12px 0" }}>
                {t("partnerBanner.card1Title")}
              </h3>

              <p style={{ color: "#A0AEC0", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {t("partnerBanner.card1Desc")}
              </p>
            </div>

            <Link 
              href="/contact"
              style={{
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#E8C887",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1.5px solid #C5A059",
                paddingBottom: "4px",
                width: "fit-content"
              }}
            >
              <span>{t("partnerBanner.card1Cta")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: Venture Incubation Fund */}
          <div 
            style={{
              backgroundColor: "#162032",
              border: "1.5px solid #C5A059",
              borderRadius: "12px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.25s ease, border-color 0.25s ease",
              boxShadow: "0 12px 36px rgba(197, 160, 89, 0.15)",
              position: "relative"
            }}
          >
            <div 
              style={{
                position: "absolute",
                top: "-12px",
                right: "24px",
                backgroundColor: "#C5A059",
                color: "#0C121E",
                padding: "3px 12px",
                borderRadius: "100px",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "1px"
              }}
            >
              {t("partnerBanner.card2Pill")}
            </div>

            <div>
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(197, 160, 89, 0.2)",
                  border: "1px solid #C5A059",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                <Lightbulb size={24} color="#E8C887" />
              </div>

              <span style={{ fontSize: "0.72rem", color: "#C5A059", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>
                {t("partnerBanner.card2Badge")}
              </span>

              <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.25rem", color: "#FFFFFF", margin: "6px 0 12px 0" }}>
                {t("partnerBanner.card2Title")}
              </h3>

              <p style={{ color: "#A0AEC0", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {t("partnerBanner.card2Desc")}
              </p>
            </div>

            <Link 
              href="/business-ideas"
              style={{
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#C5A059",
                color: "#0C121E",
                padding: "10px 18px",
                borderRadius: "6px",
                fontSize: "0.82rem",
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: "0.05em",
                width: "fit-content"
              }}
            >
              <span>{t("partnerBanner.card2Cta")}</span>
              <ArrowRight size={14} color="#0C121E" />
            </Link>
          </div>

          {/* Card 3: Live Executive Concierge */}
          <div 
            style={{
              backgroundColor: "#162032",
              border: "1.5px solid rgba(197, 160, 89, 0.35)",
              borderRadius: "12px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.25s ease, border-color 0.25s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <div>
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(72, 187, 120, 0.15)",
                  border: "1px solid #48BB78",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                <MessageSquare size={24} color="#48BB78" />
              </div>

              <span style={{ fontSize: "0.72rem", color: "#48BB78", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#48BB78" }}></span>
                {t("partnerBanner.card3Badge")}
              </span>

              <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.25rem", color: "#FFFFFF", margin: "6px 0 12px 0" }}>
                {t("partnerBanner.card3Title")}
              </h3>

              <p style={{ color: "#A0AEC0", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {t("partnerBanner.card3Desc")}
              </p>
            </div>

            <Link 
              href="/chat"
              style={{
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#E8C887",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.06em",
                borderBottom: "1.5px solid #C5A059",
                paddingBottom: "4px",
                width: "fit-content"
              }}
            >
              <span>{t("partnerBanner.card3Cta")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        {/* Bottom Trust & Governance Strip */}
        <div 
          style={{
            borderTop: "1px solid rgba(197, 160, 89, 0.25)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.78rem",
            color: "#A0AEC0"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#E8C887" }}>
              <ShieldCheck size={15} color="#C5A059" /> {t("partnerBanner.trust1")}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#E8C887" }}>
              <Award size={15} color="#C5A059" /> {t("partnerBanner.trust2")}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#E8C887" }}>
              <CheckCircle2 size={15} color="#C5A059" /> {t("partnerBanner.trust3")}
            </span>
          </div>

          <div style={{ color: "#E2E8F0" }}>
            {t("partnerBanner.switchboard")} <strong style={{ color: "#E8C887" }}>+971 4 298 8800</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
