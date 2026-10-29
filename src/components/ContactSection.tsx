"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Globe, Clock } from "lucide-react";
import { SUBSIDIARIES, GLOBAL_OFFICES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";
import LuxurySelect from "@/components/LuxurySelect";

interface ContactSectionProps {
  preselectedSubsidiary?: string;
}

export default function ContactSection({ preselectedSubsidiary }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    sector: preselectedSubsidiary || "General Corporate Holding",
    inquiryType: "Commercial Contract / Partnership",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          sector: "General Corporate Holding",
          inquiryType: "Commercial Contract / Partnership",
          message: "",
        });
      }, 4000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="section-spacing"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid var(--border-gold-subtle)",
      }}
    >
      <div className="site-container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <Mail size={14} color="var(--gold-600)" />
            <span>{t("contact.badge")}</span>
          </div>
          <h2 className="section-title">
            {t("contact.title")}
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {t("contact.subtitle")}
          </p>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
          }}
          className="contact-grid"
        >
          {/* Left Column: Interactive Form */}
          <div 
            className="luxe-card"
            style={{
              padding: "36px",
              background: "#FFFFFF",
              border: "1.5px solid var(--border-gold-medium)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >
            <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "6px" }}>
              Corporate & Commercial Inquiry Form
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "24px" }}>
              Please provide complete details so we can route your submission directly to the relevant subsidiary directorate.
            </p>

            {isSuccess ? (
              <div 
                style={{
                  padding: "44px 20px",
                  textAlign: "center",
                  background: "var(--gold-50)",
                  border: "1.5px solid var(--gold-500)",
                  borderRadius: "8px",
                }}
              >
                <CheckCircle2 size={54} color="var(--gold-600)" style={{ margin: "0 auto 16px" }} />
                <h4 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                  {t("contact.successTitle")}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "460px", margin: "0 auto" }}>
                  {t("contact.successMsg")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "16px" }} className="form-two-col">
                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.fullName")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "#FFFFFF",
                        border: "1.5px solid var(--border-gold-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "#FFFFFF",
                        border: "1.5px solid var(--border-gold-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "16px" }} className="form-two-col">
                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t("contact.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "#FFFFFF",
                        border: "1.5px solid var(--border-gold-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.companyPlaceholder")}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "#FFFFFF",
                        border: "1.5px solid var(--border-gold-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "16px" }} className="form-two-col">
                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.sector")} *
                    </label>
                    <LuxurySelect
                      value={formData.sector}
                      onChange={(val) => setFormData({ ...formData, sector: val })}
                      options={[
                        { value: "General Corporate Holding", label: t("contact.optGeneralHolding"), badge: "Holding FZE" },
                        ...SUBSIDIARIES.map((sub) => ({
                          value: sub.name,
                          label: `${sub.name} (${sub.sector})`,
                          badge: sub.shortName
                        }))
                      ]}
                      placeholder="Select Target Subsidiary / Sector"
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                      {t("contact.inquiryType")} *
                    </label>
                    <LuxurySelect
                      value={formData.inquiryType}
                      onChange={(val) => setFormData({ ...formData, inquiryType: val })}
                      options={[
                        { value: "Commercial Contract / Partnership", label: t("contact.optCommercial") },
                        { value: "RFP / Tender Submission", label: t("contact.optRfp") },
                        { value: "Vendor Registration", label: t("contact.optVendor") },
                        { value: "Executive Media / Investor Relation", label: t("contact.optMedia") },
                        { value: "General Corporate Inquiry", label: t("contact.optInquiry") },
                      ]}
                      placeholder="Select Nature of Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.76rem", color: "var(--text-primary)", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase" }}>
                    {t("contact.message")} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t("contact.messagePlaceholder")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      background: "#FFFFFF",
                      border: "1.5px solid var(--border-gold-medium)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury-gold"
                    style={{ padding: "13px 32px" }}
                  >
                    <span>{isSubmitting ? t("contact.transmitting") : t("contact.submitBtn")}</span>
                    <Send size={14} />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Key Corporate Contact Hubs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div className="luxe-card" style={{ padding: "26px", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Building2 size={20} color="var(--gold-600)" />
                <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                  Global Corporate Headquarters (UAE)
                </h4>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "14px" }}>
                Best Star Group FZE, Executive Tower, Sheikh Zayed Road, Dubai & Hamriyah Free Zone, Sharjah, United Arab Emirates.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem" }}>
                <div style={{ color: "var(--gold-800)", fontWeight: 600 }}>
                  Tel: <a href="tel:+97142889123" style={{ color: "var(--text-primary)", textDecoration: "none" }}>+971 4 288 9123</a> / <a href="tel:+97165268450" style={{ color: "var(--text-primary)", textDecoration: "none" }}>+971 6 526 8450</a>
                </div>
                <div style={{ color: "var(--gold-800)", fontWeight: 600 }}>
                  Email: <a href="mailto:info@beststargroup.com" style={{ color: "var(--text-primary)", textDecoration: "none" }}>info@beststargroup.com</a>
                </div>
              </div>
            </div>

            <div className="luxe-card" style={{ padding: "26px", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Globe size={20} color="var(--gold-600)" />
                <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                  Kingdom of Saudi Arabia Hub (KSA)
                </h4>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "14px" }}>
                King Abdullah Financial City (KAFC) District, Northern Ring Road, Riyadh, Kingdom of Saudi Arabia.
              </p>
              <div style={{ color: "var(--gold-800)", fontSize: "0.85rem", fontWeight: 600 }}>
                Direct Line: <a href="tel:+966114827100" style={{ color: "var(--text-primary)", textDecoration: "none" }}>+966 11 482 7100</a>
              </div>
            </div>

            <div className="luxe-card" style={{ padding: "26px", border: "1.5px solid var(--border-gold-medium)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Clock size={20} color="var(--gold-600)" />
                <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>
                  Operating Business Hours
                </h4>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                Monday &ndash; Friday: 08:30 AM &ndash; 06:00 PM (GST / UTC+4)<br />
                Emergency Operations & Logistics Despatches: <strong>24/7/365 On-Call</strong>
              </p>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1.3fr 0.9fr !important;
          }
        }
        @media (max-width: 768px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
