import type { Metadata } from "next";
import Link from "next/link";
import { TravelImage } from "@/components/travel/TravelImage";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { HOW_IT_WORKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From structured request to hand-built offer.",
};

export default function HowItWorksPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.couple}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">Process</p>
          <h1 className="display hero-on-dark measure-wide mb-4">Request to departure</h1>
          <p className="hero-lead measure-wide">Four stages. One record per trip.</p>
        </div>
      </PageHero>

      <HeroReveal>
        <ol className="container-wide section-b">
          {HOW_IT_WORKS.map((step) => (
            <li key={step.step} className="grid gap-8 border-b border-ink/10 py-12 first:pt-0 md:grid-cols-2 md:py-16">
              <div>
                <span className="font-mono text-sm text-gold">{String(step.step).padStart(2, "0")}</span>
                <h2 className="subtitle mb-4 mt-2">{step.title}</h2>
                <p className="copy">{step.body}</p>
              </div>
              <TravelImage image={step.image} className="aspect-[3/2] w-full min-w-0" sizes="50vw" />
            </li>
          ))}
        </ol>
      </HeroReveal>

      <p className="section-c container-wide">
        <Link href="/request" className="btn-solid">Open request form</Link>
      </p>
    </main>
  );
}
