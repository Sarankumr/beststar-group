"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import Hero from "@/components/Hero";
import ChairmanSection from "@/components/ChairmanSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import AchievementsCarousel from "@/components/AchievementsCarousel";
import HorizonSection from "@/components/HorizonSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ValuesSection from "@/components/ValuesSection";
import CSRSection from "@/components/CSRSection";
import InvestorSection from "@/components/InvestorSection";
import ExecutivePartnerBanner from "@/components/ExecutivePartnerBanner";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedSubsidiaryForInquiry, setSelectedSubsidiaryForInquiry] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (subsidiaryName?: string) => {
    setSelectedSubsidiaryForInquiry(subsidiaryName);
    setInquiryModalOpen(true);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--bg-deep)" }}>
      
      {/* Light Luxury Navigation Header */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Live Breaking News Ticker linking to dedicated press release routes */}
      <NewsTicker />

      {/* Sovereign Hero Showcase */}
      <Hero />

      {/* Chairman's Desk Section */}
      <ChairmanSection />

      {/* Strategic Horizon 2030, Historical Milestones & Synergies */}
      <HorizonSection />

      {/* Operating Subsidiaries Grid with Direct Detail Links */}
      <SubsidiariesSection showFilters={true} limit={6} />

      {/* Auto-Scrolling 3-Card Corporate Achievements & Accolades Showcase */}
      <AchievementsCarousel />

      {/* Global Regional Hubs & Directorates */}
      <GlobalPresenceSection />

      {/* Core Values & ISO Quality Framework */}
      <ValuesSection />

      {/* CSR & The MAKE Trust Foundation */}
      <CSRSection />

      {/* Investor Centre & Fiduciary Highlights */}
      <InvestorSection />

      {/* Sovereign Institutional Partnership & Venture Invitation Banner */}
      <ExecutivePartnerBanner />

      {/* Authoritative Obsidian Luxury Footer */}
      <Footer />

      {/* Global Commercial Consultation Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultSubsidiary={selectedSubsidiaryForInquiry}
      />
    </div>
  );
}
