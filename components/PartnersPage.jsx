/* global React, PartnerLogo, SecHead, PageCTA, accentTitle */
/* Partners page — Sheet 9 copy. TODO[VERIFY]: current partner list and any
   tier claims before publish. Do not state a partnership tier unless confirmed. */

const PARTNER_WALL = ["Microsoft", "Databricks", "Informatica", "Adobe", "Progress Sitefinity", "Striim", "F5", "Forcepoint", "Vectra AI", "Imprivata", "Hamsa"];

function PartnersHero() {
  return (
    <section className="phero s-ink-deep acc-violet phero--violet">
      <HeroFigure variant="partners" hue="violet" />
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="index.html">Home</a><span aria-hidden="true">/</span>
          <span aria-current="page">Partners</span>
        </nav>
        <p className="kicker">Partners</p>
        <h1 className="phero__title" style={{ maxWidth: "16ch" }}>{accentTitle("Powered by partnerships", "partnerships")}</h1>
        <p className="phero__sub lead" style={{ maxWidth: "660px" }}>
          Innovation does not happen alone. We work with established technology providers so
          that what we build for you rests on platforms that are proven, supported, and here
          for the long term.
        </p>
      </div>
    </section>);
}

function PartnersPage() {
  const cols = 4;
  const fill = (cols - (PARTNER_WALL.length % cols)) % cols;
  return (
    <>
      <PartnersHero />

      <section className="section s-ink partners">
        <div className="wrap">
          <div className="partners__grid reveal">
            {PARTNER_WALL.map((name) => <div className="partners__cell" key={name}><PartnerLogo name={name} /></div>)}
            {Array.from({ length: fill }).map((_, i) => <div className="partners__cell partners__cell--empty" key={"e" + i} aria-hidden="true"></div>)}
          </div>
        </div>
      </section>

      <section className="section s-paper">
        <div className="wrap sintro__grid">
          <div className="reveal acc-blue">
            <p className="kicker">The ecosystem</p>
            <h2 className="sintro__stmt">Built with the platforms you <span className="tword">already trust</span>.</h2>
          </div>
          <div className="sintro__body reveal d1">
            {/* TODO[VERIFY]: current partner list and any tier claims before publish */}
            <p>Our partner ecosystem includes Microsoft, Databricks, Informatica, Adobe, and Progress Sitefinity, alongside specialist security and data partners including Striim, F5, Forcepoint, Vectra AI, Hamsa, and Imprivata.</p>
          </div>
        </div>
      </section>

      <section className="section s-ink-deep">
        <div className="wrap sintro__grid">
          <div className="reveal acc-blue">
            <p className="kicker">Microsoft</p>
            <h2 className="sintro__stmt" style={{ color: "#fff" }}>Our deepest platform <span className="tword">relationship</span>.</h2>
          </div>
          <div className="sintro__body reveal d1">
            {/* TODO[VERIFY]: counts; renewal-aware */}
            <p style={{ color: "var(--on-dark-soft)" }}>Our deepest platform relationship is with Microsoft. We are a member of the Microsoft AI Cloud Partner Program, with five Solutions Partner designations and sixteen specializations across Azure, security, data and AI, and modern work.</p>
            <a className="tlink" href="Microsoft.html" style={{ color: "#fff" }}>Explore the Microsoft partnership <span className="ar" aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <PageCTA title="Tell us what you are trying to build." href="Contact.html" label="Talk to our team" />
    </>);
}

window.PartnersPage = PartnersPage;
