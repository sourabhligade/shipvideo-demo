"use client";

import { useState } from "react";
import Link from "next/link";

export default function DownloadBillStepTwoPage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  return (
    <main className="bill-flow-2">
      <style>{`
        .bill-flow-2 {
          min-height: 100vh;
          max-width: 620px;
          margin: 0 auto;
          padding: 40px 24px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #e5e7eb;
          background: radial-gradient(circle at top left, #020617 0, #020617 100%);
        }
        .bill-link {
          display: inline-block;
          margin-bottom: 18px;
          color: #38bdf8;
          text-decoration: none;
          font-size: 14px;
        }
        .bill-link:hover {
          text-decoration: underline;
        }
        .bill-card {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(135deg, #020617, #0b1120);
          border: 1px solid #1f2937;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        .bill-card h1 {
          margin: 0 0 10px;
          color: #f9fafb;
        }
        .bill-card p {
          margin: 0 0 16px;
          color: #9ca3af;
          line-height: 1.6;
        }
        .bill-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .bill-btn {
          padding: 10px 18px;
          border-radius: 8px;
          border: 1px solid #22c55e;
          background: #16a34a;
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .bill-btn:hover {
          background: #15803d;
        }
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 50;
        }
        .popup {
          width: 100%;
          max-width: 420px;
          border-radius: 12px;
          padding: 20px;
          background: #111827;
          border: 1px solid #374151;
        }
        .popup h3 {
          margin: 0 0 8px;
          color: #f9fafb;
        }
        .popup p {
          margin: 0 0 14px;
          color: #d1d5db;
        }
      `}</style>

      <Link href="/settings/download-bill" className="bill-link">
        ← Back to step 1
      </Link>

      <section className="bill-card">
        <h1>Download bill flow (Step 2)</h1>
        <p>
          Second nested step. Use this to validate success popup behavior in another nested page.
        </p>

        <div className="bill-actions">
          <button
            type="button"
            className="bill-btn"
            onClick={() => setShowSuccessPopup(true)}
          >
            Download final bill (step 2)
          </button>
          <Link href="/settings" className="bill-link">
            Finish and go to settings
          </Link>
        </div>
      </section>

      {showSuccessPopup && (
        <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="bill-step2-popup-title">
          <div className="popup">
            <h3 id="bill-step2-popup-title">Success</h3>
            <p>Bill downloaded successfully in step 2.</p>
            <button type="button" className="bill-btn" onClick={() => setShowSuccessPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
