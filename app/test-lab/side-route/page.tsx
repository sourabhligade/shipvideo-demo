import Link from "next/link";

export default function TestLabSideRoutePage() {
  return (
    <article data-testid="test-lab-side-route">
      <style>{`
        .tl-panel {
          border-radius: 16px;
          padding: 24px;
          background: rgba(15, 23, 42, 0.55);
          border: 1px solid rgba(244, 114, 182, 0.35);
        }
        .tl-panel h2 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #fbcfe8;
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
          background: #be185d;
          color: #fdf2f8;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        .tl-link:hover {
          background: #9d174d;
        }
      `}</style>
      <div className="tl-panel">
        <h2>Side route — alternate branch</h2>
        <p>
          This path skips the long <code>phase-1 → phase-2 → phase-3</code> chain. One more
          nested step to a review screen.
        </p>
        <Link id="test-lab-side-to-review" className="tl-link" href="/test-lab/side-route/review">
          Open review (nested) →
        </Link>
      </div>
    </article>
  );
}
