/* global React, Icon, SecHead, PHero, InfoRequired, IconCards, NextBand, PageCTA */

function CompanyOverviewPage() {
  const services = [
    { icon: "cloud", h: "Cloud & Infrastructure Transformation", p: "Modernising infrastructure, hybrid cloud environments, networks, and enterprise platforms.", href: "Cloud-Infrastructure-Transformation.html", cta: "Explore this service" },
    { icon: "shield", h: "Cybersecurity & Digital Resilience", p: "Protecting critical environments through governance, security operations, identity, and resilience programmes.", href: "Cybersecurity-Digital-Resilience.html", cta: "Explore this service" },
    { icon: "ai", h: "AI & Intelligent Automation", p: "Helping organisations operationalise AI securely and responsibly.", href: "AI-Intelligent-Automation.html", cta: "Explore this service" },
    { icon: "managed", h: "Managed & Support Services", p: "Long-term operational excellence through monitoring, optimisation, support, and managed services.", href: "Managed-Support-Services.html", cta: "Explore this service" },
  ];
  const industries = [
    { icon: "building", h: "Finance", p: "Digital banking, regulatory compliance, and fraud detection for banks and financial institutions." },
    { icon: "bank", h: "Government", p: "Smart cities, eGov platforms, and secure citizen services for the public sector." },
    { icon: "signal", h: "Telecom", p: "Network optimisation and digital service delivery for carrier-grade environments." },
    { icon: "operations", h: "Manufacturing", p: "Industry 4.0, IoT, and predictive maintenance for connected operations." },
    { icon: "health", h: "Healthcare", p: "EHR, telemedicine, and clinical analytics that keep services available and data protected." },
    { icon: "target", h: "Retail", p: "Omnichannel commerce and personalisation that connect every customer touchpoint." },
  ];
  const values = [
    { icon: "bolt", h: "Innovation", p: "We embrace emerging technologies to shape the future of business." },
    { icon: "target", h: "Excellence", p: "We strive for the highest standards in execution, delivery, and service." },
    { icon: "shield", h: "Integrity", p: "We act with transparency, accountability, and respect in every engagement." },
    { icon: "partner", h: "Collaboration", p: "We build strong partnerships with clients, employees, and technology leaders." },
    { icon: "improve", h: "Customer Success", p: "Our clients' growth and outcomes define our success." },
  ];
  const pillars = [
    { icon: "compass", h: "Inspire", p: "We inspire people and industries to think bigger, pushing boundaries with bold ideas." },
    { icon: "layers", h: "Create", p: "We create solutions that merge technology and strategy to solve real-world challenges." },
    { icon: "operations", h: "Transform", p: "We transform businesses and communities to thrive in a cloud-first, AI-powered world." },
  ];
  const focus = ["cloud", "shield", "layers", "network", "data", "ai", "operations", "managed"];
  const focusLabels = ["Cloud", "Cybersecurity", "Infrastructure", "Networking", "Data Platforms", "Artificial Intelligence", "Operations", "Managed Services"];

  return (
    <>
      <PHero crumb="Company Overview" eyebrow="About ICT" title="Built on expertise. Focused on outcomes." hl="outcomes" hue="blue" tone="full"
        sub="For nearly two decades, ICT has helped organisations modernise infrastructure, strengthen resilience, secure critical systems, and unlock new opportunities through technology. Today, we partner with enterprises and public-sector organisations across Qatar to design, deploy, secure, and operate the technology environments that power their operations." />

      {/* Our story + timeline */}
      <section className="section s-paper">
        <div className="wrap">
          <div className="sintro__grid">
            <div className="reveal acc-purple">
              <p className="kicker">Our story</p>
              <h2 className="sintro__stmt">From systems integration to <span className="tword">enterprise transformation</span>.</h2>
            </div>
            <div className="sintro__body reveal d1">
              <p>ICT began with a bold idea: technology should not just support business, it should transform it.</p>
              <p>Over the years, we have grown from a trusted systems integrator into a digital transformation catalyst, helping enterprises across Qatar move faster, smarter, and with greater impact.</p>
              <p>Our vision is to be the most trusted digital transformation partner in the region. Our mission is to deliver integrated digital solutions that maximise business value, built on world-class partnerships, secure and scalable architectures, and long-term relationships rooted in trust.</p>
            </div>
          </div>
          <div className="timeline timeline--track" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            {[
              { y: "2005", t: "ICT founded with a vision to bridge business and technology." },
              { y: "2010", t: "Regional expansion and strategic partnerships with Cisco, Microsoft, and HPE." },
              { y: "2020", t: "Strategic pivot into cloud, AI, and cybersecurity." },
              { y: "2025", t: "250+ AI use cases deployed, and a trusted partner for government, finance, and healthcare." },
            ].map((m) => (
              <div className="tl-row reveal" key={m.y}>
                <span className="tl-node" aria-hidden="true"></span>
                <div className="tl-year">{m.y}</div>
                <div className="tl-text">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What drives us: vision, mission, values, pillars */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="What drives us" title="Our values and the way we work." hl="values" hue="blue" sub="Five values guide every engagement, and three pillars, Inspire, Create, and Transform, define how we turn ideas into impact." />
          <IconCards cards={values} cols={3} />
          <div style={{ marginTop: "clamp(32px,4vw,56px)" }}>
            <IconCards cards={pillars} cols={3} />
          </div>
        </div>
      </section>

      {/* What we do today */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="What we do today" title="Four practices, one accountable partner." hl="one accountable partner" hue="magenta" sub="Deep capability across the disciplines that keep enterprise technology running." />
          <IconCards cards={services} cols={2} />
        </div>
      </section>

      {/* Industries */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="Industries we support" title="Engineered for sectors that can't stop." hl="can't stop" hue="violet" sub="From government to enterprise, we support organisations where availability, security, and continuity are non-negotiable." />
          <IconCards cards={industries} />
        </div>
      </section>

      {/* Technology focus */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="Technology focus" title="A connected capability map." hl="connected" hue="orange" sub="The disciplines we combine into each engagement, from foundations to intelligent operations." />
          <div className="capmap reveal" style={{ "--paper": "var(--ink)", background: "var(--rule-dark)", borderColor: "var(--rule-dark)" }}>
            {focusLabels.map((t, i) => (
              <div className="capmap__cell" key={t} style={{ background: "var(--ink)" }}>
                <span className="capmap__ic" style={{ color: "var(--on-dark)" }}><Icon name={focus[i]} size={24} /></span>
                <span className="capmap__t" style={{ color: "#fff" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic partnerships + InfoRequired */}
      <section className="section s-paper">
        <div className="wrap">
          <div className="sintro__grid">
            <div className="reveal acc-blue">
              <p className="kicker">Strategic partnerships</p>
              <h2 className="sintro__stmt">World-class ecosystems, <span className="tword">applied locally</span>.</h2>
            </div>
            <div className="sintro__body reveal d1">
              <p>Technology transformation requires more than expertise. It requires access to world-class technology ecosystems.</p>
              <p>ICT works closely with the world's leading technology companies, including Microsoft, Informatica, Databricks, Dataiku, Adobe, and a broad ecosystem of data, security, and experience partners.</p>
              <a className="tlink head-link" href="Technology-Partnerships.html">Explore technology partnerships <span className="ar" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <NextBand items={[
        { k: "Approach", h: "How we deliver", p: "One accountable framework: Assess, Modernise, Secure, Operate.", href: "Approach.html", cta: "Our approach" },
        { k: "Partnerships", h: "Technology ecosystem", p: "Microsoft and the partners behind our delivery.", href: "Technology-Partnerships.html", cta: "See partners" },
        { k: "Success story", h: "Proven outcomes", p: "How organisations across Qatar transform with ICT.", href: "Public-Sector.html", cta: "View case study" },
      ]} />

      <PageCTA title="Let's discuss your technology strategy." />
    </>);
}

window.CompanyOverviewPage = CompanyOverviewPage;
