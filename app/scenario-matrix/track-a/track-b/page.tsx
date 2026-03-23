import Link from "next/link";

export default function ScenarioMatrixTrackBPage() {
  return (
    <article data-testid="scenario-matrix-track-b-complete" id="scenario-matrix-deep-complete">
      <style>{`
        .sm-done {
          border-radius: 16px;
          padding: 26px;
          background: #ecfeff;
          border: 1px solid #67e8f9;
        }
        .sm-done h2 {
          margin: 0 0 10px;
          color: #0f766e;
        }
        .sm-done p {
          margin: 0 0 14px;
          color: #155e75;
          font-size: 14px;
        }
        .sm-chip {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #134e4a;
          background: #99f6e4;
          border-radius: 999px;
          padding: 6px 10px;
          margin-bottom: 12px;
        }
        .sm-link {
          display: inline-block;
          border-radius: 8px;
          padding: 10px 14px;
          text-decoration: none;
          background: #0f766e;
          color: white;
          font-weight: 700;
          font-size: 13px;
        }
        .sm-link:hover {
          background: #115e59;
        }
      `}</style>

      <div className="sm-done">
        <span className="sm-chip">TRACK COMPLETE</span>
        <h2>Track A complete</h2>
        <p>
          You reached <code>/scenario-matrix/track-a/track-b</code>, the deep completion state.
        </p>
        <Link id="scenario-matrix-reset" className="sm-link" href="/scenario-matrix">
          Return to scenario matrix
        </Link>
      </div>
    </article>
  );
}
