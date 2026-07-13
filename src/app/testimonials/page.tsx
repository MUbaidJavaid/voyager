import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { TESTIMONIALS, CTA, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Reviews from Voyager Travel clients.",
};

export default function TestimonialsPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.cultural}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-3">Testimonials</p>
          <h1 className="display hero-on-dark max-w-2xl">Experience the world, one journey at a time</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <section className="section-b container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="card-travel flex flex-col bg-white p-8"
              >
                <p className="copy flex-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-ink/10 pt-6">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="copy mt-1 text-sm">
                    {t.location}
                    {t.destination && ` · ${t.destination}`}
                    {t.period && ` · ${t.period}`}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="copy-lg mb-8 max-w-xl mx-auto">
              Ready for your own story? Tell us where you want to go — we&apos;ll build the offer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request" className="btn-solid">{CTA.planTrip}</Link>
              <Link href="/contact" className="btn-outline-travel">{CTA.appointment}</Link>
            </div>
            <p className="copy mt-8 text-sm">
              {SITE.email} · {SITE.phone}
            </p>
          </div>
        </section>
      </HeroReveal>
    </main>
  );
}
