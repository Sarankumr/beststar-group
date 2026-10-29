"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Lightbulb, 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Search, 
  Send,
  Building2,
  TrendingUp,
  Cpu,
  ChevronRight,
  Filter,
  FileText
} from "lucide-react";
import { BUSINESS_IDEAS, BusinessIdea } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";
import LuxurySelect from "@/components/LuxurySelect";

export default function BusinessIdeasPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Proposal Submission Form State
  const [pitchData, setPitchData] = useState({
    founderName: "",
    email: "",
    phone: "",
    organization: "",
    ideaTitle: "",
    category: "AI & Smart Infrastructure",
    stage: "Concept Validation",
    capitalRequired: "AED 1M - 3M",
    projectDescription: "",
    executiveSummary: "",
    synergyWithBestStar: "",
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "All",
    "AI & Smart Infrastructure",
    "Cold-Chain & MedTech",
    "Clean Energy & Mobility",
    "Industrial IoT & SCADA",
    "Luxury Concierge & Fintech"
  ];

  const filteredIdeas = BUSINESS_IDEAS.filter((idea) => {
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      idea.title.toLowerCase().includes(q) ||
      idea.tagline.toLowerCase().includes(q) ||
      idea.executiveSummary.toLowerCase().includes(q) ||
      (idea.projectDescription && idea.projectDescription.toLowerCase().includes(q)) ||
      idea.hubLocation.toLowerCase().includes(q) ||
      idea.technologyStack.some(t => t.toLowerCase().includes(q))
    );
  });

  const handleSubmitPitch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(`BSG-VENTURE-${randomCode}`);
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
              {t("common.businessIdeas")} & Incubation
            </span>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <div className="section-label">
              <Rocket size={14} color="var(--gold-600)" />
              <span>BEST STAR VENTURES & INCUBATION LAB</span>
            </div>
            <h1 className="section-title" style={{ marginBottom: "16px" }}>
              New Business Ideas & <span className="text-gold-gradient">Venture Incubation</span>
            </h1>
            <p className="section-subtitle">
              Bridging transformative ideas with corporate balance sheets, operational licenses, and Gulf market distribution. Explore active incubation concepts funded by Best Star Group, or pitch your enterprise venture directly to our Chairman’s Open Innovation Board.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
              <a
                href="#submit-idea"
                className="btn-luxury-gold"
                style={{ padding: "10px 22px", fontSize: "0.82rem" }}
              >
                <Lightbulb size={15} />
                <span>PITCH YOUR BUSINESS IDEA</span>
              </a>
              <a
                href="#pipeline"
                style={{
                  background: "var(--bg-card)",
                  border: "1.5px solid var(--border-gold-medium)",
                  color: "var(--text-primary)",
                  padding: "9px 20px",
                  borderRadius: "30px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-card)")}
              >
                <span>EXPLORE ACTIVE PIPELINE (5)</span>
                <ChevronRight size={14} color="var(--gold-600)" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Chairman's Open Innovation Mandate */}
      <section style={{ backgroundColor: "var(--bg-deep)", padding: "48px 0" }}>
        <div className="site-container">
          <div 
            style={{
              background: "linear-gradient(135deg, #0A0E17 0%, #172033 100%)",
              borderRadius: "14px",
              border: "1.5px solid rgba(212, 163, 40, 0.45)",
              padding: "36px 40px",
              color: "#FFFFFF",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "32px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
            }}
          >
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--gold-400)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}>
                CHAIRMAN&apos;S OPEN INNOVATION THESIS
              </div>
              <h2 className="font-serif" style={{ fontSize: "1.35rem", color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3 }}>
                &ldquo;Disruption does not require bureaucratic overhead. It demands agile minds backed by patient industrial infrastructure.&rdquo;
              </h2>
              <p style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7, maxWidth: "720px", margin: 0 }}>
                Best Star Group is not a passive private equity house. When we co-found or incubate a venture, we provide our 10 operating entities as immediate paying clients, grant access to our UAE Ministry licenses, and deploy our technical engineers to build functional prototypes.
              </p>
              <div style={{ marginTop: "14px", fontSize: "0.8rem", color: "var(--gold-300)", fontWeight: 700 }}>
                Ibunu Suwoothu Kamal — Chairman & Founder, Best Star Group Holding FZE
              </div>
            </div>

            <div 
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderLeft: "1px solid rgba(212,163,40,0.3)",
                paddingLeft: "32px",
                minWidth: "220px",
              }}
              className="desktop-only-inline"
            >
              <div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--font-serif)" }}>
                  AED 35M+
                </div>
                <div style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.65)" }}>
                  Venture Incubation Fund
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--gold-400)", fontFamily: "var(--font-serif)" }}>
                  5 Verticals
                </div>
                <div style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.65)" }}>
                  Active Prototyping
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Pipeline Grid */}
      <section id="pipeline" className="section-spacing" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="site-container">
          
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <TrendingUp size={14} color="var(--gold-600)" />
              <span>PROPRIETARY PIPELINE</span>
            </div>
            <h2 className="section-title">
              Active Best Star <span className="text-gold-gradient">Incubation Blueprints</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Select any venture blueprint below to examine its market opportunity, technical architecture, and partner co-investment opportunities.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div style={{ maxWidth: "860px", margin: "0 auto 34px auto" }}>
            
            {/* Search Input */}
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--bg-surface)",
                border: "1.5px solid var(--border-gold-medium)",
                borderRadius: "32px",
                padding: "6px 18px",
                boxShadow: "0 4px 18px rgba(184, 134, 11, 0.08)",
                marginBottom: "18px",
              }}
            >
              <Search size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginInlineEnd: "10px" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ideas by name, technology, or sector (e.g. AI, Chiller, Drone, SCADA)..."
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
                {filteredIdeas.length} {filteredIdeas.length === 1 ? "Idea" : "Ideas"}
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
                      : "var(--bg-card)",
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
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
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
                {/* Image & Badges */}
                <div style={{ position: "relative", width: "100%", height: "200px", backgroundColor: "#080C14" }}>
                  <Image
                    src={idea.image}
                    alt={idea.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 10, 16, 0.9) 0%, rgba(7, 10, 16, 0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Corner Badges */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", right: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span 
                      style={{
                        background: "rgba(8, 12, 20, 0.88)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(212, 163, 40, 0.5)",
                        color: "var(--gold-300)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {idea.category}
                    </span>

                    <span 
                      style={{
                        background: "#D4A328",
                        color: "#080C14",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {idea.stage}
                    </span>
                  </div>

                  <div style={{ position: "absolute", bottom: "14px", left: "18px", right: "18px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--gold-400)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {idea.hubLocation}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.3 }}>
                      {idea.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--gold-800)", fontWeight: 600, marginBottom: "14px" }}>
                      {idea.tagline}
                    </p>
                    {/* Project Description Block */}
                    <div style={{ marginBottom: "16px" }}>
                      <div 
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "5px", 
                          fontSize: "0.72rem", 
                          fontWeight: 800, 
                          color: "var(--gold-700)", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.06em",
                          marginBottom: "4px" 
                        }}
                      >
                        <FileText size={12} color="var(--gold-600)" />
                        <span>Project Description</span>
                      </div>
                      <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        {idea.projectDescription 
                          ? (idea.projectDescription.length > 170 ? idea.projectDescription.slice(0, 170) + "..." : idea.projectDescription) 
                          : idea.executiveSummary.slice(0, 160) + "..."}
                      </p>
                    </div>

                    {/* Metric Badges */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "18px", padding: "10px", backgroundColor: "var(--bg-surface)", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)" }}>
                      <div>
                        <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Capital Target</div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)" }}>{idea.capitalRequirement.split(" ")[0]} {idea.capitalRequirement.split(" ")[1]}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>TAM Potential</div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--gold-700)" }}>{idea.tam.split("(")[0]}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link
                      href={`/business-ideas/${idea.id}`}
                      className="btn-luxury-gold"
                      style={{ padding: "8px 16px", fontSize: "0.75rem", width: "100%", justifyContent: "center" }}
                    >
                      <span>INSPECT VENTURE BLUEPRINT</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Idea Pitch Submission Form */}
      <section id="submit-idea" className="section-spacing" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="site-container" style={{ maxWidth: "860px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <Lightbulb size={14} color="var(--gold-600)" />
              <span>ENTREPRENEUR & INVENTOR DESK</span>
            </div>
            <h2 className="section-title">
              Pitch Your <span className="text-gold-gradient">Business Idea</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Have an innovative concept in Clean Mobility, Cold-Chain MedTech, AI Infrastructure, or Industrial Logistics? Submit your blueprint directly to Best Star Group&apos;s executive investment committee.
            </p>
          </div>

          <div 
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "12px",
              border: "1.5px solid var(--border-gold-medium)",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >

            {submittedRef ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div 
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "2px solid #10B981",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <CheckCircle2 size={32} color="#10B981" />
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                  Idea Blueprint Transmitted Successfully
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", maxWidth: "560px", margin: "0 auto 20px auto", lineHeight: 1.6 }}>
                  Your proposal has been logged with the Office of the Chairman under official tracking reference:
                </p>
                <div 
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    backgroundColor: "var(--gold-50)",
                    border: "1.5px solid var(--gold-500)",
                    borderRadius: "8px",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--gold-900)",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                    marginBottom: "24px"
                  }}
                >
                  {submittedRef}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px auto" }}>
                  Our venture evaluation committee reviews proposals on a bi-weekly cycle. Qualified blueprints will be invited to a formal NDA and pitch presentation in Dubai or via secure executive video conference.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setPitchData({
                      founderName: "",
                      email: "",
                      phone: "",
                      organization: "",
                      ideaTitle: "",
                      category: "AI & Smart Infrastructure",
                      stage: "Concept Validation",
                      capitalRequired: "AED 1M - 3M",
                      projectDescription: "",
                      executiveSummary: "",
                      synergyWithBestStar: "",
                    });
                  }}
                  className="btn-luxury-gold"
                  style={{ padding: "10px 24px", fontSize: "0.8rem" }}
                >
                  <span>SUBMIT ANOTHER VENTURE IDEA</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitPitch}>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Founder / Pitcher Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Tariq Al-Mansoor"
                      value={pitchData.founderName}
                      onChange={(e) => setPitchData({ ...pitchData, founderName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-medium)",
                        backgroundColor: "var(--bg-surface)",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@enterprise.com"
                      value={pitchData.email}
                      onChange={(e) => setPitchData({ ...pitchData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-medium)",
                        backgroundColor: "var(--bg-surface)",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={pitchData.phone}
                      onChange={(e) => setPitchData({ ...pitchData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-medium)",
                        backgroundColor: "var(--bg-surface)",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Startup / University / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex AI Labs Ltd."
                      value={pitchData.organization}
                      onChange={(e) => setPitchData({ ...pitchData, organization: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-medium)",
                        backgroundColor: "var(--bg-surface)",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                    Venture / Business Idea Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Autonomous Solar-Powered Chiller Precooling Unit"
                    value={pitchData.ideaTitle}
                    onChange={(e) => setPitchData({ ...pitchData, ideaTitle: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-gold-medium)",
                      backgroundColor: "var(--bg-surface)",
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Target Sector *
                    </label>
                    <LuxurySelect
                      value={pitchData.category}
                      onChange={(val) => setPitchData({ ...pitchData, category: val })}
                      options={[
                        { value: "AI & Smart Infrastructure", label: "AI & Smart Infrastructure" },
                        { value: "Cold-Chain & MedTech", label: "Cold-Chain & MedTech" },
                        { value: "Clean Energy & Mobility", label: "Clean Energy & Mobility" },
                        { value: "Industrial IoT & SCADA", label: "Industrial IoT & SCADA" },
                        { value: "Luxury Concierge & Fintech", label: "Luxury Concierge & Fintech" },
                      ]}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Current Stage *
                    </label>
                    <LuxurySelect
                      value={pitchData.stage}
                      onChange={(val) => setPitchData({ ...pitchData, stage: val })}
                      options={[
                        { value: "Concept Validation", label: "Concept Validation" },
                        { value: "Working Prototype / MVP", label: "Working Prototype / MVP" },
                        { value: "Pilot Testing", label: "Pilot Testing" },
                        { value: "Commercial Scaling", label: "Commercial Scaling" },
                      ]}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Capital / Resource Sought *
                    </label>
                    <LuxurySelect
                      value={pitchData.capitalRequired}
                      onChange={(val) => setPitchData({ ...pitchData, capitalRequired: val })}
                      options={[
                        { value: "AED 500K - 1M", label: "AED 500K - 1M (Incubation Seed)" },
                        { value: "AED 1M - 3M", label: "AED 1M - 3M (Co-Development)" },
                        { value: "AED 3M - 10M", label: "AED 3M - 10M (Strategic Joint Venture)" },
                        { value: "Distribution & Licensing Only", label: "Distribution & Licensing Only" },
                      ]}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      Project Description *
                    </label>
                    <span style={{ fontSize: "0.7rem", color: "var(--gold-700)", fontWeight: 600 }}>
                      Technical Architecture & Scope
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide a comprehensive project description: technical architecture, operational methodology, target deliverables, and commercial market impact..."
                    value={pitchData.projectDescription || pitchData.executiveSummary}
                    onChange={(e) => setPitchData({ ...pitchData, projectDescription: e.target.value, executiveSummary: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-gold-medium)",
                      backgroundColor: "var(--bg-surface)",
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                      outline: "none",
                      lineHeight: 1.6,
                    }}
                  />
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px", display: "block" }}>
                    Specify proprietary technologies, operational rollout plans, and integration targets.
                  </span>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                    Synergy with Best Star Group
                  </label>
                  <input
                    type="text"
                    placeholder="How does your venture integrate with Best Star Pharma, Facility Management, Cargo, Fleet, or Power?"
                    value={pitchData.synergyWithBestStar}
                    onChange={(e) => setPitchData({ ...pitchData, synergyWithBestStar: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-gold-medium)",
                      backgroundColor: "var(--bg-surface)",
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                      outline: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury-gold"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "0.85rem",
                    justifyContent: "center",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "TRANSMITTING BLUEPRINT..." : "SUBMIT VENTURE BLUEPRINT FOR INCUBATION EVALUATION"}</span>
                </button>

                <div style={{ textAlign: "center", marginTop: "14px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  All blueprint submissions are automatically protected under Best Star Group Holding FZE Mutual Non-Disclosure Protocols.
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
