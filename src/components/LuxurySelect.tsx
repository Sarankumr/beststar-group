"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface LuxurySelectOption {
  value: string;
  label: string;
  category?: string;
  badge?: string;
}

interface LuxurySelectProps {
  options: LuxurySelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
}

export default function LuxurySelect({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  name,
  required,
  disabled,
  id,
  label,
}: LuxurySelectProps) {
  const { isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Find currently selected option
  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = options.findIndex((opt) => opt.value === value);
        if (currentIndex < options.length - 1) {
          onChange(options[currentIndex + 1].value);
        }
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currentIndex = options.findIndex((opt) => opt.value === value);
        if (currentIndex > 0) {
          onChange(options[currentIndex - 1].value);
        }
      }
    }
  };

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "100%",
        minWidth: 0,
        fontFamily: "var(--font-sans)",
        userSelect: "none"
      }}
    >
      {/* Hidden input to support standard form submissions */}
      {name && (
        <input 
          type="hidden" 
          name={name} 
          value={value} 
          required={required} 
        />
      )}

      {/* Select Trigger Box */}
      <div
        id={id}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label || placeholder}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          padding: "11px 14px",
          backgroundColor: disabled ? "#F3F4F6" : "#FFFFFF",
          border: isOpen 
            ? "1.5px solid var(--gold-500)" 
            : "1.5px solid var(--border-gold-medium)",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          cursor: disabled ? "not-allowed" : "pointer",
          boxShadow: isOpen 
            ? "0 0 0 3px rgba(212, 163, 40, 0.18)" 
            : "0 1px 3px rgba(0, 0, 0, 0.02)",
          transition: "all 0.2s ease",
          outline: "none",
        }}
      >
        <span 
          title={selectedOption ? selectedOption.label : placeholder}
          style={{
            flex: "1 1 0%",
            minWidth: 0,
            maxWidth: "100%",
            fontSize: "0.86rem",
            color: selectedOption ? "var(--text-primary)" : "var(--text-muted)",
            fontWeight: selectedOption ? 600 : 400,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ChevronDown 
          size={16} 
          color="var(--gold-600)" 
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>

      {/* Custom Luxury Popup Menu */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            width: "100%",
            minWidth: 0,
            maxWidth: "100%",
            boxSizing: "border-box",
            zIndex: 9999,
            backgroundColor: "#FFFFFF",
            border: "1.5px solid var(--border-gold-medium)",
            borderRadius: "8px",
            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.14)",
            maxHeight: "260px",
            overflowY: "auto",
            padding: "6px",
            animation: "dropdownFade 0.18s ease",
          }}
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                style={{
                  padding: "9px 12px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: isSelected 
                    ? "var(--gold-50)" 
                    : "transparent",
                  color: isSelected 
                    ? "var(--gold-900)" 
                    : "var(--text-primary)",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "0.85rem",
                  transition: "all 0.15s ease",
                  marginBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "var(--gold-50)";
                    e.currentTarget.style.color = "var(--gold-900)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: "1 1 0%" }}>
                  <span style={{ wordBreak: "break-word", lineHeight: 1.35 }}>{option.label}</span>
                  {option.badge && (
                    <span style={{ fontSize: "0.7rem", color: "var(--gold-700)", fontWeight: 600 }}>
                      {option.badge}
                    </span>
                  )}
                </div>

                {isSelected && (
                  <Check size={15} color="var(--gold-700)" style={{ flexShrink: 0, marginInlineStart: "8px" }} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
