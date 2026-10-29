"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Sparkles 
} from "lucide-react";
import { ACHIEVEMENTS, Achievement } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export default function AchievementsCarousel() {
  const { t, language } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = ACHIEVEMENTS.length;
  // 3 cards visible at a time on desktop
  const visibleCards = 3;
  const maxIndex = Math.max(0, total - visibleCards);

  // Auto-scroll every 4.5 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section 
      style={{
        position: "relative",
        padding: "85px 0",
        backgroundColor: "#FAF9F6",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
          <div>
            <div className="section-label">
              <Award size={14} color="var(--gold-600)" />
              <span>CORPORATE RECOGNITION & SOVEREIGN CITATIONS</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: "10px" }}>
              Honored for <span className="text-gold-gradient">Excellence & Safety</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "680px", margin: 0 }}>
              Recognized by sovereign UAE ministries, regulatory bodies, and global certification authorities for institutional leadership, cold-chain rigor, and zero-harm engineering.
            </p>
          </div>

          {/* Navigation Controls & View All Link */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/achievements"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--gold-800)",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                marginRight: "8px",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-600)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-800)")}
            >
              <span>VIEW ALL ACHIEVEMENTS ({total})</span>
              <ArrowRight size={13} />
            </Link>

            <button
              type="button"
              onClick={handlePrev}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid var(--border-gold-medium)",
                color: "var(--gold-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold-600)";
                e.currentTarget.style.color = "#080C14";
                e.currentTarget.style.borderColor = "var(--gold-600)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "var(--gold-700)";
                e.currentTarget.style.borderColor = "var(--border-gold-medium)";
              }}
              aria-label="Previous Achievement"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid var(--border-gold-medium)",
                color: "var(--gold-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold-600)";
                e.currentTarget.style.color = "#080C14";
                e.currentTarget.style.borderColor = "var(--gold-600)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "var(--gold-700)";
                e.currentTarget.style.borderColor = "var(--border-gold-medium)";
              }}
              aria-label="Next Achievement"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Slider Container */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div 
            style={{
              display: "flex",
              gap: "28px",
              transform: `translateX(-${startIndex * (100 / visibleCards + 1.2)}%)`,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {ACHIEVEMENTS.map((ach) => (
              <div 
                key={ach.id}
                className="luxe-card"
                style={{
                  flex: "0 0 calc(33.333% - 19px)",
                  minWidth: "320px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-gold-medium)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 6px 22px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Visual Cover */}
                <div style={{ position: "relative", width: "100%", height: "200px", backgroundColor: "#080C14", overflow: "hidden" }}>
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="card-image-hover"
                  />
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 10, 16, 0.85) 0%, rgba(7, 10, 16, 0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Corner Badge */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", right: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span 
                      style={{
                        background: "rgba(8, 12, 20, 0.85)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(212, 163, 40, 0.5)",
                        color: "var(--gold-300)",
                        fontSize: "0.68rem",
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

                  <div style={{ position: "absolute", bottom: "12px", left: "16px", right: "16px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--gold-400)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {ach.awardingBody}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.35 }}>
                      {ach.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
                      {ach.summary.slice(0, 140)}...
                    </p>

                    {/* Key Metrics Highlight Pill */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                      {ach.keyMetrics.slice(0, 2).map((km, i) => (
                        <div 
                          key={i}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#FAF9F6",
                            border: "1px solid var(--border-gold-subtle)",
                            borderRadius: "6px",
                            flex: 1,
                            minWidth: "120px"
                          }}
                        >
                          <div style={{ fontSize: "0.66rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{km.label}</div>
                          <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--gold-800)" }}>{km.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                    <Link
                      href={`/achievements/${ach.id}`}
                      className="btn-luxury-gold"
                      style={{ padding: "8px 16px", fontSize: "0.75rem", width: "100%", justifyContent: "center" }}
                    >
                      <span>INSPECT FULL CITATION</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "32px" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              style={{
                width: startIndex === idx ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: startIndex === idx ? "var(--gold-600)" : "rgba(184, 134, 11, 0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
