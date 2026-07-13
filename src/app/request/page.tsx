"use client";

import { useState } from "react";
import Link from "next/link";
import { WIZARD_STEPS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";

const FIELDS: Record<number, { label: string; placeholder: string }[]> = {
  1: [
    { label: "Destination", placeholder: "e.g. Amalfi Coast, Italy" },
    { label: "Departure date", placeholder: "Sep 12, 2026" },
    { label: "Return date", placeholder: "Sep 22, 2026" },
  ],
  2: [
    { label: "Departure airport", placeholder: "London Heathrow (LHR)" },
    { label: "Arrival airport", placeholder: "Naples (NAP)" },
    { label: "Class preference", placeholder: "Premium Economy · Flexible" },
  ],
  3: [
    { label: "Accommodation type", placeholder: "Boutique hotel · Sea view" },
    { label: "Rooms & board", placeholder: "1 double · Breakfast included" },
  ],
  4: [{ label: "Transfers", placeholder: "Private car · Airport ↔ Hotel" }],
  5: [{ label: "Insurance", placeholder: "Comprehensive · 2 travelers" }],
  6: [
    { label: "Full name", placeholder: "Sarah Mitchell" },
    { label: "Email", placeholder: "you@example.com" },
    { label: "Phone", placeholder: "+1 ..." },
  ],
};

export default function RequestPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="theme-travel flex min-h-screen items-center justify-center pt-[4.25rem]">
        <div className="container-narrow px-6 py-24 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/10 text-ocean">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="heading-md mb-4">Request received</h1>
          <p className="prose-travel mb-8">
            Your trip details are saved. Our team will review and respond through your
            request record — quote-ready from the start.
          </p>
          <Link href="/" className="btn-solid">Return home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="theme-travel min-h-screen">
      <PageHero image={IMAGES.amalfi} className="min-h-[48vh] md:min-h-[52vh]">
        <div className="section-a container-wide">
          <p className="hero-eyebrow mb-3">Request a trip</p>
          <h1 className="display hero-on-dark max-w-xl">Tell us what you need</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="container-wide grid lg:grid-cols-[280px_1fr]">
          <aside className="hidden border-r border-ink/10 bg-sand-dark p-10 lg:block">
            <p className="label-caps mb-8 text-gold">Steps</p>
            <ol className="space-y-4">
              {WIZARD_STEPS.map((s) => (
                <li key={s.id} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium",
                      s.id === step
                        ? "bg-ink text-sand"
                        : s.id < step
                          ? "bg-ocean text-white"
                          : "bg-ink/10 text-ink-muted",
                    )}
                  >
                    {s.id < step ? <Check className="h-3.5 w-3.5" /> : s.id}
                  </span>
                  <span className={cn("text-sm", s.id === step ? "text-ink" : "text-ink-muted")}>
                    {s.title}
                  </span>
                </li>
              ))}
            </ol>
            <p className="prose-travel mt-10 text-xs">Progress saves automatically at each step.</p>
          </aside>

          <div className="section-padding flex flex-col justify-center">
            <div className="mx-auto w-full max-w-lg">
              <p className="label-caps mb-2 text-gold lg:hidden">Step {step} of {WIZARD_STEPS.length}</p>
              <h2 className="heading-md mb-2">{WIZARD_STEPS[step - 1].title}</h2>
              <p className="prose-travel mb-8 text-sm">
                Tell us what you need — every field helps us quote faster.
              </p>

              <div className="mb-6 flex gap-1 lg:hidden">
                {WIZARD_STEPS.map((s) => (
                  <div
                    key={s.id}
                    className={cn("h-1 flex-1 rounded-full", s.id <= step ? "bg-ocean" : "bg-ink/10")}
                  />
                ))}
              </div>

              <div className="space-y-5">
                {FIELDS[step].map((f) => (
                  <label key={f.label} className="block">
                    <span className="label-caps mb-2 block text-ink-muted">{f.label}</span>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      className="w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-ocean"
                    />
                  </label>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="btn-outline-travel"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (step < WIZARD_STEPS.length) setStep((s) => s + 1);
                    else setSubmitted(true);
                  }}
                  className="btn-solid"
                >
                  {step < WIZARD_STEPS.length ? "Continue" : "Submit request"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeroReveal>
    </main>
  );
}
