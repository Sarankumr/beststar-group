"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Layers, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Search,
  X,
  Filter,
  RotateCcw
} from "lucide-react";
import { SUBSIDIARIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface SubsidiariesSectionProps {
  limit?: number;
  showFilters?: boolean;
}

export default function SubsidiariesSection({ limit, showFilters = true }: SubsidiariesSectionProps) {
  const { t, language } = useLanguage();
  const [activeSectorKey, setActiveSectorKey] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sectorFilters = [
    { key: "all", label: t("sectors.all"), rawSector: "All" },
    { key: "pharma", label: t("sectors.pharma"), rawSector: "Healthcare & Pharma" },
    { key: "facility", label: t("sectors.facility"), rawSector: "Engineering & Facilities" },
    { key: "logistics", label: t("sectors.logistics"), rawSector: "Logistics & Fleet" },
    { key: "tourism", label: t("sectors.tourism"), rawSector: "Tourism & Hospitality" },
    { key: "technical", label: t("sectors.technical"), rawSector: "Automotive & Technical" },
    { key: "energy", label: t("sectors.energy"), rawSector: "Trading & Energy" },
  ];

  const getSubKey = (id: string): string => {
    switch (id) {
      case "pharma-healthcare": return "pharma";
      case "facility-management": return "facility";
      case "cargo-logistics": return "cargo";
      case "tourism-hospitality": return "tourism";
      case "igts-technical": return "igts";
      case "mak-auto": return "mak";
      case "transport-leasing": return "transport";
      case "trans-ocean-trading": return "transOcean";
      case "power-infrastructure": return "power";
      case "aviation-charters": return "aviation";
      default: return "";
    }
  };

  const selectedFilterObj = sectorFilters.find(f => f.key === activeSectorKey) || sectorFilters[0];

  let filtered = SUBSIDIARIES.filter((s) => {
    // 1. Sector Filter
    const matchesSector = selectedFilterObj.rawSector === "All" || s.sector === selectedFilterObj.rawSector;
    if (!matchesSector) return false;

    // 2. Search Query Filter
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const subKey = getSubKey(s.id);
    const locName = subKey ? t(`subsidiaryItems.${subKey}.name`).toLowerCase() : "";
    const locDesc = subKey ? t(`subsidiaryItems.${subKey}.description`).toLowerCase() : "";
    const locTagline = subKey ? t(`subsidiaryItems.${subKey}.tagline`).toLowerCase() : "";

    return (
      s.name.toLowerCase().includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.sector.toLowerCase().includes(q) ||
      s.headquarters.toLowerCase().includes(q) ||
      s.capabilities.some(c => c.toLowerCase().includes(q)) ||
      locName.includes(q) ||
      locDesc.includes(q) ||
      locTagline.includes(q)
    );
  });

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  const resetAllFilters = () => {
    setActiveSectorKey("all");
    setSearchQuery("");
  };

  return (
    <section 
      id="subsidiaries" 
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="site-container">
        
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Layers size={14} color="var(--gold-600)" />
            <span>{t("subsidiaries.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("subsidiaries.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("subsidiaries.subtitle")}
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        {showFilters && (
          <div style={{ maxWidth: "860px", margin: "0 auto 34px auto" }}>
            
            {/* Live Search Input */}
            <div 
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FAF9F6",
                border: "1.5px solid var(--border-gold-medium)",
                borderRadius: "32px",
                padding: "6px 18px",
                boxShadow: "0 4px 18px rgba(184, 134, 11, 0.08)",
                marginBottom: "20px",
                transition: "all 0.25s ease",
              }}
            >
              <Search size={18} color="var(--gold-600)" style={{ flexShrink: 0, marginInlineEnd: "10px" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("common.searchPlaceholder") || "Search enterprises by name, sector, service, or location..."}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "0.88rem",
                  color: "var(--text-primary)",
                  padding: "6px 0",
                  fontFamily: "var(--font-sans)",
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "rgba(0,0,0,0.06)",
                    border: "none",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    marginInlineEnd: "8px",
                  }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
              <span 
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: "var(--gold-800)",
                  backgroundColor: "var(--gold-100)",
                  border: "1px solid var(--gold-300)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  flexShrink: 0,
                  whiteSpace: "nowrap"
                }}
              >
                {filtered.length} {filtered.length === 1 ? "Enterprise" : "Enterprises"}
              </span>
            </div>

            {/* Sector Filter Tabs */}
            <div 
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {sectorFilters.map((sec) => (
                <button
                  key={sec.key}
                  onClick={() => setActiveSectorKey(sec.key)}
                  style={{
                    background: activeSectorKey === sec.key 
                      ? "linear-gradient(135deg, #D4A328 0%, #B8860B 100%)" 
                      : "#FFFFFF",
                    color: activeSectorKey === sec.key 
                      ? "#080C14" 
                      : "var(--text-secondary)",
                    border: activeSectorKey === sec.key 
                      ? "1px solid #FFE494" 
                      : "1.5px solid var(--border-gold-subtle)",
                    borderRadius: "30px",
                    padding: "7px 18px",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.8rem",
                    fontWeight: activeSectorKey === sec.key ? 800 : 600,
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    boxShadow: activeSectorKey === sec.key 
                      ? "0 4px 14px rgba(184, 134, 11, 0.3)" 
                      : "0 1px 3px rgba(0,0,0,0.02)"
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            {/* Reset Filter Button if active */}
            {(activeSectorKey !== "all" || searchQuery) && (
              <div style={{ textAlign: "center", marginTop: "12px" }}>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--gold-700)",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "underline",
                  }}
                >
                  <RotateCcw size={12} />
                  <span>Reset All Filters & Search</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Empty Search Results State */}
        {filtered.length === 0 && (
          <div 
            style={{
              textAlign: "center",
              padding: "60px 24px",
              backgroundColor: "#FAF9F6",
              borderRadius: "12px",
              border: "1.5px dashed var(--border-gold-medium)",
              margin: "20px 0 40px 0",
            }}
          >
            <div 
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "var(--gold-50)",
                border: "1.5px solid var(--gold-400)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Search size={24} color="var(--gold-600)" />
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "8px" }}>
              No Enterprises Found
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "480px", margin: "0 auto 20px auto" }}>
              {searchQuery 
                ? `No operating entities match "${searchQuery}" in ${selectedFilterObj.label}.` 
                : `No operating entities match the selected sector filter.`}
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn-luxury-gold"
              style={{ padding: "9px 22px", fontSize: "0.8rem" }}
            >
              <RotateCcw size={13} />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        )}

        {/* Subsidiaries Grid */}
        <div 
          style={{
            display: filtered.length > 0 ? "grid" : "none",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "28px",
          }}
        >
          {filtered.map((sub) => {
            const subKey = getSubKey(sub.id);
            const localizedName = subKey ? t(`subsidiaryItems.${subKey}.name`) : sub.name;
            const localizedTagline = subKey ? t(`subsidiaryItems.${subKey}.tagline`) : sub.tagline;
            const localizedDesc = subKey ? t(`subsidiaryItems.${subKey}.description`) : sub.description;
            const localizedBadge = subKey ? t(`subsidiaryItems.${subKey}.badgeText`) : sub.badgeText;
            const localizedSector = subKey ? t(`subsidiaryItems.${subKey}.sector`) : sub.sector;

            return (
              <div 
                key={sub.id} 
                className="luxe-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0",
                  overflow: "hidden",
                  border: "1px solid var(--border-gold-medium)",
                  backgroundColor: "#FFFFFF"
                }}
              >
                {/* Card Cover Image */}
                <div 
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    backgroundColor: "#080C14",
                  }}
                >
                  <Image 
                    src={sub.image || "/images/dubai-skyline.jpg"} 
                    alt={localizedName} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="card-image-hover"
                  />
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 10, 16, 0.85) 0%, rgba(7, 10, 16, 0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Corner Badges */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", right: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span 
                      style={{
                        background: "rgba(8, 12, 20, 0.85)",
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
                      {localizedBadge}
                    </span>

                    <span 
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        color: "var(--text-primary)",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      EST. {sub.establishedDate}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span 
                      style={{ 
                        color: "var(--gold-400)", 
                        fontSize: "0.76rem", 
                        fontWeight: 800, 
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" 
                      }}
                    >
                      {localizedSector}
                    </span>
                    <div style={{ color: "#FFFFFF", fontSize: "0.74rem", display: "flex", alignItems: "center", gap: "4px", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
                      <MapPin size={12} color="var(--gold-300)" />
                      <span>{sub.headquarters.split(",")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: "26px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 
                      className="font-serif" 
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {localizedName}
                    </h3>

                    <p 
                      style={{
                        color: "var(--gold-700)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        marginBottom: "12px",
                      }}
                    >
                      {localizedTagline}
                    </p>

                    <p 
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        marginBottom: "18px",
                      }}
                    >
                      {localizedDesc}
                    </p>

                    {/* Capabilities Chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
                      {sub.capabilities.slice(0, 3).map((cap, i) => (
                        <span
                          key={i}
                          style={{
                            background: "var(--gold-50)",
                            border: "1px solid var(--border-gold-subtle)",
                            color: "var(--text-secondary)",
                            fontSize: "0.72rem",
                            padding: "3px 8px",
                            borderRadius: "3px",
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-gold-subtle)",
                    }}
                  >
                    <Link
                      href={`/subsidiaries/${sub.id}`}
                      style={{
                        color: "var(--gold-700)",
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-serif)",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-600)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-700)")}
                    >
                      <span>{t("subsidiaries.viewDetails")}</span>
                      <ChevronRight size={14} color="var(--gold-600)" />
                    </Link>

                    <Link
                      href={`/contact?sector=${encodeURIComponent(sub.name)}`}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        padding: "5px 12px",
                        borderRadius: "4px",
                        border: "1px solid var(--border-gold-medium)",
                        backgroundColor: "#FAF9F6",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--gold-100)";
                        e.currentTarget.style.borderColor = "var(--gold-500)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#FAF9F6";
                        e.currentTarget.style.borderColor = "var(--border-gold-medium)";
                      }}
                    >
                      {t("subsidiaries.inquire")}
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* View All Subsidiaries CTA */}
        {limit && limit < SUBSIDIARIES.length && (
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/subsidiaries"
              className="btn-luxury-gold"
              style={{ padding: "13px 32px" }}
            >
              <span>{t("subsidiaries.viewAll10")}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
