import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EDUO — Angļu valoda bērnudārzos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#00AEEF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: 32,
          }}
        >
          EDUO
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Angļu valoda bērnudārzos
        </div>

        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          Mācām ar prieku, spēlēm un interesi. Nodarbības tieši jūsu bērnudārzā.
        </div>

        {/* CTA pill */}
        <div
          style={{
            background: "#EC008C",
            color: "white",
            fontSize: 24,
            fontWeight: 700,
            padding: "16px 48px",
            borderRadius: 100,
          }}
        >
          eduo.lv
        </div>
      </div>
    ),
    { ...size }
  );
}
