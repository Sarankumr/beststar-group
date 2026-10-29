"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUp, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SUBSIDIARIES, GLOBAL_OFFICES } from "@/data/companyData";

export default function Footer() {
  const { t, isRtl } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <footer 
      style={{
        backgroundColor: "#070A10",
        color: "#E5E7EB",
        borderTop: "2px solid rgba(212, 163, 40, 0.45)",
        paddingTop: "70px",
        paddingBottom: "36px",
        position: "relative",
        zIndex: 20,
        overflow: "hidden",
      }}
    >
      {/* Background Subtle Ambient Gold Glow */}
      <div 
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(circle, rgba(212, 163, 40, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Top Footer: Brand Presentation & Executive Newsletter */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            paddingBottom: "50px",
            borderBottom: "1px solid rgba(212, 163, 40, 0.2)",
          }}
          className="footer-top-grid"
        >
          {/* Brand Presentation */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div 
                style={{
                  position: "relative",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #D4A328",
                  boxShadow: "0 0 16px rgba(212, 163, 40, 0.4)",
                  backgroundColor: "#080C14",
                  flexShrink: 0
                }}
              >
                <Image
                  src="/images/logo-gold-dark.jpg"
                  alt="Best Star Group Official Logo"
                  fill
                  sizes="56px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <div 
                  className="font-serif" 
                  style={{ 
                    fontSize: "1.45rem", 
                    fontWeight: 900, 
                    letterSpacing: "0.08em", 
                    color: "#FFFFFF"
                  }}
                >
                  BEST STAR GROUP
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--gold-400)", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
                  {t("common.holdingFze")}
                </div>
              </div>
            </div>

            <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "0.92rem", lineHeight: 1.75, maxWidth: "520px", margin: 0, marginBottom: "20px" }}>
              {t("footer.holdingDescription")}
            </p>

            {/* Holding Trust Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(212, 163, 40, 0.1)",
                  border: "1px solid rgba(212, 163, 40, 0.35)",
                  color: "var(--gold-300)",
                  fontSize: "0.72rem",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontWeight: 600
                }}
              >
                <ShieldCheck size={13} color="var(--gold-400)" />
                ISO 9001:2015 Quality Standards
              </span>

              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(212, 163, 40, 0.1)",
                  border: "1px solid rgba(212, 163, 40, 0.35)",
                  color: "var(--gold-300)",
                  fontSize: "0.72rem",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontWeight: 600
                }}
              >
                <Award size={13} color="var(--gold-400)" />
                UAE Ministry of Health (MOHAP)
              </span>
            </div>
          </div>

          {/* Corporate e-Newsletter Subscription */}
          <div 
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(212,163,40,0.06) 100%)", 
              border: "1.5px solid rgba(212, 163, 40, 0.3)", 
              padding: "26px", 
              borderRadius: "10px", 
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)" 
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
              <Sparkles size={13} color="var(--gold-400)" />
              <span style={{ color: "var(--gold-400)", fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
                EXECUTIVE INVESTOR BRIEFING
              </span>
            </div>

            <h4 className="font-serif" style={{ fontSize: "1.2rem", color: "#FFFFFF", marginBottom: "8px" }}>
              {t("footer.newsletterTitle")}
            </h4>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "18px" }}>
              {t("footer.newsletterDesc")}
            </p>

            {newsletterSubscribed ? (
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  color: "#10B981", 
                  fontSize: "0.86rem", 
                  fontWeight: 600,
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(16, 185, 129, 0.3)"
                }}
              >
                <CheckCircle2 size={18} color="#10B981" />
                <span>{t("footer.subscribeSuccess")}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  required
                  placeholder={t("footer.newsletterPlaceholder")}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "11px 16px",
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(212, 163, 40, 0.4)",
                    borderRadius: "6px",
                    color: "#FFFFFF",
                    fontSize: "0.86rem",
                    outline: "none",
                  }}
                />
                <button 
                  type="submit" 
                  style={{
                    background: "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)",
                    color: "#080C14",
                    border: "none",
                    borderRadius: "6px",
                    padding: "11px 20px",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
                >
                  <span>{t("footer.subscribeBtn")}</span>
                  <Send size={13} color="#080C14" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Footer: Architectural 4-Column Directory */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
            paddingTop: "44px",
            paddingBottom: "44px",
            borderBottom: "1px solid rgba(212, 163, 40, 0.2)",
          }}
        >
          {/* Col 1: Corporate Governance */}
          <div>
            <div 
              className="font-serif" 
              style={{ 
                color: "var(--gold-400)", 
                fontSize: "0.92rem", 
                fontWeight: 800, 
                letterSpacing: "0.1em", 
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "8px", height: "8px", backgroundColor: "var(--gold-500)", borderRadius: "1px" }} />
              {t("footer.aboutGroup")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px", fontSize: "0.86rem" }}>
              <li>
                <Link href="/about-us#chairman" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("footer.chairmansDesk")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us#vision" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("footer.visionMission")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us#values" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("footer.qualityPolicy")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us#hse" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("footer.hsePolicy")}</span>
                </Link>
              </li>
              <li>
                <Link href="/csr" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("footer.makeTrust")}</span>
                </Link>
              </li>
              <li>
                <Link href="/investor-centre" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("common.investor")}</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("common.careers")} & Job Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/business-ideas" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>{t("common.businessIdeas")} & Incubation</span>
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="footer-link-luxury">
                  <ChevronRight size={13} color="var(--gold-500)" />
                  <span>Achievements & Citations</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Sectors & Subsidiaries */}
          <div>
            <div 
              className="font-serif" 
              style={{ 
                color: "var(--gold-400)", 
                fontSize: "0.92rem", 
                fontWeight: 800, 
                letterSpacing: "0.1em", 
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "8px", height: "8px", backgroundColor: "var(--gold-500)", borderRadius: "1px" }} />
              {t("footer.sectorsVerticals")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.84rem" }}>
              {SUBSIDIARIES.slice(0, 7).map((sub) => (
                <li key={sub.id}>
                  <Link href={`/subsidiaries/${sub.id}`} className="footer-link-luxury">
                    <ChevronRight size={13} color="var(--gold-500)" />
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/subsidiaries" style={{ color: "var(--gold-300)", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                  <span>{t("subsidiaries.viewAll10")}</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div>
            <div 
              className="font-serif" 
              style={{ 
                color: "var(--gold-400)", 
                fontSize: "0.92rem", 
                fontWeight: 800, 
                letterSpacing: "0.1em", 
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "8px", height: "8px", backgroundColor: "var(--gold-500)", borderRadius: "1px" }} />
              {t("footer.regionalHubs")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem" }}>
              {GLOBAL_OFFICES.map((off) => (
                <li key={off.code} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ fontSize: "1.05rem" }}>{off.flag}</span>
                  <div>
                    <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.85rem" }}>
                      {off.country}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem" }}>
                      {off.city} • {off.phone}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Standards & Compliance */}
          <div>
            <div 
              className="font-serif" 
              style={{ 
                color: "var(--gold-400)", 
                fontSize: "0.92rem", 
                fontWeight: 800, 
                letterSpacing: "0.1em", 
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ width: "8px", height: "8px", backgroundColor: "var(--gold-500)", borderRadius: "1px" }} />
              {t("footer.standardsCompliance")}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.82rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)" }}>
                <ShieldCheck size={16} color="var(--gold-400)" />
                <span>{t("footer.iso9001")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)" }}>
                <CheckCircle2 size={16} color="var(--gold-400)" />
                <span>{t("footer.mohap")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)" }}>
                <Award size={16} color="var(--gold-400)" />
                <span>{t("footer.asnt")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)" }}>
                <ShieldCheck size={16} color="var(--gold-400)" />
                <span>{t("footer.hse")}</span>
              </div>
            </div>

            <div style={{ marginTop: "24px", padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(212,163,40,0.2)" }}>
              <div style={{ fontSize: "0.72rem", color: "var(--gold-300)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                HEADQUARTERS
              </div>
              <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                Best Star Group FZE, SAIF Zone & Dubai Silicon Oasis, UAE
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div 
          style={{
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.78rem",
            color: "rgba(255, 255, 255, 0.55)",
          }}
        >
          <div>
            <span>© 2026 {t("common.companyName")}. </span>
            <span>{t("footer.allRightsReserved")}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link 
              href="/terms-and-conditions" 
              style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.76rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-300)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
            >
              {t("common.terms")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <Link 
              href="/privacy-policy" 
              style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.76rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-300)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
            >
              {t("common.privacy")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <span style={{ color: "var(--gold-400)", fontWeight: 700, letterSpacing: "0.1em" }}>
              {t("footer.motto")}
            </span>
            <button
              onClick={scrollToTop}
              style={{
                background: "rgba(212, 163, 40, 0.15)",
                border: "1px solid rgba(212, 163, 40, 0.4)",
                color: "var(--gold-300)",
                padding: "6px 12px",
                borderRadius: "20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.74rem",
                fontWeight: 700,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-600)";
                e.currentTarget.style.color = "#080C14";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(212, 163, 40, 0.15)";
                e.currentTarget.style.color = "var(--gold-300)";
              }}
              aria-label="Scroll to top"
            >
              <span>{t("common.backToTop")}</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
