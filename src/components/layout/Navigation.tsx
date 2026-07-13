"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { VoyagerLogo } from "@/components/brand/VoyagerLogo";
import { NAV_PRIMARY, NAV_SECONDARY, SITE, CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

const PLATFORM_PATHS = new Set(["/technology", "/dashboard"]);

const navLinkClass =
  "text-[0.9375rem] font-medium tracking-wide transition-colors md:text-base";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isPlatform = PLATFORM_PATHS.has(pathname);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm",
        isPlatform
          ? "border-border bg-background/95"
          : "border-ink/8 bg-sand/95",
      )}
    >
      <div className="container-wide flex h-[3.75rem] items-center justify-between gap-4 px-6 md:px-10 lg:px-16">
        <Link href="/" className="shrink-0" aria-label="Voyager home">
          <VoyagerLogo variant={isPlatform ? "platform" : "travel"} size="md" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_PRIMARY.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navLinkClass,
                isPlatform ? "text-muted hover:text-foreground" : "text-ink-muted hover:text-ink",
                pathname === link.href && (isPlatform ? "text-foreground" : "text-ink"),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className={cn(
              "inline-flex items-center gap-2 text-[0.9375rem] font-medium md:text-base",
              isPlatform ? "text-muted hover:text-foreground" : "text-ocean hover:text-ink",
            )}
          >
            <Phone className="h-4 w-4" />
            {CTA.callNow}
          </a>
          <Link
            href="/request"
            className={cn(
              "text-[0.9375rem] font-medium md:text-base",
              isPlatform ? "btn-solid-platform" : "btn-solid",
            )}
          >
            {CTA.planTrip}
          </Link>
        </div>

        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 px-6 py-4 lg:hidden">
          {NAV_PRIMARY.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink-muted"
            >
              {link.label}
            </Link>
          ))}
          {[...NAV_SECONDARY].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-ink-muted"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-2 block py-3 text-base font-medium text-ocean"
          >
            {CTA.callNow}: {SITE.phone}
          </a>
          <Link
            href="/request"
            onClick={() => setOpen(false)}
            className="btn-solid mt-4 block text-center"
          >
            {CTA.planTrip}
          </Link>
        </nav>
      )}
    </header>
  );
}
