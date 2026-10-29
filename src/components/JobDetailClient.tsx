"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2, 
  Send, 
  ArrowLeft, 
  FileText, 
  DollarSign, 
  ShieldCheck, 
  Building2, 
  UploadCloud, 
  Sparkles,
  Share2,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LuxurySelect from "@/components/LuxurySelect";
import { CareerOpening, CAREER_OPENINGS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface JobDetailClientProps {
  job: CareerOpening;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const { t, isRtl } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCity: "",
    nationality: "",
    experience: job.experience,
    highestEducation: "Bachelor's Degree",
    noticePeriod: "30 Days",
    expectedSalary: "",
    coverNote: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationRef, setApplicationRef] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = "BSG-APP-" + Math.floor(100000 + Math.random() * 900000);
      setApplicationRef(randomRef);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Top Breadcrumb & Return Bar */}
      <div 
        style={{
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-gold-subtle)",
          padding: "12px 0",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
        }}
      >
        <div className="site-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
              {t("common.home")}
            </Link>
            <span>/</span>
            <Link href="/careers" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
              {t("common.careers")}
            </Link>
            <span>/</span>
            <span style={{ color: "var(--gold-800)", fontWeight: 700 }}>
              {job.title}
            </span>
          </div>

          <Link 
            href="/careers" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "6px", 
              color: "var(--gold-700)", 
              fontWeight: 700, 
              textDecoration: "none",
              fontSize: "0.8rem"
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to All Openings</span>
          </Link>
        </div>
      </div>

      {/* Sovereign Job Header Showcase */}
      <section 
        style={{
          background: "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)",
          color: "#FFFFFF",
          padding: "54px 0 60px",
          borderBottom: "2px solid rgba(212, 163, 40, 0.4)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Ambient Glow */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            right: "10%",
            width: "500px",
            height: "100%",
            background: "radial-gradient(circle, rgba(212, 163, 40, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(50px)"
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
            <span 
              style={{
                background: "rgba(212, 163, 40, 0.18)",
                border: "1px solid rgba(212, 163, 40, 0.4)",
                color: "var(--gold-300)",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "20px"
              }}
            >
              {job.department}
            </span>

            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>

            <span style={{ color: "var(--gold-400)", fontWeight: 700, fontSize: "0.84rem", letterSpacing: "0.06em" }}>
              {job.subsidiary}
            </span>
          </div>

          <h1 
            className="font-serif" 
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#FFFFFF",
              marginBottom: "20px",
              maxWidth: "960px"
            }}
          >
            {job.title}
          </h1>

          {/* Key Metric Tags Ribbon */}
          <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#D1D5DB",
              fontSize: "0.9rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={17} color="var(--gold-400)" />
              <span>{job.location}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Briefcase size={17} color="var(--gold-400)" />
              <span>{job.type}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock size={17} color="var(--gold-400)" />
              <span>Experience: {job.experience}</span>
            </div>

            {job.salaryRange && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-300)", fontWeight: 700 }}>
                <DollarSign size={17} color="var(--gold-400)" />
                <span>{job.salaryRange}</span>
              </div>
            )}
          </div>

          <div style={{ marginTop: "28px" }}>
            <a 
              href="#apply" 
              className="btn-luxury-gold"
              style={{ padding: "12px 28px", borderRadius: "30px" }}
            >
              <span>APPLY FOR THIS POSITION</span>
              <Send size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="section-spacing">
        <div className="site-container">
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
              alignItems: "flex-start",
            }}
            className="job-detail-grid"
          >
            {/* Left Column: Full Job Dossier */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              {/* 1. Executive Role Overview */}
              <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "34px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <Sparkles size={16} color="var(--gold-600)" />
                  <span className="font-serif" style={{ fontSize: "0.8rem", color: "var(--gold-700)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    ROLE SCOPE & ARCHITECTURE
                  </span>
                </div>
                <h2 className="font-serif" style={{ fontSize: "1.55rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                  Executive Position Overview
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.8, margin: 0 }}>
                  {job.overview || job.description}
                </p>
                {job.workSchedule && (
                  <div style={{ marginTop: "18px", padding: "10px 14px", background: "var(--gold-50)", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)", fontSize: "0.85rem", color: "var(--gold-900)", fontWeight: 600 }}>
                    📅 Schedule: {job.workSchedule}
                  </div>
                )}
              </div>

              {/* 2. Key Responsibilities & Deliverables */}
              {job.responsibilities && (
                <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "34px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <Briefcase size={16} color="var(--gold-600)" />
                    <span className="font-serif" style={{ fontSize: "0.8rem", color: "var(--gold-700)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      OPERATIONAL DELIVERABLES
                    </span>
                  </div>
                  <h2 className="font-serif" style={{ fontSize: "1.55rem", color: "var(--text-primary)", marginBottom: "20px" }}>
                    Key Responsibilities & Scope
                  </h2>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)", fontSize: "0.94rem", lineHeight: 1.65 }}>
                        <CheckCircle2 size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Candidate Qualifications & Requirements */}
              {job.qualifications && (
                <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "34px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <Award size={16} color="var(--gold-600)" />
                    <span className="font-serif" style={{ fontSize: "0.8rem", color: "var(--gold-700)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      ACADEMIC & PROFESSIONAL CRITERIA
                    </span>
                  </div>
                  <h2 className="font-serif" style={{ fontSize: "1.55rem", color: "var(--text-primary)", marginBottom: "20px" }}>
                    Qualifications & Credentials
                  </h2>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                    {job.qualifications.map((qual, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)", fontSize: "0.94rem", lineHeight: 1.65 }}>
                        <div style={{ width: "8px", height: "8px", backgroundColor: "var(--gold-600)", borderRadius: "2px", flexShrink: 0, marginTop: "8px" }} />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. Skills & Competencies */}
              {job.skills && (
                <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-gold-medium)", padding: "34px" }}>
                  <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                    Key Competencies & Technical Skills
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {job.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: "var(--gold-50)",
                          border: "1px solid var(--border-gold-medium)",
                          color: "var(--gold-900)",
                          padding: "8px 14px",
                          borderRadius: "6px",
                          fontSize: "0.84rem",
                          fontWeight: 700
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Remuneration & Benefits Package */}
              {job.benefits && (
                <div className="luxe-card" style={{ background: "linear-gradient(135deg, #0A0E17 0%, #171E2D 100%)", color: "#FFFFFF", border: "1.5px solid rgba(212, 163, 40, 0.45)", padding: "34px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <ShieldCheck size={18} color="var(--gold-400)" />
                    <span className="font-serif" style={{ fontSize: "0.78rem", color: "var(--gold-300)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      BEST STAR GROUP EXCELLENCE COVENANT
                    </span>
                  </div>
                  <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "18px" }}>
                    Executive Remuneration & Perks
                  </h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                    {job.benefits.map((ben, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.85)", fontSize: "0.92rem" }}>
                        <CheckCircle2 size={16} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. About the Operating Subsidiary */}
              <div className="luxe-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold-subtle)", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Building2 size={20} color="var(--gold-700)" />
                  <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                    About {job.subsidiary}
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  A core vertical of Best Star Group FZE operating with high-spec engineering, certified quality frameworks, and international compliance across the United Arab Emirates and regional markets.
                </p>
                <div style={{ marginTop: "14px" }}>
                  <Link href="/subsidiaries" style={{ color: "var(--gold-700)", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none" }}>
                    View Full Subsidiary Profile & Credentials →
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Dedicated Job Application Form (Sticky Desk) */}
            <div id="apply" style={{ position: "sticky", top: "95px" }}>
              <div 
                className="luxe-card"
                style={{
                  background: "var(--bg-card)",
                  border: "2px solid var(--border-gold-medium)",
                  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.08)",
                  borderRadius: "12px",
                  padding: "36px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <Sparkles size={14} color="var(--gold-600)" />
                  <span className="font-serif" style={{ fontSize: "0.74rem", color: "var(--gold-700)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    DIGITAL TALENT DESK
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                  Apply for this Role
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", marginBottom: "22px", lineHeight: 1.6 }}>
                  Submit your credentials directly to the executive talent committee of <strong>{job.subsidiary}</strong>.
                </p>

                {applicationRef ? (
                  <div 
                    style={{
                      padding: "32px 20px",
                      background: "var(--gold-50)",
                      border: "2px solid var(--gold-500)",
                      borderRadius: "10px",
                      textAlign: "center",
                      animation: "dropdownFade 0.3s ease"
                    }}
                  >
                    <CheckCircle2 size={48} color="var(--gold-600)" style={{ margin: "0 auto 14px" }} />
                    <h4 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                      Application Dispatched
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "16px" }}>
                      Your candidate dossier has been safely archived in the Best Star Group Talent Database.
                    </p>

                    <div style={{ background: "var(--bg-surface)", padding: "12px", borderRadius: "6px", border: "1px dashed var(--gold-400)", marginBottom: "18px" }}>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Application Reference</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--gold-800)", fontFamily: "monospace" }}>
                        {applicationRef}
                      </div>
                    </div>

                    <Link 
                      href="/careers" 
                      className="btn-luxury-outline"
                      style={{ padding: "8px 20px", fontSize: "0.78rem" }}
                    >
                      Browse Other Openings
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleApply} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    
                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Nuaimi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          border: "1.5px solid var(--border-gold-medium)",
                          borderRadius: "4px",
                          fontSize: "0.88rem",
                          background: "var(--bg-surface)",
                          color: "var(--text-primary)",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="candidate@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            border: "1.5px solid var(--border-gold-medium)",
                            borderRadius: "4px",
                            fontSize: "0.88rem",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                            outline: "none"
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            border: "1.5px solid var(--border-gold-medium)",
                            borderRadius: "4px",
                            fontSize: "0.88rem",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                            outline: "none"
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Current City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dubai, UAE"
                          value={formData.currentCity}
                          onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            border: "1.5px solid var(--border-gold-medium)",
                            borderRadius: "4px",
                            fontSize: "0.88rem",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                            outline: "none"
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Nationality *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Emirati / Expat"
                          value={formData.nationality}
                          onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            border: "1.5px solid var(--border-gold-medium)",
                            borderRadius: "4px",
                            fontSize: "0.88rem",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                            outline: "none"
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "12px" }}>
                      <div style={{ minWidth: 0 }}>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Notice Period
                        </label>
                        <LuxurySelect
                          value={formData.noticePeriod}
                          onChange={(val) => setFormData({ ...formData, noticePeriod: val })}
                          options={[
                            { value: "Immediate", label: "Immediate Availability" },
                            { value: "15 Days", label: "15 Days" },
                            { value: "30 Days", label: "30 Days" },
                            { value: "60 Days", label: "60 Days" },
                          ]}
                        />
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                          Expected Salary (AED)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 18,000 / month"
                          value={formData.expectedSalary}
                          onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            border: "1.5px solid var(--border-gold-medium)",
                            borderRadius: "4px",
                            fontSize: "0.88rem",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                            outline: "none"
                          }}
                        />
                      </div>
                    </div>

                    {/* Resume / CV Attachment Field */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Upload Curriculum Vitae (PDF / Word) *
                      </label>
                      <label 
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px",
                          border: "1.5px dashed var(--gold-500)",
                          borderRadius: "6px",
                          background: "var(--gold-50)",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        <UploadCloud size={24} color="var(--gold-700)" style={{ marginBottom: "4px" }} />
                        <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--gold-800)" }}>
                          {fileName ? fileName : "Click to select CV document"}
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          Supported formats: PDF, DOCX (Max 5MB)
                        </span>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          style={{ display: "none" }} 
                        />
                      </label>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Executive Cover Note (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly state your relevant project experience, key certifications, and reason for joining Best Star Group..."
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          border: "1.5px solid var(--border-gold-medium)",
                          borderRadius: "4px",
                          fontSize: "0.88rem",
                          background: "var(--bg-surface)",
                          color: "var(--text-primary)",
                          resize: "vertical",
                          outline: "none"
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-gold"
                      style={{
                        width: "100%",
                        padding: "13px",
                        borderRadius: "6px",
                        fontSize: "0.86rem",
                        marginTop: "8px"
                      }}
                    >
                      <span>{isSubmitting ? "TRANSMITTING APPLICATION..." : "SUBMIT CANDIDATE APPLICATION"}</span>
                      <Send size={14} />
                    </button>

                  </form>
                )}

                <div style={{ marginTop: "16px", textAlign: "center", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  🔒 Confidential submission under UAE Federal Law No. 8 & Data Protection Policy.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .job-detail-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
