import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroReveal } from "@/components/travel/PageHero";
import { IMAGES } from "@/lib/images";
import {
  TripRequestMockup,
  OperationsDashboardMockup,
  OfferBuilderMockup,
  MessagingMockup,
  PipelineMockup,
} from "@/components/mockups/ProductMockups";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description: "Interface previews for the Voyager operations platform.",
};

const SCREENS = [
  { title: "Request wizard", desc: "Customer intake", component: <TripRequestMockup />, span: "lg:col-span-7" },
  { title: "Operations queue", desc: "Team dashboard", component: <OperationsDashboardMockup />, span: "lg:col-span-5" },
  { title: "Status pipeline", desc: "Per-request state", component: <PipelineMockup />, span: "lg:col-span-4" },
  { title: "Offer draft", desc: "Line-item builder", component: <OfferBuilderMockup />, span: "lg:col-span-4" },
  { title: "Messages", desc: "Request thread", component: <MessagingMockup />, span: "lg:col-span-4" },
];

export default function DashboardPage() {
  return (
    <main className="theme-platform min-h-screen">
      <PageHero image={IMAGES.workspace} theme="platform">
        <div className="section-b container-wide measure-wide">
          <p className="hero-eyebrow mb-4 text-accent">Dashboard</p>
          <h1 className="display hero-on-dark mb-4">Interface previews</h1>
          <p className="hero-lead">
            Sample UI from the operations MVP. Data shown is illustrative — not live production metrics.
          </p>
        </div>
      </PageHero>

      <HeroReveal variant="platform">
        <section className="section-b container-wide">
          <div className="grid gap-8 lg:grid-cols-12">
            {SCREENS.map((s) => (
              <div key={s.title} className={s.span}>
                <p className="mb-1 text-sm text-foreground">{s.title}</p>
                <p className="mb-4 text-[0.6875rem] text-muted">{s.desc}</p>
                {s.component}
              </div>
            ))}
          </div>

          <p className="copy-platform mt-16">
            <Link href="/technology" className="link-underline-platform">Technology notes</Link>
          </p>
        </section>
      </HeroReveal>
    </main>
  );
}
