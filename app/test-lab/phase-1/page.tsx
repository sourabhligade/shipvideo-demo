import Link from "next/link";

export default function TestLabPhase1Page() {
  return (
    <article data-testid="test-lab-phase-1">
      <style>{`
        .tl-panel {
          border-radius: 16px;
          padding: 24px;
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(34, 211, 238, 0.25);
        }
        .tl-panel h2 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #a5f3fc;
        }
        .tl-panel p {
          margin: 0 0 16px;
          color: #94a3b8;
          font-size: 14px;
        }
        .tl-link {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 8px;
          background: #0e7490;
          color: #ecfeff;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        .tl-link:hover {
          background: #155e75;
        }
      `}</style>
      <div className="tl-panel">
        <h2>Phase 1 — intake</h2>
        <p>Simulated first step. Continue to nested phase 2.</p>
        <Link id="test-lab-go-phase-2" className="tl-link" href="/test-lab/phase-1/phase-2">
          Continue to phase 2 →
        </Link>
      </div>
    </article>
  );
}
