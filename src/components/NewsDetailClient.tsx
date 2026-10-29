"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Building2, 
  Quote, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LuxurySelect from "@/components/LuxurySelect";
import { NewsItem, NEWS_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface NewsDetailClientProps {
  newsItem: NewsItem;
}

export default function NewsDetailClient({ newsItem }: NewsDetailClientProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    enquiryType: "Press Interview Request",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionRef, setSubmissionRef] = useState<string | null>(null);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = "BSG-MEDIA-" + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);
    }, 1000);
  };

  const otherReleases = NEWS_ITEMS.filter((n) => n.id !== newsItem.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Breadcrumb Navigation Bar */}
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
            <Link href="/news" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
              {t("common.news")}
            </Link>
            <span>/</span>
            <span style={{ color: "var(--gold-800)", fontWeight: 700 }}>
              {newsItem.referenceNo || newsItem.category}
            </span>
          </div>

          <Link 
            href="/news" 
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
            <span>Return to All Press Releases</span>
          </Link>
        </div>
      </div>

      {/* Sovereign Press Release Hero */}
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
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "18px" }}>
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
              {newsItem.category}
            </span>

            {newsItem.referenceNo && (
              <span 
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#D1D5DB",
                  fontSize: "0.74rem",
                  fontFamily: "monospace",
                  padding: "4px 10px",
                  borderRadius: "4px"
                }}
              >
                REF: {newsItem.referenceNo}
              </span>
            )}
          </div>

          <h1 
            className="font-serif" 
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.9rem)",
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#FFFFFF",
              marginBottom: "22px",
              maxWidth: "1050px"
            }}
          >
            {newsItem.title}
          </h1>

          {/* Metadata Ribbon */}
          <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "22px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#D1D5DB",
              fontSize: "0.88rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={16} color="var(--gold-400)" />
              <span>Published: {newsItem.date}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={16} color="var(--gold-400)" />
              <span>{newsItem.location}</span>
            </div>

            {newsItem.author && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-300)" }}>
                <Building2 size={16} color="var(--gold-400)" />
                <span>{newsItem.author}</span>
              </div>
            )}
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
            className="news-detail-grid"
          >
            
            {/* Left Column: Full Journalistic Dossier */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              {/* Media Image Showcase */}
              {newsItem.image && (
                <div 
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "380px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1.5px solid var(--border-gold-medium)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  <Image
                    src={newsItem.image}
                    alt={newsItem.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 800px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "16px 20px",
                      background: "linear-gradient(transparent, rgba(8, 12, 20, 0.85))",
                      color: "#FFFFFF",
                      fontSize: "0.8rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span>Best Star Group Official Media Archive</span>
                    <span style={{ color: "var(--gold-400)", fontWeight: 700 }}>HIGH-RES ASSET</span>
                  </div>
                </div>
              )}

              {/* Main Article Content */}
              <div 
                className="luxe-card" 
                style={{ 
                  background: "var(--bg-card)", 
                  border: "1.5px solid var(--border-gold-medium)", 
                  padding: "36px" 
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <Sparkles size={16} color="var(--gold-600)" />
                  <span className="font-serif" style={{ fontSize: "0.8rem", color: "var(--gold-700)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    OFFICIAL DISCLOSURE
                  </span>
                </div>

                <div 
                  style={{ 
                    fontSize: "1.12rem", 
                    fontWeight: 600, 
                    color: "var(--text-primary)", 
                    lineHeight: 1.7, 
                    marginBottom: "24px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid var(--border-gold-subtle)"
                  }}
                >
                  {newsItem.summary}
                </div>

                <div style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
                  <p style={{ marginBottom: "18px" }}>
                    {newsItem.fullStory}
                  </p>
                </div>

                {/* Key Strategic Highlights */}
                {newsItem.keyHighlights && newsItem.keyHighlights.length > 0 && (
                  <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--border-gold-subtle)" }}>
                    <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                      Strategic Deliverables & Milestones
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {newsItem.keyHighlights.map((hl, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                          <CheckCircle2 size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Official Spokesperson Quote Card */}
              {newsItem.spokespersonQuote && (
                <div 
                  className="luxe-card"
                  style={{
                    background: "linear-gradient(135deg, #0A0E17 0%, #171E2D 100%)",
                    color: "#FFFFFF",
                    border: "1.5px solid rgba(212, 163, 40, 0.45)",
                    padding: "36px",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Quote size={44} color="rgba(212, 163, 40, 0.2)" style={{ position: "absolute", top: "18px", right: "24px" }} />
                  
                  <div style={{ color: "var(--gold-300)", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
                    EXECUTIVE LEADERSHIP COMMENTARY
                  </div>

                  <blockquote style={{ fontSize: "1.08rem", fontStyle: "italic", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "20px" }}>
                    "{newsItem.spokespersonQuote.quote}"
                  </blockquote>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--gold-600)", display: "flex", alignItems: "center", justifyContent: "center", color: "#080C14", fontWeight: 800 }}>
                      ★
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#FFFFFF", fontSize: "0.95rem" }}>
                        {newsItem.spokespersonQuote.speaker}
                      </div>
                      <div style={{ color: "var(--gold-400)", fontSize: "0.78rem" }}>
                        {newsItem.spokespersonQuote.designation}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Corporate Compliance & Regulatory Seal */}
              <div 
                style={{
                  background: "var(--gold-50)",
                  border: "1.5px solid var(--gold-400)",
                  borderRadius: "8px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px"
                }}
              >
                <ShieldCheck size={26} color="var(--gold-700)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 800, color: "var(--gold-900)", fontSize: "0.9rem", marginBottom: "4px" }}>
                    Official Best Star Group Holding Regulatory Disclosure
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem", margin: 0, lineHeight: 1.6 }}>
                    This release has been verified and registered with the Corporate Directorate of Best Star Group FZE. It conforms with commercial regulations, public transparency frameworks, and UAE federal reporting standards.
                  </p>
                </div>
              </div>

              {/* Other Recent Press Releases */}
              <div style={{ marginTop: "10px" }}>
                <h3 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginBottom: "18px" }}>
                  Other Press Releases & Notices
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                  {otherReleases.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/news/${rel.id}`}
                      className="luxe-card"
                      style={{
                        background: "var(--bg-card)",
                        border: "1.5px solid var(--border-gold-subtle)",
                        padding: "20px",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                          <span style={{ color: "var(--gold-700)", fontWeight: 700 }}>{rel.category}</span>
                          <span>{rel.date}</span>
                        </div>
                        <h4 className="font-serif" style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.4, margin: 0 }}>
                          {rel.title}
                        </h4>
                      </div>

                      <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--gold-700)", fontSize: "0.78rem", fontWeight: 700 }}>
                        <span>Read Full Release</span>
                        <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Media & Corporate Relations Enquiry Desk */}
            <div id="enquire" style={{ position: "sticky", top: "95px" }}>
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
                    CORPORATE COMMUNICATIONS DESK
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                  Enquire About This Release
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", marginBottom: "22px", lineHeight: 1.6 }}>
                  Direct channel for accredited journalists, institutional analysts, commercial partners, and stakeholders to connect with our media team.
                </p>

                {submissionRef ? (
                  <div 
                    style={{
                      padding: "30px 20px",
                      background: "var(--gold-50)",
                      border: "2px solid var(--gold-500)",
                      borderRadius: "10px",
                      textAlign: "center",
                      animation: "dropdownFade 0.3s ease"
                    }}
                  >
                    <CheckCircle2 size={44} color="var(--gold-600)" style={{ margin: "0 auto 12px" }} />
                    <h4 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "6px" }}>
                      Media Enquiry Transmitted
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", marginBottom: "16px" }}>
                      Your inquiry regarding <strong>{newsItem.referenceNo || newsItem.category}</strong> has been assigned to the Group Communications Officer.
                    </p>

                    <div style={{ background: "var(--bg-surface)", padding: "12px", borderRadius: "6px", border: "1px dashed var(--gold-400)", marginBottom: "16px" }}>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Official Tracking Reference</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--gold-800)", fontFamily: "monospace" }}>
                        {submissionRef}
                      </div>
                    </div>

                    <button 
                      onClick={() => setSubmissionRef(null)}
                      className="btn-luxury-outline"
                      style={{ padding: "8px 20px", fontSize: "0.78rem" }}
                    >
                      Submit Another Question
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    
                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Full Name / Journalist *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
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

                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Media Outlet / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gulf Business / Thomson Reuters"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
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
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="press@media.com"
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
                          placeholder="+971 50 000 0000"
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

                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Nature of Enquiry *
                      </label>
                      <LuxurySelect
                        value={formData.enquiryType}
                        onChange={(val) => setFormData({ ...formData, enquiryType: val })}
                        options={[
                          { value: "Press Interview Request", label: "Executive Interview Request" },
                          { value: "Fact Checking & Quotation Verification", label: "Fact-Checking & Quote Verification" },
                          { value: "High-Res Media Asset Request", label: "High-Resolution Photo / Logo Pack Request" },
                          { value: "Commercial Due Diligence", label: "Commercial Due Diligence Inquiry" },
                          { value: "Regulatory Transparency Question", label: "Regulatory Transparency Question" },
                        ]}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.74rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", textTransform: "uppercase" }}>
                        Questions for Communications Directorate *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please state your specific questions or deadline for this story..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                      <span>{isSubmitting ? "DISPATCHING ENQUIRY..." : "TRANSMIT MEDIA ENQUIRY"}</span>
                      <Send size={14} />
                    </button>

                  </form>
                )}

                <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--border-gold-subtle)", fontSize: "0.74rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck size={14} color="var(--gold-600)" />
                  <span>Direct routing to: press@beststargroup.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (min-width: 992px) {
          .news-detail-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
