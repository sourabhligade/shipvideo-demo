import Link from "next/link";

export default function TestLabSideReviewPage() {
  return (
    <article data-testid="test-lab-side-review-complete">
      <style>{`
        .tl-done {
          border-radius: 16px;
          padding: 28px;
          background: rgba(76, 29, 149, 0.35);
          border: 1px solid rgba(196, 181, 253, 0.4);
        }
        .tl-done h2 {
          margin: 0 0 10px;
          font-size: 20px;
          color: #ddd6fe;
        }
        .tl-done p {
          margin: 0 0 18px;
          color: #c4b5fd;
          font-size: 14px;
        }
        .tl-link {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 8px;
          background: #5b21b6;
          color: #f5f3ff;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        .tl-link:hover {
          background: #4c1d95;
        }
      `}</style>
      <div className="tl-done">
        <h2>Side branch complete</h2>
        <p>
          Final nested page: <code>/test-lab/side-route/review</code>. Branch flow done.
        </p>
        <Link id="test-lab-side-back" className="tl-link" href="/test-lab">
          ← Back to test lab
        </Link>
      </div>
    </article>
  );
}
