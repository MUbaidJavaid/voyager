"use client";

import { usePathname } from "next/navigation";
import { Footer, FooterPlatform } from "./Footer";

const PLATFORM_ROUTES = new Set(["/technology", "/dashboard"]);

export function SiteFooter() {
  const pathname = usePathname();
  if (PLATFORM_ROUTES.has(pathname)) return <FooterPlatform />;
  return <Footer />;
}
