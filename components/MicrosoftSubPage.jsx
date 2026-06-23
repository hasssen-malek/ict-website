/* global React, HeroFigure, SecHead, IconCards, Icon, PageCTA, accentTitle, MS_NAV */
/* Renders one Microsoft child page from window.MS_SUB[key]. */

function MsSubHero({ d }) {
  return (
    <section className={"phero s-ink-deep acc-" + d.hue + " phero--" + d.hue}>
      <HeroFigure variant={d.figure} hue={d.hue} />
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="index.html">Home</a><span aria-hidden="true">/</span>
          <a href="Partners.html">Partners</a><span aria-hidden="true">/</span>
          <a href="Microsoft.html">Microsoft</a><span aria-hidden="true">/</span>
          <span aria-current="page">{d.crumb}</span>
        </nav>
        <p className="kicker">{d.eyebrow}</p>
        <h1 className="phero__title" style={{ maxWidth: "18ch" }}>{accentTitle(d.title, d.hl)}</h1>
        <p className="phero__sub lead" style={{ maxWidth: "660px" }}>{d.intro}</p>
        <div className="ms-aud" aria-label="Who this is for">
          <span className="ms-aud__label">For</span>
          {d.audience.map((a) => <span className="ms-aud__chip" key={a}>{a}</span>)}
        </div>
        <div className="hero__cta" style={{ marginTop: "30px" }}>
          {d.ctaDisabled
            ? <a className="btn btn--line" href="#" aria-disabled="true">{d.cta} <span className="ar" aria-hidden="true">→</span></a>
            : <a className="btn btn--primary" href="Contact.html">{d.cta} <span className="ar" aria-hidden="true">→</span></a>}
        </div>
      </div>
    </section>
  );
}

function MicrosoftSubPage({ data }) {
  const d = data;
  const others = (window.MS_NAV || []).filter((n) => n.href !== d.file);
  return (
    <React.Fragment>
      <MsSubHero d={d} />

      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow={d.topicsEyebrow} title={d.topicsTitle} hl={d.topicsHl} hue={d.hue} />
          <IconCards cards={d.topics} cols={3} />
        </div>
      </section>

      {d.note ? (
        <section className="section s-paper">
          <div className="wrap sintro__grid">
            <div className="reveal acc-blue">
              <p className="kicker">{d.note.tags ? "Built on" : "Note"}</p>
              <h2 className="sintro__stmt">{d.note.h}</h2>
            </div>
            <div className="sintro__body reveal d1">
              <p>{d.note.p}</p>
              {d.note.tags ? (
                <div className="ecogrid" style={{ marginTop: "20px" }}>
                  {d.note.tags.map((t) => <span className="eco-chip" key={t}>{t}</span>)}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Explore the Microsoft practice, the mini-site nav */}
      <section className="section s-ink-deep">
        <div className="wrap">
          <SecHead eyebrow="Microsoft practice" title="Explore the Microsoft practice." hl="Microsoft practice" hue="blue"
            sub="A complete Microsoft practice, cloud, data and AI, security, and modern work, plus the products we have built on Azure." />
          <div className="msnav reveal d1">
            {others.map((n) => (
              <a className="msnav__item" href={n.href} key={n.href}>
                <span className="msnav__h">{n.h}</span>
                <span className="msnav__ar" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Connected across ICT */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="Connected across ICT" title="Nothing stands alone." hl="Nothing" hue="magenta"
            sub="Every Microsoft capability links back to the wider ICT practice it draws on." />
          <div className="mscross reveal d1">
            {d.cross.map((c) => (
              <a className="mscross__item" href={c.href} key={c.href}>
                <span className="mscross__h">{c.h}</span>
                <span className="msnav__ar" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Tell us what you are trying to move, secure, or build on Microsoft." href="Contact.html" label="Talk to our Microsoft team" />
    </React.Fragment>
  );
}

window.MicrosoftSubPage = MicrosoftSubPage;
