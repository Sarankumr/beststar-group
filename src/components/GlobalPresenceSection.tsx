"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { GLOBAL_OFFICES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface GlobalPresenceProps {
  initialCountry?: string;
}

export default function GlobalPresenceSection({ initialCountry = "UAE" }: GlobalPresenceProps) {
  const { t, isRtl } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);

  const activeOffice = GLOBAL_OFFICES.find((o) => o.code === selectedCountry) || GLOBAL_OFFICES[0];

  return (
    <section 
      id="global-presence" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "#FAF8F5",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
      }}
    >
      <div className="site-container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Globe size={14} color="var(--gold-600)" />
            <span>{t("global.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("global.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("global.subtitle")}
          </p>
        </div>

        {/* Country Selector Cards */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {GLOBAL_OFFICES.map((off) => {
            const isSelected = selectedCountry === off.code;
            return (
              <button
                key={off.code}
                onClick={() => setSelectedCountry(off.code)}
                style={{
                  background: isSelected ? "#FFFFFF" : "#F4F1EA",
                  border: isSelected ? "2px solid var(--gold-600)" : "1px solid var(--border-gold-subtle)",
                  borderRadius: "8px",
                  padding: "18px 20px",
                  textAlign: isRtl ? "right" : "left",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected ? "0 8px 25px rgba(184, 134, 11, 0.12)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{off.flag}</span>
                <div>
                  <div className="font-serif" style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {off.country}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: isSelected ? "var(--gold-700)" : "var(--text-muted)", fontWeight: 600 }}>
                    {off.city}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Directorate Details Display */}
        <div 
          style={{
            background: "#FFFFFF",
            border: "1.5px solid var(--border-gold-medium)",
            borderRadius: "12px",
            padding: "36px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "36px",
            }}
            className="directorate-grid"
          >
            {/* Left Col: Address, Phone, Email, Role */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.6rem" }}>{activeOffice.flag}</span>
                <div>
                  <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--text-primary)", margin: 0 }}>
                    {activeOffice.country} Directorate
                  </h3>
                  <div style={{ color: "var(--gold-700)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {activeOffice.role}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "22px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <MapPin size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t("global.directorateAddress")}
                    </div>
                    <div style={{ color: "var(--text-primary)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                      {activeOffice.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Phone size={18} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t("global.telephone")}
                    </div>
                    <a href={`tel:${activeOffice.phone}`} style={{ color: "var(--gold-800)", textDecoration: "none", fontSize: "0.92rem", fontWeight: 700 }}>
                      {activeOffice.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Mail size={18} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t("global.email")}
                    </div>
                    <a href={`mailto:${activeOffice.email}`} style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.92rem", fontWeight: 500 }}>
                      {activeOffice.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Clock size={18} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t("global.timezone")}
                    </div>
                    <div style={{ color: "var(--text-primary)", fontSize: "0.92rem" }}>
                      {activeOffice.localTimezone}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px" }}>
                <Link href="/contact" className="btn-luxury-outline" style={{ display: "inline-flex", gap: "8px" }}>
                  <span>{t("global.contactBtn")}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Col: Key Regional Operations */}
            <div 
              style={{ 
                borderLeft: isRtl ? "none" : "1px solid var(--border-gold-subtle)", 
                borderRight: isRtl ? "1px solid var(--border-gold-subtle)" : "none",
                paddingLeft: isRtl ? 0 : "32px",
                paddingRight: isRtl ? "32px" : 0
              }} 
              className="operations-col"
            >
              <h4 className="font-serif" style={{ fontSize: "1.05rem", color: "var(--gold-800)", marginBottom: "16px", letterSpacing: "0.06em", fontWeight: 800 }}>
                {t("global.operationsTitle")}
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {activeOffice.keyOperations.map((op, i) => (
                  <div 
                    key={i} 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "var(--gold-50)",
                      border: "1px solid var(--border-gold-subtle)",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      color: "var(--text-primary)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                    <span>{op}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "20px", padding: "14px", background: "#FAF8F5", borderRadius: "6px", border: "1px dashed var(--border-gold-medium)", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldCheck size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  {t("global.statusNote")}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
