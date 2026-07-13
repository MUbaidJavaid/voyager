import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TravelImage } from "@/components/travel/TravelImage";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { TRAVEL_STYLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Travel Styles",
  description: "Safari, coastal, cultural, and adventure trip planning.",
};

export default function TravelStylesPage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.heroSafari}>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-3">Travel styles</p>
          <h1 className="display hero-on-dark max-w-2xl">Four common shapes of trip</h1>
        </div>
      </PageHero>

      <HeroReveal>
        <section className="section-b container-wide space-y-8">
          {TRAVEL_STYLES.map((style, i) => (
            <article
              key={style.slug}
              className="card-travel group grid overflow-hidden bg-white lg:grid-cols-2"
            >
              <TravelImage
                image={style.image}
                className={`aspect-[16/10] w-full min-w-0 lg:aspect-[16/10] lg:min-h-[320px] transition-transform duration-700 group-hover:scale-[1.02] ${i % 2 === 1 ? "lg:order-2" : ""}`}
                sizes="50vw"
              />
              <div className={`flex flex-col justify-center p-10 md:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="title mb-4">{style.title}</h2>
                <p className="copy mb-8">{style.description}</p>
                <Link href="/request" className="inline-flex items-center gap-2 text-sm font-medium text-ocean hover:underline">
                  Plan this style <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </HeroReveal>
    </main>
  );
}
