"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const router = useRouter();

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>ShipVideo Demo Page</h1>

      <button
        id="try-premium-button"
        type="button"
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: 700,
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          color: "white",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          marginTop: "20px",
          marginRight: "12px",
          boxShadow: "0 14px 30px rgba(249, 115, 22, 0.28)",
        }}
        onClick={() => setShowPremiumModal(true)}
      >
        Try Premium
      </button>

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

      <button
        id="creator-journey-button"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0f766e",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "12px",
        }}
        onClick={() => router.push("/creator-journey")}
      >
        Open creator journey
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

      <div
        id="nested-creator-journey-panel"
        style={{
          marginTop: 18,
          padding: 16,
          maxWidth: 420,
          borderRadius: 16,
          background:
            "linear-gradient(160deg, rgba(236, 253, 245, 1), rgba(240, 253, 250, 1))",
          border: "1px solid #99f6e4",
          boxShadow: "0 10px 28px rgba(15, 118, 110, 0.14)",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#0f766e",
            marginBottom: 10,
          }}
        >
          Creator journey
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 14, color: "#115e59", lineHeight: 1.5 }}>
          A third nested flow with a production handoff theme under{" "}
          <code>/creator-journey</code>.
        </p>
        <button
          type="button"
          id="creator-journey-open-root"
          onClick={() => router.push("/creator-journey")}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: 15,
            fontWeight: 600,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            background: "linear-gradient(135deg, #0f766e, #0d9488)",
            color: "#f0fdfa",
            marginBottom: 10,
          }}
        >
          Open creator journey
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
            id="creator-journey-quick-kickoff"
            onClick={() => router.push("/creator-journey/kickoff")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #99f6e4",
              background: "#f0fdfa",
              color: "#0f766e",
              cursor: "pointer",
            }}
          >
            Quick jump → Kickoff
          </button>
          <button
            type="button"
            id="creator-journey-quick-signoff"
            onClick={() => router.push("/creator-journey/kickoff/client-signoff")}
            style={{
              padding: "10px 12px",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid #a7f3d0",
              background: "#ecfdf5",
              color: "#047857",
              cursor: "pointer",
            }}
          >
            Quick jump → Sign-off
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

      {showPremiumModal && (
        <div
          id="premium-pricing-modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(15, 23, 42, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            zIndex: 50,
          }}
          onClick={() => setShowPremiumModal(false)}
        >
          <div
            id="premium-pricing-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="premium-pricing-title"
            style={{
              width: "100%",
              maxWidth: 560,
              borderRadius: 24,
              padding: 28,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
              boxShadow: "0 30px 80px rgba(15, 23, 42, 0.24)",
              border: "1px solid rgba(226, 232, 240, 0.9)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    padding: "6px 10px",
                    borderRadius: 999,
                    backgroundColor: "#fff7ed",
                    color: "#c2410c",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Pricing modal
                </div>
                <h2
                  id="premium-pricing-title"
                  style={{ margin: 0, fontSize: 30, color: "#0f172a" }}
                >
                  Activate premium trial
                </h2>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#475569",
                    fontSize: 15,
                    lineHeight: 1.6,
                    maxWidth: 420,
                  }}
                >
                  Start a 14-day premium workspace trial with unlimited recordings,
                  team review links, and advanced export controls.
                </p>
              </div>

              <button
                id="premium-pricing-close"
                type="button"
                aria-label="Close pricing modal"
                onClick={() => setShowPremiumModal(false)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 999,
                  border: "1px solid #cbd5e1",
                  backgroundColor: "white",
                  color: "#334155",
                  cursor: "pointer",
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 20,
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(255, 247, 237, 1), rgba(255, 255, 255, 1))",
                border: "1px solid #fed7aa",
              }}
            >
              <div style={{ fontSize: 14, color: "#9a3412", fontWeight: 700 }}>
                Premium Trial
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                $0 for 14 days
              </div>
              <p style={{ margin: "10px 0 16px", fontSize: 14, color: "#475569" }}>
                Then $49/month per workspace. Cancel before renewal with no charge.
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#334155", lineHeight: 1.8 }}>
                <li>Unlimited auto-generated product demos</li>
                <li>Private team review rooms and approval history</li>
                <li>Priority render queue with HD exports</li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 24,
              }}
            >
              <Link
                id="start-premium-trial-button"
                href="/account/billing/trial-activated"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: "0 16px 30px rgba(234, 88, 12, 0.25)",
                }}
              >
                Start 14-day trial
              </Link>

              <button
                id="premium-pricing-cancel"
                type="button"
                onClick={() => setShowPremiumModal(false)}
                style={{
                  padding: "14px 20px",
                  borderRadius: 12,
                  border: "1px solid #cbd5e1",
                  backgroundColor: "white",
                  color: "#334155",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Maybe later
              </button>
            </div>
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
