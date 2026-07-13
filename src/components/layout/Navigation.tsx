"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { VoyagerLogo } from "@/components/brand/VoyagerLogo";
import { NAV_MENU, NAV_SECONDARY, CTA, type NavMenuItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const PLATFORM_PATHS = new Set(["/technology", "/dashboard"]);

const navLinkClass =
  "text-[0.9375rem] font-medium tracking-wide transition-colors md:text-base";

function isActive(pathname: string, href?: string, children?: NavMenuItem["children"]) {
  if (href && pathname === href) return true;
  return children?.some((c) => pathname === c.href || pathname.startsWith(c.href.split("#")[0])) ?? false;
}

function NavDropdown({
  item,
  pathname,
  isPlatform,
}: {
  item: NavMenuItem;
  pathname: string;
  isPlatform: boolean;
}) {
  const active = isActive(pathname, item.href, item.children);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          navLinkClass,
          isPlatform ? "text-muted hover:text-foreground" : "text-ink-muted hover:text-ink",
          active && (isPlatform ? "text-foreground" : "text-ink"),
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href ?? "#"}
        className={cn(
          "inline-flex items-center gap-1",
          navLinkClass,
          isPlatform ? "text-muted hover:text-foreground" : "text-ink-muted hover:text-ink",
          active && (isPlatform ? "text-foreground" : "text-ink"),
        )}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
      </Link>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 min-w-[12rem] pt-2 opacity-0",
          "transition-all group-hover:visible group-hover:opacity-100",
        )}
      >
        <ul
          className={cn(
            "border py-2 shadow-lg",
            isPlatform
              ? "border-border bg-surface"
              : "border-ink/10 bg-sand",
          )}
        >
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  isPlatform
                    ? "text-muted hover:bg-surface-elevated hover:text-foreground"
                    : "text-ink-muted hover:bg-sand-dark hover:text-ink",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV_MENU.map((item) => (
            <NavDropdown key={item.label} item={item} pathname={pathname} isPlatform={isPlatform} />
          ))}
        </nav>

        <Link
          href="/request"
          className={cn(
            "hidden text-[0.9375rem] font-medium md:inline-block md:text-base",
            isPlatform ? "btn-solid-platform" : "btn-solid",
          )}
        >
          {CTA.planTrip}
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
        <nav className="max-h-[80vh] overflow-y-auto border-t border-ink/10 px-6 py-4 lg:hidden">
          {NAV_MENU.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expanded === item.label;

            if (!hasChildren && item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink-muted"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-ink/8 last:border-0">
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                </button>
                {isExpanded && (
                  <ul className="pb-3 pl-4">
                    {item.href && (
                      <li>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ocean"
                        >
                          View all
                        </Link>
                      </li>
                    )}
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink-muted"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
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
