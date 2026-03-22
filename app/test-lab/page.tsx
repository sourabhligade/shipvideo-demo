import Link from "next/link";

export default function TestLabRootPage() {
  return (
    <article data-testid="test-lab-root">
      <style>{`
        .tl-card {
          border-radius: 16px;
          padding: 28px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(99, 102, 241, 0.35);
          margin-bottom: 20px;
        }
        .tl-card h1 {
          margin: 0 0 8px;
          font-size: 22px;
          color: #c7d2fe;
        }
        .tl-card p {
          margin: 0 0 20px;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }
        .tl-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tl-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: inherit;
        }
        .tl-btn-primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #eef2ff;
          border-color: rgba(165, 180, 252, 0.5);
        }
        .tl-btn-primary:hover {
          filter: brightness(1.08);
        }
        .tl-btn-secondary {
          background: rgba(30, 41, 59, 0.9);
          color: #e2e8f0;
          border-color: rgba(148, 163, 184, 0.35);
        }
        .tl-btn-secondary:hover {
          background: rgba(51, 65, 85, 0.95);
        }
        .tl-note {
          font-size: 12px;
          color: #64748b;
          margin-top: 16px;
        }
      `}</style>

      <div className="tl-card">
        <h1>Nested navigation lab</h1>
        <p>
          Use this area to exercise multi-step flows: deep linear paths, a short
          side branch, and a completion screen with a stable test id.
        </p>
        <div className="tl-actions">
          <Link
            id="test-lab-start-deep-flow"
            className="tl-btn tl-btn-primary"
            href="/test-lab/phase-1"
          >
            Start deep flow (phase 1 → 2 → 3)
          </Link>
          <Link
            id="test-lab-start-side-branch"
            className="tl-btn tl-btn-secondary"
            href="/test-lab/side-route"
          >
            Side branch (shorter path)
          </Link>
        </div>
        <p className="tl-note">
          Route: <code>/test-lab</code> — breadcrumbs update automatically in the bar above.
        </p>
      </div>
    </article>
  );
}
