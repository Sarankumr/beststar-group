"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HorizonSection() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<"milestones" | "synergies" | "governance">("milestones");

  const fallbackMilestones = [
    {
      year: "2008",
      title: "Foundation of Best Star Enterprise",
      desc: "Inception in the UAE free zone with specialized technical trading and engineering operations.",
      badge: "Inception"
    },
    {
      year: "2013",
      title: "Cross-Border Infrastructure Expansion",
      desc: "Commissioned landmark Extra High Voltage (380kV) substation packages in Riyadh, Kingdom of Saudi Arabia.",
      badge: "Regional Power"
    },
    {
      year: "2017",
      title: "Integrated Facilities & Automotive Fleets",
      desc: "Established Best Star Facility Management and consolidated 120+ commercial passenger transit coaches.",
      badge: "Fleet & MEP"
    },
    {
      year: "2021",
      title: "Pharmaceuticals & Diagnostic Life Sciences",
      desc: "Founded Best Star Pharma Trading and entered equal equity joint-venture with Win Path Diagnostic Labs.",
      badge: "Healthcare"
    },
    {
      year: "2026",
      title: "Sovereign Conglomerate Holding FZE",
      desc: "Consolidation of 10 operating subsidiaries commanding leadership across UAE, KSA, India, and Malaysia.",
      badge: "Holding FZE"
    },
    {
      year: "2030",
      title: "Horizon 2030: AED 2.5B Enterprise Roadmap",
      desc: "Strategic acceleration towards public capital market listing, automated green energy hubs, and aerospace leasing.",
      badge: "Future Horizon"
    }
  ];

  const fallbackSynergies = [
    {
      title: "Cold-Chain Healthcare Logistics",
      pair: "Best Star Pharma + Best Star Cargo",
      desc: "Seamless end-to-end import, temperature-controlled bonded warehousing, and rapid retail pharmacy distribution.",
      tag: "Biopharma Transit"
    },
    {
      title: "Smart Chiller & High-Voltage Automation",
      pair: "Best Star FM + IGTS Technical + High-Voltage Power",
      desc: "Synchronized MEP contracting, ASNT certified non-destructive testing, and substation energy efficiency.",
      tag: "Mission-Critical MEP"
    },
    {
      title: "Dignitary Tourism & Aviation Chartering",
      pair: "Best Star Tourism + Best Star Aviation",
      desc: "Ultra-luxury VIP global itineraries combining private jet charters, luxury ground coach fleets, and concierge access.",
      tag: "Prestige Travel"
    },
    {
      title: "Automotive Workshops & Commercial Fleets",
      pair: "Best Star Auto Hub + Al Saqer Buses",
      desc: "In-house Euro-5 vehicle maintenance, certified diagnostic bays, and continuous 99.8% fleet uptime SLAs.",
      tag: "Mobility Engineering"
    }
  ];

  const milestones = fallbackMilestones.map((ms, idx) => ({
    year: ms.year,
    title: t(`horizonSection.milestones.${idx}.title`) || ms.title,
    desc: t(`horizonSection.milestones.${idx}.desc`) || ms.desc,
    badge: t(`horizonSection.milestones.${idx}.badge`) || ms.badge,
  }));

  const synergies = fallbackSynergies.map((syn, idx) => ({
    title: t(`horizonSection.synergies.${idx}.title`) || syn.title,
    pair: t(`horizonSection.synergies.${idx}.pair`) || syn.pair,
    desc: t(`horizonSection.synergies.${idx}.desc`) || syn.desc,
    tag: t(`horizonSection.synergies.${idx}.tag`) || syn.tag,
  }));

  return (
    <section 
      style={{
        position: "relative",
        padding: "85px 0",
        backgroundColor: "var(--bg-deep)",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
      }}
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Compass size={14} color="var(--gold-600)" />
            <span>{t("horizonSection.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("horizonSection.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("horizonSection.subtitle")}
          </p>
        </div>

        {/* Tab Controls */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "10px", 
            marginBottom: "40px",
            flexWrap: "wrap" 
          }}
        >
          <button
            onClick={() => setActiveTab("milestones")}
            style={{
              padding: "10px 22px",
              borderRadius: "30px",
              border: activeTab === "milestones" ? "1.5px solid var(--gold-600)" : "1.5px solid var(--border-gold-subtle)",
              background: activeTab === "milestones" ? "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)" : "var(--bg-card)",
              color: activeTab === "milestones" ? "var(--gold-300)" : "var(--text-secondary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <TrendingUp size={14} />
            <span>{t("horizonSection.tabMilestones")}</span>
          </button>

          <button
            onClick={() => setActiveTab("synergies")}
            style={{
              padding: "10px 22px",
              borderRadius: "30px",
              border: activeTab === "synergies" ? "1.5px solid var(--gold-600)" : "1.5px solid var(--border-gold-subtle)",
              background: activeTab === "synergies" ? "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)" : "var(--bg-card)",
              color: activeTab === "synergies" ? "var(--gold-300)" : "var(--text-secondary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Layers size={14} />
            <span>{t("horizonSection.tabSynergies")}</span>
          </button>

          <button
            onClick={() => setActiveTab("governance")}
            style={{
              padding: "10px 22px",
              borderRadius: "30px",
              border: activeTab === "governance" ? "1.5px solid var(--gold-600)" : "1.5px solid var(--border-gold-subtle)",
              background: activeTab === "governance" ? "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)" : "var(--bg-card)",
              color: activeTab === "governance" ? "var(--gold-300)" : "var(--text-secondary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <ShieldCheck size={14} />
            <span>{t("horizonSection.tabGovernance")}</span>
          </button>
        </div>

        {/* Tab 1: Milestones Trajectory */}
        {activeTab === "milestones" && (
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "22px",
              animation: "dropdownFade 0.3s ease"
            }}
          >
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="luxe-card"
                style={{
                  background: idx === milestones.length - 1 ? "linear-gradient(135deg, #0A0E17 0%, #171E2D 100%)" : "var(--bg-card)",
                  color: idx === milestones.length - 1 ? "#FFFFFF" : "var(--text-primary)",
                  border: idx === milestones.length - 1 ? "1.5px solid rgba(212, 163, 40, 0.5)" : "1.5px solid var(--border-gold-subtle)",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span 
                      style={{ 
                        fontFamily: "var(--font-serif)", 
                        fontSize: "1.6rem", 
                        fontWeight: 900, 
                        color: idx === milestones.length - 1 ? "var(--gold-400)" : "var(--gold-700)" 
                      }}
                    >
                      {ms.year}
                    </span>
                    <span 
                      style={{
                        background: idx === milestones.length - 1 ? "rgba(212, 163, 40, 0.2)" : "var(--gold-100)",
                        color: idx === milestones.length - 1 ? "var(--gold-300)" : "var(--gold-800)",
                        border: "1px solid var(--border-gold-medium)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "12px",
                        textTransform: "uppercase"
                      }}
                    >
                      {ms.badge}
                    </span>
                  </div>

                  <h3 
                    className="font-serif" 
                    style={{ 
                      fontSize: "1.1rem", 
                      marginBottom: "8px", 
                      color: idx === milestones.length - 1 ? "#FFFFFF" : "var(--text-primary)" 
                    }}
                  >
                    {ms.title}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: "0.88rem", 
                      lineHeight: 1.65, 
                      margin: 0, 
                      color: idx === milestones.length - 1 ? "rgba(255,255,255,0.75)" : "var(--text-secondary)" 
                    }}
                  >
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Synergies Ecosystem */}
        {activeTab === "synergies" && (
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "22px",
              animation: "dropdownFade 0.3s ease"
            }}
          >
            {synergies.map((syn, idx) => (
              <div
                key={idx}
                className="luxe-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1.5px solid var(--border-gold-medium)",
                  padding: "28px",
                }}
              >
                <span 
                  style={{
                    background: "var(--gold-100)",
                    border: "1px solid var(--border-gold-subtle)",
                    color: "var(--gold-900)",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "3px 9px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "12px",
                    textTransform: "uppercase"
                  }}
                >
                  {syn.tag}
                </span>

                <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                  {syn.title}
                </h3>

                <div style={{ color: "var(--gold-700)", fontSize: "0.8rem", fontWeight: 700, marginBottom: "12px" }}>
                  {syn.pair}
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {syn.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Governance & Balance Sheet Resilience */}
        {activeTab === "governance" && (
          <div 
            style={{
              background: "var(--bg-surface)",
              border: "1.5px solid var(--border-gold-medium)",
              borderRadius: "12px",
              padding: "36px",
              animation: "dropdownFade 0.3s ease"
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <ShieldCheck size={18} color="var(--gold-700)" />
                  <h4 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}>
                    {t("horizonSection.govCard1Title")}
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {t("horizonSection.govCard1Desc")}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Building2 size={18} color="var(--gold-700)" />
                  <h4 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}>
                    {t("horizonSection.govCard2Title")}
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {t("horizonSection.govCard2Desc")}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Globe2 size={18} color="var(--gold-700)" />
                  <h4 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}>
                    {t("horizonSection.govCard3Title")}
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {t("horizonSection.govCard3Desc")}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid var(--border-gold-subtle)", textAlign: "center" }}>
              <Link href="/about-us" className="btn-luxury-outline" style={{ display: "inline-flex", gap: "8px", padding: "10px 24px", fontSize: "0.82rem" }}>
                <span>{t("horizonSection.govCta")}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
