/* global React, Icon, SecHead, IconCards, InfoRequired, NextBand, PageCTA */
/* Case-study template (BATCH 3). Page provides window.STORY_DATA. */

function StoryHero({ d }) {
  return (
    <section className={"phero s-ink-deep acc-violet phero--" + (d.relatedService.href.indexOf("Cloud") >= 0 ? "blue" : "magenta")}>
      {d.heroImage ? <div className="storyhero__bg" aria-hidden="true"><img src={d.heroImage} alt="" /></div> : null}
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="Homepage.html">Home</a><span aria-hidden="true">/</span>
          <a href="Homepage.html#stories">Success Stories</a><span aria-hidden="true">/</span>
          <span aria-current="page">{d.industry}</span>
        </nav>
        <p className="kicker">{d.industry}</p>
        <h1 className="phero__title" style={{ maxWidth: "20ch" }}>{d.headline}</h1>
        <p className="phero__sub lead">{d.challengeSummary}</p>
        <div className="storyhero__tags">
          {d.tags.map((t) => <span className="storyhero__tag" key={t}>{t}</span>)}
        </div>
      </div>
    </section>);
}

function TwoCol({ bg, eyebrow, stmt, body, hue }) {
  return (
    <section className={"section " + bg}>
      <div className="wrap sintro__grid">
        <div className={"reveal" + (hue ? " acc-" + hue : "")}>
          <p className="kicker">{eyebrow}</p>
          <h2 className="sintro__stmt" style={bg === "s-ink" ? { color: "#fff" } : undefined}>{stmt}</h2>
        </div>
        <div className="sintro__body reveal d1">
          {body.map((p, i) => <p key={i} style={bg === "s-ink" ? { color: "var(--on-dark-soft)" } : undefined}>{p}</p>)}
        </div>
      </div>
    </section>);
}

function Architecture({ d }) {
  return (
    <section className="section s-paper">
      <div className="wrap">
        <SecHead eyebrow="Architecture & technologies" title="How it fits together." hl="fits together" hue="blue" sub="The platforms and controls combined to deliver the outcome, engineered for security and operational continuity." />
        <div className="archwrap reveal">
          <p className="archwrap__note">A layered architecture combining managed platforms, governed data, and access controls. Detailed architecture diagram available to ICT for customer-approved publication.</p>
          <div className="archstack">
            {d.tech.map((t, i) => (
              <div className="archstack__row" key={t}>
                <span className="archstack__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="archstack__t">{t}</span>
                <span className="archstack__bar"><i></i></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);
}

function StoryPage({ data: d }) {
  return (
    <>
      <StoryHero d={d} />
      <TwoCol bg="s-paper" eyebrow="Customer challenge" stmt={d.challengeStmt} body={d.challenge} hue="purple" />
      <TwoCol bg="s-ink" eyebrow="ICT solution" stmt={d.solutionStmt} body={d.solution} hue="violet" />
      <Architecture d={d} />
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="Business outcomes" title="What changed for the business." hl="changed" hue="magenta" sub="The operational outcomes delivered, measured against the customer's objectives." />
          <IconCards cards={d.outcomes} />
          <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <InfoRequired required={d.metricsRequired} examples={d.metricsExamples} />
          </div>
        </div>
      </section>
      <section className="section s-ink-deep">
        <div className="wrap">
          <SecHead eyebrow="Key takeaways" title="What this story shows." hl="story shows" hue="orange" />
          <div className="takeaways reveal" style={{ background: "var(--rule-dark)", borderColor: "var(--rule-dark)" }}>
            {d.takeaways.map((t) => (
              <div className="takeaway" key={t} style={{ background: "var(--ink-deep)" }}>
                <span className="takeaway__mk"></span>
                <span className="takeaway__t">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NextBand items={[
        { k: "Related service", h: d.relatedService.h, p: d.relatedService.p, href: d.relatedService.href, cta: "Explore service" },
        { k: "Next success story", h: d.nextStory.h, p: d.nextStory.p, href: d.nextStory.href, cta: "Read story" },
        { k: "Get in touch", h: "Discuss a similar outcome", p: "Tell us about your environment and objectives, and we'll scope the right engagement.", href: "Contact-Us.html", cta: "Contact us" },
      ]} />
      <PageCTA title={d.cta} />
    </>);
}

window.StoryPage = StoryPage;
