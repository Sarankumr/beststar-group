import { Metadata } from "next";
import ChatClient from "@/components/ChatClient";

export const metadata: Metadata = {
  title: "Executive Intelligence & Live Officer Desk | Best Star Group FZE",
  description: "Connect with Best Star Group Sovereign AI Executive Concierge or converse in real-time with our Senior Corporate Partnerships Officer.",
};

export default function ChatPage() {
  return <ChatClient />;
}
