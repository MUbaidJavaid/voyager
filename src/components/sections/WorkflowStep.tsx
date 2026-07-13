"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

export function WorkflowStep({
  number,
  title,
  description,
  visual,
}: {
  number: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  return (
    <FadeIn>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-mono text-sm text-accent"
          >
            {number}
          </motion.span>
          <h2 className="heading-md mb-3">{title}</h2>
          <p className="prose-muted">{description}</p>
        </div>
        <div>{visual}</div>
      </div>
    </FadeIn>
  );
}
