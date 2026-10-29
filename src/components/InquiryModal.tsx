"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { SUBSIDIARIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";
import LuxurySelect from "@/components/LuxurySelect";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubsidiary?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultSubsidiary }: InquiryModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetSector: defaultSubsidiary || "General Corporate Holding",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()} style={{ padding: "36px" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div>
            <span className="gold-badge" style={{ marginBottom: "6px" }}>CORPORATE LIAISON</span>
            <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--text-white)", margin: 0 }}>
              Initiate Commercial Inquiry
            </h3>
            <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "4px" }}>
              Best Star Group FZE Executive Directorate • Dubai, UAE
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "50%",
              color: "var(--text-secondary)",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 16px" }}>
            <CheckCircle2 size={54} color="var(--gold-400)" style={{ margin: "0 auto 16px" }} />
            <h4 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "8px" }}>
              Inquiry Dispatched
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Thank you for contacting Best Star Group. Our corporate desk will review your requirements and respond promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            <div>
              <label style={{ display: "block", fontSize: "0.76rem", color: "var(--gold-300)", marginBottom: "6px", textTransform: "uppercase" }}>
                Full Legal Name *
              </label>
              <input
                type="text"
                required
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212,163,40,0.25)",
                  borderRadius: "4px",
                  color: "#FFF",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.76rem", color: "var(--gold-300)", marginBottom: "6px", textTransform: "uppercase" }}>
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
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(212,163,40,0.25)",
                    borderRadius: "4px",
                    color: "#FFF",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.76rem", color: "var(--gold-300)", marginBottom: "6px", textTransform: "uppercase" }}>
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
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(212,163,40,0.25)",
                    borderRadius: "4px",
                    color: "#FFF",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.76rem", color: "var(--gold-300)", marginBottom: "6px", textTransform: "uppercase" }}>
                {t("contact.sector")} *
              </label>
              <LuxurySelect
                value={formData.targetSector}
                onChange={(val) => setFormData({ ...formData, targetSector: val })}
                options={[
                  { value: "General Corporate Holding", label: t("contact.optGeneralHolding"), badge: "Holding FZE" },
                  ...SUBSIDIARIES.map((s) => ({
                    value: s.name,
                    label: `${s.name} (${s.sector})`,
                    badge: s.shortName
                  }))
                ]}
                placeholder="Select Target Sector"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.76rem", color: "var(--gold-300)", marginBottom: "6px", textTransform: "uppercase" }}>
                {t("contact.message")} *
              </label>
              <textarea
                rows={3}
                required
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212,163,40,0.25)",
                  borderRadius: "4px",
                  color: "#FFF",
                  fontSize: "0.9rem",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "12px" }}>
              <button type="button" onClick={onClose} className="btn-luxury-outline">
                Cancel
              </button>
              <button type="submit" className="btn-luxury-gold">
                <span>SUBMIT INQUIRY</span>
                <Send size={15} />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
