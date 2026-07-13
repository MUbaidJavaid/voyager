import Link from "next/link";
import { VoyagerLogo } from "@/components/brand/VoyagerLogo";
import { NAV_PRIMARY, NAV_SECONDARY, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="theme-travel border-t border-ink/10">
      <div className="container-wide section-c flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="measure">
          <VoyagerLogo size="md" className="mb-4" />
          <p className="copy mt-3 text-sm">{SITE.description}</p>
          <p className="copy mt-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
            <br />
            <a href={`tel:${SITE.phoneTel}`} className="link-underline">{SITE.phone}</a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
          <ul className="space-y-2">
            {NAV_PRIMARY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-muted hover:text-ink">{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {NAV_SECONDARY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-muted hover:text-ink">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-wide border-t border-ink/10 px-6 py-6 text-xs text-ink-muted md:px-10 lg:px-16">
        © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

export function FooterPlatform() {
  return (
    <footer className="theme-platform border-t border-border">
      <div className="container-wide flex flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:justify-between md:px-10 lg:px-16">
        <Link href="/" className="text-foreground hover:underline">← {SITE.name}</Link>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}
