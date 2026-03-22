"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TestLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="test-lab-shell">
      <style>{`
        .test-lab-shell {
          min-height: 100vh;
          padding: 24px;
          background: linear-gradient(160deg, #0f172a 0%, #020617 45%, #1e1b4b 100%);
          color: #e2e8f0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        .test-lab-bar {
          max-width: 720px;
          margin: 0 auto 28px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(148, 163, 184, 0.25);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }
        .test-lab-bar a {
          color: #7dd3fc;
          text-decoration: none;
        }
        .test-lab-bar a:hover {
          text-decoration: underline;
        }
        .test-lab-bar span.sep {
          color: #64748b;
        }
        .test-lab-bar .current {
          color: #a5b4fc;
          font-weight: 600;
        }
      `}</style>
      <nav className="test-lab-bar" aria-label="Test lab breadcrumb">
        <Link href="/">Home</Link>
        {parts.map((segment, i) => {
          const href = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;
          return (
            <span key={href} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="sep">/</span>
              {isLast ? (
                <span className="current">{segment}</span>
              ) : (
                <Link href={href}>{segment}</Link>
              )}
            </span>
          );
        })}
      </nav>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>{children}</div>
    </div>
  );
}
