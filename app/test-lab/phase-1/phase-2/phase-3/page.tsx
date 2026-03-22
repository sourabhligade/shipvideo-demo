import Link from "next/link";

export default function TestLabPhase3Page() {
  return (
    <article data-testid="test-lab-phase-3-complete" id="nested-flow-complete">
      <style>{`
        .tl-done {
          border-radius: 16px;
          padding: 28px;
          background: rgba(6, 78, 59, 0.35);
          border: 1px solid rgba(52, 211, 153, 0.45);
        }
        .tl-done h2 {
          margin: 0 0 10px;
          font-size: 20px;
          color: #6ee7b7;
        }
        .tl-done p {
          margin: 0 0 18px;
          color: #a7f3d0;
          font-size: 14px;
        }
        .tl-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          background: #059669;
          color: #ecfdf5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }
        .tl-link {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 8px;
          background: #047857;
          color: #ecfdf5;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        .tl-link:hover {
          background: #065f46;
        }
      `}</style>
      <div className="tl-done">
        <span className="tl-badge">SCENARIO COMPLETE</span>
        <h2>Deep flow finished</h2>
        <p>
          You reached the deepest nested page in the linear path. Use this screen to assert
          end-to-end navigation: <code>/test-lab/phase-1/phase-2/phase-3</code>
        </p>
        <Link id="test-lab-reset-home" className="tl-link" href="/test-lab">
          ← Return to test lab
        </Link>
      </div>
    </article>
  );
}
