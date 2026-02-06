"use client";

import { useState } from "react";

type PlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  showDowngrade?: boolean;
  onDowngrade?: () => void;
};

export default function BillingPage() {
  const [showDowngradeModal, setShowDowngradeModal] = useState(false);

  const handleDowngradeClick = () => {
    setShowDowngradeModal(true);
  };

  const handleConfirmDowngrade = () => {
    setShowDowngradeModal(false);
  };

  const handleCancelDowngrade = () => {
    setShowDowngradeModal(false);
  };

  return (
    <main className="billing">
      <style>{`
        .billing {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #e5e7eb;
          background: radial-gradient(circle at top left, #020617 0, #020617 40%, #020617 100%);
        }

        .billing-header {
          margin-bottom: 48px;
        }

        .billing-header h1 {
          font-size: 36px;
          margin-bottom: 8px;
          color: #f9fafb;
        }

        .billing-header p {
          font-size: 16px;
          color: #9ca3af;
          max-width: 640px;
        }

        .billing-section {
          margin-bottom: 48px;
        }

        .billing-section h2 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #e5e7eb;
        }

        .billing-section ul {
          padding-left: 20px;
        }

        .billing-section li {
          margin-bottom: 8px;
          color: #9ca3af;
        }

        .plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }

        .plan {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(135deg, #020617, #0b1120);
          border: 1px solid #1f2937;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        }

        .plan.highlighted {
          border: 1px solid #f97316;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.9);
          background: radial-gradient(circle at top left, #111827, #020617);
          transform: translateY(-4px);
        }

        .plan h3 {
          font-size: 20px;
          margin-bottom: 8px;
          color: #f9fafb;
        }

        .plan-price {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #38bdf8;
        }

        .plan.highlighted .plan-price {
          color: #fbbf24;
        }

        .plan-description {
          color: #9ca3af;
          margin-bottom: 16px;
        }

        .plan ul {
          padding-left: 18px;
        }

        .plan li {
          margin-bottom: 8px;
          color: #e5e7eb;
        }

        .plan-actions {
          margin-top: 20px;
        }

        .plan-btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid #374151;
          background: #1f2937;
          color: #e5e7eb;
          cursor: pointer;
          transition: all 0.2s;
        }

        .plan-btn:hover {
          background: #374151;
        }

        .plan-btn.downgrade {
          border-color: #f87171;
          color: #fca5a5;
        }

        .plan-btn.downgrade:hover {
          background: #7f1d1d;
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
          max-width: 480px;
          width: 100%;
          padding: 32px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid #374151;
        }

        .modal h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #f9fafb;
        }

        .modal p {
          color: #9ca3af;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .modal ul {
          padding-left: 20px;
          margin-bottom: 24px;
          color: #fca5a5;
        }

        .modal li {
          margin-bottom: 8px;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }

        .modal-btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn.cancel {
          border: 1px solid #374151;
          background: #1f2937;
          color: #e5e7eb;
        }

        .modal-btn.cancel:hover {
          background: #374151;
        }

        .modal-btn.confirm {
          border: none;
          background: #dc2626;
          color: #ffffff;
        }

        .modal-btn.confirm:hover {
          background: #b91c1c;
        }

        @media (max-width: 900px) {
          .plans {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="billing-header">
        <h1>Billing</h1>
        <p>
          Every time you merge code, we automatically record the real UI,
          generate a polished demo video, and attach it to the pull request.
        </p>
      </header>

      <section className="billing-section">
        <h2>How pricing works</h2>
        <ul>
          <li>Each merged pull request can generate a demo video</li>
          <li>Videos run in CI against your staging environment</li>
          <li>You pay for generated videos and CI runtime</li>
        </ul>
      </section>

      <section className="plans">
        <Plan
          name="Starter"
          price="$49 / month"
          description="For small teams validating the workflow"
          features={[
            "Up to 20 demo videos / month",
            "PR video comments",
            "Basic narration",
            "Changelog embeds",
          ]}
        />

        <Plan
          name="Team"
          price="$149 / month"
          description="For teams shipping weekly"
          features={[
            "Up to 100 demo videos / month",
            "Custom Playwright flows",
            "AI-generated summaries",
            "Release email embeds",
            "Priority CI execution",
          ]}
          highlighted
          showDowngrade
          onDowngrade={handleDowngradeClick}
        />

        <Plan
          name="Enterprise"
          price="Custom"
          description="For orgs shipping constantly"
          features={[
            "Unlimited videos",
            "Dedicated CI runners",
            "Custom branding & voices",
            "SSO & audit logs",
            "Slack & GitHub support",
          ]}
        />
      </section>

      {showDowngradeModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="downgrade-modal-title">
          <div className="modal">
            <h3 id="downgrade-modal-title">Confirm downgrade to Starter</h3>
            <p>
              Downgrading from Team to Starter will remove access to the following features:
            </p>
            <ul>
              <li>Up to 100 demo videos / month (reduced to 20)</li>
              <li>Custom Playwright flows</li>
              <li>AI-generated summaries</li>
              <li>Release email embeds</li>
              <li>Priority CI execution</li>
            </ul>
            <p>
              Are you sure you want to proceed with the downgrade?
            </p>
            <div className="modal-actions">
              <button
                className="modal-btn cancel"
                onClick={handleCancelDowngrade}
              >
                Cancel
              </button>
              <button
                className="modal-btn confirm"
                onClick={handleConfirmDowngrade}
              >
                Yes, downgrade
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="billing-section">
        <h2>Usage & overages</h2>
        <p>
          Additional videos are billed at <strong>$2 per video</strong>. CI
          runtime beyond plan limits is billed at cost.
        </p>
      </section>

      <section className="billing-section">
        <h2>Why teams pay for this</h2>
        <p>
          Manual demo recording is slow, inconsistent, and always outdated. This
          system turns pull requests into the single source of truth for demos,
          changelogs, and release communication — automatically.
        </p>
      </section>
    </main>
  );
}

function Plan({ name, price, description, features, highlighted, showDowngrade, onDowngrade }: PlanProps) {
  return (
    <div className={`plan ${highlighted ? "highlighted" : ""}`}>
      <h3>{name}</h3>
      <div className="plan-price">{price}</div>
      <p className="plan-description">{description}</p>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {showDowngrade && onDowngrade && (
        <div className="plan-actions">
          <button
            className="plan-btn downgrade"
            onClick={onDowngrade}
          >
            Downgrade
          </button>
        </div>
      )}
    </div>
  );
}
