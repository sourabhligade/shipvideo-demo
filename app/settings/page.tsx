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

  const handleGenerateApi = useCallback(() => {
    const key = generateNumericApiKey();
    setApiKey(key);
    setShowMessage(true);
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
      </section>
    </main>
  );
}
