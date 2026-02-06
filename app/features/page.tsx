"use client";

import { useRouter } from "next/navigation";

const features = [
  { title: "Video Hosting", desc: "Upload and stream your videos securely." },
  { title: "Analytics", desc: "Track views, engagement, and performance." },
  { title: "Embed Anywhere", desc: "Add videos to any site with one snippet." },
  { title: "HD Quality", desc: "Stream in up to 4K with adaptive bitrate." },
  { title: "Privacy Controls", desc: "Password protect or restrict by domain." },
  { title: "API Access", desc: "Integrate with your apps and workflows." },
];

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <main
      style={{
        padding: 40,
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <button
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#e5e7eb",
          color: "#374151",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: 24,
        }}
        onClick={() => router.push("/")}
      >
        ← Back
      </button>

      <h1 style={{ marginBottom: 8, color: "#111" }}>Features</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>
        Everything you need to ship video.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
          maxWidth: 900,
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              aspectRatio: "1",
              padding: 24,
              backgroundColor: "white",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "#111" }}>
              {f.title}
            </h3>
            <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.4 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
