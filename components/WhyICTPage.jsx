/* global React, Icon, SecHead, PHero, InfoRequired, IconCards, NextBand, PageCTA */

function WhyICTPage() {
  const values = [
    { icon: "layers", h: "Deep technical expertise", p: "Experienced specialists across cloud, cybersecurity, infrastructure, networking, AI, and operations." },
    { icon: "partner", h: "Long-term partnership", p: "Support beyond implementation, through managed services and continuous optimisation." },
    { icon: "building", h: "Enterprise focus", p: "Designed for organisations running critical environments where availability and security matter." },
    { icon: "globe", h: "Local presence", p: "Dedicated teams supporting organisations across Qatar." },
    { icon: "compass", h: "Global technology ecosystem", p: "Access to leading technology platforms and deep vendor expertise." },
    { icon: "target", h: "Operational accountability", p: "Focused on measurable outcomes and operational excellence." },
  ];
  const proof = [
    { icon: "azure", h: "Microsoft credentials", p: "Specialisations and designations across cloud, security, and modern work." },
    { icon: "identity", h: "Certified engineers", p: "A bench of certified specialists across every discipline we deliver." },
    { icon: "deliver", h: "Project experience", p: "Programmes delivered across government, finance, and enterprise." },
    { icon: "radar", h: "Support coverage", p: "Monitoring and response models for mission-critical environments." },
    { icon: "building", h: "Industry coverage", p: "Experience across the sectors that define Qatar's economy." },
    { icon: "check", h: "Customer success", p: "Measured against availability, resolution, and satisfaction." },
  ];

  return (
    <>
      <PHero crumb="Why ICT" eyebrow="Why ICT" title="Built for long-term technology success." hl="success" hue="violet" tone="violet"
        sub="Technology projects come and go. The real challenge is building environments that keep delivering value long after implementation. ICT helps organisations achieve that through deep expertise, operational accountability, and long-term partnership." />

      {/* What clients value most */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="What clients value most" title="Why organisations keep choosing ICT." hl="keep choosing" hue="blue" sub="Not a pitch. The reasons enterprises and public-sector bodies continue to work with us." />
          <IconCards cards={values} />
        </div>
      </section>

      {/* How we work - process flow */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="How we work" title="A method that compounds value." hl="compounds value" hue="magenta" sub="Five disciplines, applied consistently from first conversation to continuous improvement." />
          <div className="pflow reveal">
            {[
              { icon: "listen", h: "Listen", p: "Understand objectives and challenges." },
              { icon: "design", h: "Design", p: "Develop practical technology strategies." },
              { icon: "deliver", h: "Deliver", p: "Implement using proven methodologies." },
              { icon: "managed", h: "Support", p: "Provide ongoing operational support." },
              { icon: "improve", h: "Improve", p: "Continuously optimise and evolve environments." },
            ].map((s) => (
              <div className="pflow__step" key={s.h}>
                <span className="pflow__ic"><Icon name={s.icon} size={26} /></span>
                <h3 className="pflow__h">{s.h}</h3>
                <p className="pflow__p">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes ICT different - proof points */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="What makes ICT different" title="Evidence, not adjectives." hl="Evidence" hue="orange" sub="The capabilities and commitments that set ICT apart as a long-term partner." />
          <IconCards cards={proof} />
        </div>
      </section>

      {/* Client commitment */}
      <section className="section s-ink">
        <div className="wrap">
          <div className="sintro__grid">
            <div className="reveal acc-purple">
              <p className="kicker">Client commitment</p>
              <h2 className="sintro__stmt" style={{ color: "#fff" }}>The relationship <span className="tword">doesn't end</span> at deployment.</h2>
            </div>
            <div className="sintro__body reveal d1">
              <p style={{ color: "var(--on-dark-soft)" }}>Technology relationships should not end after go-live. ICT remains accountable for long-term operational success through support, optimisation, and continuous improvement.</p>
              <a className="tlink head-link" href="Approach.html">See how we deliver <span className="ar" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <NextBand items={[
        { k: "Approach", h: "Our delivery method", p: "Assess, Modernise, Secure, Operate, under one framework.", href: "Approach.html", cta: "Our approach" },
        { k: "Services", h: "What we deliver", p: "Cloud, cybersecurity, AI, and managed services.", href: "Company-Overview.html", cta: "View services" },
        { k: "Success story", h: "Proven outcomes", p: "Measurable results across industries.", href: "Education-Research.html", cta: "View case study" },
      ]} />

      <PageCTA title="Let's discuss your technology goals." />
    </>);
}

window.WhyICTPage = WhyICTPage;
