import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { LAUNCH_CHANGES, WORKFLOW_FAILURES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Voyager",
  description: "Why the travel experience and operations platform were built as one system.",
};

export default function WhyVoyagerPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.mountains}>
        <div className="section-b container-wide measure-wide">
          <p className="hero-eyebrow mb-4">Why Voyager</p>
          <h1 className="display hero-on-dark mb-6">The website was not the hard part</h1>
          <p className="hero-lead">
            The agency needed a public face and an internal system at the same time. Building
            only the former would have sent more incomplete requests into email.
          </p>
        </div>
      </PageHero>

      <HeroReveal>
        <article className="container-wide section-b">
          <section className="mb-24 grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="subtitle mb-6">Before</h2>
              <ol className="space-y-4">
                {WORKFLOW_FAILURES.map((item, i) => (
                  <li key={item} className="copy flex gap-4 border-t border-ink/10 pt-4">
                    <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="subtitle mb-6">After launch</h2>
              <ol className="space-y-4">
                {LAUNCH_CHANGES.map((item, i) => (
                  <li key={item} className="copy flex gap-4 border-t border-ink/10 pt-4">
                    <span className="font-mono text-xs text-ocean">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <p className="copy measure-wide border-l-2 border-gold pl-6 font-display text-xl leading-relaxed text-ink">
            Modeling the request-to-offer workflow came first. The travel site wraps that model —
            it does not replace it.
          </p>

          <p className="copy mt-10">
            <Link href="/case-study" className="link-underline">Read the case study</Link>
          </p>
        </article>
      </HeroReveal>
    </main>
  );
}
