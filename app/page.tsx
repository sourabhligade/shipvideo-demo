"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>ShipVideo Demo Page</h1>

      <button
        id="new-feature"
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
        onClick={() => setShowPopup(true)}
      >
        Click Me
      </button>

      <button
        id="billing-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
        }}
        onClick={() => router.push("/billing")}
      >
        Billing
      </button>

      <button
        id="dashboard-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
        }}
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>

      <button
        id="faq-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#f59e0b",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
        }}
        onClick={() => router.push("/faq")}
      >
        FAQ
      </button>

      <button
        id="features-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#8b5cf6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
        }}
        onClick={() => router.push("/features")}
      >
        Features
      </button>

      <button
        id="testimonials-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ec4899",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={() => router.push("/testimonials")}
      >
        Testimonials
      </button>

      <button
        id="waitlist-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#14b8a6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "12px",
        }}
        onClick={() => router.push("/waitlist")}
      >
        Waitlist
      </button>

      <button
        id="settings-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#64748b",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "12px",
        }}
        onClick={() => router.push("/settings")}
      >
        Settings
      </button>

      {/* Complex multi-action control: nested targets for E2E / manual testing */}
      <div
        id="nested-test-lab-panel"
        style={{
          marginTop: 28,
          padding: 16,
          maxWidth: 420,
          borderRadius: 14,
          border: "2px solid transparent",
          background:
            "linear-gradient(#0b1220, #0b1220) padding-box, linear-gradient(135deg, #6366f1, #a855f7, #ec4899) border-box",
          boxShadow: "0 12px 40px rgba(99, 102, 241, 0.25)",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#a5b4fc",
            marginBottom: 10,
          }}
        >
          Nested navigation lab
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 14, color: "#94a3b8", lineHeight: 1.5 }}>
          Multi-step routes under <code>/test-lab</code> — deep chain + side branch. Use
          nested buttons to jump to different depths.
        </p>
        <button
          type="button"
          id="nested-lab-open-main"
          onClick={() => router.push("/test-lab")}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: 15,
            fontWeight: 600,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "#eef2ff",
            marginBottom: 10,
          }}
        >
          Open test lab (start here)
        </button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <button
            type="button"
            id="nested-lab-quick-phase2"
            onClick={() => router.push("/test-lab/phase-1/phase-2")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #334155",
              background: "#1e293b",
              color: "#e2e8f0",
              cursor: "pointer",
            }}
          >
            Quick jump → Phase 2
          </button>
          <button
            type="button"
            id="nested-lab-quick-side-review"
            onClick={() => router.push("/test-lab/side-route/review")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #334155",
              background: "#1e293b",
              color: "#e2e8f0",
              cursor: "pointer",
            }}
          >
            Quick jump → Side review
          </button>
        </div>
      </div>

      {/* Second nested flow with a different UI theme */}
      <div
        id="nested-scenario-matrix-panel"
        style={{
          marginTop: 18,
          padding: 16,
          maxWidth: 420,
          borderRadius: 14,
          background: "#f8fafc",
          border: "1px solid #dbeafe",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#4338ca",
            marginBottom: 10,
          }}
        >
          Scenario matrix
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 14, color: "#475569", lineHeight: 1.5 }}>
          Another nested route setup with lighter card UI under <code>/scenario-matrix</code>.
        </p>
        <button
          type="button"
          id="scenario-matrix-open-root"
          onClick={() => router.push("/scenario-matrix")}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: 15,
            fontWeight: 600,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            background: "#0ea5e9",
            color: "#f0f9ff",
            marginBottom: 10,
          }}
        >
          Open scenario matrix
        </button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <button
            type="button"
            id="scenario-matrix-quick-track-b"
            onClick={() => router.push("/scenario-matrix/track-a/track-b")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #bfdbfe",
              background: "#eff6ff",
              color: "#1d4ed8",
              cursor: "pointer",
            }}
          >
            Quick jump → Track B
          </button>
          <button
            type="button"
            id="scenario-matrix-quick-alt-final"
            onClick={() => router.push("/scenario-matrix/alt-path/final")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #f5d0fe",
              background: "#fdf4ff",
              color: "#a21caf",
              cursor: "pointer",
            }}
          >
            Quick jump → Alt final
          </button>
        </div>
      </div>

      {showPopup && (
        <div
          id="popup"
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f0f0f0",
            border: "2px solid #0070f3",
            borderRadius: "8px",
            fontSize: "16px",
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          🎉 Popup triggered!
          <button
            style={{
              marginLeft: "10px",
              padding: "6px 12px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>

          {/* Video inside the popup */}
          <div style={{ marginTop: "20px" }}>
            <video
              src="http://localhost:8000/out.mp4"
              controls
              style={{ width: "100%", maxWidth: 800 }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
