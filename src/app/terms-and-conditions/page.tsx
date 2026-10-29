"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  Printer, 
  ShieldCheck, 
  Scale, 
  Building2, 
  AlertCircle, 
  ExternalLink,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsAndConditionsPage() {
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
              {t("common.terms")}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <div className="section-label">
                <Scale size={14} color="var(--gold-600)" />
                <span>CORPORATE LEGAL GOVERNANCE</span>
              </div>
              <h1 className="section-title" style={{ marginBottom: "16px" }}>
                Terms & <span className="text-gold-gradient">Conditions</span>
              </h1>
              <p className="section-subtitle">
                Official terms and fiduciary conditions governing the commercial use, digital interactions, tender engagements, and contractual communications across Best Star Group Holding FZE and its operating enterprises in the UAE, GCC, and international jurisdictions.
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "18px", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <ShieldCheck size={14} color="#10B981" />
                  <strong>Document Ref:</strong> BSG-LEGAL-TOS-2026
                </span>
                <span>•</span>
                <span><strong>Effective Date:</strong> January 1, 2026</span>
                <span>•</span>
                <span><strong>Jurisdiction:</strong> UAE Federal Commercial Law / DIFC Courts</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/docs/Best-Star-Group-Terms-and-Conditions.pdf"
                download="Best-Star-Group-Terms-and-Conditions.pdf"
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

      {/* Legal Text Body */}
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

            {/* Executive Declaration */}
            <div 
              style={{
                padding: "20px 24px",
                borderRadius: "8px",
                backgroundColor: "var(--gold-50)",
                border: "1px solid var(--gold-300)",
                marginBottom: "36px",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <Building2 size={22} color="var(--gold-700)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div style={{ fontSize: "0.86rem", color: "var(--text-primary)" }}>
                <strong>Corporate Identification:</strong> Best Star Group Holding FZE is a corporate holding enterprise registered under the laws of the United Arab Emirates with headquarters in Dubai and Sharjah. These Terms apply comprehensively across all 10 operating subsidiaries, digital portals, tender desks, and international regional hubs.
              </div>
            </div>

            {/* Clause 1 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                1. Acceptance & Scope of Terms
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                By accessing, browsing, submitting inquiries to, or entering into commercial communications through beststargroup.com or any subsidiary domain, you irrevocably agree to be bound by these Terms and Conditions and our complementary Privacy Policy. If you do not accept these provisions, you must immediately terminate access to our digital and commercial desks.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                These terms govern all pre-contractual negotiations, tender responses, supplier vendor onboarding requests, and career applications submitted across our international corporate infrastructure.
              </p>
            </div>

            {/* Clause 2 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                2. Subsidiary Corporate Autonomy & Holding Fiduciary Structure
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Best Star Group Holding FZE serves as the strategic governance and fiduciary umbrella for its operating entities. Unless an express written Corporate Guarantee is executed under seal by the Chairman of Best Star Group Holding FZE, each operating subsidiary—including Best Star Pharma Trading L.L.C, Best Star Facility Management, Best Star Cargo, and others—enters into commercial agreements independently with distinct corporate liability.
              </p>
            </div>

            {/* Clause 3 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                3. Intellectual Property, Trademarks & Trade Dress
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                All trademarks, heraldic crests, trade names, corporate logos, proprietary engineering specifications, facility checklists, and digital content showcased on this platform are the exclusive intellectual property of Best Star Group Holding FZE and protected under UAE Federal Law No. (36) of 2021 on Trademarks and international WIPO conventions.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                No party may reproduce, reverse-engineer, frame, or use any portion of our trademarks or corporate branding without prior written authorization from the Chairman’s Office.
              </p>
            </div>

            {/* Clause 4 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                4. Commercial Inquiries, Bids, Tenders & Procurement
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Any quotation, rate sheet, operational capability summary, or estimate transmitted via our Contact Desk, Subsidiaries Inquiries, or Investor Centre constitutes an invitation to treat and does not constitute a legally binding offer until executed via a formal Master Service Agreement (MSA) signed by an authorized signatory.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "14px" }}>
                <div style={{ padding: "14px", backgroundColor: "#FAF9F6", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--gold-800)", marginBottom: "4px" }}>
                    Healthcare & Pharma
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    Subject to UAE Ministry of Health and Prevention (MOHAP) and Dubai Health Authority (DHA) cold-chain compliance standards.
                  </div>
                </div>
                <div style={{ padding: "14px", backgroundColor: "#FAF9F6", borderRadius: "6px", border: "1px solid var(--border-gold-subtle)" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--gold-800)", marginBottom: "4px" }}>
                    Engineering & Infrastructure
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    Subject to ISO 9001:2015, Dubai Municipality, and DEWA engineering codes and testing protocols.
                  </div>
                </div>
              </div>
            </div>

            {/* Clause 5 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                5. Health, Safety & Environmental (HSE) Protocols
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Best Star Group enforces a strict Zero-Accident HSE benchmark. All commercial partners, contractors, subcontractors, and logistics suppliers entering Best Star Group facilities, warehouses, or client project sites must strictly adhere to our HSE Code of Conduct, OSHAD standards, and regional environmental regulations.
              </p>
            </div>

            {/* Clause 6 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                6. Limitation of Liability
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                To the fullest extent permitted by applicable law, Best Star Group Holding FZE, its directors, officers, and affiliates shall not be liable for any indirect, incidental, punitive, special, or consequential damages resulting from digital platform downtime, network latency, or third-party communications.
              </p>
            </div>

            {/* Clause 7 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 className="font-serif" style={{ fontSize: "1.18rem", color: "var(--gold-800)", marginBottom: "12px" }}>
                7. Governing Law & Dispute Resolution
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                These Terms and Conditions shall be governed by, interpreted, and construed in accordance with the substantive laws of the United Arab Emirates as applicable in the Emirate of Dubai.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                Any dispute, controversy, or claim arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent Courts of Dubai or, where mutually agreed in commercial MSAs, the arbitration rules of the Dubai International Arbitration Centre (DIAC).
              </p>
            </div>

            {/* Corporate Desk Contact Banner */}
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
                  LEGAL & CORPORATE AFFAIRS DESK
                </div>
                <div className="font-serif" style={{ fontSize: "1.1rem", color: "#FFFFFF", marginTop: "4px" }}>
                  Best Star Group Holding FZE • Office of the General Counsel
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>
                  legal@beststargroup.com • +971 6 557 9119 • Dubai Silicon Oasis & SAIF Zone, UAE
                </div>
              </div>

              <a
                href="/docs/Best-Star-Group-Terms-and-Conditions.pdf"
                download="Best-Star-Group-Terms-and-Conditions.pdf"
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
