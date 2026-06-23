/* global React, Icon, SecHead, IconCards, InfoRequired, PageCTA, NextBand */
const { useEffect: useEffectSP } = React;

function Ar() {return <span className="ar" aria-hidden="true">→</span>;}

const TINTMK = { blue: "var(--tick-1)", violet: "var(--tick-3)", magenta: "var(--tick-4)", orange: "var(--tick-5)" };
function HeroIllo({ slug, tint }) {
  const mk = TINTMK[tint] || "var(--tick-1)";
  let g;
  if (slug === "cloud") g =
  <svg viewBox="0 0 320 300" aria-hidden="true">
      {[40, 110, 180].map((y, r) => <rect key={y} x="20" y={y} width="280" height="48" className="il-line" fill="none" strokeWidth="1" />)}
      {[80, 160, 240].map((x) => <line key={x} x1={x} y1="88" x2={x} y2="180" className="il-line" strokeWidth="1" />)}
      {[80, 160, 240].map((x, i) => [64, 134, 204].map((y) => i === 1 && y === 134 ?
    <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" className="il-mk" style={{ "--il-mk": mk }} /> :
    <rect key={`${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" className="il-node" strokeWidth="1" />))}
    </svg>;else
  if (slug === "cybersecurity") g =
  <svg viewBox="0 0 320 300" aria-hidden="true">
      {[[40, 30, 240, 230], [80, 70, 160, 150], [120, 110, 80, 70]].map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} className="il-line" fill="none" strokeWidth="1" />)}
      <rect x="146" y="132" width="28" height="28" className="il-mk" style={{ "--il-mk": mk }} />
      {[[40, 30], [280, 30], [40, 260], [280, 260]].map(([x, y], i) => <line key={i} x1={x} y1={y} x2={x < 160 ? x + 16 : x - 16} y2={y} className="il-lit" strokeWidth="1.4" />)}
    </svg>;else
  if (slug === "ai") g =
  <svg viewBox="0 0 320 300" aria-hidden="true">
      {[80, 140, 200].map((y) => <g key={y}><rect x="26" y={y - 13} width="44" height="26" className="il-node" strokeWidth="1" /><line x1="70" y1={y} x2="150" y2="150" className="il-line" strokeWidth="1" /></g>)}
      <rect x="150" y="120" width="60" height="60" className="il-mk" style={{ "--il-mk": mk }} />
      <line x1="210" y1="150" x2="290" y2="150" className="il-lit" strokeWidth="1.4" />
      <rect x="290" y="132" width="6" height="36" className="il-node" strokeWidth="1" />
    </svg>;else
  g =
  <svg viewBox="0 0 320 300" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => {const c = i % 6,r = Math.floor(i / 6);const x = 24 + c * 50,y = 40 + r * 52;
      return i === 8 ? <rect key={i} x={x} y={y} width="40" height="30" className="il-mk" style={{ "--il-mk": mk }} /> : <rect key={i} x={x} y={y} width="40" height="30" className="il-line" fill="none" strokeWidth="1" />;})}
      <polyline points="24,250 74,232 124,256 174,224 224,244 274,216 300,236" className="il-lit" fill="none" strokeWidth="1.4" />
    </svg>;
  return <div className="phero__ill" aria-hidden="true">{g}</div>;
}

function ServiceHero({ data }) {
  return (
    <section className={"phero s-ink-deep acc-" + (data.tint || "violet") + " phero--" + ({ blue: "blue", violet: "violet", magenta: "magenta", orange: "orange" }[data.tint] || "violet")}>
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="Homepage.html">Home</a><span aria-hidden="true">/</span>
          <a href="Company-Overview.html">Services</a><span aria-hidden="true">/</span>
          <span aria-current="page">{data.title}</span>
        </nav>
        <p className="kicker">Services</p>
        <h1 className="phero__title" style={{ maxWidth: "20ch" }}>{accentTitle(data.headline, data.hl)}</h1>
        <p className="phero__sub lead" style={{ maxWidth: "700px" }}>{data.sub}</p>
      </div>
      <HeroIllo slug={data.slug} tint={data.tint} />
    </section>);
}

function Challenges({ data }) {
  return (
    <section className="section s-paper">
      <div className="wrap">
        <div className="sintro__grid">
          <div className="reveal acc-purple">
            <p className="kicker">Industry challenges</p>
            <h2 className="sintro__stmt">{data.challengeLead}</h2>
          </div>
          <div className="sintro__body reveal d1">
            <p>{data.challengeSub}</p>
            <ul className="chal-list">
              {data.challenges.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>);
}

function Deliver({ data }) {
  return (
    <section className="section s-ink">
      <div className="wrap">
        <SecHead eyebrow="What we deliver" title="Capabilities, engineered for scale." hl="engineered" hue="magenta" sub="Core capability areas that combine into the right approach for your environment and stage." />
        <IconCards cards={data.deliver} cols={2} />
      </div>
    </section>);
}

function Ecosystem({ data }) {
  return (
    <section className="section s-paper">
      <div className="wrap">
        <SecHead eyebrow="Technology ecosystem" title="Built on platforms you trust." hl="trust" hue="blue" sub="We bring the right technology ecosystem to each engagement, engineered and operated for mission-critical environments." />
        <div className="ecogrid ecogrid--head reveal">
          {data.ecosystem.map((e) => <span className="eco-chip" key={e}>{e}</span>)}
        </div>
      </div>
    </section>);
}

function Outcomes({ data }) {
  return (
    <section className="section s-ink">
      <div className="wrap">
        <SecHead eyebrow="Outcomes we deliver" title="What good looks like." hl="good" hue="violet" sub="The operational outcomes organisations gain, measured against your KPIs." />
        <IconCards cards={data.outcomes} />
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          <InfoRequired required={data.metrics.required} examples={data.metrics.examples} />
        </div>
      </div>
    </section>);
}

function ServicePage({ data }) {
  useEffectSP(() => {
    const old = document.title;
    document.title = data.title + " | ICT";
    return () => {document.title = old;};
  }, [data]);
  return (
    <>
      <ServiceHero data={data} />
      <Challenges data={data} />
      <Deliver data={data} />
      <Ecosystem data={data} />
      <Outcomes data={data} />
      <NextBand items={[
      { k: "Next service", h: data.next.h, p: data.next.p, href: data.next.href, cta: "Explore service" },
      { k: "Success story", h: data.story.h, p: data.story.sector + ", proven in production.", href: data.story.href, cta: "View story" },
      { k: "Get in touch", h: "Talk to ICT", p: "Tell us about your environment and objectives, and we'll scope the right engagement.", href: "Contact-Us.html", cta: "Contact us" }]
      } />
      <PageCTA title={data.cta} />
    </>);
}

window.ServicePage = ServicePage;