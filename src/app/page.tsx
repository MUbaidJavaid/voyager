import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TravelImage } from "@/components/travel/TravelImage";
import { ParallaxBand } from "@/components/travel/FixedBackground";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import { SITE, DESTINATIONS, TRAVEL_STYLES, CTA } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="theme-travel">
      <PageHero image={IMAGES.heroCoastal} fullViewport>
        <div className="section-b container-wide">
          <p className="hero-eyebrow mb-5">{SITE.tagline}</p>
          <h1 className="display hero-on-dark max-w-3xl">
            Book your next dream vacation with us.
          </h1>
          <p className="hero-lead mt-6 max-w-xl">
            Flights, tour packages, vacation rentals, hotels, safaris, activities, and
            transfers — a travel plan built around your dates, style, and budget.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/request"
              className="inline-block bg-sand px-8 py-4 text-base font-medium text-ink hover:bg-sand/90"
            >
              {CTA.planTrip}
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block border-2 border-sand/70 px-8 py-4 text-base font-medium text-sand hover:bg-sand/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </PageHero>

      <HeroReveal>
        <div className="section-b container-narrow text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-gold/60" />
          <h2 className="title mb-8">Welcome to {SITE.name}</h2>
          <p className="copy-lg leading-loose">
            Where travel meets tailoring. We craft unforgettable journeys as unique as you
            are — from sun-kissed escapes to cultural odysseys. Our expert curators
            personalize every detail to match your style, interests, and dreams.
          </p>
          <Link href="/about" className="link-underline mt-8 inline-block text-base">
            {CTA.learnMore} about us
          </Link>
        </div>
      </HeroReveal>

      <section className="relative z-20 bg-sand-dark section-b">
        <div className="container-wide">
          <div className="mb-12 max-w-xl">
            <p className="chapter mb-3">Experiences</p>
            <h2 className="title">Safari packages & vacation rentals</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TRAVEL_STYLES.map((style) => (
              <article key={style.slug} className="card-travel group grid overflow-hidden bg-white md:grid-cols-2">
                <TravelImage
                  image={style.image}
                  className="aspect-[4/3] min-h-[220px] w-full min-w-0 md:min-h-[280px] md:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 25vw"
                />
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h3 className="subtitle mb-4">{style.title}</h3>
                  <p className="copy mb-6">{style.description}</p>
                  <Link
                    href={style.slug === "rentals" ? "/vacation-rentals" : "/travel-styles"}
                    className="inline-flex items-center gap-2 text-base font-medium text-ocean hover:underline"
                  >
                    {CTA.learnMore} <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-sand section-b">
        <div className="container-wide">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="chapter mb-3">Destinations</p>
              <h2 className="title">Worldwide destinations at your fingertips</h2>
            </div>
            <Link href="/destinations" className="btn-outline-travel text-base">
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.slug}
                href="/destinations"
                className="group relative block aspect-[3/4] min-h-[320px] overflow-hidden bg-ink/10"
              >
                <TravelImage
                  image={d.image}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-sand">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand/90">{d.region}</p>
                  <h3 className="font-display mt-1 text-2xl md:text-3xl">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/request" className="btn-solid">{CTA.planTrip}</Link>
          </div>
        </div>
      </section>

      <ParallaxBand image={IMAGES.couple} minHeight="min-h-[55vh]">
        <div className="section-b container-wide text-sand">
          <p className="hero-eyebrow mb-4">How it works</p>
          <h2 className="title hero-on-dark max-w-2xl mb-6">
            Tell us what you want. We build the offer.
          </h2>
          <p className="hero-lead max-w-xl mb-8">
            Six-step request form. Hand-built itinerary. Flights, stays, and activities in one plan.
          </p>
          <Link href="/request" className="inline-block bg-sand px-8 py-4 text-base font-medium text-ink">
            {CTA.planTrip}
          </Link>
        </div>
      </ParallaxBand>

      <HeroReveal>
        <div className="section-b container-wide">
          <div className="mb-12 text-center">
            <p className="chapter mb-3">Reviews</p>
            <h2 className="title">Trusted by travelers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { image: IMAGES.amalfi, title: "Plan", text: "Destination, dates, flights, and stays in one request." },
              { image: IMAGES.safariLodge, title: "Quote", text: "Our team assembles a personalized offer line by line." },
              { image: IMAGES.aerial, title: "Travel", text: "Documents, updates, and history stay on your profile." },
            ].map((item) => (
              <article key={item.title} className="card-travel overflow-hidden bg-white">
                <TravelImage image={item.image} className="aspect-[4/3] w-full min-w-0" sizes="33vw" />
                <div className="p-7">
                  <h3 className="subtitle mb-3">{item.title}</h3>
                  <p className="copy">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="copy mt-10 text-center">
            <Link href="/testimonials" className="link-underline">Read client testimonials</Link>
          </p>
        </div>
      </HeroReveal>

      <ParallaxBand image={IMAGES.desert} minHeight="min-h-[50vh]">
        <div className="section-b container-wide grid gap-8 text-sand lg:grid-cols-2 lg:items-end">
          <div>
            <p className="hero-eyebrow mb-4">Contact</p>
            <h2 className="title hero-on-dark mb-4">Plan your next trip</h2>
            <p className="hero-lead">{SITE.email}</p>
            <p className="hero-lead mt-2">{SITE.phone}</p>
            <p className="hero-lead mt-2 text-sand/80">WhatsApp: {SITE.whatsapp}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-block bg-sand px-8 py-4 text-base font-medium text-ink">
              {CTA.appointment}
            </Link>
            <Link href="/request" className="inline-block border-2 border-sand/70 px-8 py-4 text-base text-sand hover:bg-sand/10">
              {CTA.planTrip}
            </Link>
          </div>
        </div>
      </ParallaxBand>
    </main>
  );
}
