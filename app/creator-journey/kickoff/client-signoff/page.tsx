import Link from "next/link";

export default function CreatorJourneyClientSignoffPage() {
  return (
    <article
      data-testid="creator-journey-signoff-complete"
      id="creator-journey-final-state"
    >
      <style>{`
        .cj-finish {
          border-radius: 20px;
          padding: 28px;
          background: #ecfdf5;
          border: 1px solid #6ee7b7;
          box-shadow: 0 18px 36px rgba(16, 185, 129, 0.14);
        }
        .cj-chip {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #065f46;
          background: #a7f3d0;
          border-radius: 999px;
          padding: 6px 10px;
          margin-bottom: 12px;
        }
        .cj-finish h2 {
          margin: 0 0 10px;
          color: #065f46;
        }
        .cj-finish p {
          margin: 0 0 16px;
          color: #047857;
          font-size: 14px;
          line-height: 1.6;
        }
        .cj-link {
          display: inline-block;
          border-radius: 10px;
          padding: 11px 15px;
          text-decoration: none;
          background: #047857;
          color: #f0fdf4;
          font-weight: 700;
          font-size: 13px;
        }
        .cj-link:hover {
          background: #065f46;
        }
      `}</style>

      <div className="cj-finish">
        <span className="cj-chip">Approved</span>
        <h2>Client sign-off complete</h2>
        <p>
          The nested journey finished at{" "}
          <code>/creator-journey/kickoff/client-signoff</code>.
        </p>
        <Link id="creator-journey-reset" className="cj-link" href="/creator-journey">
          Return to creator journey
        </Link>
      </div>
    </article>
  );
}
