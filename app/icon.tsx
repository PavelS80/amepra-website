import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c1b33",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
