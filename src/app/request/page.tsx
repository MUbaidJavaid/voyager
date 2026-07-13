"use client";

import { useState } from "react";
import Link from "next/link";
import { WIZARD_STEPS, CTA } from "@/lib/content";
import { WIZARD_FIELDS, type WizardField } from "@/lib/wizard-fields";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";

function FieldInput({ field }: { field: WizardField }) {
  const baseClass =
    "w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-ocean";

  if (field.type === "select" && field.options) {
    return (
      <select className={cn(baseClass, "cursor-pointer")} defaultValue="">
        <option value="" disabled>
          Select…
        </option>
        {field.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "textarea") {
    return (
      <textarea
        rows={3}
        placeholder={field.placeholder}
        className="w-full resize-y border border-ink/15 bg-white/50 p-3 text-ink outline-none focus:border-ocean"
      />
    );
  }

  return (
    <input
      type={field.type ?? "text"}
      placeholder={field.placeholder}
      required={field.required}
      className={baseClass}
    />
  );
}

export default function RequestPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const currentStep = WIZARD_STEPS[step - 1];

  if (submitted) {
    return (
      <main className="theme-travel flex min-h-screen items-center justify-center pt-[4.25rem]">
        <div className="container-narrow px-6 py-24 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/10 text-ocean">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="heading-md mb-4">Trip request received</h1>
          <p className="prose-travel mb-8">
            Your details are saved. Our team will review your brief and respond with a
            personalized offer — flights, stays, activities, and transfers included.
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
          <p className="hero-eyebrow mb-3">Plan your journey</p>
          <h1 className="display hero-on-dark max-w-2xl">Book your next dream vacation</h1>
          <p className="hero-lead mt-4 max-w-xl">
            Flights, packages, vacation rentals, hotels, safaris, and activities — tell us
            what you need in six quick steps.
          </p>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="container-wide grid lg:grid-cols-[280px_1fr]">
          <aside className="hidden border-r border-ink/10 bg-sand-dark p-10 lg:block">
            <p className="label-caps mb-8 text-gold">{CTA.planTrip}</p>
            <ol className="space-y-4">
              {WIZARD_STEPS.map((s) => (
                <li key={s.id} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                      s.id === step
                        ? "bg-ink text-sand"
                        : s.id < step
                          ? "bg-ocean text-white"
                          : "bg-ink/10 text-ink-muted",
                    )}
                  >
                    {s.id < step ? <Check className="h-3.5 w-3.5" /> : s.id}
                  </span>
                  <span>
                    <span className={cn("block text-sm font-medium", s.id === step ? "text-ink" : "text-ink-muted")}>
                      {s.title}
                    </span>
                    <span className="copy mt-0.5 block text-xs">{s.description}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="copy mt-10 text-xs">Progress saves automatically at each step.</p>
          </aside>

          <div className="section-padding flex flex-col justify-center">
            <div className="mx-auto w-full max-w-lg">
              <p className="label-caps mb-2 text-gold lg:hidden">
                Step {step} of {WIZARD_STEPS.length}
              </p>
              <h2 className="heading-md mb-1">{currentStep.title}</h2>
              <p className="prose-travel mb-8 text-sm">{currentStep.description}</p>

              <div className="mb-6 flex gap-1 lg:hidden">
                {WIZARD_STEPS.map((s) => (
                  <div
                    key={s.id}
                    className={cn("h-1 flex-1 rounded-full", s.id <= step ? "bg-ocean" : "bg-ink/10")}
                  />
                ))}
              </div>

              <div className="space-y-5">
                {WIZARD_FIELDS[step].map((field) => (
                  <label key={field.name} className="block">
                    <span className="label-caps mb-2 block text-ink-muted">
                      {field.label}
                      {field.required && <span className="text-gold"> *</span>}
                    </span>
                    <FieldInput field={field} />
                  </label>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
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
                  {step < WIZARD_STEPS.length ? "Continue" : CTA.submitRequest}
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeroReveal>
    </main>
  );
}
