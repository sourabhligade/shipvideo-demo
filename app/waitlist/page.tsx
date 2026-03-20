"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <main className="waitlist-page">
      <style>{`
        .waitlist-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: radial-gradient(circle at top left, #020617 0, #020617 40%, #020617 100%);
          color: #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .waitlist-card {
          width: 100%;
          max-width: 520px;
          border-radius: 16px;
          padding: 28px;
          background: linear-gradient(135deg, #020617, #0b1120);
          border: 1px solid #1f2937;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        }

        .waitlist-title {
          font-size: 28px;
          margin: 0 0 8px;
          color: #f9fafb;
        }

        .waitlist-description {
          color: #9ca3af;
          margin: 0 0 20px;
          line-height: 1.6;
        }

        .waitlist-btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
          cursor: pointer;
        }

        .waitlist-btn:hover {
          background: #c2410c;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 24px;
        }

        .modal {
          background: #111827;
          border-radius: 16px;
          max-width: 420px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid #374151;
        }

        .modal h3 {
          margin: 0 0 10px;
          color: #f9fafb;
        }

        .modal p {
          margin: 0 0 18px;
          color: #9ca3af;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
        }

        .modal-btn {
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          background: #ea580c;
          color: #fff;
          cursor: pointer;
        }

        .modal-btn:hover {
          background: #c2410c;
        }
      `}</style>

      <section className="waitlist-card">
        <h1 className="waitlist-title">Waitlist</h1>
        <p className="waitlist-description">
          This is a dummy waitlist card for upcoming features.
        </p>
        <button
          type="button"
          className="waitlist-btn"
          onClick={() => setShowSuccessModal(true)}
        >
          Apply to waitlist
        </button>
      </section>

      {showSuccessModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-success-title"
        >
          <div className="modal">
            <h3 id="waitlist-success-title">Application status</h3>
            <p>Application for waitlist successful.</p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn"
                onClick={() => setShowSuccessModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
