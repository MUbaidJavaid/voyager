import type { Metadata } from "next";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Voyager handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.cultural} className="min-h-[52vh] md:min-h-[56vh]">
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">Legal</p>
          <h1 className="display hero-on-dark">Privacy Policy</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <article className="section-padding container-prose">
          <div className="prose-travel space-y-6 text-sm">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
            <p>
              {SITE.name} (&quot;we&quot;) respects your privacy. This policy describes how we collect,
              use, and protect information when you use our website and trip request services.
            </p>
            <h2 className="font-display text-xl text-ink">Information we collect</h2>
            <p>
              Trip request details (destinations, dates, preferences, contact information),
              communication records related to your requests, and technical data such as browser
              type and device information.
            </p>
            <h2 className="font-display text-xl text-ink">How we use information</h2>
            <p>
              To prepare travel offers, communicate about your requests, improve our services,
              and comply with legal obligations.
            </p>
            <h2 className="font-display text-xl text-ink">Data storage</h2>
            <p>
              Request data is stored on secure infrastructure. We retain information as long as
              needed to fulfill requests and meet legal requirements.
            </p>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <p>Questions about privacy: {SITE.email}</p>
          </div>
        </article>
      </HeroReveal>
    </main>
  );
}
