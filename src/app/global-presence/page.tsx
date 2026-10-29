"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import { Globe } from "lucide-react";

function GlobalPresenceContent() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country") || "UAE";

  return (
    <div style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <Header />

      {/* Hero Banner */}
      <section 
        style={{
          position: "relative",
          paddingTop: "65px",
          paddingBottom: "55px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          <div className="section-label">
            <Globe size={14} />
            <span>INTERNATIONAL FOOTPRINT & REGIONAL HUBS</span>
          </div>
          <h1 className="section-title">
            Our Strategic <span className="text-gold-gradient">Global Presence</span>
          </h1>
          <p className="section-subtitle">
            From our corporate headquarters in Dubai and Sharjah to high-voltage energy grids in Riyadh, healthcare diagnostics and media broadcasting in India, and thriving consumer networks in Malaysia.
          </p>
        </div>
      </section>

      {/* Main Global Presence Component */}
      <GlobalPresenceSection initialCountry={countryParam} />

      <Footer />
    </div>
  );
}

export default function GlobalPresencePage() {
  return (
    <Suspense fallback={<div>Loading global hubs...</div>}>
      <GlobalPresenceContent />
    </Suspense>
  );
}
