import Link from "next/link";

export default function CreatorJourneyPage() {
  return (
    <article data-testid="creator-journey-root">
      <style>{`
        .cj-card {
          border-radius: 22px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #99f6e4;
          box-shadow: 0 18px 40px rgba(13, 148, 136, 0.12);
        }
        .cj-pill {
          display: inline-block;
          margin-bottom: 14px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #ccfbf1;
          color: #115e59;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .cj-card h1 {
          margin: 0 0 10px;
          font-size: 28px;
          color: #0f172a;
        }
        .cj-card p {
          margin: 0 0 20px;
          color: #334155;
          font-size: 15px;
          line-height: 1.65;
          max-width: 560px;
        }
        .cj-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 18px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0f766e, #14b8a6);
          color: #f0fdfa;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
        }
        .cj-primary:hover {
          filter: brightness(1.05);
        }
      `}</style>

      <div className="cj-card">
        <span className="cj-pill">UI variant 3</span>
        <h1>Creator journey</h1>
        <p>
          A nested path for testing a production handoff flow. Start from kickoff,
          move into sign-off, and land on a stable completion screen.
        </p>
        <Link
          id="creator-journey-start-kickoff"
          className="cj-primary"
          href="/creator-journey/kickoff"
        >
          Start storyboard review
        </Link>
      </div>
    </article>
  );
}
