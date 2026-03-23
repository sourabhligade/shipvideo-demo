"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScenarioMatrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="sm-shell">
      <style>{`
        .sm-shell {
          min-height: 100vh;
          padding: 28px;
          background: radial-gradient(circle at top right, #f8fafc 0%, #eef2ff 45%, #fdf2f8 100%);
          color: #1f2937;
          font-family: Inter, system-ui, -apple-system, sans-serif;
        }
        .sm-top {
          max-width: 760px;
          margin: 0 auto 24px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          font-size: 12px;
        }
        .sm-top a {
          color: #4338ca;
          text-decoration: none;
          font-weight: 600;
        }
        .sm-top a:hover {
          text-decoration: underline;
        }
        .sm-top .sep {
          color: #94a3b8;
        }
        .sm-top .curr {
          color: #be185d;
          font-weight: 700;
          background: #fce7f3;
          border: 1px solid #f9a8d4;
          border-radius: 999px;
          padding: 2px 8px;
        }
      `}</style>

      <nav className="sm-top" aria-label="Scenario matrix breadcrumb">
        <Link href="/">Home</Link>
        {parts.map((segment, i) => {
          const href = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;
          return (
            <span key={href} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="sep">›</span>
              {isLast ? <span className="curr">{segment}</span> : <Link href={href}>{segment}</Link>}
            </span>
          );
        })}
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>{children}</div>
    </div>
  );
}
