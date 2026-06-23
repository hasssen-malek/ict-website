/* global React, Icon, SecHead, PHero, InfoRequired, IconCards, NextBand, PageCTA, PartnerLogo */

function PartnershipsPage() {
  const msCaps = [
  { icon: "azure", h: "Azure Infrastructure", p: "Build and operate scalable cloud environments." },
  { icon: "shield", h: "Microsoft Security", p: "Protect identities, devices, applications, and data." },
  { icon: "workplace", h: "Microsoft 365", p: "Modern workplace transformation." },
  { icon: "data", h: "Data & AI", p: "Microsoft Fabric, Azure AI, and governed enterprise data platforms." },
  { icon: "ai", h: "Microsoft Copilot", p: "Productivity transformation, knowledge retrieval, and AI agents." },
  { icon: "operations", h: "Business Applications", p: "Enable productivity and process optimisation." }];

  const ecosystem = ["Microsoft", "Informatica", "Adobe", "Dataiku", "Databricks", "F5", "Forcepoint", "Vectra AI", "Progress Sitefinity", "Striim", "Imprivata", "Hansa"];

  const whyMatter = [
  { icon: "compass", h: "Specialised expertise", p: "Direct access to vendor engineering and deep platform knowledge." },
  { icon: "bolt", h: "Accelerated delivery", p: "Proven architectures and programmes that move faster." },
  { icon: "shield", h: "Reduced risk", p: "Validated designs lower implementation and operational risk." },
  { icon: "radar", h: "Better support", p: "Escalation paths straight into the technology vendors." },
  { icon: "improve", h: "Long-term value", p: "Roadmap alignment keeps environments current and supported." },
  { icon: "target", h: "Right-fit solutions", p: "The right ecosystem mapped to each business outcome." }];


  return (
    <>
      <PHero crumb="Technology Partnerships" eyebrow="Technology partnerships" title="Strategic technology partnerships. Practical business outcomes." hl="business outcomes" hue="violet" tone="violet"
      sub="ICT combines local expertise with world-class technology ecosystems to deliver secure, scalable, and resilient solutions across cloud, cybersecurity, AI, and enterprise infrastructure." />

      {/* Featured: Microsoft */}
      <section className="section s-ink">
        <div className="wrap">
          <div className="flagship">
            <div className="reveal">
              <span className="flagship__badge"><Icon name="azure" size={16} /> Flagship partnership</span>
              <PartnerLogo name="Microsoft" className="flagship__logo" />
              <h2 className="flagship__h" style={{ marginTop: "20px", margin: "32px 0px 0px" }}>Microsoft + ICT</h2>
              <p className="flagship__p">Microsoft is a strategic technology partner supporting ICT's cloud, security, modern-workplace, AI, and data initiatives.</p>
              <p className="flagship__p">As a long-standing Microsoft partner, ICT helps organisations accelerate adoption across cloud, security, and modern work while reducing risk and complexity.</p>
              <div style={{ marginTop: "28px" }}>
                <a className="btn btn--primary" href="Contact-Us.html">Discuss a Microsoft engagement <span className="ar" aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="reveal d1">
              <span className="kicker" style={{ marginBottom: "26px", display: "inline-flex" }}>Microsoft capability areas</span>
              <IconCards cards={msCaps} cols={2} />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic ecosystem */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="Strategic technology ecosystem" title="The partners behind our delivery." hl="delivery" hue="blue" sub="Beyond Microsoft, ICT partners with the world's leading technology companies across cloud, data, AI, cybersecurity, and digital experience." />
          <div className="plogos reveal">
            {ecosystem.map((name) =>
            <div className="plogos__cell" key={name}><PartnerLogo name={name} /></div>
            )}
            {Array.from({ length: (4 - (ecosystem.length % 4)) % 4 }).map((_, i) =>
            <div className="plogos__cell plogos__cell--empty" key={"empty" + i} aria-hidden="true"></div>
            )}
          </div>
        </div>
      </section>

      {/* Why partnerships matter */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="Why partnerships matter" title="What the ecosystem unlocks." hl="unlocks" hue="magenta" sub="Technology partnerships let ICT deliver more: faster, safer, and with stronger long-term support." />
          <IconCards cards={whyMatter} />
        </div>
      </section>

      <NextBand items={[
      { k: "Services", h: "What we deliver", p: "Cloud, cybersecurity, AI, and managed services.", href: "Company-Overview.html", cta: "View services" },
      { k: "Approach", h: "How we deliver", p: "One accountable framework, end to end.", href: "Approach.html", cta: "Our approach" },
      { k: "Success story", h: "Proven outcomes", p: "Partnerships applied to real results.", href: "Public-Sector.html", cta: "View case study" }]
      } />

      <PageCTA title="Let's discuss your technology strategy." />
    </>);
}

window.PartnershipsPage = PartnershipsPage;