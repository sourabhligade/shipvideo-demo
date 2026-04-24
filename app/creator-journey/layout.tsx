"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CreatorJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="cj-shell">
      <style>{`
        .cj-shell {
          min-height: 100vh;
          padding: 28px;
          background:
            radial-gradient(circle at top left, #ecfdf5 0%, #ccfbf1 32%, #f8fafc 100%);
          color: #0f172a;
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
        }
        .cj-bar {
          max-width: 760px;
          margin: 0 auto 24px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #99f6e4;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          font-size: 12px;
          box-shadow: 0 10px 24px rgba(13, 148, 136, 0.08);
        }
        .cj-bar a {
          color: #0f766e;
          text-decoration: none;
          font-weight: 700;
        }
        .cj-bar a:hover {
          text-decoration: underline;
        }
        .cj-sep {
          color: #5eead4;
        }
        .cj-current {
          color: #115e59;
          font-weight: 700;
          background: #ccfbf1;
          border: 1px solid #5eead4;
          border-radius: 999px;
          padding: 2px 8px;
        }
      `}</style>

      <nav className="cj-bar" aria-label="Creator journey breadcrumb">
        <Link href="/">Home</Link>
        {parts.map((segment, i) => {
          const href = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;
          return (
            <span key={href} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="cj-sep">›</span>
              {isLast ? (
                <span className="cj-current">{segment}</span>
              ) : (
                <Link href={href}>{segment}</Link>
              )}
            </span>
          );
        })}
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>{children}</div>
    </div>
  );
}
