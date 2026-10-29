"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestorSection from "@/components/InvestorSection";
import { TrendingUp, PieChart, ShieldAlert, BarChart3, CheckCircle2 } from "lucide-react";

export default function InvestorCentrePage() {
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
            <TrendingUp size={14} />
            <span>INVESTOR RELATIONS & STRATEGIC GOVERNANCE</span>
          </div>
          <h1 className="section-title">
            Investor <span className="text-gold-gradient">Centre</span>
          </h1>
          <p className="section-subtitle">
            Best Star Group FZE operates a resilient, asset-backed holding model. We prioritize sustainable free cash flows, conservative leverage, and open co-investment alongside visionary industry leaders.
          </p>
        </div>
      </section>

      {/* Financial Governance Highlights */}
      <section style={{ backgroundColor: "#FAF8F5", padding: "60px 0" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            
            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                AED 1B+
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                Target Enterprise Valuation
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                Driven by expanding pharmaceutical distribution, multi-year commercial MEP contracts, and Saudi high-voltage infrastructure assets.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                100%
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                Holding Autonomy & Discretion
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                Private enterprise governance allowing nimble capital deployment, rapid M&A approvals, and zero public market quarter-to-quarter pressures.
              </p>
            </div>

            <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)" }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold-800)", marginBottom: "4px" }}>
                4 Hubs
              </div>
              <div style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "10px" }}>
                Cross-Border Resilience
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                Multi-currency revenue generation across UAE Dirham (AED), Saudi Riyal (SAR), Indian Rupee (INR), and Malaysian Ringgit (MYR).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Investor Pillars & Downloadable Factsheet */}
      <InvestorSection />

      <Footer />
    </div>
  );
}
