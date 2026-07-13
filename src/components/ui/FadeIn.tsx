"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const offset = direction === "up" ? 24 : direction === "down" ? -24 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}

export function PageHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("mb-16 max-w-3xl", className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h1 className="heading-lg mb-6">{title}</h1>
      {description && <p className="prose-muted">{description}</p>}
    </FadeIn>
  );
}
