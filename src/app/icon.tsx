import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1a17",
          borderRadius: 8,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <path d="M32 10 L44 48 L32 38 L20 48 Z" fill="#f6f2ea" />
          <path d="M14 42 C22 36 42 36 50 42" stroke="#9a7b52" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="22" r="3" fill="#9a7b52" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
