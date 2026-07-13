"use client";

import { SITE } from "@/lib/content";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.desert}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">Contact</p>
          <h1 className="display hero-on-dark max-w-xl">Plan a trip</h1>
          <p className="hero-lead mt-4">{SITE.email} · {SITE.phone}</p>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="section-b">
          <div className="mx-auto w-full max-w-md px-6 md:px-10">
            {sent ? (
              <p className="copy">Message recorded locally in this demo. Connect a backend to deliver.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                {["Name", "Email", "Message"].map((label) => (
                  <label key={label} className="block">
                    <span className="chapter mb-2 block">{label}</span>
                    {label === "Message" ? (
                      <textarea rows={4} className="w-full border border-ink/15 bg-white/40 p-3 text-sm outline-none focus:border-ocean" />
                    ) : (
                      <input
                        required
                        type={label === "Email" ? "email" : "text"}
                        className="w-full border-b border-ink/20 bg-transparent py-2 text-sm outline-none focus:border-ocean"
                      />
                    )}
                  </label>
                ))}
                <button type="submit" className="btn-solid w-full">Send</button>
              </form>
            )}
          </div>
        </div>
      </HeroReveal>
    </main>
  );
}
