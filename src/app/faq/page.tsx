import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { FAQ_ITEMS } from "@/lib/content";
import { FAQAccordion } from "@/components/travel/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Voyager requests and platform.",
};

export default function FAQPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.heroCoastal}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">FAQ</p>
          <h1 className="display hero-on-dark max-w-xl">Common questions</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="container-wide section-b grid gap-16 lg:grid-cols-[minmax(0,14rem)_1fr]">
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <p className="copy text-sm">
              <Link href="/contact" className="link-underline">Contact</Link> for anything not listed.
            </p>
          </aside>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </HeroReveal>
    </main>
  );
}
