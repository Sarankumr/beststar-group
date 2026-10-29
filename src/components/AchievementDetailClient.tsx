"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Send, 
  Share2, 
  Sparkles,
  Building2,
  FileCheck2,
  Quote
} from "lucide-react";
import { Achievement, ACHIEVEMENTS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface AchievementDetailClientProps {
  achievement: Achievement;
}

export default function AchievementDetailClient({ achievement }: AchievementDetailClientProps) {
  const { t, language } = useLanguage();

  const [verifyForm, setVerifyForm] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Official Citation & Audit Verification",
    message: "",
  });

  const [verificationRef, setVerificationRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000);
      setVerificationRef(`BSG-VERIFY-${code}`);
      setIsSubmitting(false);
    }, 600);
  };

  const otherAchievements = ACHIEVEMENTS.filter((a) => a.id !== achievement.id).slice(0, 3);

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
          
          {/* Breadcrumbs */}
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
            <Link href="/achievements" style={{ color: "var(--gold-700)", textDecoration: "none" }}>
              Achievements & Accolades
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {achievement.badge}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "40px", alignItems: "center" }}>
            
            {/* Left: Titles, Badge & Authority */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
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
                  {achievement.category}
                </span>

                <span 
                  style={{
                    backgroundColor: "#080C14",
                    color: "var(--gold-300)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 12px",
                    borderRadius: "20px",
                    border: "1px solid rgba(212,163,40,0.4)"
                  }}
                >
                  CONFERRED {achievement.year}
                </span>

                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={12} color="var(--gold-600)" />
                  {achievement.location}
                </span>
              </div>

              <h1 className="section-title" style={{ fontSize: "2rem", lineHeight: 1.25, marginBottom: "16px" }}>
                {achievement.title}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)" }}>
                <Award size={18} color="var(--gold-600)" />
                <div style={{ fontSize: "0.84rem", color: "var(--text-primary)" }}>
                  <strong>Conferred By:</strong> {achievement.awardingBody}
                </div>
              </div>

              {/* Reference Metadata */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <span><strong>Verification Ref:</strong> {achievement.referenceCode}</span>
                <span>•</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#10B981", fontWeight: 700 }}>
                  <ShieldCheck size={14} />
                  Official Audited Citation
                </span>
              </div>
            </div>

            {/* Right: Visual Cover */}
            <div 
              style={{
                position: "relative",
                width: "100%",
                height: "320px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid var(--border-gold-medium)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
                backgroundColor: "#080C14"
              }}
            >
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                style={{ objectFit: "cover" }}
                priority
              />
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7, 10, 16, 0.8) 0%, transparent 60%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--gold-300)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  OFFICIAL INSTITUTIONAL RECORD
                </div>
                <div style={{ fontSize: "0.95rem", color: "#FFFFFF", fontWeight: 700 }}>
                  {achievement.badge} • Best Star Group
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-spacing" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="site-container">
          
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1.2fr", gap: "40px", alignItems: "flex-start" }}>
            
            {/* Left Column: Dossier, Impact Metrics & Quotes */}
            <div>
              
              {/* Full Detailed Dossier */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "36px",
                  marginBottom: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <div className="section-label">
                  <FileCheck2 size={14} color="var(--gold-600)" />
                  <span>OFFICIAL CITATION DOSSIER</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                  Institutional Context & Operational Rigor
                </h2>
                <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "20px" }}>
                  {achievement.fullDossier}
                </p>

                {/* Industrial Significance */}
                <div style={{ padding: "20px 24px", backgroundColor: "var(--gold-50)", borderRadius: "8px", border: "1px solid var(--gold-300)", marginTop: "24px" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--gold-900)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                    Strategic Industrial Significance
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--gold-950)", lineHeight: 1.7 }}>
                    {achievement.significance}
                  </div>
                </div>
              </div>

              {/* Key Quantitative Metrics Grid */}
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
                  <Sparkles size={14} color="var(--gold-600)" />
                  <span>AUDITED PERFORMANCE INDICATORS</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "20px" }}>
                  Key Milestone Metrics
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  {achievement.keyMetrics.map((km, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: "20px",
                        backgroundColor: "var(--bg-surface)",
                        borderRadius: "8px",
                        border: "1px solid var(--border-gold-subtle)",
                        textAlign: "center"
                      }}
                    >
                      <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--gold-800)", fontFamily: "var(--font-serif)", marginBottom: "4px" }}>
                        {km.value}
                      </div>
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
                        {km.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Leadership Quote */}
              <div 
                style={{
                  background: "linear-gradient(135deg, #0A0E17 0%, #172033 100%)",
                  borderRadius: "10px",
                  border: "1.5px solid rgba(212,163,40,0.4)",
                  padding: "32px",
                  color: "#FFFFFF",
                  marginBottom: "28px",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.08)"
                }}
              >
                <Quote size={28} color="var(--gold-400)" style={{ marginBottom: "12px", opacity: 0.8 }} />
                <p className="font-serif" style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, color: "rgba(255,255,255,0.92)", marginBottom: "16px" }}>
                  &ldquo;{achievement.executiveQuote.quote}&rdquo;
                </p>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--gold-300)" }}>
                  {achievement.executiveQuote.speaker}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  {achievement.executiveQuote.designation}
                </div>
              </div>

              {/* Related Achievements */}
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-gold-medium)",
                  padding: "32px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                }}
              >
                <h3 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                  Other Prestigious Accolades
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {otherAchievements.map((other) => (
                    <Link
                      key={other.id}
                      href={`/achievements/${other.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 16px",
                        backgroundColor: "var(--bg-surface)",
                        borderRadius: "6px",
                        border: "1px solid var(--border-gold-subtle)",
                        textDecoration: "none",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--gold-50)";
                        e.currentTarget.style.borderColor = "var(--gold-500)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                        e.currentTarget.style.borderColor = "var(--border-gold-subtle)";
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {other.title}
                        </div>
                        <div style={{ fontSize: "0.74rem", color: "var(--gold-700)", fontWeight: 600 }}>
                          {other.awardingBody} • {other.year}
                        </div>
                      </div>
                      <ChevronRight size={16} color="var(--gold-600)" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Verification Desk */}
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
                  <ShieldCheck size={14} color="var(--gold-600)" />
                  <span>FIDUCIARY AUDIT DESK</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                  Citation Verification Desk
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  Government auditors, procurement officers, and institutional partners may request authenticated certificate copies and compliance logs for {achievement.badge}.
                </p>

                {verificationRef ? (
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
                      Verification Request Logged
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                      Your audit request has been transmitted to the Office of the General Counsel under tracking code:
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
                      {verificationRef}
                    </div>
                    <button
                      type="button"
                      onClick={() => setVerificationRef(null)}
                      className="btn-luxury-gold"
                      style={{ padding: "8px 18px", fontSize: "0.76rem" }}
                    >
                      <span>TRANSMIT ANOTHER REQUEST</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVerifySubmit}>
                    
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Officer / Auditor Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eng. Humaid Al-Dhaheri"
                        value={verifyForm.name}
                        onChange={(e) => setVerifyForm({ ...verifyForm, name: e.target.value })}
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
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="auditor@authority.gov.ae"
                        value={verifyForm.email}
                        onChange={(e) => setVerifyForm({ ...verifyForm, email: e.target.value })}
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
                        Government / Enterprise Entity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ministry / Sovereign Authority"
                        value={verifyForm.organization}
                        onChange={(e) => setVerifyForm({ ...verifyForm, organization: e.target.value })}
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

                    <div style={{ marginBottom: "18px" }}>
                      <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        Verification Scope / Request Specifications *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Please state if you require ISO certification copies, MOHAP GDP temperature logs, or DEWA commissioning certificates..."
                        value={verifyForm.message}
                        onChange={(e) => setVerifyForm({ ...verifyForm, message: e.target.value })}
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
                      <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT VERIFICATION REQUEST"}</span>
                    </button>

                  </form>
                )}

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                  <Link
                    href="/achievements"
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
                    <span>Return to All Achievements</span>
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
