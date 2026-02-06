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
