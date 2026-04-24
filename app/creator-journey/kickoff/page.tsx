import Link from "next/link";

export default function CreatorJourneyKickoffPage() {
  return (
    <article data-testid="creator-journey-kickoff-page">
      <style>{`
        .cj-step {
          border-radius: 20px;
          padding: 26px;
          background: linear-gradient(180deg, #ffffff, #f0fdfa);
          border: 1px solid #99f6e4;
        }
        .cj-step h2 {
          margin: 0 0 10px;
          color: #0f766e;
        }
        .cj-step p {
          margin: 0 0 16px;
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
        }
        .cj-link {
          display: inline-block;
          border-radius: 10px;
          padding: 11px 15px;
          text-decoration: none;
          background: #0f766e;
          color: #f0fdfa;
          font-weight: 700;
          font-size: 13px;
        }
        .cj-link:hover {
          background: #115e59;
        }
      `}</style>

      <div className="cj-step">
        <h2>Kickoff / review stage</h2>
        <p>
          Storyboards are assembled and ready for external confirmation. Continue into
          the nested sign-off screen.
        </p>
        <Link
          id="creator-journey-kickoff-signoff"
          className="cj-link"
          href="/creator-journey/kickoff/client-signoff"
        >
          Send to client sign-off →
        </Link>
      </div>
    </article>
  );
}
