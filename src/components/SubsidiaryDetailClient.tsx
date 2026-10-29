"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { SUBSIDIARIES, Subsidiary } from "@/data/companyData";

export default function SubsidiaryDetailClient({ subsidiary }: { subsidiary: Subsidiary }) {
  const relatedSubsidiaries = SUBSIDIARIES.filter((s) => s.id !== subsidiary.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <Header />

      {/* Breadcrumb & Navigation */}
      <div 
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--border-gold-subtle)",
          padding: "12px 0",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
        }}
      >
        <div className="site-container" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/subsidiaries" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Subsidiaries</Link>
          <span>/</span>
          <span style={{ color: "var(--gold-800)", fontWeight: 700 }}>{subsidiary.name}</span>
        </div>
      </div>

      {/* Hero Cover Banner */}
      <section 
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--border-gold-subtle)",
          paddingTop: "40px",
          paddingBottom: "50px",
        }}
      >
        <div className="site-container">
          
          <Link 
            href="/subsidiaries" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "6px", 
              color: "var(--gold-700)", 
              fontSize: "0.85rem", 
              fontWeight: 700, 
              textDecoration: "none",
              marginBottom: "20px"
            }}
          >
            <ArrowLeft size={15} />
            <span>BACK TO ALL SUBSIDIARIES</span>
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", alignItems: "center" }} className="sub-hero-grid">
            
            {/* Title & Meta */}
            <div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                <span className="gold-badge">{subsidiary.sector}</span>
                <span className="crimson-badge">{subsidiary.badgeText}</span>
              </div>

              <h1 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "10px" }}>
                {subsidiary.name}
              </h1>

              <p style={{ color: "var(--gold-700)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>
                {subsidiary.tagline}
              </p>

              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", marginBottom: "24px" }}>
                {subsidiary.description}
              </p>

              {/* Meta Quick Info */}
              <div 
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  padding: "16px 20px",
                  background: "var(--gold-50)",
                  borderRadius: "8px",
                  border: "1.5px solid var(--border-gold-medium)",
                  fontSize: "0.84rem",
                }}
              >
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Headquarters: </span>
                  <strong style={{ color: "var(--text-primary)" }}>{subsidiary.headquarters}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Established: </span>
                  <strong style={{ color: "var(--gold-800)" }}>{subsidiary.establishedDate}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>Operating Regions: </span>
                  <strong style={{ color: "var(--text-primary)" }}>{subsidiary.operatingCountries.join(", ")}</strong>
                </div>
              </div>
            </div>

            {/* Featured Image Frame */}
            <div>
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid var(--border-gold-medium)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  backgroundColor: "#000"
                }}
              >
                {subsidiary.image ? (
                  <Image
                    src={subsidiary.image}
                    alt={subsidiary.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                ) : null}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Key Metrics Strip if Available */}
      {subsidiary.stats && (
        <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid var(--border-gold-subtle)", padding: "26px 0" }}>
          <div className="site-container">
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
                gap: "20px",
                textAlign: "center",
              }}
            >
              {subsidiary.stats.map((st, i) => (
                <div key={i} style={{ padding: "10px", borderRight: i < subsidiary.stats!.length - 1 ? "1px solid var(--border-gold-subtle)" : "none" }}>
                  <div className="font-serif" style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--gold-800)" }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.06em" }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Overview & Capabilities */}
      <section className="section-spacing">
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }} className="sub-body-grid">
            
            {/* Left Column: Full Dossier */}
            <div>
              <div className="luxe-card" style={{ background: "#FFFFFF", border: "1.5px solid var(--border-gold-medium)", padding: "36px", marginBottom: "32px" }}>
                <h2 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                  Comprehensive Operational Overview
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "28px" }}>
                  {subsidiary.detailedOverview}
                </p>

                <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--gold-800)", marginBottom: "16px" }}>
                  Key Milestones & Operational Achievements
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {subsidiary.keyHighlights.map((hl, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.94rem", color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif" style={{ fontSize: "1.2rem", color: "var(--gold-800)", marginBottom: "16px" }}>
                  Specialized Capabilities & Service Offerings
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
                  {subsidiary.capabilities.map((cap, i) => (
                    <div 
                      key={i}
                      style={{
                        background: "var(--gold-50)",
                        border: "1px solid var(--border-gold-medium)",
                        padding: "12px 16px",
                        borderRadius: "6px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct RFP Form & Parent Group Link */}
            <div>
              <div 
                style={{
                  background: "#FFFFFF",
                  border: "2px solid var(--border-gold-medium)",
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <div className="section-label" style={{ marginBottom: "6px" }}>
                  <Sparkles size={13} />
                  <span>DIRECT COMMERCIAL RFP</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginBottom: "12px" }}>
                  Inquire with {subsidiary.shortName}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Direct your tender specifications, contract requirements, or commercial partnership queries directly to this operating board.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <ShieldCheck size={16} color="var(--gold-600)" />
                    <span>Direct Executive Routing</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <ShieldCheck size={16} color="var(--gold-600)" />
                    <span>SLA Guaranteed Response (24h)</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <ShieldCheck size={16} color="var(--gold-600)" />
                    <span>MOHAP & ISO Certified Disclosures</span>
                  </div>
                </div>

                <Link
                  href={`/contact?sector=${encodeURIComponent(subsidiary.name)}`}
                  className="btn-luxury-gold"
                  style={{ width: "100%", textAlign: "center", padding: "13px" }}
                >
                  <span>SUBMIT COMMERCIAL INQUIRY</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Subsidiaries */}
      <section style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--border-gold-subtle)", padding: "60px 0" }}>
        <div className="site-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <h3 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--text-primary)", margin: 0 }}>
              Other Conglomerate Verticals
            </h3>
            <Link href="/subsidiaries" style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <span>VIEW ALL (10)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {relatedSubsidiaries.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/subsidiaries/${rel.id}`}
                className="luxe-card"
                style={{
                  textDecoration: "none",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "20px",
                  background: "#FFFFFF",
                }}
              >
                <span className="gold-badge" style={{ marginBottom: "8px", fontSize: "0.65rem" }}>{rel.sector}</span>
                <h4 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "4px" }}>
                  {rel.name}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", margin: 0 }}>
                  {rel.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .sub-hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .sub-body-grid {
            grid-template-columns: 1.35fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
}
