import Link from "next/link";

export default function ScenarioMatrixAltFinalPage() {
  return (
    <article data-testid="scenario-matrix-alt-final-complete">
      <style>{`
        .sm-finish {
          border-radius: 16px;
          padding: 24px;
          background: #fdf4ff;
          border: 1px solid #f0abfc;
        }
        .sm-finish h2 {
          margin: 0 0 10px;
          color: #a21caf;
        }
        .sm-finish p {
          margin: 0 0 14px;
          color: #86198f;
          font-size: 14px;
        }
        .sm-link {
          display: inline-block;
          border-radius: 8px;
          padding: 10px 14px;
          text-decoration: none;
          background: #a21caf;
          color: white;
          font-weight: 700;
          font-size: 13px;
        }
        .sm-link:hover {
          background: #86198f;
        }
      `}</style>

      <div className="sm-finish">
        <h2>Alternate branch complete</h2>
        <p>
          Final nested destination reached: <code>/scenario-matrix/alt-path/final</code>.
        </p>
        <Link id="scenario-matrix-alt-reset" className="sm-link" href="/scenario-matrix">
          Back to matrix root
        </Link>
      </div>
    </article>
  );
}
