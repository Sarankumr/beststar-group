"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Filter,
  FileCheck2,
  Building2
} from "lucide-react";
import { ACHIEVEMENTS, Achievement } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export default function AchievementsPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Healthcare & Quality Benchmark",
    "Engineering & Infrastructure",
    "Sustainability & ESG",
    "Corporate Growth & Logistics",
    "Social Impact & Philanthropy"
  ];

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.awardingBody.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.referenceCode.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Hero Header */}
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
          
          {/* Breadcrumb */}
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "0.78rem", 
              color: "var(--text-muted)", 
              marginBottom: "20px" 
            }}
          >
            <Link href="/" style={{ color: "var(--gold-700)", textDecoration: "none" }}>
              {t("common.home")}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {t("achievementsPage.breadcrumb")}
            </span>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <div className="section-label">
              <Award size={14} color="var(--gold-600)" />
              <span>{t("achievementsPage.badge")}</span>
            </div>
            <h1 className="section-title" style={{ marginBottom: "16px" }}>
              {t("achievementsPage.title")}
            </h1>
            <p className="section-subtitle">
              {t("achievementsPage.subtitle")}
            </p>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "24px", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color="#10B981" />
                <strong>{t("achievementsPage.stat1")}</strong>
              </span>
              <span>•</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Award size={16} color="var(--gold-600)" />
                <strong>{t("achievementsPage.stat2")}</strong>
              </span>
              <span>•</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Sparkles size={16} color="var(--gold-600)" />
                <strong>{t("achievementsPage.stat3")}</strong>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main List Section */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="site-container">
          
          {/* Search & Category Filter */}
          <div style={{ maxWidth: "920px", margin: "0 auto 40px auto" }}>
            
            {/* Search Input */}
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--bg-card)",
                border: "1.5px solid var(--border-gold-medium)",
                borderRadius: "32px",
                padding: "6px 18px",
                boxShadow: "0 4px 18px rgba(184, 134, 11, 0.08)",
                marginBottom: "20px",
              }}
            >
              <Search size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginInlineEnd: "10px" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search accolades by authority, year, location, or keyword (e.g. MOHAP, DEWA, Green Building, Safety)..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "0.88rem",
                  color: "var(--text-primary)",
                  padding: "6px 0",
                }}
              />
              <span 
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: "var(--gold-800)",
                  backgroundColor: "var(--gold-100)",
                  border: "1px solid var(--gold-300)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  whiteSpace: "nowrap"
                }}
              >
                {filteredAchievements.length} {filteredAchievements.length === 1 ? "Accolade" : "Accolades"}
              </span>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat 
                      ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" 
                      : "#FFFFFF",
                    color: selectedCategory === cat ? "#080C14" : "var(--text-secondary)",
                    border: selectedCategory === cat ? "1px solid #FFE494" : "1.5px solid var(--border-gold-subtle)",
                    borderRadius: "30px",
                    padding: "7px 18px",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.8rem",
                    fontWeight: selectedCategory === cat ? 800 : 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Cards Grid */}
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredAchievements.map((ach) => (
              <div
                key={ach.id}
                className="luxe-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0",
                  overflow: "hidden",
                  border: "1px solid var(--border-gold-medium)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                {/* Visual Cover */}
                <div style={{ position: "relative", width: "100%", height: "220px", backgroundColor: "#080C14", overflow: "hidden" }}>
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="card-image-hover"
                  />
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 10, 16, 0.88) 0%, rgba(7, 10, 16, 0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Badges */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", right: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span 
                      style={{
                        background: "rgba(8, 12, 20, 0.88)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(212, 163, 40, 0.5)",
                        color: "var(--gold-300)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {ach.badge}
                    </span>

                    <span 
                      style={{
                        background: "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)",
                        color: "#080C14",
                        fontSize: "0.72rem",
                        fontWeight: 900,
                        padding: "3px 10px",
                        borderRadius: "20px",
                      }}
                    >
                      {ach.year}
                    </span>
                  </div>

                  <div style={{ position: "absolute", bottom: "14px", left: "18px", right: "18px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--gold-400)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {ach.awardingBody}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--gold-800)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                      {ach.category}
                    </div>
                    <h3 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.35 }}>
                      {ach.title}
                    </h3>
                    <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
                      {ach.summary}
                    </p>

                    {/* Metrics Highlights */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "18px", padding: "10px", backgroundColor: "var(--bg-surface)", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)" }}>
                      {ach.keyMetrics.slice(0, 2).map((km, i) => (
                        <div key={i}>
                          <div style={{ fontSize: "0.66rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{km.label}</div>
                          <div style={{ fontSize: "0.84rem", fontWeight: 800, color: "var(--text-primary)" }}>{km.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                    <Link
                      href={`/achievements/${ach.id}`}
                      className="btn-luxury-gold"
                      style={{ padding: "9px 18px", fontSize: "0.76rem", width: "100%", justifyContent: "center" }}
                    >
                      <span>INSPECT FULL CITATION & DOSSIER</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
