"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LuxurySelect from "@/components/LuxurySelect";
import { 
  Rocket, 
  Lightbulb, 
  Layers, 
  DollarSign, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Users, 
  Share2, 
  Briefcase,
  ChevronRight,
  ExternalLink,
  Building2,
  FileText
} from "lucide-react";
import { BusinessIdea } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface BusinessIdeaDetailClientProps {
  idea: BusinessIdea;
}

export default function BusinessIdeaDetailClient({ idea }: BusinessIdeaDetailClientProps) {
  const { t, language } = useLanguage();

  // Partnership Inquiry Form State
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Strategic Joint Venture / Co-Investment",
    message: "",
  });

  const [partnerRef, setPartnerRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000);
      setPartnerRef(`BSG-PARTNER-${code}`);
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Hero Header */}
      <section 
        style={{
          position: "relative",
          paddingTop: "60px",
          paddingBottom: "50px",
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          
          {/* Breadcrumb Navigation */}
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
            <Link href="/business-ideas" style={{ color: "var(--gold-700)", textDecoration: "none" }}>
              {t("common.businessIdeas")}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {idea.shortName}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "center" }}>
            
            {/* Left: Titles & Taglines */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span 
                  style={{
                    backgroundColor: "var(--gold-100)",
                    border: "1px solid var(--gold-300)",
                    color: "var(--gold-900)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 12px",
                    borderRadius: "20px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase"
                  }}
                >
                  {idea.category}
                </span>

                <span 
                  style={{
                    backgroundColor: "#080C14",
                    color: "var(--gold-300)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "20px",
                    border: "1px solid rgba(212,163,40,0.4)"
                  }}
                >
                  Stage: {idea.stage}
                </span>

                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={12} color="var(--gold-600)" />
                  {idea.hubLocation}
                </span>
              </div>

              <h1 className="section-title" style={{ fontSize: "2rem", lineHeight: 1.25, marginBottom: "14px" }}>
                {idea.title}
              </h1>

              <p style={{ fontSize: "1.02rem", color: "var(--gold-800)", fontWeight: 600, lineHeight: 1.5, marginBottom: "18px" }}>
                {idea.tagline}
              </p>

              {/* Key Quantitative Metrics */}
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(3, 1fr)", 
                  gap: "12px",
                  padding: "16px",
                  backgroundColor: "var(--bg-surface)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-gold-subtle)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Capital Target</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary)" }}>{idea.capitalRequirement.split("(")[0]}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>TAM Market</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--gold-700)" }}>{idea.tam.split("(")[0]}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Target Launch</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary)" }}>{idea.targetTimeline.split(" ")[2] || "2026"}</div>
                </div>
              </div>
            </div>

            {/* Right: Cover Visual */}
            <div 
              style={{
                position: "relative",
                width: "100%",
                height: "320px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid var(--border-gold-medium)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#080C14",
              }}
            >
              <Image
                src={idea.image}
                alt={idea.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                style={{ objectFit: "cover" }}
                priority
              />
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7, 10, 16, 0.75) 0%, transparent 60%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--gold-300)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  INCUBATION ACCELERATOR
                </div>
                <div style={{ fontSize: "0.95rem", color: "#FFFFFF", fontWeight: 700 }}>
                  Best Star Holding FZE • Venture Blueprint
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Blueprint Details Body */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1.2fr", gap: "40px", alignItems: "flex-start" }}>
            
            {/* Left Column: Dossier */}
            <div>
              
              {/* Detailed Project Description Section */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1.5px solid var(--border-gold-medium)",
                  padding: "32px",
                  marginBottom: "28px",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.03)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
                  <div className="section-label" style={{ margin: 0 }}>
                    <FileText size={14} color="var(--gold-600)" />
                    <span>PROJECT DESCRIPTION & TECHNICAL SCOPE</span>
                  </div>
                  <span style={{ fontSize: "0.72rem", backgroundColor: "var(--gold-50)", border: "1px solid var(--border-gold-medium)", color: "var(--gold-900)", padding: "3px 10px", borderRadius: "4px", fontWeight: 700 }}>
                    Verified Project Blueprint
                  </span>
                </div>

                <h2 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                  Detailed Project Description
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {(idea.projectDescription || idea.executiveSummary)
                    .split("\n\n")
                    .map((paragraph, pIdx) => (
                      <p 
                        key={pIdx} 
                        style={{ 
                          fontSize: "0.95rem", 
                          color: "var(--text-secondary)", 
                          lineHeight: 1.85, 
                          margin: 0,
                          borderLeft: pIdx === 0 ? "3px solid var(--gold-500)" : "none",
                          paddingLeft: pIdx === 0 ? "16px" : "0",
                          backgroundColor: pIdx === 0 ? "rgba(212, 163, 40, 0.04)" : "transparent",
                          paddingTop: pIdx === 0 ? "12px" : "0",
                          paddingBottom: pIdx === 0 ? "12px" : "0",
                          borderRadius: pIdx === 0 ? "0 6px 6px 0" : "0"
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {/* Executive Summary */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  marginBottom: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <Rocket size={14} color="var(--gold-600)" />
                  <span>EXECUTIVE VENTURE DOSSIER</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginBottom: "14px" }}>
                  Concept Overview & Value Architecture
                </h2>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "20px" }}>
                  {idea.executiveSummary}
                </p>

                {/* Problem vs Solution Split */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
                  <div style={{ padding: "18px", backgroundColor: "#FEF2F2", borderRadius: "8px", border: "1px solid #FECACA" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#991B1B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                      Critical Industry Problem
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#7F1D1D", lineHeight: 1.6 }}>
                      {idea.problemStatement}
                    </div>
                  </div>

                  <div style={{ padding: "18px", backgroundColor: "#F0FDF4", borderRadius: "8px", border: "1px solid #BBF7D0" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                      Proprietary Solution
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#14532D", lineHeight: 1.6 }}>
                      {idea.proposedSolution}
                    </div>
                  </div>
                </div>
              </div>

              {/* Conglomerate Synergy with Best Star Group */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  marginBottom: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <Building2 size={14} color="var(--gold-600)" />
                  <span>CAPTIVE CONGLOMERATE SYNERGIES</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "12px" }}>
                  Immediate Operational Unfair Advantage
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "14px" }}>
                  {idea.synergyWithBestStar}
                </p>
                <div style={{ padding: "14px 18px", backgroundColor: "var(--gold-50)", borderRadius: "6px", border: "1px solid var(--gold-300)", fontSize: "0.82rem", color: "var(--gold-900)" }}>
                  <strong>Fiduciary Commitment:</strong> Best Star Group serves as the primary anchor customer and regulatory sponsor, drastically compressing time-to-market compared to isolated startups.
                </div>
              </div>

              {/* Technology & Protocol Architecture */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  marginBottom: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <Cpu size={14} color="var(--gold-600)" />
                  <span>TECHNICAL STACK & PROTOCOLS</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "14px" }}>
                  Proprietary Architecture Components
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {idea.technologyStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "7px 16px",
                        borderRadius: "20px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-gold-medium)",
                        color: "var(--text-primary)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <span style={{ width: "6px", height: "6px", backgroundColor: "var(--gold-500)", borderRadius: "50%" }} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4-Phase Roadmap Milestones */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  marginBottom: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <Clock size={14} color="var(--gold-600)" />
                  <span>INCUBATION MILESTONES & TIMELINE</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "18px" }}>
                  Phased Commercial Execution Roadmap
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {idea.projectedMilestones.map((ms, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: "16px 20px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-gold-subtle)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "16px",
                        flexWrap: "wrap"
                      }}
                    >
                      <div style={{ flex: 1, minWidth: "220px" }}>
                        <div style={{ fontSize: "0.86rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>
                          {ms.phase}
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                          {ms.objective}
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--text-muted)" }}>
                          {ms.timeline}
                        </span>
                        <span 
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            padding: "3px 10px",
                            borderRadius: "14px",
                            backgroundColor: ms.status === "Completed" ? "#DCFCE7" : ms.status === "In Progress" ? "#FEF3C7" : "#F3F4F6",
                            color: ms.status === "Completed" ? "#166534" : ms.status === "In Progress" ? "#92400E" : "#4B5563",
                            border: `1px solid ${ms.status === "Completed" ? "#86EFAC" : ms.status === "In Progress" ? "#FCD34D" : "#E5E7EB"}`
                          }}
                        >
                          {ms.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desired Co-Founder / Strategic Partner Profiles */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <Users size={14} color="var(--gold-600)" />
                  <span>HUMAN CAPITAL & CO-FOUNDER SEAT</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "12px" }}>
                  Profiles Desired for Co-Investment
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Best Star Group recruits experienced domain experts, entrepreneurs-in-residence, and technical leads with meaningful equity incentives:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {idea.coFounderProfileNeeded.map((prof, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.86rem",
                        color: "var(--text-primary)",
                        padding: "10px 14px",
                        backgroundColor: "var(--bg-surface)",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-subtle)"
                      }}
                    >
                      <Briefcase size={16} color="var(--gold-600)" />
                      <span style={{ fontWeight: 600 }}>{prof}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Partner & Co-Investment Enquiry Desk */}
            <div style={{ position: "sticky", top: "100px" }}>
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "12px",
                  border: "1.5px solid var(--border-gold-medium)",
                  padding: "32px",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
                }}
              >
                <div className="section-label">
                  <Briefcase size={14} color="var(--gold-600)" />
                  <span>VENTURE CO-INVESTMENT DESK</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                  Partner on this Venture
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  Interested in co-founding, deploying a commercial pilot, or co-investing in {idea.shortName}? Transmit your credentials directly to our investment directors.
                </p>

                {partnerRef ? (
                  <div style={{ textAlign: "center", padding: "24px 10px" }}>
                    <div 
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(16, 185, 129, 0.12)",
                        border: "2px solid #10B981",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "14px",
                      }}
                    >
                      <CheckCircle2 size={26} color="#10B981" />
                    </div>
                    <div className="font-serif" style={{ fontSize: "1.18rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                      Partnership Inquiry Logged
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                      Your interest in {idea.shortName} has been routed to our Venture Directors under tracking ref:
                    </p>
                    <div 
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "var(--gold-50)",
                        border: "1.5px solid var(--gold-500)",
                        borderRadius: "6px",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        fontFamily: "monospace",
                        color: "var(--gold-900)",
                        marginBottom: "18px"
                      }}
                    >
                      {partnerRef}
                    </div>
                    <button
                      type="button"
                      onClick={() => setPartnerRef(null)}
                      className="btn-luxury-gold"
                      style={{ padding: "8px 18px", fontSize: "0.76rem" }}
                    >
                      <span>TRANSMIT ANOTHER INQUIRY</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit}>
                    
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. K. Al-Hashimi"
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-medium)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="investor@holding.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-medium)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-medium)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Organization / Family Office
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Gulf Sovereign Ventures"
                        value={partnerForm.company}
                        onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-medium)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Nature of Collaboration *
                      </label>
                      <LuxurySelect
                        value={partnerForm.inquiryType}
                        onChange={(val) => setPartnerForm({ ...partnerForm, inquiryType: val })}
                        options={[
                          { value: "Strategic Joint Venture / Co-Investment", label: "Strategic Joint Venture / Co-Investment" },
                          { value: "Co-Founder / Technical Partner Seat", label: "Co-Founder / Technical Partner Seat" },
                          { value: "Enterprise Customer / Pilot Site Host", label: "Enterprise Customer / Pilot Site Host" },
                          { value: "Distribution & Licensing Agreement", label: "Distribution & Licensing Agreement" },
                        ]}
                      />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Executive Message & Strategic Value *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Outline your background, capital capabilities, or how your organization can accelerate this blueprint..."
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-medium)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.82rem",
                          color: "var(--text-primary)",
                          outline: "none",
                          lineHeight: 1.5,
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-gold"
                      style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "0.8rem",
                        justifyContent: "center",
                      }}
                    >
                      <Send size={14} />
                      <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT VENTURE PARTNER INQUIRY"}</span>
                    </button>

                  </form>
                )}

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                  <Link
                    href="/business-ideas"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--gold-700)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textDecoration: "none"
                    }}
                  >
                    <ArrowLeft size={13} />
                    <span>Return to All Business Ideas</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
