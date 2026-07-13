"use client";

import { FAQ_ITEMS } from "@/lib/content";

export function FAQAccordion({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/10">
      {items.map((item) => (
        <details key={item.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg leading-snug">
            {item.q}
            <span className="mt-1 shrink-0 font-sans text-gold group-open:rotate-45">+</span>
          </summary>
          <p className="copy mt-4 max-w-2xl">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
