import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #1c1a17 0%, #2f2a24 42%, #3d5a62 100%)",
          color: "#f6f2ea",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="31" stroke="#9a7b52" strokeWidth="1.25" opacity="0.7" />
            <path d="M32 10 L44 48 L32 38 L20 48 Z" fill="#f6f2ea" />
            <path d="M14 42 C22 36 42 36 50 42" stroke="#9a7b52" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="32" cy="22" r="2.4" fill="#9a7b52" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 56, letterSpacing: -1.2, lineHeight: 1 }}>{SITE.name}</span>
            <span
              style={{
                marginTop: 10,
                fontSize: 16,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "rgba(246,242,234,0.72)",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: 600,
              }}
            >
              Personalized Travel
            </span>
          </div>
        </div>

        <div style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 44, lineHeight: 1.15, margin: 0, letterSpacing: -0.5 }}>
            Journeys built for you — not from a catalog.
          </p>
          <p
            style={{
              marginTop: 24,
              fontSize: 22,
              lineHeight: 1.5,
              color: "rgba(246,242,234,0.78)",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            {SITE.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 18,
            color: "rgba(246,242,234,0.65)",
          }}
        >
          <span>voyager.travel</span>
          <span>Custom offers · Operations platform</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
