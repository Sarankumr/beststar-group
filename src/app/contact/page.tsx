"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Mail } from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("sector") || undefined;

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
            <Mail size={14} />
            <span>GLOBAL REGISTRY & INQUIRIES</span>
          </div>
          <h1 className="section-title">
            Connect with <span className="text-gold-gradient">Best Star Group</span>
          </h1>
          <p className="section-subtitle">
            Whether inquiring about commercial contracts, procurement tenders, corporate partnerships, or vendor registrations across our UAE, Saudi Arabia, India, and Malaysia entities.
          </p>
        </div>
      </section>

      {/* Contact Section Form & Hubs */}
      <ContactSection preselectedSubsidiary={preselected} />

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading contact desk...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
