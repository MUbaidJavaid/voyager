import type { Metadata } from "next";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Voyager travel services.",
};

export default function TermsPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.kyoto} className="min-h-[52vh] md:min-h-[56vh]">
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-4">Legal</p>
          <h1 className="display hero-on-dark">Terms of Service</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <article className="section-padding container-prose">
          <div className="prose-travel space-y-6 text-sm">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
            <p>
              By using {SITE.name}&apos;s website and request services, you agree to these terms.
              Our services facilitate personalized travel planning — offers are prepared individually
              and are subject to availability and supplier terms.
            </p>
            <h2 className="font-display text-xl text-ink">Trip requests</h2>
            <p>
              Submitting a request does not constitute a booking. Offers are non-binding until
              accepted according to the terms provided with each offer.
            </p>
            <h2 className="font-display text-xl text-ink">Payments</h2>
            <p>
              Payment terms are specified per offer. Deposits and cancellation policies vary by
              supplier and destination.
            </p>
            <h2 className="font-display text-xl text-ink">Limitation</h2>
            <p>
              We act as an intermediary between travelers and suppliers. Liability is limited to
              the extent permitted by applicable law.
            </p>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <p>Questions about these terms: {SITE.email}</p>
          </div>
        </article>
      </HeroReveal>
    </main>
  );
}
