"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { VoyagerLogo } from "@/components/brand/VoyagerLogo";
import { NAV_PRIMARY, NAV_PLATFORM } from "@/lib/content";
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
      <div className="container-wide flex h-[3.75rem] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link href="/" className="shrink-0" aria-label="Voyager home">
          <VoyagerLogo variant={isPlatform ? "platform" : "travel"} size="md" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
          <span className={cn("h-4 w-px", isPlatform ? "bg-border" : "bg-ink/12")} />
          <Link
            href="/technology"
            className={cn(
              navLinkClass,
              isPlatform ? "text-accent" : "text-ocean",
            )}
          >
            Platform
          </Link>
        </nav>

        <Link
          href="/request"
          className={cn(
            "hidden text-[0.9375rem] font-medium md:inline-block md:text-base",
            isPlatform ? "btn-solid-platform" : "btn-solid",
          )}
        >
          Request
        </Link>

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
          {[...NAV_PRIMARY, ...NAV_PLATFORM].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
