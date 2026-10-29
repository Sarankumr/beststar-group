"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  Clock, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Building2, 
  Briefcase, 
  HelpCircle, 
  ChevronRight, 
  ArrowLeft,
  Headphones,
  Award,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SUBSIDIARIES, ACHIEVEMENTS, CAREER_OPENINGS } from "@/data/companyData";

interface Message {
  id: string;
  sender: "ai" | "officer" | "user";
  senderName: string;
  senderRole?: string;
  senderAvatar?: string;
  text: string;
  timestamp: string;
  ticketId?: string;
  suggestedActions?: { label: string; action: () => void }[];
}

export default function ChatClient() {
  const [activeMode, setActiveMode] = useState<"ai" | "person">("ai");
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // AI Knowledge Messages
  const [aiMessages, setAiMessages] = useState<Message[]>([
    {
      id: "ai-welcome",
      sender: "ai",
      senderName: "BestStar Sovereign AI",
      senderRole: "Autonomous Executive Concierge",
      text: "Greetings and welcome to Best Star Group FZE. I am your autonomous executive concierge, calibrated with verified intelligence across our 10 industrial subsidiaries, global tenders, leadership governance, and investment verticals.\n\nHow may I assist your business or institution today?",
      timestamp: "Just now",
    }
  ]);

  // Live Human Officer Messages
  const [officerMessages, setOfficerMessages] = useState<Message[]>([
    {
      id: "officer-welcome",
      sender: "officer",
      senderName: "Dr. Tariq Al-Mansoor",
      senderRole: "Senior VP — Strategic Partnerships & Corporate Desk",
      senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      text: "Welcome to Best Star Group Executive Desk. I am Dr. Tariq Al-Mansoor, Senior VP of Corporate Partnerships. I am actively on desk at our Dubai DIFC headquarters.\n\nPlease share your company name, the nature of your inquiry, or project scope. I am here to assist with commercial joint ventures, enterprise supply agreements, or direct Chairman's Directorate escalation.",
      timestamp: "Just now",
      ticketId: "BSG-LIVE-882104"
    }
  ]);

  const activeMessages = activeMode === "ai" ? aiMessages : officerMessages;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeMessages, isTyping]);

  // AI Response Generator
  const generateAiReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("subsidiary") || q.includes("companies") || q.includes("business") || q.includes("divisions")) {
      return `Best Star Group FZE anchors 10 market-leading industrial subsidiaries spanning 6 sovereign sectors:\n\n` +
        SUBSIDIARIES.map((s, idx) => `• **${s.name}** (${s.sector}): ${s.description.slice(0, 95)}...`).join("\n") +
        `\n\nWould you like me to connect you directly with the commercial directorate for any specific company?`;
    }

    if (q.includes("tender") || q.includes("rfp") || q.includes("vendor") || q.includes("partner") || q.includes("procurement")) {
      return `Best Star Group operates an accredited, ISO-certified procurement portal for registered global vendors.\n\n` +
        `• **Current Open Tenders**: EPC Marine Dredging (Abu Dhabi), AI BMS Micro-Sensor Supply (Riyadh), and Specialized Cold-Chain Pharma Logistics.\n` +
        `• **Registration Requirement**: Valid trade license, commercial chamber certificate, and audited balance sheets (past 2 fiscal years).\n\n` +
        `You can submit vendor qualification directly on our Contact page or switch to 'Chat with a Person' to speak with Dr. Tariq Al-Mansoor right now.`;
    }

    if (q.includes("job") || q.includes("career") || q.includes("hiring") || q.includes("vacancy") || q.includes("apply")) {
      return `We are currently recruiting senior leadership and engineering specialists for international operations:\n\n` +
        CAREER_OPENINGS.map(j => `• **${j.title}** (${j.department} | ${j.location}) — ${j.type}`).join("\n") +
        `\n\nYou can review complete compensation packages and apply directly on our dedicated Careers page: [Explore Careers](/careers).`;
    }

    if (q.includes("achievement") || q.includes("milestone") || q.includes("award") || q.includes("revenue") || q.includes("growth")) {
      return `Best Star Group recently recorded landmark milestones across MENA and international markets:\n\n` +
        ACHIEVEMENTS.map(a => `• **${a.title}** (${a.awardingBody} | ${a.year}) — ${a.location}`).join("\n") +
        `\n\nOur holding operations maintain an exemplary operational track record across 10 active corporate entities.`;
    }

    if (q.includes("idea") || q.includes("pitch") || q.includes("startup") || q.includes("investment") || q.includes("venture")) {
      return `Best Star Group maintains an active venture incubation ecosystem. We review strategic proposals in Clean Mobility, Cold-Chain MedTech, AI Infrastructure, and Industrial Logistics.\n\nYou can review active initiatives or submit your own confidential proposal on our [Business Ideas](/business-ideas) page.`;
    }

    if (q.includes("chairman") || q.includes("ceo") || q.includes("founder") || q.includes("suwoothu") || q.includes("kamal") || q.includes("leadership")) {
      return `Best Star Group Holding FZE was founded and is chaired by **Mr. Ibunu Suwoothu Kamal**, Chairman & Founder.\n\nUnder his strategic stewardship, Best Star Group has expanded to 10 diversified operating entities across the UAE, Saudi Arabia, India, and Malaysia.`;
    }

    if (q.includes("phone") || q.includes("call") || q.includes("contact") || q.includes("email") || q.includes("office") || q.includes("address")) {
      return `You can connect directly with our corporate holding operations:\n\n` +
        `• **Global Headquarters**: Level 48, Al Sa'ada Tower, DIFC, Dubai, UAE\n` +
        `• **Executive Switchboard**: +971 4 298 8800\n` +
        `• **Kingdom of Saudi Arabia Desk**: Al Faisaliah Tower, King Fahd Rd, Riyadh (+966 11 482 7100)\n` +
        `• **Diplomatic & Tenders Desk**: governance@beststargroup.ae\n\n` +
        `You may also switch to our 'Chat with a Person' tab above to speak directly with our Senior VP on desk!`;
    }

    return `Thank you for your inquiry regarding "${query}". Best Star Group FZE manages high-capital industrial operations with strict standards of governance, safety, and delivery.\n\nI have registered this into our corporate registry. Would you like me to escalate this to Dr. Tariq Al-Mansoor on our Live Desk, or assist you with subsidiary RFP documentation?`;
  };

  // Human Officer Realistic Replier
  const generateOfficerReply = (query: string): string => {
    const ticket = `BSG-LIVE-${Math.floor(100000 + Math.random() * 900000)}`;
    const responses = [
      `Thank you for sharing those details. I have logged your inquiry under Priority Ticket #${ticket}.\n\nOur executive committee reviews all incoming commercial and investment inquiries immediately. Could you confirm your organization name and preferred time window for a private teleconference?`,
      `Understood. With respect to your point on "${query.slice(0, 40)}...", our corporate holding division is equipped to handle this under our sovereign engagement framework.\n\nI have allocated Ticket #${ticket} to your session. If you have an executive summary or NDA document, please send it to my direct desk at tariq.almansoor@beststargroup.ae.`,
      `Thank you. I am actively reviewing your request with our Operations Directorate. We routinely structure multi-million dollar supply agreements and joint ventures across GCC, Asia-Pacific, and Europe.\n\nYour priority reference is #${ticket}. Would you prefer our Dubai team to contact you via telephone or encrypted email?`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      senderName: "You (Executive Guest)",
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const currentQuery = inputText.trim();
    setInputText("");

    if (activeMode === "ai") {
      setAiMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);
      setTimeout(() => {
        const replyText = generateAiReply(currentQuery);
        const replyMsg: Message = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          senderName: "BestStar Sovereign AI",
          senderRole: "Autonomous Executive Concierge",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        setAiMessages((prev) => [...prev, replyMsg]);
        setIsTyping(false);
      }, 700);
    } else {
      setOfficerMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);
      setTimeout(() => {
        const replyText = generateOfficerReply(currentQuery);
        const replyMsg: Message = {
          id: `officer-${Date.now()}`,
          sender: "officer",
          senderName: "Dr. Tariq Al-Mansoor",
          senderRole: "Senior VP — Strategic Partnerships & Corporate Desk",
          senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          ticketId: `BSG-LIVE-${Math.floor(100000 + Math.random() * 900000)}`
        };
        setOfficerMessages((prev) => [...prev, replyMsg]);
        setIsTyping(false);
      }, 1200);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptChipClick = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <div style={{ backgroundColor: "#F7F5F0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      {/* Screen Top Banner */}
      <section style={{ backgroundColor: "#0C121E", color: "#FFFFFF", padding: "40px 20px 30px", borderBottom: "2px solid #C5A059" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
            <Link 
              href="/" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                color: "#C5A059", 
                fontSize: "0.85rem", 
                fontWeight: 600, 
                textDecoration: "none" 
              }}
            >
              <ArrowLeft size={16} /> Return to Corporate Portal
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#48BB78", background: "rgba(72,187,120,0.12)", border: "1px solid rgba(72,187,120,0.3)", padding: "4px 10px", borderRadius: "100px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#48BB78", display: "inline-block", boxShadow: "0 0 8px #48BB78" }}></span>
                Executive Desk Active & Encrypted
              </span>
              <span style={{ fontSize: "0.78rem", color: "#A0AEC0" }}>
                Session ID: <strong style={{ color: "#E2E8F0" }}>BSG-SEC-9290</strong>
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(197, 160, 89, 0.15)", border: "1px solid #C5A059", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, color: "#E8C887", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  Dedicated Executive Communication Desk
                </span>
                <span style={{ fontSize: "0.75rem", color: "#A0AEC0", display: "flex", alignItems: "center", gap: "4px" }}>
                  <ShieldCheck size={14} color="#C5A059" /> 256-Bit TLS Sovereign Encryption
                </span>
              </div>
              <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                Executive Intelligence & Live Officer Desk
              </h1>
              <p style={{ color: "#CBD5E0", fontSize: "0.92rem", marginTop: "6px", maxWidth: "700px" }}>
                Interact directly with our autonomous AI executive engine or converse with Dr. Tariq Al-Mansoor and our Senior Corporate Directorate on duty.
              </p>
            </div>

            {/* Mode Selector Toggle (AI Bot vs Live Person) */}
            <div 
              style={{ 
                display: "flex", 
                backgroundColor: "#162032", 
                padding: "6px", 
                borderRadius: "10px", 
                border: "1.5px solid #C5A059",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)" 
              }}
            >
              <button
                onClick={() => setActiveMode("ai")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  backgroundColor: activeMode === "ai" ? "#C5A059" : "transparent",
                  color: activeMode === "ai" ? "#0C121E" : "#E2E8F0",
                  boxShadow: activeMode === "ai" ? "0 4px 12px rgba(197, 160, 89, 0.35)" : "none"
                }}
              >
                <Bot size={18} />
                <span>AI Executive Bot</span>
                <span style={{ fontSize: "0.68rem", padding: "2px 6px", borderRadius: "100px", background: activeMode === "ai" ? "#0C121E" : "rgba(197, 160, 89, 0.2)", color: activeMode === "ai" ? "#C5A059" : "#E8C887" }}>
                  Instant
                </span>
              </button>

              <button
                onClick={() => setActiveMode("person")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  backgroundColor: activeMode === "person" ? "#C5A059" : "transparent",
                  color: activeMode === "person" ? "#0C121E" : "#E2E8F0",
                  boxShadow: activeMode === "person" ? "0 4px 12px rgba(197, 160, 89, 0.35)" : "none"
                }}
              >
                <Headphones size={18} />
                <span>Chat with Person (Live Officer)</span>
                <span style={{ fontSize: "0.68rem", padding: "2px 6px", borderRadius: "100px", background: "#48BB78", color: "#FFFFFF" }}>
                  🟢 Live
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace: Chat Window + Information Sidecar */}
      <section style={{ flex: 1, padding: "28px 20px 48px", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px", alignItems: "start" }}>

          {/* Left: Chat Container */}
          <div 
            style={{ 
              backgroundColor: "#FFFFFF", 
              borderRadius: "12px", 
              border: "1.5px solid var(--border-gold-medium)", 
              boxShadow: "0 12px 32px rgba(12,18,30,0.06)",
              display: "flex",
              flexDirection: "column",
              height: "720px",
              overflow: "hidden"
            }}
          >
            {/* Chat Header Bar */}
            <div 
              style={{ 
                padding: "16px 20px", 
                backgroundColor: "#FAF9F5", 
                borderBottom: "1.5px solid var(--border-gold-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {activeMode === "ai" ? (
                  <div 
                    style={{ 
                      width: "44px", 
                      height: "44px", 
                      borderRadius: "10px", 
                      background: "linear-gradient(135deg, #0C121E 0%, #1A2740 100%)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      border: "1.5px solid #C5A059"
                    }}
                  >
                    <Bot size={22} color="#C5A059" />
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <div 
                      style={{ 
                        width: "44px", 
                        height: "44px", 
                        borderRadius: "10px", 
                        overflow: "hidden", 
                        border: "2px solid #C5A059" 
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                        alt="Dr. Tariq Al-Mansoor"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span 
                      style={{ 
                        position: "absolute", 
                        bottom: "-2px", 
                        right: "-2px", 
                        width: "12px", 
                        height: "12px", 
                        borderRadius: "50%", 
                        backgroundColor: "#48BB78", 
                        border: "2px solid #FFFFFF" 
                      }} 
                    />
                  </div>
                )}

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {activeMode === "ai" ? "BestStar Sovereign AI Assistant" : "Dr. Tariq Al-Mansoor"}
                    </h3>
                    <span 
                      style={{ 
                        fontSize: "0.68rem", 
                        padding: "2px 8px", 
                        borderRadius: "4px", 
                        backgroundColor: activeMode === "ai" ? "#EDF2F7" : "rgba(72,187,120,0.15)", 
                        color: activeMode === "ai" ? "#4A5568" : "#22543D",
                        fontWeight: 700 
                      }}
                    >
                      {activeMode === "ai" ? "Autonomous v3.8" : "🟢 Live Officer Online"}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    {activeMode === "ai" 
                      ? "Direct holding registry & subsidiary database access" 
                      : "Senior VP, Strategic Partnerships — Dubai DIFC Desk (Response < 3m)"}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={12} /> Live Sync
                </span>
                <button
                  onClick={() => {
                    if (activeMode === "ai") {
                      setAiMessages([{
                        id: "ai-welcome-reset",
                        sender: "ai",
                        senderName: "BestStar Sovereign AI",
                        senderRole: "Autonomous Executive Concierge",
                        text: "Conversation reset. How may I assist your business or institution today?",
                        timestamp: "Just now"
                      }]);
                    } else {
                      setOfficerMessages([{
                        id: "officer-welcome-reset",
                        sender: "officer",
                        senderName: "Dr. Tariq Al-Mansoor",
                        senderRole: "Senior VP — Strategic Partnerships & Corporate Desk",
                        senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                        text: "Direct desk refreshed. Please let me know how I can assist with corporate holding matters.",
                        timestamp: "Just now",
                        ticketId: `BSG-LIVE-${Math.floor(100000 + Math.random() * 900000)}`
                      }]);
                    }
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid var(--border-gold-light)",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    cursor: "pointer"
                  }}
                >
                  Clear Screen
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips (Available in both modes) */}
            <div 
              style={{ 
                padding: "8px 16px", 
                backgroundColor: "var(--bg-card)", 
                borderBottom: "1px solid var(--border-gold-light)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflowX: "auto",
                whiteSpace: "nowrap"
              }}
            >
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-gold-dark)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Suggested Inquiries:
              </span>
              {[
                "List all 10 Subsidiaries",
                "Vendor / RFP Submission",
                "Dr. Alexander Wright Profile",
                "Apply for Open Jobs",
                "Corporate Milestones & Awards",
                "Invest in Business Ideas"
              ].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptChipClick(chip)}
                  style={{
                    padding: "4px 10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--border-gold-light)",
                    borderRadius: "100px",
                    fontSize: "0.72rem",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-gold-base)";
                    e.currentTarget.style.backgroundColor = "var(--bg-gold-subtle)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-gold-light)";
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                  }}
                >
                  <Sparkles size={10} color="var(--color-gold-base)" />
                  {chip}
                </button>
              ))}
            </div>

            {/* Message Thread Body */}
            <div 
              style={{ 
                flex: 1, 
                padding: "20px", 
                overflowY: "auto", 
                display: "flex", 
                flexDirection: "column", 
                gap: "16px",
                backgroundColor: "#FCFCFA"
              }}
            >
              {activeMessages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    style={{
                      display: "flex",
                      flexDirection: isUser ? "row-reverse" : "row",
                      alignItems: "flex-start",
                      gap: "12px",
                      maxWidth: "88%",
                      alignSelf: isUser ? "flex-end" : "flex-start"
                    }}
                  >
                    {!isUser && (
                      msg.senderAvatar ? (
                        <img 
                          src={msg.senderAvatar} 
                          alt={msg.senderName} 
                          style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "cover", border: "1.5px solid #C5A059", flexShrink: 0 }}
                        />
                      ) : (
                        <div 
                          style={{ 
                            width: "36px", 
                            height: "36px", 
                            borderRadius: "8px", 
                            backgroundColor: "#0C121E", 
                            border: "1.5px solid #C5A059", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            flexShrink: 0 
                          }}
                        >
                          <Bot size={18} color="#C5A059" />
                        </div>
                      )
                    )}

                    <div>
                      <div 
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "8px", 
                          marginBottom: "4px",
                          justifyContent: isUser ? "flex-end" : "flex-start"
                        }}
                      >
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {msg.senderName}
                        </span>
                        {msg.ticketId && (
                          <span style={{ fontSize: "0.68rem", backgroundColor: "rgba(197, 160, 89, 0.15)", border: "1px solid #C5A059", color: "#8A6B29", padding: "1px 6px", borderRadius: "3px", fontWeight: 700 }}>
                            Ticket: {msg.ticketId}
                          </span>
                        )}
                        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          {msg.timestamp}
                        </span>
                      </div>

                      <div
                        style={{
                          backgroundColor: isUser ? "#0C121E" : "#FFFFFF",
                          color: isUser ? "#FFFFFF" : "var(--text-primary)",
                          padding: "14px 18px",
                          borderRadius: isUser ? "12px 2px 12px 12px" : "2px 12px 12px 12px",
                          border: isUser ? "1px solid #1A2740" : "1.5px solid var(--border-gold-medium)",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                          fontSize: "0.88rem",
                          lineHeight: "1.6",
                          whiteSpace: "pre-line"
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div style={{ display: "flex", alignItems: "center", gap: "10px", alignSelf: "flex-start", padding: "8px 12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#0C121E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {activeMode === "ai" ? <Bot size={16} color="#C5A059" /> : <Headphones size={16} color="#C5A059" />}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", backgroundColor: "#FFFFFF", border: "1px solid var(--border-gold-light)", borderRadius: "100px", padding: "6px 12px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C5A059", animation: "pulse 1s infinite alternate" }}></span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C5A059", animation: "pulse 1s infinite alternate 0.2s" }}></span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C5A059", animation: "pulse 1s infinite alternate 0.4s" }}></span>
                    <span style={{ fontSize: "0.74rem", color: "var(--text-secondary)", marginLeft: "4px" }}>
                      {activeMode === "ai" ? "Executive Bot formulating response..." : "Dr. Tariq Al-Mansoor is typing..."}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div 
              style={{ 
                padding: "16px 20px", 
                backgroundColor: "#FFFFFF", 
                borderTop: "1.5px solid var(--border-gold-light)",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={activeMode === "ai" ? "Ask anything about Best Star Group, subsidiaries, tenders, or investments..." : "Type your confidential message for Dr. Tariq Al-Mansoor..."}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1.5px solid var(--border-gold-medium)",
                  backgroundColor: "#FAF9F5",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
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
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  cursor: inputText.trim() ? "pointer" : "not-allowed",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                  boxShadow: inputText.trim() ? "0 4px 14px rgba(197, 160, 89, 0.3)" : "none"
                }}
              >
                <span>Send</span>
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Right: Executive Officer Dossier & Quick Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Live Officer Card */}
            <div 
              style={{ 
                backgroundColor: "#FFFFFF", 
                borderRadius: "12px", 
                border: "1.5px solid var(--border-gold-medium)", 
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-gold-dark)", textTransform: "uppercase", letterSpacing: "1.2px" }}>
                  Officer On Duty Today
                </span>
                <span style={{ fontSize: "0.68rem", backgroundColor: "#DEF7EC", color: "#03543F", padding: "2px 6px", borderRadius: "100px", fontWeight: 700 }}>
                  Active Shift
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                  alt="Dr. Tariq Al-Mansoor"
                  style={{ width: "54px", height: "54px", borderRadius: "10px", objectFit: "cover", border: "2px solid #C5A059" }}
                />
                <div>
                  <h4 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Dr. Tariq Al-Mansoor
                  </h4>
                  <p style={{ margin: "2px 0 0", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    Senior VP — Strategic Partnerships
                  </p>
                  <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                    Ex-Sovereign Wealth Advisor (18+ Yrs)
                  </p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--border-gold-light)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Building2 size={14} color="#C5A059" />
                  <span>Dubai DIFC Executive Suite 48</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone size={14} color="#C5A059" />
                  <span>+971 4 298 8800 (Ext. 108)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Mail size={14} color="#C5A059" />
                  <span>tariq.almansoor@beststargroup.ae</span>
                </div>
              </div>

              <button
                onClick={() => setActiveMode("person")}
                style={{
                  width: "100%",
                  marginTop: "16px",
                  padding: "9px 12px",
                  backgroundColor: activeMode === "person" ? "#0C121E" : "#C5A059",
                  color: activeMode === "person" ? "#C5A059" : "#0C121E",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                <Headphones size={15} />
                <span>{activeMode === "person" ? "Chatting with Dr. Tariq" : "Switch to Dr. Tariq's Desk"}</span>
              </button>
            </div>

            {/* Holding Key Metrics */}
            <div 
              style={{ 
                backgroundColor: "#0C121E", 
                borderRadius: "12px", 
                border: "1.5px solid #C5A059", 
                padding: "20px",
                color: "#FFFFFF"
              }}
            >
              <h4 style={{ margin: "0 0 12px", fontSize: "0.86rem", fontWeight: 700, color: "#C5A059", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={15} color="#C5A059" /> Sovereign Holding SLA
              </h4>
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "0.78rem", color: "#CBD5E0", lineHeight: "1.7" }}>
                <li><strong>AI Concierge:</strong> Instant 0-second answer across all 10 corporate portfolios.</li>
                <li><strong>Live Officer:</strong> Sub-3 minute acknowledgement during GCC operating hours (08:30 – 18:00 GST).</li>
                <li><strong>Confidentiality:</strong> Covered under unilateral DIFC corporate governance non-disclosure protocols.</li>
              </ul>
            </div>

            {/* Quick Links to Key Screens */}
            <div 
              style={{ 
                backgroundColor: "#FFFFFF", 
                borderRadius: "12px", 
                border: "1px solid var(--border-gold-light)", 
                padding: "18px"
              }}
            >
              <h4 style={{ margin: "0 0 10px", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Explore Dedicated Screens
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <Link 
                  href="/business-ideas"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: "6px", backgroundColor: "#FAF9F5", color: "var(--text-primary)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}
                >
                  <span>Business Ideas & Co-Investment</span>
                  <ChevronRight size={14} color="#C5A059" />
                </Link>
                <Link 
                  href="/careers"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: "6px", backgroundColor: "#FAF9F5", color: "var(--text-primary)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}
                >
                  <span>Career Openings & Application Desk</span>
                  <ChevronRight size={14} color="#C5A059" />
                </Link>
                <Link 
                  href="/achievements"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: "6px", backgroundColor: "#FAF9F5", color: "var(--text-primary)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}
                >
                  <span>Verified Corporate Milestones</span>
                  <ChevronRight size={14} color="#C5A059" />
                </Link>
                <Link 
                  href="/contact"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: "6px", backgroundColor: "#FAF9F5", color: "var(--text-primary)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}
                >
                  <span>Formal Corporate Headquarters Form</span>
                  <ChevronRight size={14} color="#C5A059" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
