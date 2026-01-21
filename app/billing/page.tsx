type PlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function BillingPage() {
  return (
    <main className="billing">
      <style>{`
        .billing {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0f172a;
          background: radial-gradient(circle at top left, #ecfeff 0, #ffffff 45%);
        }

        .billing-header {
          margin-bottom: 48px;
        }

        .billing-header h1 {
          font-size: 36px;
          margin-bottom: 8px;
        }

        .billing-header p {
          font-size: 16px;
          color: #64748b;
          max-width: 640px;
        }

        .billing-section {
          margin-bottom: 48px;
        }

        .billing-section h2 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #020617;
        }

        .billing-section ul {
          padding-left: 20px;
        }

        .billing-section li {
          margin-bottom: 8px;
          color: #475569;
        }

        .plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }

        .plan {
          border-radius: 16px;
          padding: 24px;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border: 1px solid #e2e8f0;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
        }

        .plan.highlighted {
          border: 1px solid #0f172a;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
          background: radial-gradient(circle at top left, #e0f2fe, #ffffff);
          transform: translateY(-4px);
        }

        .plan h3 {
          font-size: 20px;
          margin-bottom: 8px;
          color: #020617;
        }

        .plan-price {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #0369a1;
        }

        .plan.highlighted .plan-price {
          color: #0f172a;
        }

        .plan-description {
          color: #64748b;
          margin-bottom: 16px;
        }

        .plan ul {
          padding-left: 18px;
        }

        .plan li {
          margin-bottom: 8px;
          color: #475569;
        }

        @media (max-width: 900px) {
          .plans {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="billing-header">
        <h1>Billing</h1>
        <p>
          Every time you merge code, we automatically record the real UI,
          generate a polished demo video, and attach it to the pull request.
        </p>
      </header>

      <section className="billing-section">
        <h2>How pricing works</h2>
        <ul>
          <li>Each merged pull request can generate a demo video</li>
          <li>Videos run in CI against your staging environment</li>
          <li>You pay for generated videos and CI runtime</li>
        </ul>
      </section>

      <section className="plans">
        <Plan
          name="Starter"
          price="$49 / month"
          description="For small teams validating the workflow"
          features={[
            "Up to 20 demo videos / month",
            "PR video comments",
            "Basic narration",
            "Changelog embeds",
          ]}
        />

        <Plan
          name="Team"
          price="$149 / month"
          description="For teams shipping weekly"
          features={[
            "Up to 100 demo videos / month",
            "Custom Playwright flows",
            "AI-generated summaries",
            "Release email embeds",
            "Priority CI execution",
          ]}
          highlighted
        />

        <Plan
          name="Enterprise"
          price="Custom"
          description="For orgs shipping constantly"
          features={[
            "Unlimited videos",
            "Dedicated CI runners",
            "Custom branding & voices",
            "SSO & audit logs",
            "Slack & GitHub support",
          ]}
        />
      </section>

      <section className="billing-section">
        <h2>Usage & overages</h2>
        <p>
          Additional videos are billed at <strong>$2 per video</strong>. CI
          runtime beyond plan limits is billed at cost.
        </p>
      </section>

      <section className="billing-section">
        <h2>Why teams pay for this</h2>
        <p>
          Manual demo recording is slow, inconsistent, and always outdated. This
          system turns pull requests into the single source of truth for demos,
          changelogs, and release communication — automatically.
        </p>
      </section>
    </main>
  );
}

function Plan({ name, price, description, features, highlighted }: PlanProps) {
  return (
    <div className={`plan ${highlighted ? "highlighted" : ""}`}>
      <h3>{name}</h3>
      <div className="plan-price">{price}</div>
      <p className="plan-description">{description}</p>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
