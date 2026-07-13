"use client";

import Link from "next/link";
import { SITE, CTA } from "@/lib/content";
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
          <h1 className="display hero-on-dark max-w-xl">Plan your journey</h1>
          <p className="hero-lead mt-4">
            Domestic or international — tell us what you need and we&apos;ll build your offer.
          </p>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="section-b container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <p className="copy-lg mb-6">
              Contact us to get help planning your journey. Rely on our services each time you travel.
            </p>
            <dl className="space-y-4 copy">
              <div>
                <dt className="chapter mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt className="chapter mb-1">Phone</dt>
                <dd>{SITE.phone}</dd>
              </div>
              <div>
                <dt className="chapter mb-1">WhatsApp only</dt>
                <dd>{SITE.whatsapp}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Link href="/request" className="btn-solid">{CTA.planTrip}</Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <h2 className="subtitle mb-6">{CTA.appointment}</h2>
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
                {["Name", "Email", "Destination", "Message"].map((label) => (
                  <label key={label} className="block">
                    <span className="chapter mb-2 block">{label}</span>
                    {label === "Message" ? (
                      <textarea rows={4} className="w-full border border-ink/15 bg-white/40 p-3 text-sm outline-none focus:border-ocean" />
                    ) : (
                      <input
                        required={label !== "Destination"}
                        type={label === "Email" ? "email" : "text"}
                        className="w-full border-b border-ink/20 bg-transparent py-2 text-sm outline-none focus:border-ocean"
                      />
                    )}
                  </label>
                ))}
                <button type="submit" className="btn-solid w-full">Send message</button>
              </form>
            )}
          </div>
        </div>
      </HeroReveal>
    </main>
  );
}
