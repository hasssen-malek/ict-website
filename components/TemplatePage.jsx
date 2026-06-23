/* global React, accentTitle, SecHead, IconCards, NextBand, PageCTA, FaqBlock, HeroFigure */
/* Generic templated page renderer driven by window.PAGES[id].
   Kinds: "hub" (card grid), "detail" (numbered capability sections),
   "simple" (hero + cross-links), "case" (challenge/solution/outcome),
   "values" (value cards + commitment). */

const LABEL_ICON = {
  "Services": "layers", "Consulting": "compass", "Cloud & Infrastructure": "cloud", "Cybersecurity": "shield", "Data, AI & Analytics": "data", "Applications": "workplace", "Customer Experience": "target", "Managed Services": "managed",
  "Emerging Tech": "network", "IoT": "signal", "Blockchain": "lock", "AR/VR": "design", "Digital Twins": "layers",
  "AI & Data": "radar", "Enterprise AI": "ai", "Data & Analytics": "data", "Agentic Systems": "operations", "Responsible AI": "shield",
  "Industries": "globe", "Finance": "bank", "Government": "building", "Healthcare": "health", "Retail": "target", "Telecom": "signal", "Manufacturing": "operations",
  "Company": "partner", "Our Story": "compass", "Leadership": "identity", "Vision & Mission": "target", "Values": "check",
  "Case studies": "data", "Insights": "listen", "Careers": "identity",
};
function iconFor(d) {
  const last = d.crumbs && d.crumbs[d.crumbs.length - 1] && d.crumbs[d.crumbs.length - 1].label;
  if (LABEL_ICON[last]) return LABEL_ICON[last];
  return { hub: "layers", detail: "compass", simple: "globe", values: "check" }[d.kind] || "network";
}

function Crumbs({ trail }) {
  return (
    <nav className="lhero__crumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a><span aria-hidden="true">/</span>
      {trail.map((c, i) =>
        i < trail.length - 1
          ? <React.Fragment key={i}><a href={c.href}>{c.label}</a><span aria-hidden="true">/</span></React.Fragment>
          : <span key={i} aria-current="page">{c.label}</span>
      )}
    </nav>);
}

const CASE_IMG = { Finance: "assets/stories/financial.jpg", Education: "assets/stories/research.jpg", Government: "assets/stories/public.jpg" };

/* Each page gets its own hero illustration from the HeroFigure family, so no
   two pages share a composition or motion. Keyed by output file name. */
const FIG_BY_FILE = {
  "Services.html": "services", "Service-Consulting.html": "consulting", "Service-Cloud-Infrastructure.html": "cloud",
  "Service-Cybersecurity.html": "security", "Service-Data-AI-Analytics.html": "dataai", "Service-Applications.html": "apps",
  "Service-Customer-Experience.html": "cx", "Service-Managed-Services.html": "managed",
  "Emerging-Tech.html": "emerging", "Emerging-IoT.html": "iot", "Emerging-Blockchain.html": "blockchain",
  "Emerging-AR-VR.html": "arvr", "Emerging-Digital-Twins.html": "twins",
  "AI-Data.html": "aihub", "AI-Enterprise-AI.html": "entai", "AI-Data-Analytics.html": "analytics",
  "AI-Agentic-Systems.html": "agentic", "AI-Responsible-AI.html": "responsible",
  "Industries.html": "industries", "Industry-Finance.html": "finance", "Industry-Government.html": "government",
  "Industry-Healthcare.html": "healthcare", "Industry-Retail.html": "retail", "Industry-Telecom.html": "telecom",
  "Industry-Manufacturing.html": "manufacturing",
  "Company.html": "company", "Company-Our-Story.html": "story", "Company-Leadership.html": "leadership",
  "Company-Vision-Mission.html": "vision", "Company-Values.html": "values",
  "Case-Studies.html": "casehub", "Insights.html": "insights", "Careers.html": "careers",
};
function figVariant(d) { return FIG_BY_FILE[d.file] || { hub: "network", detail: "network", simple: "network", values: "values" }[d.kind] || "network"; }

function THero({ d }) {
  const hue = d.hue || "violet";
  const caseImg = d.kind === "case" ? CASE_IMG[d.sectorTag] : null;
  return (
    <section className={"phero s-ink-deep acc-" + hue + (d.tint ? " phero--" + d.tint : "") + (caseImg ? " phero--case" : "")}>
      {d.kind !== "case" ? <HeroFigure variant={figVariant(d)} hue={hue} /> : null}
      {caseImg ? (
        <div className="casehero__bg" data-parallax="0.05" aria-hidden="true">
          <img src={caseImg} alt="" loading="eager" decoding="async" onError={(e) => { e.currentTarget.style.display = "none"; }} />
          <span className="casehero__scrim"></span>
        </div>
      ) : null}
      <div className="wrap hero-load">
        <Crumbs trail={d.crumbs} />
        <p className="kicker">{d.eyebrow}</p>
        <h1 className="phero__title" style={{ maxWidth: "18ch" }}>{accentTitle(d.h1, d.hl)}</h1>
        {d.intro ? <p className="phero__sub lead" style={{ maxWidth: "min(560px, 94%)" }}>{d.intro}</p> : null}
      </div>
    </section>);
}

/* animated, scroll-driven Our Story timeline */
function Timeline({ d }) {
  const steps = (d.sections || []).map((s) => {
    const parts = s.h.split("\u00b7");
    const yr = parts.length > 1 ? parts[0].trim() : "";
    const lab = parts.length > 1 ? parts.slice(1).join("\u00b7").trim() : s.h;
    return { yr, lab, body: s.body };
  });
  return (
    <section className="section s-paper">
      <div className="wrap">
        <SecHead eyebrow={d.sectionsEyebrow || "Our journey"} title={d.sectionsTitle || "From 2005 to today."} hl={d.sectionsHl} hue="violet" />
        <div className="tline" data-timeline>
          <div className="tline__rail" aria-hidden="true"><span className="tline__prog"></span></div>
          {steps.map((s, i) => (
            <div className="tline__step" data-tl-step key={i}>
              <span className="tline__dot" aria-hidden="true"></span>
              {s.yr ? <span className="tline__yr">{s.yr}</span> : null}
              <h3 className="tline__h">{s.lab}</h3>
              <p className="tline__p">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>);
}

/* optional intro band (statement + body) for hub pages */
function IntroBand({ d, bg }) {
  if (!d.bodyHead && !d.body) return null;
  return (
    <section className={"section " + (bg || "s-paper")}>
      <div className="wrap sintro__grid">
        <div className="reveal acc-purple">
          <p className="kicker">{d.bodyEyebrow || "In brief"}</p>
          <h2 className="sintro__stmt" style={bg === "s-ink" || bg === "s-ink-deep" ? { color: "#fff" } : undefined}>{accentTitle(d.bodyHead, d.bodyHl)}</h2>
        </div>
        <div className="sintro__body reveal d1">
          {(Array.isArray(d.body) ? d.body : [d.body]).map((p, i) =>
            <p key={i} style={bg === "s-ink" || bg === "s-ink-deep" ? { color: "var(--on-dark-soft)" } : undefined}>{p}</p>)}
        </div>
      </div>
    </section>);
}

function CapSections({ d }) {
  const sections = d.sections || [];
  const fill = sections.length % 2 === 1 ? 1 : 0;
  return (
    <section className={"section " + (d.sectionsBg || "s-paper")}>
      <div className="wrap">
        <SecHead eyebrow={d.sectionsEyebrow || "What we do"} title={d.sectionsTitle || "How we help."}
          hl={d.sectionsHl} hue={d.hue || "magenta"} sub={d.sectionsSub} />
        <div className="capgrid reveal">
          {sections.map((s, i) => (
            <div className="capcell" key={i}>
              <span className="capcell__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="capcell__h">{s.h}</h3>
              <p className="capcell__p">{s.body}</p>
            </div>
          ))}
          {Array.from({ length: fill }).map((_, i) => <div className="capcell" aria-hidden="true" key={"f" + i}></div>)}
        </div>
      </div>
    </section>);
}

function HubCards({ d }) {
  return (
    <section className={"section " + (d.cardsBg || "s-paper")}>
      <div className="wrap">
        <SecHead eyebrow={d.cardsEyebrow || d.eyebrow} title={d.cardsTitle || "Explore."} hl={d.cardsHl}
          hue={d.hue || "blue"} sub={d.cardsSub} />
        <IconCards cards={d.cards} cols={d.cardsCols || 3} />
      </div>
    </section>);
}

/* Curated case-study layout — the same featured + two-secondary "story system"
   the homepage uses, driven by d.stories. */
function HubStoryTags({ tags }) {
  return (
    <ul className="story__tags">
      {(tags || []).map((t) => <li className="story__tag" key={t}>{t}</li>)}
    </ul>);
}

function HubStories({ d }) {
  const stories = d.stories || [];
  const featured = stories[0];
  const secondary = stories.slice(1);
  if (!featured) return <HubCards d={d} />;
  return (
    <section className={"section " + (d.cardsBg || "s-paper")} id="stories">
      <div className="story__glow" aria-hidden="true"></div>
      <div className="wrap">
        <SecHead eyebrow={d.cardsEyebrow || d.eyebrow} title={d.cardsTitle || "Selected work."} hl={d.cardsHl}
          hue={d.hue || "blue"} sub={d.cardsSub} />
        <div className="story__system">
          <article className={"story story--featured story--link reveal acc-" + (featured.accent || "blue")}>
            <div className="story__media">
              <img src={featured.img} alt="" loading="lazy" style={{ objectPosition: featured.pos || "50% 50%" }} />
            </div>
            <div className="story__text">
              <div className="story__meta">
                <span className="story__mk" aria-hidden="true"></span>
                <span className="story__case">{featured.corner}</span>
                <span className="story__sector">{featured.sector}</span>
              </div>
              <h3 className="story__title">{featured.title}</h3>
              <HubStoryTags tags={featured.tags} />
              <p className="story__desc">{featured.desc}</p>
              <a className="tlink story__stretch" href={featured.href}>Read case study <span className="ar" aria-hidden="true">→</span></a>
            </div>
          </article>

          <div className="story__grid">
            {secondary.map((s) =>
              <article className={"story-card story--link reveal acc-" + (s.accent || "blue")} key={s.corner || s.href}>
                <div className="story-card__media">
                  <img src={s.img} alt="" loading="lazy" style={{ objectPosition: s.pos || "50% 50%" }} />
                </div>
                <div className="story-card__body">
                  <div className="story__meta">
                    <span className="story__mk" aria-hidden="true"></span>
                    <span className="story__case">{s.corner}</span>
                    <span className="story__sector">{s.sector}</span>
                  </div>
                  <h3 className="story-card__title">{s.title}</h3>
                  <HubStoryTags tags={s.tags} />
                  <p className="story-card__desc">{s.desc}</p>
                  <a className="tlink story__stretch" href={s.href}>Read case study <span className="ar" aria-hidden="true">→</span></a>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>);
}

function ValuesBlock({ d }) {
  return (
    <section className="section s-paper">
      <div className="wrap">
        <SecHead eyebrow={d.cardsEyebrow || "Our values"} title={d.cardsTitle || "What we value."} hl={d.cardsHl} hue="orange" />
        <IconCards cards={d.cards} cols={d.cardsCols || 3} />
        {d.commitment ? (
          <div className="sintro__grid reveal" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <div className="acc-blue"><p className="kicker">Our commitment</p></div>
            <div className="sintro__body"><p style={{ fontSize: "var(--t-lead)", lineHeight: 1.55, color: "var(--on-paper)" }}>{d.commitment}</p></div>
          </div>
        ) : null}
      </div>
    </section>);
}

function TwoColCase({ bg, eyebrow, stmt, body, hue }) {
  return (
    <section className={"section " + bg}>
      <div className="wrap sintro__grid">
        <div className={"reveal" + (hue ? " acc-" + hue : "")}>
          <p className="kicker">{eyebrow}</p>
          <h2 className="sintro__stmt" style={bg.indexOf("ink") >= 0 ? { color: "#fff" } : undefined}>{stmt}</h2>
        </div>
        <div className="sintro__body reveal d1">
          <p style={bg.indexOf("ink") >= 0 ? { color: "var(--on-dark-soft)" } : undefined}>{body}</p>
        </div>
      </div>
    </section>);
}

function PendingNote({ k, text }) {
  return (
    <div className="pending reveal" role="note">
      <p className="pending__k">{k}</p>
      <p>{text}</p>
    </div>);
}

function SimpleBody({ d }) {
  if (d.careers) return <CareersBody d={d} />;
  if (d.leaders) return <LeadershipBody d={d} />;
  if (!d.pending) return null;
  return (
    <section className="section s-paper">
      <div className="wrap">
        <PendingNote k={d.pending.k} text={d.pending.text} />
      </div>
    </section>);
}

/* ---- Careers: intro + culture values + open roles + open application ---- */
function CareersBody({ d }) {
  const c = d.careers;
  return (
    <>
      <section className="section s-paper">
        <div className="wrap sintro__grid">
          <div className="reveal acc-magenta">
            <p className="kicker">{c.introEyebrow}</p>
            <h2 className="sintro__stmt">{accentTitle(c.introHead, c.introHl)}</h2>
          </div>
          <div className="sintro__body reveal d1">
            {c.introBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow={c.valuesEyebrow} title={c.valuesTitle} hl={c.valuesHl} hue="orange" sub={c.valuesSub} />
          <IconCards cards={c.values} cols={3} />
        </div>
      </section>

      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow={c.openingsEyebrow} title={c.openingsTitle} hl={c.openingsHl} hue="blue" />
          {c.openingsNote ? <p className="roles__note" role="note">{c.openingsNote}</p> : null}
          <ul className="roles reveal">
            {c.openings.map((r, i) => (
              <li className="role" key={i}>
                <div className="role__main">
                  <h3 className="role__title">{r.role}</h3>
                  <p className="role__desc">{r.desc}</p>
                  <ul className="role__meta">
                    <li>{r.team}</li>
                    <li>{r.location}</li>
                    <li>{r.type}</li>
                  </ul>
                </div>
                <a className="role__apply" href="Contact.html" aria-label={"Apply for " + r.role}>
                  Apply <span className="ar" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          {c.openApplication ? (
            <div className="openapp reveal acc-magenta">
              <div>
                <h3 className="openapp__h">{c.openApplication.h}</h3>
                <p className="openapp__p">{c.openApplication.p}</p>
              </div>
              <a className="btn btn--primary" href={c.openApplication.href || "Contact.html"}>
                {c.openApplication.cta} <span className="ar" aria-hidden="true">→</span>
              </a>
            </div>
          ) : null}
        </div>
      </section>
    </>);
}

/* ---- Leadership: premium profile cards with portrait placeholders ---- */
function LeadershipBody({ d }) {
  const l = d.leaders;
  return (
    <section className="section s-paper">
      <div className="wrap">
        {l.note ? <PendingNote k="Placeholder profiles" text={l.note} /> : null}
        <div className="leaders reveal" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
          {l.people.map((p, i) => (
            <article className={"leader acc-" + (p.accent || "blue")} key={i}>
              <div className="leader__photo" aria-hidden="true">
                <span className="leader__photocap">Portrait</span>
              </div>
              <div className="leader__body">
                <h3 className="leader__role">{p.role}</h3>
                <span className="leader__name">Name to be confirmed</span>
                <p className="leader__bio">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>);
}

const WHY_CARDS = [
  { icon: "globe", h: "In Qatar since 2005", p: "We know the market, the regulators, and the sectors we serve." },
  { icon: "deliver", h: "One partner across the lifecycle", p: "We advise, build, and run, and stay accountable for the result." },
  { icon: "partner", h: "The platforms you already use", p: "Microsoft, Databricks, Informatica, and more." },
  { icon: "check", h: "AI that reaches production", p: "Governed and secure, not stuck in a pilot." },
];
const CASE_CARDS = [
  { icon: "data", h: "Investment research assistant", p: "An AI research assistant for a financial institution.", href: "Case-Investment-Research.html", cta: "Read" },
  { icon: "listen", h: "Unified enterprise search", p: "AI-powered search for an educational institution.", href: "Case-Enterprise-Search.html", cta: "Read" },
  { icon: "cloud", h: "Hybrid cloud data centre", p: "A government data centre extended into Azure.", href: "Case-Hybrid-Cloud.html", cta: "Read" },
];
const IND_SVC_CARDS = [
  { icon: "data", h: "Data, AI & Analytics", p: "A governed data foundation and the AI that runs on it.", href: "Service-Data-AI-Analytics.html", cta: "Explore" },
  { icon: "shield", h: "Cybersecurity", p: "Security at every layer.", href: "Service-Cybersecurity.html", cta: "Explore" },
  { icon: "cloud", h: "Cloud & Infrastructure", p: "Built to scale, run anywhere.", href: "Service-Cloud-Infrastructure.html", cta: "Explore" },
  { icon: "managed", h: "Managed & Support Services", p: "We keep it running, around the clock.", href: "Service-Managed-Services.html", cta: "Explore" },
];

function WhyStrip({ bg }) {
  return (
    <section className={"section " + (bg || "s-paper")}>
      <div className="wrap">
        <SecHead eyebrow="Why ICT" title="Why work with ICT." hl="ICT" hue="orange"
          sub="Four practical reasons organisations across Qatar choose ICT to advise, build, secure, and operate the technology they depend on." />
        <IconCards cards={WHY_CARDS} cols={4} />
      </div>
    </section>);
}
function RelatedCases({ bg }) {
  return (
    <section className={"section " + (bg || "s-ink")}>
      <div className="wrap">
        <SecHead split eyebrow="Success stories" title="Real projects, real outcomes." hl="outcomes" hue="blue"
          action={<a className="tlink head-link" href="Case-Studies.html">View all <span className="ar" aria-hidden="true">→</span></a>} />
        <IconCards cards={CASE_CARDS} cols={3} />
      </div>
    </section>);
}
function RelevantServices({ bg }) {
  return (
    <section className={"section " + (bg || "s-paper")}>
      <div className="wrap">
        <SecHead eyebrow="How we help" title="What we bring to your sector." hl="bring" hue="magenta"
          sub="Engage us for one area or the whole journey, with one team accountable for the outcome." />
        <IconCards cards={IND_SVC_CARDS} cols={4} />
      </div>
    </section>);
}
function Enrich({ d }) {
  if (d.kind === "simple" && d.serviceSchema) return <><RelevantServices bg="s-paper" /><RelatedCases bg="s-ink" /><WhyStrip bg="s-paper" /></>;
  if (d.kind === "detail") return <WhyStrip bg={d.sectionsBg === "s-paper" ? "s-ink" : "s-paper"} />;
  if (d.kind === "hub" || d.kind === "values") return <WhyStrip bg="s-ink" />;
  if (d.kind === "case") return <RelatedCases bg="s-paper" />;
  return null;
}

function autoFaq(d) {
  if (!d.sections || d.sections.length < 2) return null;
  return [
    { q: "What does ICT deliver under " + (d.h1 || "this area") + "?", a: d.sections[0].h + ". " + d.sections[0].body },
    { q: "What else does it include?", a: d.sections[1].h + ". " + d.sections[1].body },
    { q: "How do we get started?", a: "Start a conversation and we will scope the right engagement for your environment, objectives, and stage." },
  ];
}

function TemplatePage({ data: d }) {
  let body = null;
  if (d.kind === "hub") body = <><IntroBand d={d} />{d.stories ? <HubStories d={d} /> : <HubCards d={d} />}</>;
  else if (d.kind === "detail") body = (d.sectionsEyebrow === "Our journey") ? <Timeline d={d} /> : <CapSections d={d} />;
  else if (d.kind === "values") body = <ValuesBlock d={d} />;
  else if (d.kind === "simple") body = <SimpleBody d={d} />;
  else if (d.kind === "case") body = (
    <>
      <TwoColCase bg="s-paper" eyebrow="The challenge" stmt={d.challengeStmt} body={d.challenge} hue="purple" />
      <TwoColCase bg="s-ink" eyebrow="What we did" stmt={d.solutionStmt} body={d.solution} hue="violet" />
      <TwoColCase bg="s-paper" eyebrow="The outcome" stmt={d.outcomeStmt} body={d.outcome} hue="blue" />
    </>);

  return (
    <>
      <THero d={d} />
      {body}
      <Enrich d={d} />
      {(() => { const f = d.faq || (d.kind === "detail" ? autoFaq(d) : null); return f ? <FaqBlock items={f} eyebrow="FAQ" title={d.faqTitle || "Questions, answered."} hl={d.faqHl || "answered"} hue={d.hue} bg="s-ink" /> : null; })()}
      {d.next ? <NextBand items={d.next} /> : null}
      {d.cta ? <PageCTA title={d.cta.title} href={d.cta.href || "Contact.html"} label={d.cta.label} /> : null}
    </>);
}

window.TemplatePage = TemplatePage;
