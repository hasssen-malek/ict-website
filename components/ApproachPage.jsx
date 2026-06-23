/* global React, Icon, SecHead, PHero, IconCards, NextBand, PageCTA */

function ApproachPage() {
  const stages = [
    { no: "Stage 1", name: "Assess", lead: "Understand the estate before changing it.",
      understand: ["Infrastructure", "Applications", "Security", "Operations", "Compliance", "Business priorities"],
      activities: ["Discovery workshops", "Infrastructure reviews", "Security assessments", "Cloud readiness", "Architecture analysis"], mk: "var(--tick-1)" },
    { no: "Stage 2", name: "Modernise", lead: "Design and implement future-ready environments.",
      understand: null,
      activities: ["Cloud adoption", "Infrastructure transformation", "Platform engineering", "Data centre modernisation", "Migration programmes"], mk: "var(--tick-3)" },
    { no: "Stage 3", name: "Secure", lead: "Embed resilience and governance throughout.",
      understand: null,
      activities: ["Identity", "Governance", "Monitoring", "Security architecture", "Risk management"], mk: "var(--tick-4)" },
    { no: "Stage 4", name: "Operate", lead: "Ensure long-term operational excellence.",
      understand: null,
      activities: ["Managed services", "Support", "Monitoring", "Optimisation", "Lifecycle management"], mk: "var(--tick-5)" },
  ];
  const why = [
    { icon: "partner", h: "Single accountable partner", p: "One team owns strategy, delivery, security, and operations." },
    { icon: "layers", h: "Reduced complexity", p: "Fewer hand-offs between vendors, consultants, and support providers." },
    { icon: "shield", h: "Improved governance", p: "Consistent controls and visibility across the whole estate." },
    { icon: "target", h: "Lower operational risk", p: "Resilience and security engineered in, not bolted on." },
    { icon: "bolt", h: "Faster time to value", p: "Aligned decisions move programmes from strategy to outcome sooner." },
    { icon: "improve", h: "Long-term continuity", p: "Environments that keep delivering value through managed operations." },
  ];

  return (
    <>
      <PHero crumb="Our Approach" eyebrow="Our approach" title="One method. End to end." hl="method" hue="blue" tone="blue"
        sub="Technology transformation succeeds when strategy, implementation, security, and operations work together. ICT delivers programmes through a single accountable framework that aligns technology decisions with business outcomes." />

      {/* Why our approach works */}
      <section className="section s-paper">
        <div className="wrap">
          <div className="sintro__grid">
            <div className="reveal acc-purple">
              <p className="kicker">Why it works</p>
              <h2 className="sintro__stmt">One <span className="tword">framework</span> instead of fragmented ownership.</h2>
            </div>
            <div className="sintro__body reveal d1">
              <p>Many organisations work with multiple vendors, consultants, and support providers. That creates fragmented ownership and unnecessary complexity.</p>
              <p>ICT brings strategy, delivery, security, and operations together under one framework, so accountability is clear and the environment stays coherent from day one through day two.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="The method" title="Four stages, one continuous lifecycle." hl="one continuous lifecycle" hue="magenta" sub="Each stage builds on the last, from understanding the estate to operating it for the long term." />
          <div className="stage-list reveal">
            {stages.map((s) => (
              <div className="stage" key={s.name} style={{ "--stage-mk": s.mk }}>
                <div className="stage__head">
                  <span className="stage__no">{s.no}</span>
                  <h3 className="stage__name">{s.name}</h3>
                  <p className="stage__lead">{s.lead}</p>
                </div>
                <div className="stage__cols">
                  {s.understand ? (
                    <div className="stage__col">
                      <span className="stage__k">Understand</span>
                      <ul className="stage__ul">{s.understand.map((u) => <li key={u}>{u}</li>)}</ul>
                    </div>
                  ) : null}
                  <div className="stage__col">
                    <span className="stage__k">Activities</span>
                    <ul className="stage__ul">{s.activities.map((a) => <li key={a}>{a}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why organisations choose this model */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="Why this model" title="What a single framework delivers." hl="single framework" hue="violet" sub="The outcomes organisations gain when strategy, delivery, security, and operations share one owner." />
          <IconCards cards={why} />
        </div>
      </section>

      <NextBand items={[
        { k: "Services", h: "What we deliver", p: "Cloud, cybersecurity, AI, and managed services.", href: "Company-Overview.html", cta: "View services" },
        { k: "Why ICT", h: "Why organisations choose ICT", p: "Expertise, accountability, and long-term partnership.", href: "Why-ICT.html", cta: "Why ICT" },
        { k: "Success story", h: "Proven outcomes", p: "How the method delivers across industries.", href: "Financial-Services.html", cta: "View case study" },
      ]} />

      <PageCTA title="Let's assess your environment." />
    </>);
}

window.ApproachPage = ApproachPage;
