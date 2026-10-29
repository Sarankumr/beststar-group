"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CSRSection from "@/components/CSRSection";
import { Heart, GraduationCap, Stethoscope, Leaf, CheckCircle2, Award } from "lucide-react";

export default function CSRPage() {
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
            <Heart size={14} color="var(--crimson-mid)" />
            <span>CORPORATE SOCIAL RESPONSIBILITY & PHILANTHROPY</span>
          </div>
          <h1 className="section-title">
            The <span className="text-crimson-gradient">MAKE Trust</span> & Community Impact
          </h1>
          <p className="section-subtitle">
            At Best Star Group, we measure true achievement not merely by balance sheets, but by human impact. Through our MAKE Trust educational missions and preventative healthcare camps, we empower thousands of students and workers each year.
          </p>
        </div>
      </section>

      {/* MAKE Trust In-Depth Story */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "60px 0", borderBottom: "1px solid var(--border-gold-subtle)" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", alignItems: "center" }} className="csr-story-grid">
            <div>
              <span className="crimson-badge" style={{ marginBottom: "12px" }}>FLAGSHIP PHILANTHROPIC INITIATIVE</span>
              <h2 className="font-serif" style={{ fontSize: "2rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                The MAKE Trust Education Foundation
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "20px" }}>
                Founded under the auspices of Chairman Ibunu Suwoothu Kamal and the Best Star Group directorate, the <strong>MAKE Trust</strong> is squarely dedicated to breaking generational poverty through education.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "24px" }}>
                The trust provides full higher education scholarships, establishes computer literacy centers in rural schools, and funds vocational engineering training so young women and men can enter high-skilled trades with accredited credentials.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>Over 1,200 direct academic scholarships distributed to date</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>14 smart digital classroom installations in rural school systems</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--crimson-mid)" />
                  <span>Free vocational training academies in technical electrical & NDT skills</span>
                </div>
              </div>
            </div>

            <div>
              <div 
                style={{
                  background: "var(--crimson-light)",
                  border: "2px solid var(--crimson-border)",
                  borderRadius: "12px",
                  padding: "36px",
                  boxShadow: "0 10px 30px rgba(138, 13, 35, 0.06)",
                }}
              >
                <div className="font-serif" style={{ fontSize: "1.45rem", color: "var(--crimson-dark)", fontWeight: 800, marginBottom: "8px" }}>
                  Healthcare Access Drives
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "20px" }}>
                  Partnered through Best Star Pharma and Win Path Lab, our medical teams organize free biometric screenings, diabetes diagnostics, and cardiovascular assessments for blue-collar labor communities and industrial workforces across the UAE.
                </p>
                <div style={{ borderTop: "1px solid var(--crimson-border)", paddingTop: "16px", color: "var(--crimson-dark)", fontWeight: 700, fontSize: "0.9rem" }}>
                  ✓ 25,000+ Free Patient Screenings Administered
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CSR Initiatives Component */}
      <CSRSection />

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .csr-story-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </div>
  );
}
