import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { TECH_STACK, PROJECT_FACTS } from "@/lib/content";
import { DocBlock } from "@/components/editorial/Editorial";

export const metadata: Metadata = {
  title: "Technology",
  description: "Stack and architecture for the Voyager MVP.",
};

export default function TechnologyPage() {
  return (
    <main className="theme-platform min-h-screen">
      <PageHero image={IMAGES.aerial} theme="platform">
        <div className="section-b container-wide measure-wide">
          <p className="hero-eyebrow mb-4 text-accent">Technology</p>
          <h1 className="display hero-on-dark mb-4">Implementation notes</h1>
          <p className="hero-lead">
            {PROJECT_FACTS.type}. Chosen so payments and booking integrations attach to the
            existing offer lifecycle rather than replacing it.
          </p>
        </div>
      </PageHero>

      <HeroReveal variant="platform">
        <section className="section-b container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="subtitle mb-6 text-foreground">Stack</h2>
              <dl className="space-y-5 border-t border-border">
                {TECH_STACK.map((t) => (
                  <div key={t.name} className="grid gap-1 border-b border-border py-4 md:grid-cols-[7rem_1fr]">
                    <dt className="font-mono text-sm text-accent">{t.name}</dt>
                    <dd className="copy-platform text-sm">{t.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="subtitle mb-6 text-foreground">Boundaries</h2>
              <DocBlock
                lines={[
                  "Request",
                  "  ├─ TripDetails (wizard capture)",
                  "  ├─ Messages[]",
                  "  ├─ Documents[]",
                  "  └─ Offer",
                  "       └─ status: draft | sent | accepted | closed",
                  "",
                  "Auth: customer | agent | admin",
                  "RLS: row access by role + assignment",
                ]}
              />
            </div>
          </div>

          <p className="copy-platform mt-12">
            <Link href="/dashboard" className="link-underline-platform">Dashboard previews</Link>
          </p>
        </section>
      </HeroReveal>
    </main>
  );
}
