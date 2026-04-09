import Link from "next/link";

export default function TrialActivatedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "56px 24px",
        background:
          "radial-gradient(circle at top, rgba(255, 237, 213, 0.95), rgba(255, 255, 255, 1) 44%)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <section
        id="trial-activated-screen"
        data-testid="trial-activated-screen"
        style={{
          maxWidth: 680,
          margin: "0 auto",
          borderRadius: 28,
          backgroundColor: "white",
          padding: 36,
          border: "1px solid #fed7aa",
          boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 12px",
            borderRadius: 999,
            backgroundColor: "#dcfce7",
            color: "#166534",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Premium enabled
        </div>

        <h1 style={{ margin: "18px 0 12px", fontSize: 36, color: "#0f172a" }}>
          Trial activated successfully.
        </h1>

        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#475569" }}>
          Your workspace now has premium access for the next 14 days, including priority
          renders, team review rooms, and export controls.
        </p>

        <div
          style={{
            marginTop: 24,
            padding: 18,
            borderRadius: 16,
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            color: "#334155",
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          Confirmation route: <code>/account/billing/trial-activated</code>
        </div>

        <Link
          id="trial-activated-back-home"
          href="/"
          style={{
            display: "inline-flex",
            marginTop: 24,
            padding: "14px 20px",
            borderRadius: 12,
            textDecoration: "none",
            background: "#0f172a",
            color: "white",
            fontWeight: 700,
          }}
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
