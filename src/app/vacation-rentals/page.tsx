import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TravelImage } from "@/components/travel/TravelImage";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { VACATION_RENTALS, CTA, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vacation Rentals",
  description: "Curated vacation rentals from cozy cottages to beachfront villas.",
};

export default function VacationRentalsPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.heroCoastal}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-3">Vacation rentals</p>
          <h1 className="display hero-on-dark max-w-2xl">Your home away from home</h1>
          <p className="hero-lead mt-4 max-w-xl">
            From cozy cottages to luxurious beachfront properties — curated listings with
            secure booking and transfers included in your offer.
          </p>
        </div>
      </PageHero>

      <HeroReveal>
        <section className="section-b container-wide">
          <p className="copy measure-wide mb-12">
            Each property is vetted for location, amenities, and guest experience. Real
            descriptions, quality photos, and support from enquiry to checkout.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VACATION_RENTALS.map((rental) => (
              <article key={rental.slug} id={rental.slug} className="card-travel group scroll-mt-24 bg-white">
                <TravelImage
                  image={rental.image}
                  className="aspect-[4/3] w-full min-w-0 transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="p-6">
                  <p className="chapter mb-2">{rental.region}</p>
                  <h2 className="subtitle mb-2">{rental.name}</h2>
                  <p className="copy mb-4 text-sm">{rental.note}</p>
                  <Link href="/request" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
                    {CTA.planTrip} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-ink/10 pt-12">
            <Link href="/request" className="btn-solid">{CTA.planTrip}</Link>
            <Link href="/contact" className="btn-outline-travel">{CTA.appointment}</Link>
          </div>
        </section>
      </HeroReveal>
    </main>
  );
}
