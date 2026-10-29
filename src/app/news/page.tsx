"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bell, Calendar, MapPin, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { NEWS_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Contract", "Acquisition", "Partnership", "Infrastructure", "Fleet Expansion"];

  const filteredNews = activeCategory === "All"
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <Header />

      {/* Hero Banner */}
      <section 
        style={{
          position: "relative",
          paddingTop: "65px",
          paddingBottom: "55px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          <div className="section-label">
            <Bell size={14} color="var(--gold-600)" />
            <span>EXECUTIVE DISCLOSURES & MEDIA ARCHIVE</span>
          </div>
          <h1 className="section-title">
            Corporate <span className="text-gold-gradient">Newsroom</span>
          </h1>
          <p className="section-subtitle">
            Explore official press releases, major contract signings, strategic enterprise acquisitions, and regional joint venture announcements from the Best Star Group directorate.
          </p>
        </div>
      </section>

      {/* Filter Tabs & News Cards Grid */}
      <section className="section-spacing">
        <div className="site-container">
          
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "var(--gold-600)" : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : "var(--text-secondary)",
                  border: activeCategory === cat ? "1px solid var(--gold-700)" : "1.5px solid var(--border-gold-subtle)",
                  borderRadius: "24px",
                  padding: "7px 18px",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.82rem",
                  fontWeight: activeCategory === cat ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: activeCategory === cat ? "0 4px 12px rgba(184, 134, 11, 0.2)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid Linking to Dedicated Separate Screen */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "26px" }}>
            {filteredNews.map((item) => (
              <div 
                key={item.id} 
                className="luxe-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#FFFFFF",
                  border: "1.5px solid var(--border-gold-medium)",
                  padding: "30px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "6px" }}>
                    <span className="crimson-badge">{item.category}</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={13} /> {item.date}
                    </span>
                  </div>

                  <Link href={`/news/${item.id}`} style={{ textDecoration: "none" }}>
                    <h3 
                      className="font-serif" 
                      style={{ 
                        fontSize: "1.25rem", 
                        color: "var(--text-primary)", 
                        marginBottom: "12px", 
                        lineHeight: 1.35,
                        transition: "color 0.2s ease" 
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-600)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {item.title}
                    </h3>
                  </Link>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "20px" }}>
                    {item.summary}
                  </p>
                </div>

                <div 
                  style={{
                    borderTop: "1px solid var(--border-gold-subtle)",
                    paddingTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "var(--text-muted)", fontSize: "0.76rem", display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={12} color="var(--gold-600)" />
                    <span>{item.location}</span>
                  </div>

                  <Link
                    href={`/news/${item.id}`}
                    className="btn-luxury-outline"
                    style={{
                      padding: "8px 16px",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <span>READ RELEASE</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* Media & Press Enquiries Desk Ribbon */}
          <div 
            style={{
              marginTop: "50px",
              background: "linear-gradient(135deg, #0A0E17 0%, #171E2D 100%)",
              color: "#FFFFFF",
              borderRadius: "12px",
              padding: "36px",
              border: "1.5px solid rgba(212, 163, 40, 0.4)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px"
            }}
          >
            <div>
              <div style={{ color: "var(--gold-400)", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
                PRESS & JOURNALIST ACCREDITATION
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "#FFFFFF", margin: 0, marginBottom: "8px" }}>
                Corporate Communications Directorate
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", margin: 0, maxWidth: "650px", lineHeight: 1.6 }}>
                Members of the media seeking executive interviews, official commentary, or high-resolution corporate assets can submit an enquiry directly through any press release dossier or via our central media desk.
              </p>
            </div>

            <Link 
              href="/contact?type=media" 
              className="btn-luxury-gold"
              style={{ padding: "12px 24px", borderRadius: "30px" }}
            >
              <Mail size={14} />
              <span>CONTACT MEDIA DESK</span>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
