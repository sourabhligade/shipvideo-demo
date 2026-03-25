"use client";

import { useCallback, useState } from "react";
import Link from "next/link";

/** Generate a random numeric API key (demo only). */
function generateNumericApiKey(length = 32): string {
  const digits = "0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let out = "";
  for (let i = 0; i < length; i++) {
    out += digits[bytes[i]! % 10];
  }
  return out;
}

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const presetAmounts = [2000, 10000, 25000, 50000];
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showRechargeSuccessModal, setShowRechargeSuccessModal] = useState(false);

  const handleGenerateApi = useCallback(() => {
    const key = generateNumericApiKey();
    setApiKey(key);
    setShowMessage(true);
  }, []);

  const effectiveRechargeAmount = selectedAmount ?? Number(customAmount || 0);
  const canRecharge = Number.isFinite(effectiveRechargeAmount) && effectiveRechargeAmount > 0;

  const handleRechargeNow = useCallback(() => {
    if (!canRecharge) return;
    setShowRechargeModal(true);
  }, [canRecharge]);

  const handleProceedRecharge = useCallback(() => {
    setShowRechargeModal(false);
    setShowRechargeSuccessModal(true);
  }, []);

  return (
    <main className="settings">
      <style>{`
        .settings {
          min-height: 100vh;
          padding: 40px 24px;
          max-width: 560px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #e5e7eb;
          background: radial-gradient(circle at top left, #020617 0, #020617 100%);
        }
        .settings h1 {
          color: #f9fafb;
          margin-bottom: 8px;
        }
        .settings-back {
          display: inline-block;
          margin-bottom: 24px;
          color: #38bdf8;
          text-decoration: none;
          font-size: 14px;
        }
        .settings-back:hover {
          text-decoration: underline;
        }
        .settings-card {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(135deg, #020617, #0b1120);
          border: 1px solid #1f2937;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        .settings-card h2 {
          font-size: 18px;
          color: #f9fafb;
          margin: 0 0 16px;
        }
        .settings-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .settings-option p {
          margin: 0;
          color: #9ca3af;
          font-size: 14px;
          flex: 1;
          min-width: 200px;
        }
        .settings-btn {
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
          cursor: pointer;
          white-space: nowrap;
        }
        .settings-btn:hover {
          background: #c2410c;
        }
        .settings-message {
          margin-top: 20px;
          padding: 16px;
          border-radius: 12px;
          background: #111827;
          border: 1px solid #374151;
        }
        .settings-message p {
          margin: 0 0 10px;
          color: #d1d5db;
          font-size: 15px;
        }
        .settings-message code {
          display: block;
          padding: 12px;
          border-radius: 8px;
          background: #020617;
          color: #34d399;
          font-size: 13px;
          word-break: break-all;
          font-family: ui-monospace, monospace;
        }
        .settings-separator {
          margin: 22px 0;
          border: none;
          border-top: 1px solid #1f2937;
        }
        .settings-link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid #38bdf8;
          background: #0369a1;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
        }
        .settings-link-btn:hover {
          background: #075985;
        }
        .settings-subtitle {
          margin: 0 0 18px;
          color: #9ca3af;
          font-size: 14px;
        }
        .amount-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 14px;
        }
        .amount-btn {
          padding: 10px 12px;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid #374151;
          background: #111827;
          color: #e5e7eb;
          cursor: pointer;
        }
        .amount-btn:hover {
          background: #1f2937;
        }
        .amount-btn.active {
          border-color: #f97316;
          background: #7c2d12;
          color: #fff;
        }
        .custom-amount-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .currency-label {
          font-size: 20px;
          color: #9ca3af;
        }
        .custom-amount-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #374151;
          background: #020617;
          color: #f9fafb;
          font-size: 14px;
        }
        .recharge-btn {
          width: 100%;
          padding: 11px 16px;
          border-radius: 8px;
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .recharge-btn:hover {
          background: #c2410c;
        }
        .recharge-btn:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }
        .settings-note {
          margin-top: 12px;
          color: #9ca3af;
          font-size: 12px;
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
          max-width: 460px;
          width: 100%;
          padding: 28px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid #374151;
        }
        .modal h3 {
          margin: 0 0 10px;
          color: #f9fafb;
          font-size: 20px;
        }
        .modal p {
          margin: 0 0 18px;
          color: #9ca3af;
          line-height: 1.5;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .modal-btn {
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }
        .modal-btn.cancel {
          border: 1px solid #374151;
          background: #1f2937;
          color: #e5e7eb;
        }
        .modal-btn.primary {
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
        }
        .success-modal {
          text-align: center;
        }
        .success-tick {
          width: 64px;
          height: 64px;
          margin: 0 auto 12px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #14532d;
          color: #86efac;
          border: 1px solid #22c55e;
          font-size: 34px;
          font-weight: 700;
          line-height: 1;
        }
        .success-title {
          margin: 0 0 8px;
          color: #dcfce7;
        }
        .modal-actions.center {
          justify-content: center;
        }
      `}</style>

      <Link href="/" className="settings-back">
        ← Back to home
      </Link>
      <h1>Settings</h1>

      <section className="settings-card">
        <h2>API</h2>
        <div className="settings-option">
          <p>Create a new random numeric API key for integrations (demo).</p>
          <button type="button" className="settings-btn" onClick={handleGenerateApi}>
            Generate API key
          </button>
        </div>

        {showMessage && apiKey && (
          <div className="settings-message" role="status">
            <p>
              API key generated. This is your API key:
            </p>
            <code>{apiKey}</code>
          </div>
        )}

        <hr className="settings-separator" />

        <h2>Account Recharge</h2>
        <p className="settings-subtitle">
          Select an amount or enter a custom value to recharge your account.
        </p>
        <div className="amount-grid">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`amount-btn ${selectedAmount === amount ? "active" : ""}`}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
            >
              ₹{amount}
            </button>
          ))}
        </div>
        <div className="custom-amount-row">
          <span className="currency-label">₹</span>
          <input
            type="number"
            min="1"
            inputMode="numeric"
            className="custom-amount-input"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            placeholder="Enter custom amount"
          />
        </div>
        <button
          type="button"
          className="recharge-btn"
          onClick={handleRechargeNow}
          disabled={!canRecharge}
        >
          Recharge Now
        </button>
        <p className="settings-note">
          All purchases are final. Please refer to our refund policy.
        </p>
      </section>

      {showRechargeModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="recharge-modal-title">
          <div className="modal">
            <h3 id="recharge-modal-title">Recharge Request Submitted</h3>
            <p>
              You selected <strong>₹{effectiveRechargeAmount}</strong> for account recharge.
              Continue to payment gateway to complete the transaction.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn cancel"
                onClick={() => setShowRechargeModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="modal-btn primary"
                onClick={handleProceedRecharge}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {showRechargeSuccessModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="recharge-success-title">
          <div className="modal success-modal">
            <div className="success-tick" aria-hidden="true">✓</div>
            <h3 id="recharge-success-title" className="success-title">Recharge Successful</h3>
            <p>
              Your account has been recharged with <strong>₹{effectiveRechargeAmount}</strong>.
            </p>
            <div className="modal-actions center">
              <button
                type="button"
                className="modal-btn primary"
                onClick={() => setShowRechargeSuccessModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
