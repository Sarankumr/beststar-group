"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("sector") || undefined;
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: "var(--bg-deep)", minHeight: "100vh" }}>
      <Header />

      {/* Hero Banner */}
      <section 
        style={{
          position: "relative",
          paddingTop: "65px",
          paddingBottom: "55px",
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          <div className="section-label">
            <Mail size={14} />
            <span>{t("contact.badge")}</span>
          </div>
          <h1 className="section-title">
            {t("contact.title")}
          </h1>
          <p className="section-subtitle">
            {t("contact.subtitle")}
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
