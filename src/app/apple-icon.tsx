import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1c1a17 0%, #2a2723 100%)",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#9a7b52" strokeWidth="1.5" opacity="0.65" />
          <path d="M32 10 L44 48 L32 38 L20 48 Z" fill="#f6f2ea" />
          <path d="M14 42 C22 36 42 36 50 42" stroke="#9a7b52" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="22" r="2.8" fill="#9a7b52" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
