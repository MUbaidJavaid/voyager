import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TravelImage } from "@/components/travel/TravelImage";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { DESTINATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Regions the agency plans trips for regularly.",
};

export default function DestinationsPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.patagonia}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-3">Destinations</p>
          <h1 className="display hero-on-dark max-w-2xl">Regions we plan often</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <section className="section-b container-wide">
          <p className="copy measure-wide mb-12">
            Each trip is built individually. These are common starting points — not fixed packages.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <article key={d.slug} className="card-travel group bg-white">
                <TravelImage
                  image={d.image}
                  className="aspect-[4/3] w-full min-w-0 transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="p-6">
                  <p className="chapter mb-2">{d.region}</p>
                  <h2 className="subtitle mb-2">{d.name}</h2>
                  <p className="copy mb-4 text-sm">{d.note}</p>
                  <Link href="/request" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
                    Request trip <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </HeroReveal>
    </main>
  );
}
