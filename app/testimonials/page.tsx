"use client";

import { useRouter } from "next/navigation";

const testimonials = [
  {
    quote: "ShipVideo made it so easy to add video to our product. Setup took minutes.",
    author: "Sarah Chen",
    role: "Product Lead, TechCo",
  },
  {
    quote: "The analytics are exactly what we needed. Our team uses them every day.",
    author: "Marcus Johnson",
    role: "CTO, Streamify",
  },
  {
    quote: "Embedding is a breeze. Our customers love the playback experience.",
    author: "Elena Rodriguez",
    role: "Founder, EduStream",
  },
  {
    quote: "Best video API we've tried. Great docs and reliable delivery.",
    author: "David Park",
    role: "Engineer, MediaLab",
  },
  {
    quote: "Privacy controls gave us the flexibility we needed for enterprise clients.",
    author: "Priya Sharma",
    role: "VP Product, SecureVid",
  },
];

export default function TestimonialsPage() {
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

      <h1 style={{ marginBottom: 8, color: "#111" }}>Testimonials</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>
        What our customers say about ShipVideo.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 640,
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              padding: 24,
              backgroundColor: "white",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                margin: "0 0 16px",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </p>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#111" }}>
              {t.author}
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6b7280" }}>
              {t.role}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
