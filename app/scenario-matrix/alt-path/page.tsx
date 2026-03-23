import Link from "next/link";

export default function ScenarioMatrixAltPathPage() {
  return (
    <article data-testid="scenario-matrix-alt-path-page">
      <style>{`
        .sm-box {
          border-radius: 16px;
          padding: 24px;
          background: #fff7ed;
          border: 1px solid #fdba74;
        }
        .sm-box h2 {
          margin: 0 0 10px;
          color: #9a3412;
        }
        .sm-box p {
          margin: 0 0 14px;
          color: #7c2d12;
          font-size: 14px;
        }
        .sm-link {
          display: inline-block;
          border-radius: 8px;
          padding: 10px 14px;
          text-decoration: none;
          background: #c2410c;
          color: white;
          font-weight: 700;
          font-size: 13px;
        }
        .sm-link:hover {
          background: #9a3412;
        }
      `}</style>

      <div className="sm-box">
        <h2>Alt path / stage 1</h2>
        <p>Go to the final nested screen on this alternate branch.</p>
        <Link id="scenario-matrix-alt-final" className="sm-link" href="/scenario-matrix/alt-path/final">
          Open final stage →
        </Link>
      </div>
    </article>
  );
}
