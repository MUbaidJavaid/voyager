import type { Metadata } from "next";
import Link from "next/link";
import { TravelImage } from "@/components/travel/TravelImage";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "Voyager — personalized travel and the platform behind it.",
};

export default function AboutPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.aerial}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">About</p>
          <h1 className="display hero-on-dark max-w-2xl">Hand-built offers require disciplined operations</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <section className="container-wide section-b grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="copy-lg mb-6">
              Voyager is a travel agency project: a customer site for trip requests and an internal
              platform for quoting, tracking, and client history.
            </p>
            <p className="copy">
              The public site exists to capture complete briefs. The platform exists so those briefs
              do not disappear into email once they arrive.
            </p>
          </div>
          <TravelImage image={IMAGES.workspace} className="aspect-[4/5] w-full min-w-0" sizes="50vw" />
        </section>
      </HeroReveal>

      <section className="relative z-20 border-y border-ink/10 bg-sand-dark section-a">
        <div className="container-wide grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs text-gold">Model</p>
            <p className="copy mt-3 text-sm">Custom offers per client — flights, stays, safaris, transfers.</p>
          </div>
          <div>
            <p className="font-mono text-xs text-gold">Constraint</p>
            <p className="copy mt-3 text-sm">Email and spreadsheets did not scale with request volume.</p>
          </div>
          <div>
            <p className="font-mono text-xs text-gold">Response</p>
            <p className="copy mt-3 text-sm">One system for intake, queue, offers, and messages.</p>
          </div>
        </div>
      </section>

      <p className="section-c container-wide">
        <Link href="/case-study" className="link-underline text-sm">Case study</Link>
      </p>
    </main>
  );
}
