"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import { Layers } from "lucide-react";

export default function SubsidiariesPage() {
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
            <Layers size={14} />
            <span>SPECIALIZED BUSINESS VERTICALS</span>
          </div>
          <h1 className="section-title">
            Our Operating <span className="text-gold-gradient">Subsidiaries</span>
          </h1>
          <p className="section-subtitle">
            Best Star Group commands ten specialized operating entities across Healthcare, Facilities Engineering, Cargo Logistics, Luxury Travel, Technical Inspection, Passenger Fleets, Global Trading, and High-Voltage Infrastructure. Select any enterprise below to inspect its dedicated operational dossier.
          </p>
        </div>
      </section>

      {/* Full Grid with All Filter Tabs */}
      <SubsidiariesSection showFilters={true} />

      <Footer />
    </div>
  );
}
