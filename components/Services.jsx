/* global React */

function SvcDiagram({ kind }) {
  /* compact schematic linework, no labels; one brand-color mark per service */
  switch (kind) {
    case "cloud": // layered platform
      return (
        <svg viewBox="0 0 360 240" className="draw" aria-hidden="true">
          {[36, 110, 184].map((y) =>
          <rect key={y} x="20" y={y} width="320" height="44" className="s-line" fill="none" strokeWidth="1" />
          )}
          {[80, 180, 280].map((x) =>
          <line key={x} x1={x} y1="80" x2={x} y2="184" className="s-line" strokeWidth="1" style={{ "--len": 120 }} />
          )}
          {[80, 180, 280].map((x, i) =>
          [58, 132, 206].map((y) =>
          i === 1 && y === 132 ?
          <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" className="s-mark" style={{ "--mk": "var(--tick-1)" }} /> :

          <rect key={`${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" className="s-node" strokeWidth="1" />

          )
          )}
        </svg>);

    case "cyber": // nested control layers
      return (
        <svg viewBox="0 0 360 240" className="draw" aria-hidden="true">
          {[[30, 24, 300, 192], [70, 54, 220, 132], [110, 84, 140, 72]].map(([x, y, w, h], i) =>
          <rect key={i} x={x} y={y} width={w} height={h} className="s-line" fill="none" strokeWidth="1" style={{ "--len": 900 }} />
          )}
          <rect x="162" y="102" width="36" height="36" className="s-mark" style={{ "--mk": "var(--tick-3)" }} />
          {[[30, 24], [330, 24], [30, 216], [330, 216]].map(([x, y], i) =>
          <line key={i} x1={x} y1={y} x2={x < 180 ? x + 18 : x - 18} y2={y} className="s-line-lit" strokeWidth="1.4" />
          )}
        </svg>);

    case "ai": // data flow pipeline
      return (
        <svg viewBox="0 0 360 240" className="draw" aria-hidden="true">
          {[60, 110, 160].map((y) =>
          <g key={y}>
              <rect x="28" y={y - 12} width="40" height="24" className="s-node" strokeWidth="1" />
              <line x1="68" y1={y} x2="150" y2="120" className="s-line" strokeWidth="1" style={{ "--len": 120 }} />
            </g>
          )}
          <rect x="150" y="92" width="56" height="56" className="s-mark" style={{ "--mk": "var(--tick-4)" }} />
          <line x1="206" y1="120" x2="288" y2="120" className="s-line-lit" strokeWidth="1.4" style={{ "--len": 90 }} />
          <line x1="206" y1="120" x2="288" y2="120" className="s-flow" pathLength="100" style={{ "--flow": "var(--tick-4)" }} />
          <rect x="288" y="104" width="44" height="32" className="s-node" strokeWidth="1" />
        </svg>);

    case "managed": // operational board
    default:
      return (
        <svg viewBox="0 0 360 240" className="draw" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => {
            const c = i % 6,r = Math.floor(i / 6);
            const x = 24 + c * 54,y = 36 + r * 40;
            return i === 8 ?
            <rect key={i} x={x} y={y} width="44" height="28" className="s-mark" style={{ "--mk": "var(--tick-5)" }} /> :

            <rect key={i} x={x} y={y} width="44" height="28" className="s-line" fill="none" strokeWidth="1" />;

          })}
          <polyline points="24,196 70,180 116,200 162,170 208,188 254,164 300,182 332,172" className="s-line-lit" fill="none" strokeWidth="1.4" style={{ "--len": 360 }} />
          <polyline points="24,196 70,180 116,200 162,170 208,188 254,164 300,182 332,172" className="s-flow" fill="none" pathLength="100" style={{ "--flow": "var(--tick-5)" }} />
        </svg>);

  }
}

function Services() {
  const services = [
  {
    no: "01", kind: "cloud", href: "Cloud-Infrastructure-Transformation.html",
    title: "Cloud & Infrastructure Transformation",
    desc: "Digital strategy, enterprise architecture, and cloud and infrastructure modernisation. We move organisations to hybrid and multi-cloud, transform networks and unified communications, and re-engineer processes for performance and resilience.",
    caps: ["Digital strategy & consulting", "Hybrid & multi-cloud", "Network transformation", "Data centres & migration"]
  },
  {
    no: "02", kind: "cyber", href: "Cybersecurity-Digital-Resilience.html",
    title: "Cybersecurity & Digital Resilience",
    desc: "Security engineered into every layer. We run next-generation SOC, MDR and XDR, harden identity and access with Zero Trust, protect data, and embed DevSecOps, compliance, and resilience across the estate.",
    caps: ["SOC, MDR & XDR", "Identity & Zero Trust", "Data protection", "Compliance & DevSecOps"]
  },
  {
    no: "03", kind: "ai", href: "AI-Intelligent-Automation.html",
    title: "AI & Intelligent Automation",
    desc: "Data, AI, applications, and automation in one practice. We build data platforms and analytics, operationalise AI and agentic systems, deliver enterprise applications, customer experience platforms, and emerging tech, all governed and production-ready.",
    caps: ["Data & analytics", "AI & automation", "Apps & integration", "CX & emerging tech"]
  },
  {
    no: "04", kind: "managed", href: "Managed-Support-Services.html",
    title: "Managed & Support Services",
    desc: "Operate infrastructure, cloud, security, and applications to defined SLAs, with 24/7 monitoring, ITSM, incident response, and tested business continuity and disaster recovery.",
    caps: ["Managed IT & cloud ops", "Managed security", "ITSM & support", "Continuity & DR"]
  }];


  return (
    <section className="section s-paper" id="services">
      <div className="wrap">
        <div className="svc__head">
          <div className="shead reveal acc-magenta">
            <p className="kicker">What we do</p>
            <h2 className="shead__title" style={{ fontSize: "var(--t-display)", maxWidth: "400px", width: "360px" }}>Four practices, <span className="tword">one partner</span>.</h2>
          </div>
          <p className="lead reveal d1" style={{ maxWidth: "40ch" }}>
            Deep capability across the disciplines that keep enterprise technology running,
            combined into the right approach for your environment and stage.
          </p>
        </div>

        <div className="svc__list">
          {services.map((s) =>
          <a className="svc__panel reveal" href={s.href} key={s.no} style={{ padding: "72px 0" }}>
              <span className="svc__no">{s.no}</span>
              <div className="svc__main">
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
                <div className="svc__caps">
                  {s.caps.map((c) => <span className="svc__cap" key={c}>{c}</span>)}
                </div>
                <span className="tlink svc__link">Explore this service <span className="ar" aria-hidden="true">→</span></span>
              </div>
              <div className="svc__diagram"><SvcDiagram kind={s.kind} /></div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

window.Services = Services;