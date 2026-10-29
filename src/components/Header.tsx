"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Languages,
  Clock,
  Building,
  Briefcase,
  Heart,
  FileText,
  Activity,
  Award
} from "lucide-react";
import { GLOBAL_OFFICES, SUBSIDIARIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const pathname = usePathname();
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  // Live Dubai GST Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        };
        setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
      } catch {
        setCurrentTime("12:00:00 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* 1. Sovereign Apex Bar (Midnight Obsidian & 24K Gold) */}
      <div
        style={{
          backgroundColor: "#080C14",
          color: "#E5E7EB",
          borderBottom: "1px solid rgba(212, 163, 40, 0.3)",
          fontSize: "0.76rem",
          padding: "7px 0",
          position: "relative",
          zIndex: 101,
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px"
          }}
        >
          {/* Left: Live Dubai Clock & Holding Certification */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  display: "inline-block",
                  boxShadow: "0 0 8px #10B981"
                }}
              />
              <span style={{ color: "var(--gold-300)", fontWeight: 700, letterSpacing: "0.05em" }}>
                DUBAI HQ
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#F3F4F6", fontFamily: "monospace" }}>
                <Clock size={11} color="var(--gold-400)" />
                <span>{currentTime || "12:00:00 PM"} GST</span>
              </span>
            </div>

            <span style={{ color: "rgba(212, 163, 40, 0.3)" }} className="desktop-only-inline">|</span>

            <span
              style={{ alignItems: "center", gap: "5px", color: "var(--gold-200)" }}
              className="desktop-only-inline"
            >
              <ShieldCheck size={13} color="var(--gold-400)" />
              <span>{t("common.certifiedHolding")}</span>
            </span>
          </div>

          {/* Right: Regional Hubs, Direct Line, Language Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

            {/* Regional Flags */}
            <div style={{ alignItems: "center", gap: "6px" }} className="desktop-only-inline">
              <span style={{ color: "var(--gold-400)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                {t("common.regionalPresence")}
              </span>
              {GLOBAL_OFFICES.map((off) => (
                <Link
                  key={off.code}
                  href={`/global-presence?country=${off.code}`}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    padding: "1px 6px",
                    borderRadius: "3px",
                    fontSize: "0.72rem",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    background: "rgba(255, 255, 255, 0.04)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold-500)";
                    e.currentTarget.style.color = "var(--gold-300)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }}
                >
                  {off.flag} {off.code}
                </Link>
              ))}
            </div>

            <span style={{ color: "rgba(212, 163, 40, 0.3)" }}>|</span>

            {/* Direct Phone */}
            <a
              href="tel:+97142889123"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.03em"
              }}
            >
              <Phone size={11} color="var(--gold-400)" />
              <span>+971 4 288 9123</span>
            </a>

            <span style={{ color: "rgba(212, 163, 40, 0.3)" }}>|</span>

            {/* Royal Gold Language Switcher */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(212, 163, 40, 0.15)",
                padding: "2px 4px",
                borderRadius: "20px",
                border: "1px solid rgba(212, 163, 40, 0.45)"
              }}
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                style={{
                  background: language === "en" ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" : "transparent",
                  color: language === "en" ? "#0F141C" : "rgba(255,255,255,0.75)",
                  border: "none",
                  borderRadius: "14px",
                  padding: "2px 8px",
                  fontSize: "0.7rem",
                  fontWeight: language === "en" ? 800 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                style={{
                  background: language === "ar" ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" : "transparent",
                  color: language === "ar" ? "#0F141C" : "rgba(255,255,255,0.75)",
                  border: "none",
                  borderRadius: "14px",
                  padding: "2px 8px",
                  fontSize: "0.7rem",
                  fontWeight: language === "ar" ? 800 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                العربية
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Architectural Navigation Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "#FFFFFF",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: isScrolled
            ? "1.5px solid rgba(184, 134, 11, 0.3)"
            : "1px solid rgba(184, 134, 11, 0.16)",
          boxShadow: isScrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.08)"
            : "0 2px 10px rgba(0, 0, 0, 0.03)",
          transition: "all 0.3s ease",
          padding: isScrolled ? "8px 0" : "12px 0",
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none"
            }}
          >
            {/* 3D Gold Crest Medallion */}
            <div
              style={{
                position: "relative",
                width: isScrolled ? 50 : 58,
                height: isScrolled ? 50 : 58,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #D4A328",
                boxShadow: "0 4px 14px rgba(184, 134, 11, 0.35)",
                backgroundColor: "#080C14",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              <Image
                src="/images/logo-gold-dark.jpg"
                alt="Best Star Group Official Logo"
                fill
                sizes="58px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <div
                className="font-serif"
                style={{
                  fontSize: isScrolled ? "1.25rem" : "1.42rem",
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                  lineHeight: 1.1,
                  background: "linear-gradient(135deg, #0F141C 0%, #2A3342 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                BEST STAR
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  color: "var(--gold-700)",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>GROUP</span>
                <span style={{ width: "12px", height: "1.5px", backgroundColor: "var(--gold-600)" }} />
                <span style={{ color: "#6B7280", fontSize: "0.64rem", fontWeight: 700 }}>HOLDING FZE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Bar (Always visible on desktop screens >= 1024px) */}
          <nav
            style={{
              gap: "clamp(8px, 1vw, 16px)",
              alignItems: "center"
            }}
            className="desktop-nav"
          >
            {/* 1. Home */}
            <Link
              href="/"
              style={{
                color: pathname === "/" ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname === "/" ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname === "/" ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-600)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/" ? "var(--gold-700)" : "var(--text-primary)")}
            >
              {t("common.home").toUpperCase()}
            </Link>

            {/* 2. About Us Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/about-us"
                style={{
                  color: pathname.startsWith("/about-us") ? "var(--gold-700)" : "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.05em",
                  fontWeight: pathname.startsWith("/about-us") ? 800 : 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  borderBottom: pathname.startsWith("/about-us") ? "2px solid var(--gold-600)" : "2px solid transparent",
                  transition: "color 0.2s"
                }}
              >
                <span>{t("common.aboutUs").toUpperCase()}</span>
                <ChevronDown size={12} color="var(--gold-600)" />
              </Link>

              {openDropdown === "about" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: isRtl ? "auto" : "0",
                    right: isRtl ? "0" : "auto",
                    width: "260px",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid var(--border-gold-medium)",
                    borderRadius: "8px",
                    boxShadow: "0 14px 35px rgba(0, 0, 0, 0.12)",
                    padding: "10px",
                    zIndex: 110,
                    animation: "dropdownFade 0.2s ease",
                  }}
                >
                  <Link
                    href="/about-us#chairman"
                    className="dropdown-item-luxe"
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", textDecoration: "none", borderRadius: "6px" }}
                  >
                    <Award size={16} color="var(--gold-600)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>{t("nav.chairmansDesk")}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Ibunu Suwoothu Kamal</div>
                    </div>
                  </Link>

                  <Link
                    href="/about-us#vision"
                    className="dropdown-item-luxe"
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", textDecoration: "none", borderRadius: "6px" }}
                  >
                    <Sparkles size={16} color="var(--gold-600)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>{t("nav.visionMission")}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Global Expansion & Quality</div>
                    </div>
                  </Link>

                  <Link
                    href="/about-us#values"
                    className="dropdown-item-luxe"
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", textDecoration: "none", borderRadius: "6px" }}
                  >
                    <ShieldCheck size={16} color="var(--gold-600)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>{t("nav.values")}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>ISO 9001:2015 Benchmarks</div>
                    </div>
                  </Link>

                  <Link
                    href="/about-us#hse"
                    className="dropdown-item-luxe"
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", textDecoration: "none", borderRadius: "6px" }}
                  >
                    <Activity size={16} color="var(--gold-600)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>{t("nav.hse")}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Zero Harm Standard</div>
                    </div>
                  </Link>

                  <Link
                    href="/achievements"
                    className="dropdown-item-luxe"
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", textDecoration: "none", borderRadius: "6px" }}
                  >
                    <Award size={16} color="var(--gold-600)" />
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>Achievements & Citations</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Sovereign Records & Awards</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Enterprises Mega-Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("enterprises")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/subsidiaries"
                style={{
                  color: pathname.startsWith("/subsidiaries") ? "var(--gold-700)" : "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.05em",
                  fontWeight: pathname.startsWith("/subsidiaries") ? 800 : 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  borderBottom: pathname.startsWith("/subsidiaries") ? "2px solid var(--gold-600)" : "2px solid transparent",
                  transition: "color 0.2s"
                }}
              >
                <span>{t("common.sectors").toUpperCase()}</span>
                <ChevronDown size={12} color="var(--gold-600)" />
              </Link>

              {openDropdown === "enterprises" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: isRtl ? "auto" : "-120px",
                    right: isRtl ? "-120px" : "auto",
                    width: "480px",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid var(--border-gold-medium)",
                    borderRadius: "10px",
                    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.14)",
                    padding: "16px",
                    zIndex: 110,
                    animation: "dropdownFade 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", marginBottom: "12px", borderBottom: "1px solid var(--border-gold-subtle)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--gold-800)", letterSpacing: "0.08em" }}>
                      OPERATING BUSINESS VERTICALS
                    </span>
                    <Link href="/subsidiaries" style={{ fontSize: "0.74rem", color: "var(--gold-600)", fontWeight: 700, textDecoration: "none" }}>
                      View All 10 →
                    </Link>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {SUBSIDIARIES.slice(0, 6).map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/subsidiaries/${sub.id}`}
                        style={{
                          textDecoration: "none",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-gold-subtle)",
                          backgroundColor: "#FAF9F6",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--gold-50)";
                          e.currentTarget.style.borderColor = "var(--gold-500)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#FAF9F6";
                          e.currentTarget.style.borderColor = "var(--border-gold-subtle)";
                        }}
                      >
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {sub.shortName}
                        </span>
                        <span style={{ fontSize: "0.68rem", color: "var(--gold-700)", fontWeight: 600 }}>
                          {sub.sector}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Global Hubs */}
            <Link
              href="/global-presence"
              style={{
                color: pathname.startsWith("/global-presence") ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname.startsWith("/global-presence") ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname.startsWith("/global-presence") ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
            >
              {t("common.globalHubs").toUpperCase()}
            </Link>

            {/* 5. Investor Centre */}
            <Link
              href="/investor-centre"
              style={{
                color: pathname.startsWith("/investor-centre") ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname.startsWith("/investor-centre") ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname.startsWith("/investor-centre") ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
            >
              {t("common.investor").toUpperCase()}
            </Link>

            {/* 6. Careers */}
            <Link
              href="/careers"
              style={{
                color: pathname.startsWith("/careers") ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname.startsWith("/careers") ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname.startsWith("/careers") ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
            >
              {t("common.careers").toUpperCase()}
            </Link>

            {/* 7. Business Ideas & Ventures */}
            <Link
              href="/business-ideas"
              style={{
                color: pathname.startsWith("/business-ideas") ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname.startsWith("/business-ideas") ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname.startsWith("/business-ideas") ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
            >
              {t("common.businessIdeas").toUpperCase()}
            </Link>

            {/* 8. Contact */}
            <Link
              href="/contact"
              style={{
                color: pathname.startsWith("/contact") ? "var(--gold-700)" : "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.74rem",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em",
                fontWeight: pathname.startsWith("/contact") ? 800 : 600,
                padding: "8px 0",
                borderBottom: pathname.startsWith("/contact") ? "2px solid var(--gold-600)" : "2px solid transparent",
                transition: "color 0.2s"
              }}
            >
              {t("common.contact").toUpperCase()}
            </Link>
          </nav>

          {/* Right CTA Button (24K Gold Radiant Foil) */}
          <div style={{ alignItems: "center", gap: "10px" }} className="desktop-nav">
            <Link
              href="/contact"
              className="btn-luxury-gold"
              style={{
                padding: "9px 18px",
                borderRadius: "30px",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
              }}
            >
              <span>{t("common.inquireNow").toUpperCase()}</span>
              <ArrowRight size={13} color="#080C14" />
            </Link>
          </div>

          {/* Mobile Hamburger Button (Strictly hidden on desktop via CSS) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              background: "#080C14",
              border: "1.5px solid var(--gold-500)",
              color: "var(--gold-400)",
              padding: "8px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            className="mobile-hamburger"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* 3. Ultra-Luxury Slide-Over Drawer for Mobile / Tablet */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(7, 10, 16, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: isRtl ? "flex-start" : "flex-end",
            animation: "modalFadeIn 0.2s ease",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              height: "100%",
              backgroundColor: "#0A0E17",
              color: "#FFFFFF",
              borderLeft: isRtl ? "none" : "2px solid rgba(212, 163, 40, 0.4)",
              borderRight: isRtl ? "2px solid rgba(212, 163, 40, 0.4)" : "none",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 0 50px rgba(0, 0, 0, 0.7)",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid rgba(212, 163, 40, 0.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "linear-gradient(135deg, #0A0E17 0%, #151C2C 100%)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1.5px solid #D4A328",
                    backgroundColor: "#000"
                  }}
                >
                  <Image
                    src="/images/logo-gold-dark.jpg"
                    alt="Best Star Group"
                    fill
                    sizes="38px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="font-serif" style={{ fontSize: "1.05rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.06em" }}>
                    BEST STAR GROUP
                  </div>
                  <div style={{ fontSize: "0.62rem", color: "var(--gold-400)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    HOLDING FZE
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(212, 163, 40, 0.3)",
                  borderRadius: "50%",
                  color: "var(--gold-300)",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label="Close Navigation"
              >
                <X size={18} />
              </button>
            </div>

            {/* Language Selector Strip */}
            <div style={{ padding: "14px 24px", background: "rgba(212, 163, 40, 0.08)", borderBottom: "1px solid rgba(212, 163, 40, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--gold-300)", fontWeight: 700, letterSpacing: "0.05em" }}>
                PORTAL LANGUAGE
              </span>
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  style={{
                    background: language === "en" ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" : "rgba(255,255,255,0.06)",
                    color: language === "en" ? "#080C14" : "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ar")}
                  style={{
                    background: language === "ar" ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" : "rgba(255,255,255,0.06)",
                    color: language === "ar" ? "#080C14" : "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  العربية
                </button>
              </div>
            </div>

            {/* Navigation Links Directory */}
            <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
              {[
                { label: t("common.home"), href: "/" },
                { label: t("common.aboutUs"), href: "/about-us" },
                { label: t("common.sectors"), href: "/subsidiaries" },
                { label: t("common.globalHubs"), href: "/global-presence" },
                { label: t("common.investor"), href: "/investor-centre" },
                { label: t("common.careers"), href: "/careers" },
                { label: t("common.businessIdeas"), href: "/business-ideas" },
                { label: "Achievements & Awards", href: "/achievements" },
                { label: t("common.csr"), href: "/csr" },
                { label: t("common.news"), href: "/news" },
                { label: t("common.contact"), href: "/contact" },
              ].map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: "11px 16px",
                      borderRadius: "6px",
                      fontSize: "0.92rem",
                      fontWeight: isActive ? 800 : 600,
                      fontFamily: "var(--font-serif)",
                      letterSpacing: "0.04em",
                      color: isActive ? "var(--gold-300)" : "#E5E7EB",
                      background: isActive ? "rgba(212, 163, 40, 0.15)" : "transparent",
                      border: isActive ? "1px solid rgba(212, 163, 40, 0.35)" : "1px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={13} color={isActive ? "var(--gold-400)" : "rgba(255,255,255,0.4)"} />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions & Contact */}
            <div
              style={{
                padding: "20px 24px",
                borderTop: "1px solid rgba(212, 163, 40, 0.25)",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <a
                href="tel:+97142889123"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#FFFFFF",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                <Phone size={14} color="var(--gold-400)" />
                <span>Hotline: +971 4 288 9123</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-luxury-gold"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "24px",
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textAlign: "center"
                }}
              >
                <span>{t("common.inquireNow").toUpperCase()}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
