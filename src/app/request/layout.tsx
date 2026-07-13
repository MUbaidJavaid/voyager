import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Trip",
  description: "Start your personalized trip request — progress saves at every step.",
};

export default function RequestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
