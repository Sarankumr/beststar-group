"use client";

import React from "react";
import Link from "next/link";
import { Star, Briefcase, MapPin, ArrowRight } from "lucide-react";
import { CAREER_OPENINGS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface CareersSectionProps {
  limit?: number;
}

export default function CareersSection({ limit }: CareersSectionProps) {
  const { t } = useLanguage();

  const jobs = limit ? CAREER_OPENINGS.slice(0, limit) : CAREER_OPENINGS;

  return (
    <section 
      id="careers" 
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
            <Star size={14} color="var(--gold-600)" />
            <span>{t("careers.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("careers.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("careers.subtitle")}
          </p>
        </div>

        {/* Benefits Strip */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
            marginBottom: "36px",
          }}
        >
          <div className="luxe-card" style={{ padding: "20px", background: "var(--gold-50)", border: "1px solid var(--border-gold-subtle)" }}>
            <div className="font-serif" style={{ color: "var(--gold-800)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "6px" }}>
              Merit-Based Progression
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", margin: 0 }}>
              Structured annual appraisals, fast-track leadership tracks, and international project assignments.
            </p>
          </div>

          <div className="luxe-card" style={{ padding: "20px", background: "var(--gold-50)", border: "1px solid var(--border-gold-subtle)" }}>
            <div className="font-serif" style={{ color: "var(--gold-800)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "6px" }}>
              Global Mobility
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", margin: 0 }}>
              Cross-border assignments connecting UAE operations with Saudi Arabia, India, and Malaysia hubs.
            </p>
          </div>

          <div className="luxe-card" style={{ padding: "20px", background: "var(--gold-50)", border: "1px solid var(--border-gold-subtle)" }}>
            <div className="font-serif" style={{ color: "var(--gold-800)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "6px" }}>
              Healthcare & Family Care
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", margin: 0 }}>
              Comprehensive top-tier medical health insurance, annual home flights, and educational support grants.
            </p>
          </div>
        </div>

        {/* Career Openings List with Dedicated Separate Page Routing */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="luxe-card"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "22px 28px",
                gap: "20px",
                border: "1.5px solid var(--border-gold-medium)",
                backgroundColor: "#FFFFFF",
                transition: "all 0.25s ease"
              }}
            >
              <div style={{ flex: "1 1 340px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                  <span className="gold-badge" style={{ fontSize: "0.68rem" }}>{job.department}</span>
                  <span style={{ color: "var(--gold-700)", fontSize: "0.82rem", fontWeight: 700 }}>{job.subsidiary}</span>
                </div>

                <Link href={`/careers/${job.id}`} style={{ textDecoration: "none" }}>
                  <h3 
                    className="font-serif" 
                    style={{ 
                      fontSize: "1.25rem", 
                      color: "var(--text-primary)", 
                      marginBottom: "6px",
                      transition: "color 0.2s ease" 
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-600)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {job.title}
                  </h3>
                </Link>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", margin: 0, lineHeight: 1.6 }}>
                  {job.description}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 500 }}>
                    <MapPin size={13} color="var(--gold-600)" />
                    <span>{job.location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 500 }}>
                    <Briefcase size={13} color="var(--gold-600)" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <Link
                  href={`/careers/${job.id}`}
                  className="btn-luxury-outline"
                  style={{ 
                    padding: "10px 22px", 
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span>{t("careers.applyForRole")}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {limit && (
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/careers" className="btn-luxury-outline" style={{ display: "inline-flex", gap: "8px", padding: "12px 28px" }}>
              <span>{t("careers.viewAll")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
