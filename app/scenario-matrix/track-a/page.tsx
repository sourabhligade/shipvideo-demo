import Link from "next/link";

export default function ScenarioMatrixTrackAPage() {
  return (
    <article data-testid="scenario-matrix-track-a-page">
      <style>{`
        .sm-box {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(180deg, #ffffff, #f8fafc);
          border: 1px solid #dbeafe;
        }
        .sm-box h2 {
          margin: 0 0 10px;
          color: #1d4ed8;
        }
        .sm-box p {
          margin: 0 0 14px;
          color: #334155;
          font-size: 14px;
        }
        .sm-link {
          display: inline-block;
          border-radius: 8px;
          padding: 10px 14px;
          text-decoration: none;
          background: #2563eb;
          color: white;
          font-weight: 700;
          font-size: 13px;
        }
        .sm-link:hover {
          background: #1d4ed8;
        }
      `}</style>

      <div className="sm-box">
        <h2>Track A / Step 1</h2>
        <p>Proceed to nested step 2 in track A.</p>
        <Link id="scenario-matrix-track-a-step-2" className="sm-link" href="/scenario-matrix/track-a/track-b">
          Continue to track B →
        </Link>
      </div>
    </article>
  );
}
