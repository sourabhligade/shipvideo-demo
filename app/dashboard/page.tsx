type MetricProps = {
  label: string;
  value: string;
};

export default function DashboardPage() {
  return (
    <main className="dashboard">
        <style>{`
          .dashboard {
            max-width: 1100px;
            margin: 0 auto;
            padding: 48px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            color: #111;
          }
  
          .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
          }
  
          .dashboard-header h1 {
            font-size: 36px;
            margin-bottom: 8px;
          }
  
          .dashboard-header p {
            color: #555;
            max-width: 520px;
          }
  
          .status {
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 500;
            background: #e6f7ec;
            color: #067d3f;
            white-space: nowrap;
          }
  
          .metrics {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 48px;
          }
  
          .metric {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 20px;
            background: #fff;
          }
  
          .metric-label {
            font-size: 13px;
            color: #666;
            margin-bottom: 6px;
          }
  
          .metric-value {
            font-size: 28px;
            font-weight: 600;
          }
  
          .sections {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 32px;
          }
  
          .card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 24px;
            background: #fff;
          }
  
          .card h2 {
            font-size: 18px;
            margin-bottom: 16px;
          }
  
          .activity-item {
            margin-bottom: 14px;
          }
  
          .activity-item strong {
            display: block;
            font-size: 14px;
          }
  
          .activity-item span {
            font-size: 13px;
            color: #666;
          }
  
          .empty {
            font-size: 14px;
            color: #777;
          }
  
          @media (max-width: 900px) {
            .metrics {
              grid-template-columns: 1fr 1fr;
            }
  
            .sections {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
  
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>
              Every merged pull request is automatically recorded, narrated, and
              published as a product demo.
            </p>
          </div>
          <div className="status">Recording active</div>
        </header>
  
        <section className="metrics">
          <Metric label="Videos generated" value="128" />
          <Metric label="Pull requests covered" value="94%" />
          <Metric label="Avg. video length" value="42s" />
          <Metric label="Last recording" value="2 hours ago" />
        </section>
  
        <section className="sections">
          <div className="card">
            <h2>Recent demo videos</h2>
  
            <div className="activity-item">
              <strong>Billing page redesign</strong>
              <span>PR #482 · 38s video · 1 hour ago</span>
            </div>
  
            <div className="activity-item">
              <strong>Checkout error handling</strong>
              <span>PR #479 · 52s video · Yesterday</span>
            </div>
  
            <div className="activity-item">
              <strong>User settings refactor</strong>
              <span>PR #476 · 41s video · 2 days ago</span>
            </div>
          </div>
  
          <div className="card">
            <h2>Pipeline health</h2>
  
            <div className="activity-item">
              <strong>CI integration</strong>
              <span>Connected</span>
            </div>
  
            <div className="activity-item">
              <strong>Staging environment</strong>
              <span>Healthy</span>
            </div>
  
            <div className="activity-item">
              <strong>Playwright coverage</strong>
              <span>12 flows configured</span>
            </div>
          </div>
        </section>
      </main>
  );
}

function Metric({ label, value }: MetricProps) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
    </div>
  );
}
