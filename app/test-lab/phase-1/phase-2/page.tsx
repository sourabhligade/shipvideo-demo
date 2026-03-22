import Link from "next/link";

export default function TestLabPhase2Page() {
  return (
    <article data-testid="test-lab-phase-2">
      <style>{`
        .tl-panel {
          border-radius: 16px;
          padding: 24px;
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(251, 191, 36, 0.3);
        }
        .tl-panel h2 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #fde68a;
        }
        .tl-panel p {
          margin: 0 0 16px;
          color: #94a3b8;
          font-size: 14px;
        }
        .tl-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tl-link {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 8px;
          background: #b45309;
          color: #fffbeb;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        .tl-link:hover {
          background: #92400e;
        }
        .tl-link-muted {
          background: #334155;
          color: #e2e8f0;
        }
        .tl-link-muted:hover {
          background: #475569;
        }
      `}</style>
      <div className="tl-panel">
        <h2>Phase 2 — processing</h2>
        <p>Mid flow. You can finish the deep path or jump back to the lab root.</p>
        <div className="tl-row">
          <Link id="test-lab-go-phase-3" className="tl-link" href="/test-lab/phase-1/phase-2/phase-3">
            Continue to phase 3 (final) →
          </Link>
          <Link className="tl-link tl-link-muted" href="/test-lab">
            ← Back to lab root
          </Link>
        </div>
      </div>
    </article>
  );
}
