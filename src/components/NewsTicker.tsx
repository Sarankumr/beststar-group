"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NEWS_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsTicker() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: "#FFFDF9",
        borderTop: "1px solid var(--border-gold-subtle)",
        borderBottom: "1px solid var(--border-gold-subtle)",
        padding: "10px 0",
        position: "relative",
        zIndex: 40,
        overflow: "hidden",
      }}
    >
      <div className="site-container" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        
        {/* Static Title Badge linking to full Newsroom */}
        <Link
          href="/news"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
            backgroundColor: "var(--crimson-light)",
            border: "1px solid var(--crimson-border)",
            color: "var(--crimson-mid)",
            fontFamily: "var(--font-serif)",
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(138, 13, 35, 0.15)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--crimson-light)")}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--crimson-mid)",
              display: "inline-block",
            }}
          />
          <span>{t("ticker.title")}</span>
        </Link>

        {/* Marquee Ticker Track with Direct Links to Dedicated Press Release Pages */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <div className="ticker-track">
            {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={`/news/${item.id}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginRight: "40px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.color = "var(--gold-700)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.color = "var(--text-secondary)";
                }}
              >
                <span
                  style={{
                    background: "var(--gold-100)",
                    border: "1px solid rgba(184, 134, 11, 0.25)",
                    color: "var(--gold-800)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "2px 7px",
                    borderRadius: "3px",
                  }}
                >
                  {item.category}
                </span>
                <span>{item.title}</span>
                <ArrowUpRight size={13} color="var(--gold-600)" />
                <span style={{ color: "var(--border-gold-medium)", marginLeft: "16px" }}>•</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
