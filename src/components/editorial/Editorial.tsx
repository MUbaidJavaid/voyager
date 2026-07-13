"use client";

import { useEffect, useRef, useState } from "react";

export function StickyAside({
  aside,
  children,
}: {
  aside: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="container-wide grid gap-12 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-20">
      <aside className="lg:sticky lg:top-28 lg:self-start">{aside}</aside>
      <div>{children}</div>
    </div>
  );
}

export function PipelineStrip() {
  const stages = ["New", "In Review", "Offer Sent", "Accepted", "Closed"];
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-[0.8125rem] text-muted">
      {stages.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className="border border-border px-2.5 py-1 text-foreground">{s}</span>
          {i < stages.length - 1 && <span className="text-border">→</span>}
        </span>
      ))}
    </div>
  );
}

export function DocBlock({ lines }: { lines: string[] }) {
  return (
    <pre className="doc-block overflow-x-auto p-5 md:p-6">
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </pre>
  );
}

export function ChapterNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav className="hidden flex-col gap-2 lg:flex">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm transition-colors ${
            active === id ? "text-ink" : "text-ink-muted hover:text-ink"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
