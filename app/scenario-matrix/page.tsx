import Link from "next/link";

export default function ScenarioMatrixPage() {
  return (
    <article data-testid="scenario-matrix-root">
      <style>{`
        .sm-card {
          border-radius: 18px;
          padding: 28px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 16px 40px rgba(30, 41, 59, 0.08);
        }
        .sm-pill {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 999px;
          padding: 6px 10px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .sm-card h1 {
          margin: 0 0 8px;
          font-size: 24px;
          color: #0f172a;
        }
        .sm-card p {
          margin: 0 0 18px;
          color: #475569;
          line-height: 1.6;
          font-size: 14px;
        }
        .sm-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .sm-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          border-radius: 10px;
          padding: 12px 14px;
          font-weight: 700;
          font-size: 13px;
          border: 1px solid transparent;
        }
        .sm-btn-main {
          background: #0ea5e9;
          color: #f0f9ff;
        }
        .sm-btn-main:hover {
          background: #0284c7;
        }
        .sm-btn-alt {
          background: #f1f5f9;
          color: #1e293b;
          border-color: #cbd5e1;
        }
        .sm-btn-alt:hover {
          background: #e2e8f0;
        }
      `}</style>

      <div className="sm-card">
        <span className="sm-pill">UI variant 2</span>
        <h1>Scenario matrix</h1>
        <p>
          A second nested testing area with a lighter card-based UI. Choose a route branch and
          validate deep linking or completion behavior.
        </p>

        <div className="sm-grid">
          <Link id="scenario-matrix-track-a" className="sm-btn sm-btn-main" href="/scenario-matrix/track-a">
            Start track A
          </Link>
          <Link id="scenario-matrix-alt-path" className="sm-btn sm-btn-alt" href="/scenario-matrix/alt-path">
            Open alt path
          </Link>
        </div>
      </div>
    </article>
  );
}
