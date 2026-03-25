"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const presetAmounts = [2000, 10000, 25000, 50000];

function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-IN").format(amount);
}

export default function AccountRechargePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(presetAmounts[0]!);
  const [customAmount, setCustomAmount] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const finalAmount = useMemo(() => {
    if (customAmount.trim() !== "") {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 0;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const isRechargeDisabled = finalAmount <= 0;

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleRecharge = () => {
    if (isRechargeDisabled) {
      return;
    }
    setShowPopup(true);
  };

  const handleConfirmRecharge = () => {
    setShowPopup(false);
    setShowSuccessPopup(true);
  };

  return (
    <main className="recharge-page">
      <style>{`
        .recharge-page {
          min-height: 100vh;
          padding: 40px 24px;
          max-width: 760px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #e5e7eb;
          background: radial-gradient(circle at top left, #020617 0, #020617 100%);
        }
        .back-link {
          display: inline-block;
          margin-bottom: 18px;
          color: #38bdf8;
          text-decoration: none;
          font-size: 14px;
        }
        .back-link:hover {
          text-decoration: underline;
        }
        .title {
          margin: 0 0 8px;
          color: #f9fafb;
          font-size: 32px;
        }
        .subtitle {
          margin: 0 0 24px;
          color: #9ca3af;
          font-size: 15px;
          line-height: 1.6;
        }
        .card {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(135deg, #020617, #0b1120);
          border: 1px solid #1f2937;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        .card h2 {
          margin: 0 0 8px;
          color: #f9fafb;
          font-size: 20px;
        }
        .card p {
          margin: 0 0 18px;
          color: #9ca3af;
          font-size: 14px;
        }
        .preset-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 14px;
        }
        .amount-btn {
          border: 1px solid #374151;
          background: #111827;
          color: #e5e7eb;
          border-radius: 10px;
          padding: 12px 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        .amount-btn:hover {
          background: #1f2937;
        }
        .amount-btn.active {
          border-color: #f97316;
          background: #7c2d12;
          color: #fed7aa;
        }
        .custom-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }
        .currency {
          color: #9ca3af;
          font-size: 15px;
        }
        .custom-input {
          width: 220px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #374151;
          background: #020617;
          color: #e5e7eb;
          font-size: 15px;
        }
        .custom-input:focus {
          outline: none;
          border-color: #38bdf8;
        }
        .recharge-btn {
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
          border-radius: 10px;
          padding: 12px 18px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        .recharge-btn:hover {
          background: #c2410c;
        }
        .recharge-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .helper {
          margin-top: 12px;
          color: #6b7280;
          font-size: 13px;
        }
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 24px;
        }
        .popup {
          width: 100%;
          max-width: 440px;
          border-radius: 16px;
          border: 1px solid #374151;
          background: #111827;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
          padding: 24px;
        }
        .popup h3 {
          margin: 0 0 10px;
          color: #f9fafb;
          font-size: 20px;
        }
        .popup p {
          margin: 0 0 18px;
          color: #9ca3af;
          line-height: 1.6;
          font-size: 14px;
        }
        .popup-amount {
          margin: 0 0 18px;
          color: #fbbf24;
          font-size: 20px;
          font-weight: 700;
        }
        .popup-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .popup-btn {
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        .popup-btn.cancel {
          border: 1px solid #374151;
          background: #1f2937;
          color: #e5e7eb;
        }
        .popup-btn.cancel:hover {
          background: #374151;
        }
        .popup-btn.confirm {
          border: 1px solid #f97316;
          background: #ea580c;
          color: #fff;
        }
        .popup-btn.confirm:hover {
          background: #c2410c;
        }
        @media (max-width: 700px) {
          .preset-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .custom-input {
            width: 100%;
          }
        }
      `}</style>

      <Link href="/settings" className="back-link">
        ← Back to settings
      </Link>

      <h1 className="title">Account Recharge</h1>
      <p className="subtitle">Add funds to your account balance using your preferred payment method.</p>

      <section className="card">
        <h2>Recharge Account</h2>
        <p>Select an amount or enter a custom value to recharge your account.</p>

        <div className="preset-grid">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`amount-btn ${customAmount === "" && selectedAmount === amount ? "active" : ""}`}
              onClick={() => handlePresetClick(amount)}
            >
              ₹{formatAmount(amount)}
            </button>
          ))}
        </div>

        <div className="custom-row">
          <span className="currency">₹</span>
          <input
            className="custom-input"
            type="number"
            min={1}
            step={1}
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="recharge-btn"
          disabled={isRechargeDisabled}
          onClick={handleRecharge}
        >
          Recharge Now
        </button>
        <p className="helper">All purchases are final. Please refer to our refund policy.</p>
      </section>

      {showPopup && (
        <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="recharge-popup-title">
          <div className="popup">
            <h3 id="recharge-popup-title">Confirm Recharge</h3>
            <p>Your account will be recharged with the selected amount.</p>
            <div className="popup-amount">₹{formatAmount(finalAmount)}</div>
            <div className="popup-actions">
              <button type="button" className="popup-btn cancel" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button type="button" className="popup-btn confirm" onClick={handleConfirmRecharge}>
                Confirm Recharge
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="recharge-success-title">
          <div className="popup">
            <h3 id="recharge-success-title">Recharge successful</h3>
            <p>Your account has been recharged successfully.</p>
            <div className="popup-amount">₹{formatAmount(finalAmount)}</div>
            <div className="popup-actions">
              <button type="button" className="popup-btn confirm" onClick={() => setShowSuccessPopup(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
