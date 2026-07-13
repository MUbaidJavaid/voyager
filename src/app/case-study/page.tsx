import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { LAUNCH_CHANGES, WORKFLOW_FAILURES, PROJECT_FACTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Study",
  description: "Replacing email workflows with a production MVP for a personalized travel agency.",
};

export default function CaseStudyPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.workspace}>
        <div className="section-b container-wide measure-wide">
          <p className="hero-eyebrow mb-4">Case study</p>
          <h1 className="display hero-on-dark mb-6">Operations for a hand-built offer model</h1>
          <p className="hero-lead">
            {PROJECT_FACTS.type}. Stack: {PROJECT_FACTS.stack.join(", ")}.
          </p>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="container-prose section-b space-y-14">
          <section>
            <h2 className="subtitle mb-4 text-ink">Business context</h2>
            <p className="copy">
              The agency does not sell fixed packages. Customers describe a trip; the team
              assembles flights, hotels, transfers, and insurance into a single offer. That
              personalization is the product — and the operational bottleneck.
            </p>
          </section>

          <section>
            <h2 className="subtitle mb-4 text-ink">What failed in email</h2>
            <ul className="copy space-y-3">
              {WORKFLOW_FAILURES.map((f) => (
                <li key={f} className="border-l border-ink/15 pl-4">{f}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="subtitle mb-4 text-ink">What shipped</h2>
            <p className="copy mb-4">
              <strong className="font-medium text-ink">Customer:</strong> Six-step request wizard
              with saved progress and required fields.
            </p>
            <p className="copy mb-4">
              <strong className="font-medium text-ink">Operations:</strong> Queue, assignment,
              {` ${PROJECT_FACTS.pipelineStages.join(" → ")} `} pipeline, messaging, documents.
            </p>
            <p className="copy">
              <strong className="font-medium text-ink">Data model:</strong> Offers as first-class
              objects with lifecycle — intended extension point for Stripe and booking APIs.
            </p>
          </section>

          <section>
            <h2 className="subtitle mb-4 text-ink">Changes at launch</h2>
            <ul className="copy space-y-3">
              {LAUNCH_CHANGES.map((c) => (
                <li key={c} className="border-l border-gold/40 pl-4">{c}</li>
              ))}
            </ul>
          </section>

          <blockquote className="border-l-2 border-gold py-1 pl-6 font-display text-xl leading-relaxed text-ink">
            Leverage came from modeling the workflow correctly, then building the interface around it.
          </blockquote>
        </div>
      </HeroReveal>

      <footer className="section-c border-t border-ink/10">
        <Link href="/dashboard" className="link-underline text-sm">Dashboard preview</Link>
      </footer>
    </main>
  );
}
