"use client";

import { motion } from "framer-motion";
import { PIPELINE_STAGES } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WorkflowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-8 md:p-12">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <DiagramNode title="Customer Portal" subtitle="Multi-step request" accent />
        <Arrow />
        <DiagramNode title="Request Queue" subtitle="Quote-ready intake" />
        <Arrow />
        <DiagramNode title="Agent Review" subtitle="Assign & quote" />
        <Arrow />
        <DiagramNode title="Offer Lifecycle" subtitle="Send → Accept → Close" accent />
      </div>
    </div>
  );
}

function DiagramNode({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative z-10 min-w-[140px] rounded-xl border p-4 text-center",
        accent
          ? "border-accent/40 bg-accent/5 glow-accent"
          : "border-border bg-background/80",
      )}
    >
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />
  );
}

const STAGE_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  review: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  offer: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  accepted: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  closed: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

export function StatusPipelineVisual() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {PIPELINE_STAGES.map((stage, i) => (
        <div key={stage.id} className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium",
              STAGE_COLORS[stage.id],
            )}
          >
            {stage.label}
          </motion.div>
          {i < PIPELINE_STAGES.length - 1 && (
            <span className="hidden text-muted md:inline">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ArchitectureDiagram() {
  const layers = [
    {
      title: "Customer Surface",
      items: ["Trip Request Wizard", "Customer Portal", "Message Thread"],
      color: "border-accent/30 bg-accent/5",
    },
    {
      title: "Application Layer",
      items: ["Next.js App Router", "Server Components", "Real-time Subscriptions"],
      color: "border-purple-500/30 bg-purple-500/5",
    },
    {
      title: "Data & Auth",
      items: ["Convex Database", "Row-level Security", "File Storage"],
      color: "border-amber-500/30 bg-amber-500/5",
    },
    {
      title: "Platform",
      items: ["Vercel Edge", "Preview Deployments", "Future: Stripe · Booking APIs"],
      color: "border-emerald-500/30 bg-emerald-500/5",
    },
  ];

  return (
    <div className="space-y-4">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={cn("rounded-xl border p-5", layer.color)}
        >
          <p className="mb-3 text-sm font-semibold">{layer.title}</p>
          <div className="flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-background/60 px-3 py-1.5 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function DataModelDiagram() {
  const entities = [
    { name: "Customer", relations: ["has many Requests", "has Profile"] },
    { name: "Request", relations: ["has Trip Details", "has Messages", "has Documents"] },
    { name: "Offer", relations: ["belongs to Request", "has Status Lifecycle"] },
    { name: "Agent", relations: ["assigned Requests", "Role: agent | admin"] },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {entities.map((e) => (
        <div
          key={e.name}
          className="rounded-xl border border-border bg-surface-elevated p-5"
        >
          <p className="mb-3 font-mono text-sm text-accent">{e.name}</p>
          <ul className="space-y-1">
            {e.relations.map((r) => (
              <li key={r} className="text-xs text-muted">
                → {r}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SecurityLayersVisual() {
  const layers = [
    "Browser · HTTPS",
    "Next.js · Auth middleware",
    "Convex · RLS policies",
    "Storage · Scoped access",
    "Audit · Status logs",
  ];

  return (
    <div className="relative mx-auto max-w-md">
      {layers.map((layer, i) => (
        <motion.div
          key={layer}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="relative mb-2 rounded-lg border border-border bg-surface-elevated px-4 py-3 text-center text-sm"
          style={{ marginLeft: i * 8, marginRight: i * 8 }}
        >
          {layer}
        </motion.div>
      ))}
    </div>
  );
}

export function RoadmapTimeline() {
  const phases = [
    { label: "Q1 · Shipped", status: "complete", desc: "Request wizard, ops dashboard, pipeline" },
    { label: "Q2 · Payments", status: "next", desc: "Stripe on offer acceptance" },
    { label: "Q3 · Booking", status: "future", desc: "Live reservation APIs" },
    { label: "Q4 · Scale", status: "future", desc: "Multi-agency, automation" },
  ];

  return (
    <div className="relative pl-8">
      <div className="absolute bottom-0 left-3 top-0 w-px bg-border" />
      {phases.map((p, i) => (
        <div key={p.label} className="relative mb-8 last:mb-0">
          <span
            className={cn(
              "absolute -left-5 h-3 w-3 rounded-full border-2",
              p.status === "complete"
                ? "border-accent bg-accent"
                : p.status === "next"
                  ? "border-accent bg-background"
                  : "border-border bg-background",
            )}
          />
          <p className="text-sm font-medium">{p.label}</p>
          <p className="text-xs text-muted">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
