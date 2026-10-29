"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  Building2, 
  Layers,
  ChevronRight,
  TrendingUp,
  Award,
  Globe2,
  ExternalLink,
  Zap,
  Activity,
  Truck,
  Briefcase
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface VerticalSlide {
  id: string;
  name: string;
  sector: string;
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  link: string;
}

const HERO_VERTICALS: VerticalSlide[] = [
  {
    id: "power",
    name: "Best Star Power & Infrastructure",
    sector: "Extra High Voltage EPC",
    image: "/images/achievement-substation-record.jpg",
    metric: "380kV",
    metricLabel: "Substation Packages Delivered",
    description: "Engineering national-scale electrical grids, high-voltage transformers, and turnkey substation networks across Saudi Arabia and the UAE.",
    link: "/subsidiaries/power-infrastructure"
  },
  {
    id: "pharma",
    name: "Best Star Pharma & Life Sciences",
    sector: "Healthcare & Diagnostics",
    image: "/images/pharma-healthcare.jpg",
    metric: "100% GDP",
    metricLabel: "MOHAP Validated Cold Chain",
    description: "Sovereign-grade pharmaceutical importation, automated clinical diagnostics, and critical temperature-controlled pharmaceutical supply lines.",
    link: "/subsidiaries/pharma-healthcare"
  },
  {
    id: "facility",
    name: "Best Star Integrated Facilities",
    sector: "Smart Infrastructure & MEP",
    image: "/images/engineering-facility.jpg",
    metric: "4.8M+ Sq.Ft",
    metricLabel: "Managed Commercial Real Estate",
    description: "Enterprise asset reliability, HVAC SCADA monitoring, energy-efficiency retrofits, and comprehensive facility management for mega-developments.",
    link: "/subsidiaries/facility-management"
  },
  {
    id: "logistics",
    name: "Best Star Cargo & Marine Fleet",
    sector: "Logistics & Multimodal Transit",
    image: "/images/achievement-logistics-fleet.jpg",
    metric: "120+ Units",
    metricLabel: "Heavy Commercial Transport Fleet",
    description: "Seamless overland freight, maritime transit clearance, and express logistics connecting GCC economic corridors to Asia-Pacific trade hubs.",
    link: "/subsidiaries/cargo-logistics"
  },
  {
    id: "holding",
    name: "Best Star Sovereign Holding",
    sector: "Global Executive Headquarters",
    image: "/images/dubai-skyline.jpg",
    metric: "AED 1.85B+",
    metricLabel: "Consolidated Holding Asset Base",
    description: "Anchored at DIFC Dubai with direct sovereign oversight across 10 market-leading industrial subsidiaries spanning 4 global jurisdictions.",
    link: "/about-us"
  }
];

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-switch slide every 5 seconds unless user manually interacts
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % HERO_VERTICALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const currentRaw = HERO_VERTICALS[activeTab];
  const currentKey = currentRaw.id;
  const current = {
    ...currentRaw,
    name: t(`heroExtra.verticals.${currentKey}.name`) || currentRaw.name,
    sector: t(`heroExtra.verticals.${currentKey}.sector`) || currentRaw.sector,
    metric: t(`heroExtra.verticals.${currentKey}.metric`) || currentRaw.metric,
    metricLabel: t(`heroExtra.verticals.${currentKey}.metricLabel`) || currentRaw.metricLabel,
    description: t(`heroExtra.verticals.${currentKey}.description`) || currentRaw.description,
  };

  return (
    <section 
      id="home" 
      style={{
        position: "relative",
        paddingTop: "48px",
        paddingBottom: "64px",
        overflow: "hidden",
        backgroundColor: "var(--bg-deep)",
        borderBottom: "1.5px solid var(--border-gold-subtle)",
      }}
    >
      {/* Background Subtle Luxury Light Accents */}
      <div 
        style={{
          position: "absolute",
          top: "-5%",
          right: "10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 163, 40, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "0%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Top Sovereign Hallmark Strip */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            paddingBottom: "20px",
            marginBottom: "32px",
            borderBottom: "1px solid var(--border-gold-subtle)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0C121E", color: "#C5A059", border: "1px solid #C5A059", padding: "4px 12px", borderRadius: "100px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              <Sparkles size={12} color="#C5A059" /> {t("heroExtra.sovereignHoldingFze")}
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              {t("heroExtra.hubsList")}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.74rem", color: "var(--text-muted)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <ShieldCheck size={14} color="#C5A059" /> {t("heroExtra.fiduciaryBenchmark")}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Award size={14} color="#C5A059" /> {t("heroExtra.tenOperatingVerticals")}
            </span>
          </div>
        </div>

        {/* Hero Main Grid: Left Narrative & KPIs | Right Dynamic Vertical Showcase */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          
          {/* Left Column: Bold Sovereign Statement & Quantitative Milestones */}
          <div>
            <div className="section-label" style={{ marginBottom: "16px" }}>
              <Building2 size={13} color="var(--gold-600)" />
              <span>{t("heroExtra.conglomerateLabel")}</span>
            </div>

            <h1 
              className="font-serif" 
              style={{
                fontSize: "clamp(2.4rem, 4.3vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.14,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              {t("heroExtra.headlinePart1")} <span className="text-gold-gradient">{t("heroExtra.headlineHighlight")}</span><br />
              <span className="font-editorial" style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold-800)" }}>
                {t("heroExtra.headlinePart2")}
              </span>
            </h1>

            <p 
              style={{
                fontSize: "clamp(0.98rem, 1.2vw, 1.1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "600px",
              }}
            >
              {t("heroExtra.description")}
            </p>

            {/* Strategic Action CTAs */}
            <div 
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
                marginBottom: "36px",
              }}
            >
              <Link 
                href="/subsidiaries" 
                className="btn-luxury-gold"
                style={{
                  padding: "12px 26px",
                  fontSize: "0.84rem",
                  letterSpacing: "0.08em",
                  borderRadius: "6px"
                }}
              >
                <span>{t("heroExtra.exploreCta")}</span>
                <ArrowRight size={15} />
              </Link>

              <Link 
                href="/about-us" 
                className="btn-luxury-outline"
                style={{
                  padding: "12px 22px",
                  fontSize: "0.84rem",
                  borderRadius: "6px",
                  backgroundColor: "var(--bg-card)"
                }}
              >
                <Compass size={15} color="var(--gold-600)" />
                <span>{t("heroExtra.chairmanCta")}</span>
              </Link>

              <Link
                href="/business-ideas"
                className="btn-luxury-outline"
                style={{
                  padding: "12px 20px",
                  fontSize: "0.84rem",
                  borderRadius: "6px",
                  borderColor: "var(--border-gold-medium)",
                  backgroundColor: "rgba(212, 163, 40, 0.08)",
                  color: "var(--gold-700)"
                }}
              >
                <Sparkles size={14} color="var(--gold-700)" />
                <span>{t("heroExtra.incubatorCta")}</span>
              </Link>
            </div>

            {/* Corporate Milestones Stat Cards Grid */}
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "14px",
                paddingTop: "24px",
                borderTop: "1.5px solid var(--border-gold-subtle)",
              }}
            >
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-gold-light)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--gold-700)", lineHeight: 1 }}>
                  {t("heroExtra.stat1Value")}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginTop: "6px" }}>
                  {t("heroExtra.stat1Label")}
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-gold-light)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--gold-700)", lineHeight: 1 }}>
                  {t("heroExtra.stat2Value")}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginTop: "6px" }}>
                  {t("heroExtra.stat2Label")}
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-gold-light)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--gold-700)", lineHeight: 1 }}>
                  {t("heroExtra.stat3Value")}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginTop: "6px" }}>
                  {t("heroExtra.stat3Label")}
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-gold-light)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--gold-700)", lineHeight: 1 }}>
                  {t("heroExtra.stat4Value")}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginTop: "6px" }}>
                  {t("heroExtra.stat4Label")}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Vertical Showcase Card */}
          <div 
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            onMouseEnter={() => setAutoRotate(false)}
            onMouseLeave={() => setAutoRotate(true)}
          >
            {/* Sector Selector Tabs Bar */}
            <div 
              style={{
                display: "flex",
                gap: "6px",
                overflowX: "auto",
                paddingBottom: "4px",
                scrollbarWidth: "none"
              }}
            >
              {HERO_VERTICALS.map((item, idx) => {
                const locSector = t(`heroExtra.verticals.${item.id}.sector`) || item.sector;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: "7px 12px",
                      borderRadius: "6px",
                      border: activeTab === idx ? "1.5px solid #C5A059" : "1px solid var(--border-gold-light)",
                      backgroundColor: activeTab === idx ? "#0C121E" : "var(--bg-card)",
                      color: activeTab === idx ? "#E8C887" : "var(--text-secondary)",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: activeTab === idx ? "0 4px 12px rgba(0,0,0,0.12)" : "none"
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: activeTab === idx ? "#48BB78" : "var(--border-gold-medium)" }} />
                    {locSector.split("&")[0].trim()}
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Showcase Card */}
            <div 
              style={{
                position: "relative",
                backgroundColor: "var(--bg-card)",
                borderRadius: "14px",
                border: "2px solid var(--border-gold-medium)",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(12, 18, 30, 0.08)",
                transition: "all 0.3s ease"
              }}
            >
              {/* Image Frame with Aspect Ratio */}
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  height: "320px",
                  overflow: "hidden",
                  backgroundColor: "#0C121E"
                }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  style={{ objectFit: "cover", transition: "opacity 0.4s ease" }}
                  priority
                />
                
                {/* Dark Luxury Gradient Overlay */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(12,18,30,0.2) 0%, rgba(12,18,30,0.85) 100%)",
                  }}
                />

                {/* Top Badge Overlay */}
                <div 
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    right: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span 
                    style={{
                      backgroundColor: "rgba(12, 18, 30, 0.85)",
                      color: "#E8C887",
                      border: "1px solid #C5A059",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      backdropFilter: "blur(6px)"
                    }}
                  >
                    {current.sector.toUpperCase()}
                  </span>

                  <span 
                    style={{
                      backgroundColor: "rgba(72, 187, 120, 0.2)",
                      border: "1px solid #48BB78",
                      color: "#FFFFFF",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#48BB78" }}></span>
                    {t("heroExtra.verifiedPortfolio")}
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    color: "#FFFFFF"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.9rem", fontWeight: 800, color: "#E8C887" }}>
                      {current.metric}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "#E2E8F0", fontWeight: 600 }}>
                      {current.metricLabel}
                    </span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF" }}>
                    {current.name}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Body */}
              <div style={{ padding: "18px 20px" }}>
                <p style={{ margin: "0 0 16px", fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {current.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div 
                      style={{ 
                        width: "28px", 
                        height: "28px", 
                        borderRadius: "6px", 
                        overflow: "hidden", 
                        border: "1px solid #C5A059",
                        position: "relative" 
                      }}
                    >
                      <Image
                        src="/images/logo-gold-dark.jpg"
                        alt="Best Star Seal"
                        fill
                        sizes="28px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {t("heroExtra.directorate")}
                    </span>
                  </div>

                  <Link 
                    href={current.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "var(--gold-50)",
                      border: "1px solid var(--border-gold-medium)",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      color: "var(--gold-900)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span>{t("heroExtra.inspectDivision")}</span>
                    <ArrowRight size={13} color="var(--gold-800)" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
