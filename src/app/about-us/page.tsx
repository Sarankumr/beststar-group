"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Award, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  Target,
  ArrowRight
} from "lucide-react";
import { CHAIRMAN_MESSAGE, COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Page Hero Banner */}
      <section 
        style={{
          position: "relative",
          paddingTop: "70px",
          paddingBottom: "70px",
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border-gold-subtle)",
          overflow: "hidden",
        }}
      >
        <div className="site-container">
          <div className="section-label">
            <Compass size={14} />
            <span>{t("aboutUs.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("aboutUs.title")}
          </h1>
          <p className="section-subtitle">
            {t("aboutUs.subtitle")}
          </p>
        </div>
      </section>

      {/* Section 1: Executive Chairman's Desk */}
      <section id="chairman" className="section-spacing">
        <div className="site-container">
          
          <div className="section-label">
            <Award size={14} />
            <span>{t("aboutUs.leadershipBadge")}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", alignItems: "center" }} className="about-grid">
            
            {/* Left Image & Hallmarks */}
            <div>
              <div 
                style={{
                  background: "var(--bg-card)",
                  border: "2px solid var(--border-gold-medium)",
                  borderRadius: "14px",
                  padding: "20px",
                  boxShadow: "0 15px 35px rgba(184, 134, 11, 0.08)",
                }}
              >
                <div 
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--border-gold-medium)",
                    marginBottom: "18px",
                    backgroundColor: "#000",
                  }}
                >
                  <Image
                    src="/images/logo-gold-ruby.jpg"
                    alt="Chairman Executive Office Crest"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ textAlign: "center", borderTop: "1px solid var(--border-gold-subtle)", paddingTop: "14px" }}>
                  <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--text-primary)", margin: 0 }}>
                    {t("chairman.author")}
                  </h3>
                  <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.88rem", marginTop: "2px" }}>
                    {t("chairman.designation")}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>
                    {t("chairman.roleSubtitle")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Letter Body */}
            <div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                {t("chairman.title")}
              </h2>

              <div 
                style={{
                  borderLeft: "4px solid var(--gold-600)",
                  background: "var(--bg-card)",
                  padding: "20px 24px",
                  borderRadius: "0 8px 8px 0",
                  border: "1px solid var(--border-gold-subtle)",
                  borderLeftWidth: "4px",
                  marginBottom: "24px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                <p className="font-editorial" style={{ fontStyle: "italic", fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                  &ldquo;{t("chairman.quote")}&rdquo;
                </p>
              </div>

              <div style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "16px" }}>
                <p><strong>{t("chairman.leadParagraph")}</strong></p>
                <p>{t("chairman.paragraph1")}</p>
                <p>{t("chairman.paragraph2")}</p>
                <p>{t("chairman.paragraph3")}</p>
                <p>{t("chairman.paragraph4")}</p>
                <p>{t("chairman.paragraph5")}</p>
                <p>{t("chairman.paragraph6")}</p>
                <p>{t("chairman.paragraph7")}</p>
                <p>{t("chairman.paragraph8")}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section id="vision" className="section-spacing" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border-gold-subtle)" }}>
        <div className="site-container">
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <Target size={14} />
              <span>{t("aboutUs.guidingLightBadge")}</span>
            </div>
            <h2 className="section-title">
              {t("aboutUs.visionMissionTitle")}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            
            {/* Vision Card */}
            <div className="luxe-card" style={{ border: "2px solid var(--border-gold-medium)", background: "var(--bg-card)" }}>
              <span className="gold-badge" style={{ marginBottom: "14px" }}>{t("aboutUs.visionTitle")}</span>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "14px" }}>
                {t("aboutUs.visionTitle")}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.8 }}>
                {t("aboutUs.visionText")}
              </p>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)", color: "var(--gold-800)", fontWeight: 700, fontSize: "0.92rem" }}>
                {t("aboutUs.obj1")}
              </div>
            </div>

            {/* Mission Card */}
            <div className="luxe-card" style={{ border: "2px solid var(--border-gold-medium)", background: "var(--bg-card)" }}>
              <span className="gold-badge" style={{ marginBottom: "14px" }}>{t("aboutUs.missionTitle")}</span>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "14px" }}>
                {t("aboutUs.missionTitle")}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.8 }}>
                {t("aboutUs.missionText")}
              </p>
              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)", color: "var(--gold-800)", fontWeight: 700, fontSize: "0.92rem" }}>
                {t("aboutUs.obj2")}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Safety, Health & Environment (HSE) Policy */}
      <section id="hse" className="section-spacing" style={{ backgroundColor: "var(--bg-deep)", borderTop: "1px solid var(--border-gold-subtle)" }}>
        <div className="site-container">
          
          <div className="section-label">
            <ShieldCheck size={14} />
            <span>{t("aboutUs.hseBadge")}</span>
          </div>
          <h2 className="section-title">
            {t("aboutUs.hseTitle")}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "32px" }}>
            {t("aboutUs.hseDesc")}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px" }}>
            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("values.item3Title")}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {t("values.item3Desc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("values.item2Title")}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {t("values.item2Desc")}
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)" }}>
              <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                {t("values.item1Title")}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {t("values.item1Desc")}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Executive Board Oversight & Governance Architecture */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border-gold-subtle)" }}>
        <div className="site-container">
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <Award size={14} color="var(--gold-600)" />
              <span>CORPORATE GOVERNANCE & FIDUCIARY CHARTER</span>
            </div>
            <h2 className="section-title">
              Executive Board & <span className="text-gold-gradient">Leadership Oversight</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Our executive directorates maintain rigorous fiduciary discipline, sovereign compliance, and operational autonomy across all operating companies.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "28px" }}>
              <div style={{ color: "var(--gold-700)", fontSize: "0.74rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                CHAIRMAN&apos;S EXECUTIVE COMMITTEE
              </div>
              <h4 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Ibunu Suwoothu Kamal
              </h4>
              <div style={{ color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700, marginBottom: "12px" }}>
                Founder & Executive Chairman
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Directs multi-sector capital allocation, sovereign banking relationships, global joint ventures, and macroeconomic holding expansion.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "28px" }}>
              <div style={{ color: "var(--gold-700)", fontSize: "0.74rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                ENGINEERING & POWER DIRECTORATE
              </div>
              <h4 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Chief Technical Operations Board
              </h4>
              <div style={{ color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700, marginBottom: "12px" }}>
                MEP, HVAC & Extra-High Voltage Power
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Supervises large-scale MEP contracts, Saudi Electricity Company 380kV substation packages, and ASNT NDT inspection teams.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "28px" }}>
              <div style={{ color: "var(--gold-700)", fontSize: "0.74rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                HEALTHCARE & LIFE SCIENCES BOARD
              </div>
              <h4 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Clinical & Regulatory Council
              </h4>
              <div style={{ color: "var(--gold-800)", fontSize: "0.82rem", fontWeight: 700, marginBottom: "12px" }}>
                MOHAP Compliance & Diagnostic Joint Ventures
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Oversees Best Star Pharma Trading formulary approvals, Ajmal Pharmacy retail expansions, and Win Path Lab cross-border diagnostics.
              </p>
            </div>

          </div>

          <div 
            style={{
              marginTop: "40px",
              padding: "28px",
              background: "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)",
              color: "#FFFFFF",
              borderRadius: "10px",
              border: "1.5px solid rgba(212, 163, 40, 0.4)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            <div>
              <div style={{ color: "var(--gold-400)", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
                COMMERCIAL TRANSPARENCY & DATA SOVEREIGNTY
              </div>
              <div className="font-serif" style={{ fontSize: "1.25rem", color: "#FFFFFF", fontWeight: 700 }}>
                Strict Conformity with UAE Federal Law & ISO Audit Protocols
              </div>
            </div>

            <Link href="/subsidiaries" className="btn-luxury-gold" style={{ padding: "11px 24px", borderRadius: "30px", whiteSpace: "nowrap" }}>
              <span>EXPLORE ALL 10 SUBSIDIARIES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
