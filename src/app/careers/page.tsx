"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";
import { Star, Shield, Users, Award, BookOpen, HeartHandshake } from "lucide-react";

export default function CareersPage() {
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
            <Star size={14} color="var(--gold-600)" />
            <span>BE A STAR • CAREERS AT BEST STAR GROUP</span>
          </div>
          <h1 className="section-title">
            Build Your Career with a <span className="text-gold-gradient">Global Conglomerate</span>
          </h1>
          <p className="section-subtitle">
            At Best Star Group, our human capital is our proudest competitive advantage. We provide an environment built on entrepreneurial empowerment, cross-border mobility, merit-based advancement, and comprehensive family care.
          </p>
        </div>
      </section>

      {/* Schemes & Benefits Detail */}
      <section style={{ backgroundColor: "#FAF8F5", padding: "60px 0" }}>
        <div className="site-container">
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="section-title" style={{ fontSize: "1.85rem" }}>
              Employee Benefits & <span className="text-gold-gradient">Schemes</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Comprehensive care programs designed to support our 2,000+ professionals across the UAE, Saudi Arabia, India, and Malaysia.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Award size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Performance Appraisal Academy
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                Annual 360-degree reviews, merit-based compensation increments, and structured leadership tracks across our 9 UAE operating subsidiaries.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <BookOpen size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Training & Technical Certifications
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                Full sponsorship for ASNT NDT Level III, MOHAP pharmaceutical licensing, PMP, and advanced HVAC automation certifications.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "var(--gold-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <HeartHandshake size={22} color="var(--gold-800)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                Health, Wellness & Gratuity
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                Comprehensive medical insurance for employees and families, free diagnostic checkups via Win Path Lab, and end-of-service gratuity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Full Openings Grid with Application Modal */}
      <CareersSection />

      <Footer />
    </div>
  );
}
