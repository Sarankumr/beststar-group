"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Download, 
  Printer, 
  Lock, 
  Eye, 
  FileCheck, 
  Globe2, 
  ChevronRight,
  Server,
  UserCheck
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <Header />

      {/* Hero Header */}
      <section 
        style={{
          position: "relative",
          paddingTop: "60px",
          paddingBottom: "50px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--border-gold-subtle)",
        }}
      >
        <div className="site-container">
          
          {/* Breadcrumbs */}
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "0.78rem", 
              color: "var(--text-muted)", 
              marginBottom: "20px" 
            }}
          >
            <Link href="/" style={{ color: "var(--gold-700)", textDecoration: "none" }}>
              {t("common.home")}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {t("common.privacy")}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <div className="section-label">
                <Lock size={14} color="var(--gold-600)" />
                <span>DATA SOVEREIGNTY & PRIVACY FIDUCIARY</span>
              </div>
              <h1 className="section-title" style={{ marginBottom: "16px" }}>
                Privacy <span className="text-gold-gradient">Policy</span>
              </h1>
              <p className="section-subtitle">
                Best Star Group Holding FZE upholds the highest standards of confidentiality, transparency, and data sovereignty across all corporate communications, vendor procurement portals, patient diagnostics, and investor engagements in strict compliance with UAE Federal Decree-Law No. (45) of 2021 on Personal Data Protection (PDPL) and international benchmarks.
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "18px", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <ShieldCheck size={14} color="#10B981" />
                  <strong>Policy Ref:</strong> BSG-LEGAL-PDPL-2026
                </span>
                <span>•</span>
                <span><strong>Effective Date:</strong> January 1, 2026</span>
                <span>•</span>
                <span><strong>Framework:</strong> UAE PDPL, GCC Data Law & GDPR Alignments</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/docs/Best-Star-Group-Privacy-Policy.pdf"
                download="Best-Star-Group-Privacy-Policy.pdf"
                className="btn-luxury-gold"
                style={{ padding: "10px 20px", fontSize: "0.78rem" }}
              >
                <Download size={14} />
                <span>DOWNLOAD OFFICIAL PDF</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid var(--border-gold-medium)",
                  color: "var(--text-primary)",
                  padding: "9px 18px",
                  borderRadius: "30px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--gold-50)";
                  e.currentTarget.style.borderColor = "var(--gold-500)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "var(--border-gold-medium)";
                }}
              >
                <Printer size={14} color="var(--gold-600)" />
                <span>PRINT DOCUMENT</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Policy Text Body */}
      <section className="section-spacing" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="site-container" style={{ maxWidth: "980px" }}>
          
          <div 
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid var(--border-gold-medium)",
              padding: "48px 40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              lineHeight: 1.8,
              color: "var(--text-primary)"
            }}
          >

            {/* Summary Highlights */}
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginBottom: "36px",
              }}
            >
              <div style={{ padding: "18px", backgroundColor: "#FAF9F6", borderRadius: "8px", border: "1px solid var(--border-gold-subtle)" }}>
                <Server size={20} color="var(--gold-600)" style={{ marginBottom: "8px" }} />
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Zero Unauthorized Commercialization
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Best Star Group never sells, monetizes, or leases corporate or personal information to third-party data brokers.
                </div>
              </div>

              <div style={{ padding: "18px", backgroundColor: "#FAF9F6", borderRadius: "8px", border: "1px solid var(--border-gold-subtle)" }}>
                <Lock size={20} color="var(--gold-600)" style={{ marginBottom: "8px" }} />
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Enterprise-Grade Encryption
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  All inquiry transmissions, tender uploads, and recruitment credentials are encrypted via AES-256 and TLS 1.3 standards.
                </div>
              </div>

              <div style={{ padding: "18px", backgroundColor: "#FAF9F6", borderRadius: "8px", border: "1px solid var(--border-gold-subtle)" }}>
                <UserCheck size={20} color="var(--gold-600)" style={{ marginBottom: "8px" }} />
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Fiduciary Subject Rights
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Full rights to data access, rectification, portability, and irreversible erasure managed via our appointed DPO.
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                1. Data Controller Identification & Scope
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Best Star Group Holding FZE, having its principal executive offices in Dubai and Sharjah, United Arab Emirates, acts as the primary Data Controller for personal data processed through our corporate website, electronic forms, press release subscriptions, job application portals, and tender desks.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                2. Categories of Information Collected
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                We collect personal and corporate data exclusively for verified business purposes across four key channels:
              </p>
              <ul style={{ paddingInlineStart: "20px", fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Commercial Desk Inquiries:</strong> Full legal name, corporate email address, direct phone, enterprise designation, organization name, and service specifications.</li>
                <li><strong>Procurement & Vendor Submissions:</strong> Trade license copies, tax registration numbers (TRN), ISO certificates, and company bank details for verified vendor onboarding.</li>
                <li><strong>Career Applications:</strong> Curriculum vitae (CVs), educational credentials, employment history, passport details for work visa eligibility, and professional references.</li>
                <li><strong>Technical & Portal Metadata:</strong> IP address, browser type, geographic location indicator, and session timestamps used solely for security and DDoS mitigation.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                3. Lawful Basis for Processing
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Under Article 4 of the UAE Personal Data Protection Law (PDPL), Best Star Group processes data based on:
              </p>
              <ul style={{ paddingInlineStart: "20px", fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Contractual Execution:</strong> Facilitating supply chain logistics, facilities management agreements, and pharmaceutical supply contracts.</li>
                <li><strong>Legal Obligation:</strong> Maintaining accounting, tax, customs, and health authority records mandated by UAE authorities (MOHAP, FTA, Customs).</li>
                <li><strong>Legitimate Commercial Interest:</strong> Safeguarding corporate IT infrastructure against cyber threats and maintaining investor transparency.</li>
                <li><strong>Explicit Consent:</strong> Subscribing to executive quarterly investor briefings and media communications.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                4. Cross-Border Data Transfers & Regional Hubs
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Best Star Group operates across the United Arab Emirates, Saudi Arabia, India, and Malaysia. Data transferred between our regional offices is governed by intra-group Data Transfer Agreements containing Standard Contractual Clauses (SCCs) to guarantee equivalent data protection standards regardless of geographic processing location.
              </p>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                5. Data Retention & Irreversible Erasure
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                We retain personal data strictly for the period necessary to fulfill the commercial or legal purposes for which it was gathered. Commercial contract records are retained for ten (10) years in accordance with UAE Federal Commercial Companies Law. Unsuccessful job applicant dossiers are securely erased after twelve (12) months unless candidate consent is granted for future openings.
              </p>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                6. Data Subject Rights & Formal Access Requests
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                You possess irrevocable rights regarding your personal information, including the right to request access, obtain a copy in machine-readable format, correct inaccuracies, restrict processing, or demand permanent erasure where retention is not required by statutory regulations.
              </p>
            </div>

            {/* DPO Desk Contact Box */}
            <div 
              style={{
                marginTop: "40px",
                padding: "24px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #0A0E17 0%, #172033 100%)",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "18px"
              }}
            >
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--gold-400)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                  OFFICE OF THE DATA PROTECTION OFFICER (DPO)
                </div>
                <div className="font-serif" style={{ fontSize: "1.1rem", color: "#FFFFFF", marginTop: "4px" }}>
                  Best Star Group Holding FZE • Data Privacy & Compliance
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>
                  dpo@beststargroup.com • +971 4 390 1200 • Dubai Silicon Oasis, UAE
                </div>
              </div>

              <a
                href="/docs/Best-Star-Group-Privacy-Policy.pdf"
                download="Best-Star-Group-Privacy-Policy.pdf"
                className="btn-luxury-gold"
                style={{ padding: "9px 20px", fontSize: "0.78rem" }}
              >
                <Download size={14} />
                <span>OFFICIAL PDF</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
