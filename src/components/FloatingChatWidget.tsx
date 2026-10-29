"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bot, 
  MessageSquare, 
  X, 
  Maximize2, 
  ExternalLink, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Headphones,
  ChevronRight
} from "lucide-react";

export default function FloatingChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"ai" | "officer">("ai");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string; time: string }>>([
    {
      sender: "bot",
      text: "Greetings. I am BestStar Sovereign AI Concierge. How can I assist your enterprise or investment inquiry today?",
      time: "Just now"
    }
  ]);

  // Don't render floating preview if already on the dedicated full /chat screen
  if (pathname === "/chat") {
    return null;
  }

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    const newMsg = {
      sender: "user" as const,
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    setTimeout(() => {
      let botResponse = "";
      if (mode === "ai") {
        botResponse = `Thank you. I have registered your inquiry regarding "${userText}". Best Star Group manages 10 multi-national subsidiaries across Energy, EPC, Marine, Healthcare, and Tech.\n\nFor deep corporate due diligence or live officer conversation, click 'Open Separate Screen' above!`;
      } else {
        botResponse = `Dr. Tariq Al-Mansoor has received your message on our Dubai DIFC desk (Ref: #BSG-LIVE-38291). He is reviewing your request. For interactive live teleconference setup, please switch to our dedicated full chat screen!`;
      }
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 600);
  };

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 999 }}>
      {/* Expanded Floating Box */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "0",
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            height: "490px",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            border: "1.5px solid #C5A059",
            boxShadow: "0 16px 40px rgba(12, 18, 30, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "fadeInUp 0.25s ease"
          }}
        >
          {/* Top Bar with SEPARATE SCREEN CTA */}
          <div
            style={{
              backgroundColor: "#0C121E",
              color: "#FFFFFF",
              padding: "12px 14px",
              borderBottom: "1.5px solid #C5A059",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  backgroundColor: "#162032",
                  border: "1px solid #C5A059",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {mode === "ai" ? <Bot size={15} color="#C5A059" /> : <Headphones size={15} color="#48BB78" />}
              </div>
              <div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {mode === "ai" ? "AI Executive Concierge" : "Live Officer Desk"}
                </div>
                <div style={{ fontSize: "0.68rem", color: "#48BB78", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#48BB78" }}></span>
                  24/7 Sovereign Desk
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {/* Separate Screen Direct Link Button */}
              <Link
                href="/chat"
                onClick={() => setIsOpen(false)}
                title="Open in Separate Dedicated Screen"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#C5A059",
                  color: "#0C121E",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textDecoration: "none"
                }}
              >
                <span>Full Screen</span>
                <Maximize2 size={11} />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#A0AEC0",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex"
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Separate Screen Highlight Banner */}
          <Link
            href="/chat"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#FAF9F5",
              borderBottom: "1px solid var(--border-gold-light)",
              padding: "7px 12px",
              textDecoration: "none",
              color: "var(--text-primary)",
              fontSize: "0.72rem",
              fontWeight: 600
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={12} color="#C5A059" />
              <strong>Launch Dedicated Separate Screen</strong>
            </span>
            <span style={{ color: "#8A6B29", fontWeight: 700, display: "flex", alignItems: "center" }}>
              Open /chat ↗
            </span>
          </Link>

          {/* Mode Switcher Tabs */}
          <div style={{ display: "flex", backgroundColor: "#EDF2F7", padding: "3px" }}>
            <button
              onClick={() => setMode("ai")}
              style={{
                flex: 1,
                padding: "6px 8px",
                fontSize: "0.74rem",
                fontWeight: 700,
                border: "none",
                borderRadius: "4px",
                backgroundColor: mode === "ai" ? "#FFFFFF" : "transparent",
                color: mode === "ai" ? "#0C121E" : "#718096",
                cursor: "pointer"
              }}
            >
              🤖 AI Bot
            </button>
            <button
              onClick={() => setMode("officer")}
              style={{
                flex: 1,
                padding: "6px 8px",
                fontSize: "0.74rem",
                fontWeight: 700,
                border: "none",
                borderRadius: "4px",
                backgroundColor: mode === "officer" ? "#FFFFFF" : "transparent",
                color: mode === "officer" ? "#0C121E" : "#718096",
                cursor: "pointer"
              }}
            >
              👤 Chat with Person
            </button>
          </div>

          {/* Messages Container */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "#FCFCFA"
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  backgroundColor: m.sender === "user" ? "#0C121E" : "#FFFFFF",
                  color: m.sender === "user" ? "#FFFFFF" : "#1A202C",
                  padding: "8px 12px",
                  borderRadius: m.sender === "user" ? "10px 2px 10px 10px" : "2px 10px 10px 10px",
                  border: m.sender === "user" ? "none" : "1px solid var(--border-gold-light)",
                  fontSize: "0.78rem",
                  lineHeight: "1.45",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Input Bar */}
          <div
            style={{
              padding: "10px 12px",
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid var(--border-gold-light)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={mode === "ai" ? "Ask AI about subsidiaries..." : "Message Dr. Tariq Al-Mansoor..."}
              style={{
                flex: 1,
                padding: "8px 10px",
                borderRadius: "6px",
                border: "1px solid var(--border-gold-medium)",
                fontSize: "0.78rem",
                outline: "none"
              }}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              style={{
                backgroundColor: inputText.trim() ? "#C5A059" : "#E2E8F0",
                color: inputText.trim() ? "#0C121E" : "#A0AEC0",
                border: "none",
                borderRadius: "6px",
                padding: "8px 12px",
                cursor: inputText.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Executive Chat Desk"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#0C121E",
          color: "#FFFFFF",
          padding: "12px 18px",
          borderRadius: "100px",
          border: "2px solid #C5A059",
          boxShadow: "0 8px 24px rgba(12, 18, 30, 0.35)",
          cursor: "pointer",
          transition: "all 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 28px rgba(197, 160, 89, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(12, 18, 30, 0.35)";
        }}
      >
        <div style={{ position: "relative", display: "flex" }}>
          <MessageSquare size={18} color="#C5A059" />
          <span
            style={{
              position: "absolute",
              top: "-3px",
              right: "-3px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#48BB78",
              boxShadow: "0 0 6px #48BB78"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.1 }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FFFFFF" }}>
            AI & Live Desk
          </span>
          <span style={{ fontSize: "0.65rem", color: "#C5A059" }}>
            Separate Screen Available ↗
          </span>
        </div>
      </button>
    </div>
  );
}
