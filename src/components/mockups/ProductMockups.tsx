"use client";

import { useState } from "react";
import {
  Building2,
  Car,
  MapPin,
  Plane,
  Shield,
  User,
  ChevronRight,
  Check,
} from "lucide-react";
import { WIZARD_STEPS } from "@/lib/content";
import { cn } from "@/lib/utils";

const STEP_ICONS = [MapPin, Plane, Building2, Car, Shield, User];

export function TripRequestMockup() {
  const [step, setStep] = useState(2);

  const Icon = STEP_ICONS[step - 1];

  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface-elevated">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <span className="ml-2 text-xs text-muted">Trip Request Wizard</span>
      </div>

      <div className="p-5">
        <div className="mb-6 flex gap-1">
          {WIZARD_STEPS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStep(s.id)}
              className={cn(
                "h-1 flex-1 rounded-full transition-all",
                s.id <= step ? "bg-accent" : "bg-white/10",
              )}
              aria-label={`Step ${s.id}`}
            />
          ))}
        </div>

        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-muted">Step {step} of 6</p>
            <p className="font-medium">{WIZARD_STEPS[step - 1].title}</p>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-border bg-background/50 p-4">
          {step === 1 && (
            <>
              <Field label="Destination" value="Amalfi Coast, Italy" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Departure" value="Sep 12, 2026" />
                <Field label="Return" value="Sep 22, 2026" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <Field label="From" value="London Heathrow (LHR)" />
              <Field label="To" value="Naples (NAP)" />
              <Field label="Class" value="Premium Economy · Flexible" />
            </>
          )}
          {step === 3 && (
            <>
              <Field label="Property type" value="Boutique hotel · Sea view" />
              <Field label="Rooms" value="1 double · Breakfast included" />
            </>
          )}
          {step === 4 && (
            <Field label="Transfer" value="Private car · Airport ↔ Hotel" />
          )}
          {step === 5 && (
            <Field label="Coverage" value="Comprehensive · 2 travelers" />
          )}
          {step === 6 && (
            <>
              <Field label="Name" value="Sarah Mitchell" />
              <Field label="Email" value="sarah@example.com" />
            </>
          )}
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-xs text-muted">Progress saved automatically</span>
          <button
            type="button"
            onClick={() => setStep((s) => (s < 6 ? s + 1 : 1))}
            className="flex items-center gap-1 text-sm text-accent hover:underline"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[10px] uppercase tracking-wider text-muted">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

export function OperationsDashboardMockup() {
  const requests = [
    { id: "VR-2847", client: "Sarah M.", dest: "Amalfi Coast", status: "In Review", agent: "James K.", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
    { id: "VR-2846", client: "Chen Wei", dest: "Kyoto", status: "Offer Sent", agent: "Maria L.", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    { id: "VR-2845", client: "Ahmed R.", dest: "Marrakech", status: "New", agent: "Unassigned", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { id: "VR-2844", client: "Elena V.", dest: "Patagonia", status: "Accepted", agent: "James K.", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-sm font-medium">Operations Queue</span>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">4 active</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted">
              <th className="px-4 py-2 font-medium">Request</th>
              <th className="px-4 py-2 font-medium">Client</th>
              <th className="px-4 py-2 font-medium">Destination</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Owner</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-mono text-xs text-accent">{r.id}</td>
                <td className="px-4 py-3">{r.client}</td>
                <td className="px-4 py-3 text-muted">{r.dest}</td>
                <td className="px-4 py-3">
                  <span className={cn("rounded-full border px-2 py-0.5 text-xs", r.color)}>
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">{r.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PipelineMockup() {
  const stages = ["New", "In Review", "Offer Sent", "Accepted", "Closed"];
  const active = 2;

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6">
      <p className="mb-6 text-sm text-muted">Request VR-2847 · Amalfi Coast</p>
      <div className="flex items-center justify-between gap-2">
        {stages.map((stage, i) => (
          <div key={stage} className="flex flex-1 flex-col items-center gap-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs",
                i <= active
                  ? "border-accent bg-accent/20 text-accent"
                  : "border-border bg-background text-muted",
              )}
            >
              {i < active ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={cn("text-center text-[10px]", i <= active ? "text-foreground" : "text-muted")}>
              {stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MessagingMockup() {
  const messages = [
    { from: "customer", text: "Can we add a day trip to Capri?", time: "2:14 PM" },
    { from: "agent", text: "Absolutely — I'll revise the offer with a private boat option.", time: "2:31 PM" },
    { from: "customer", text: "Perfect, please send the updated quote.", time: "2:33 PM" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
      <div className="border-b border-border px-4 py-3">
        <p className="text-sm font-medium">Messages · VR-2847</p>
        <p className="text-xs text-muted">All communication on this request</p>
      </div>
      <div className="space-y-3 p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn("flex", m.from === "agent" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
                m.from === "agent"
                  ? "bg-accent/15 text-foreground"
                  : "bg-white/5 text-muted",
              )}
            >
              <p>{m.text}</p>
              <p className="mt-1 text-[10px] opacity-60">{m.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsMockup() {
  const rows = [
    { status: "In Review", count: "—", note: "Sample UI" },
    { status: "Offer Sent", count: "—", note: "Sample UI" },
    { status: "Unassigned", count: "—", note: "Sample UI" },
  ];

  return (
    <div className="rounded-sm border border-border bg-surface-elevated p-5">
      <p className="mb-1 text-sm font-medium">Queue summary</p>
      <p className="mb-4 text-[0.6875rem] text-muted">Interface preview · not live data</p>
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((r) => (
            <tr key={r.status} className="border-t border-border/50">
              <td className="py-2.5 text-muted">{r.status}</td>
              <td className="py-2.5 font-mono text-xs text-muted">{r.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OfferBuilderMockup() {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <p className="mb-4 text-sm font-medium">Offer Builder · Draft</p>
      <div className="space-y-2 text-sm">
        {[
          { item: "Flights LHR → NAP (Premium Economy)", price: "£1,240" },
          { item: "Hotel · 9 nights · Sea view", price: "£2,850" },
          { item: "Private transfers", price: "£320" },
          { item: "Travel insurance (2 pax)", price: "£98" },
        ].map((line) => (
          <div key={line.item} className="flex justify-between border-b border-border/50 py-2">
            <span className="text-muted">{line.item}</span>
            <span>{line.price}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 font-medium">
          <span>Total</span>
          <span className="text-accent">£4,508</span>
        </div>
      </div>
    </div>
  );
}

export function CustomerProfileMockup() {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-lg font-medium text-accent">
          SM
        </div>
        <div>
          <p className="font-medium">Sarah Mitchell</p>
          <p className="text-xs text-muted">3 past trips · Client since 2023</p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-xs uppercase tracking-wider text-muted">Recent requests</p>
        {["Amalfi Coast · In Review", "Tuscany · Closed · Sep 2025", "Sicily · Closed · Mar 2025"].map((t) => (
          <div key={t} className="rounded-lg bg-background/50 px-3 py-2 text-muted">{t}</div>
        ))}
      </div>
    </div>
  );
}

export function AdminPanelMockup() {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-5">
      <p className="mb-4 text-sm font-medium">Admin · Team & Roles</p>
      <div className="space-y-2">
        {[
          { name: "James K.", role: "Agent" },
          { name: "Maria L.", role: "Agent" },
          { name: "Admin", role: "Admin" },
        ].map((u) => (
          <div key={u.name} className="flex items-center justify-between rounded-sm bg-background/50 px-3 py-2 text-sm">
            <span>{u.name}</span>
            <span className="text-xs text-muted">{u.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
