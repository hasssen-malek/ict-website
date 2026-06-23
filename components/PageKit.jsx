/* global React */
/* Shared kit for the company pages: outline icon library, section header,
   Information-Required placeholder, icon cards, and a "where next" band. */

function Icon({ name, size = 28 }) {
  const c = { width: size, height: size, viewBox: "0 0 28 28", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  switch (name) {
    case "cloud": return (<svg {...c}><path d="M8 20h11a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 7.7 11 4.5 4.5 0 0 0 8 20Z" /></svg>);
    case "shield": return (<svg {...c}><path d="M14 3l8 3v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" /><path d="M10.5 13.5l2.3 2.3 4.2-4.6" /></svg>);
    case "ai": return (<svg {...c}><rect x="8" y="8" width="12" height="12" rx="1.5" /><path d="M11 5v3M17 5v3M11 20v3M17 20v3M5 11h3M5 17h3M20 11h3M20 17h3" /><circle cx="14" cy="14" r="2.4" /></svg>);
    case "managed": return (<svg {...c}><rect x="4" y="6" width="20" height="13" rx="1.5" /><path d="M10 23h8M14 19v4" /><path d="M8 12.5l2.5 2.5L8 17.5M13 16h4" /></svg>);
    case "network": return (<svg {...c}><circle cx="14" cy="6" r="2.6" /><circle cx="6" cy="21" r="2.6" /><circle cx="22" cy="21" r="2.6" /><path d="M14 8.6v4M12 14l-4 4.6M16 14l4 4.6" /></svg>);
    case "data": return (<svg {...c}><ellipse cx="14" cy="7" rx="8" ry="3" /><path d="M6 7v7c0 1.7 3.6 3 8 3s8-1.3 8-3V7M6 14v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></svg>);
    case "lock": return (<svg {...c}><rect x="6" y="12" width="16" height="11" rx="2" /><path d="M9.5 12V9a4.5 4.5 0 0 1 9 0v3" /><circle cx="14" cy="17.5" r="1.4" /></svg>);
    case "identity": return (<svg {...c}><circle cx="11" cy="10" r="4" /><path d="M4 22a7 7 0 0 1 14 0" /><path d="M19 12l4 0M21 10v4" /></svg>);
    case "radar": return (<svg {...c}><circle cx="14" cy="14" r="9" /><circle cx="14" cy="14" r="4.5" /><path d="M14 14l6-4" /><circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none" /></svg>);
    case "layers": return (<svg {...c}><path d="M14 4l9 5-9 5-9-5 9-5Z" /><path d="M5 14l9 5 9-5M5 18.5l9 5 9-5" /></svg>);
    case "operations": return (<svg {...c}><circle cx="14" cy="14" r="3.2" /><path d="M14 4v3M14 21v3M4 14h3M21 14h3M7 7l2 2M19 19l2 2M7 21l2-2M19 9l2-2" /></svg>);
    case "globe": return (<svg {...c}><circle cx="14" cy="14" r="10" /><ellipse cx="14" cy="14" rx="4.2" ry="10" /><path d="M4 14h20" /></svg>);
    case "building": return (<svg {...c}><rect x="6" y="4" width="16" height="20" rx="1" /><path d="M10 9h2M16 9h2M10 13h2M16 13h2M10 17h2M16 17h2M12 24v-3h4v3" /></svg>);
    case "bank": return (<svg {...c}><path d="M14 4l9 5H5l9-5Z" /><path d="M7 11v8M12 11v8M16 11v8M21 11v8M5 22h18" /></svg>);
    case "health": return (<svg {...c}><rect x="5" y="5" width="18" height="18" rx="3" /><path d="M14 9v10M9 14h10" /></svg>);
    case "cap": return (<svg {...c}><path d="M14 5l10 4-10 4L4 9l10-4Z" /><path d="M8 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9.5v5" /></svg>);
    case "signal": return (<svg {...c}><path d="M6 21V11M11 21V7M16 21v-8M21 21V4" /></svg>);
    case "listen": return (<svg {...c}><path d="M5 14a6 6 0 0 1 12 0c0 2 1 2 1 4a3 3 0 0 1-3 3" /><path d="M9 14a3 3 0 0 1 6 0" /><circle cx="20" cy="9" r="1.2" fill="currentColor" stroke="none" /></svg>);
    case "design": return (<svg {...c}><path d="M5 19l3-1 11-11-2-2L6 16l-1 3Z" /><path d="M16 6l2 2" /></svg>);
    case "deliver": return (<svg {...c}><path d="M14 4c4 2 6 6 6 11l-3 3h-6l-3-3c0-5 2-9 6-11Z" /><circle cx="14" cy="12" r="2" /><path d="M9 21l-2 3M19 21l2 3" /></svg>);
    case "improve": return (<svg {...c}><path d="M6 14a8 8 0 0 1 13.5-5.8L22 10" /><path d="M22 5v5h-5" /><path d="M22 14a8 8 0 0 1-13.5 5.8L6 18" /><path d="M6 23v-5h5" /></svg>);
    case "partner": return (<svg {...c}><circle cx="10" cy="14" r="6" /><circle cx="18" cy="14" r="6" /></svg>);
    case "target": return (<svg {...c}><circle cx="14" cy="14" r="9" /><circle cx="14" cy="14" r="5" /><circle cx="14" cy="14" r="1.3" fill="currentColor" stroke="none" /></svg>);
    case "bolt": return (<svg {...c}><path d="M15 3L6 16h6l-1 9 9-13h-6l1-9Z" /></svg>);
    case "compass": return (<svg {...c}><circle cx="14" cy="14" r="10" /><path d="M18 10l-2.4 5.6L10 18l2.4-5.6L18 10Z" /></svg>);
    case "workplace": return (<svg {...c}><rect x="4" y="6" width="20" height="13" rx="1.5" /><path d="M9 23h10M14 19v4M4 15h20" /></svg>);
    case "azure": return (<svg {...c}><path d="M13 4l-7.5 14.5L4 21h7.5l1.2-2.4-3.8-.2L13 9.2 16.5 19l-2.8 0L13 21h9l-1.3-2.6L13 4Z" /></svg>);
    case "copilot": return (<svg {...c}><path d="M13.5 4c.7 4.4 2 5.7 6.4 6.4-4.4.7-5.7 2-6.4 6.4-.7-4.4-2-5.7-6.4-6.4 4.4-.7 5.7-2 6.4-6.4Z" /><path d="M20.5 16.5c.3 2 .9 2.6 2.9 2.9-2 .3-2.6.9-2.9 2.9-.3-2-.9-2.6-2.9-2.9 2-.3 2.6-.9 2.9-2.9Z" /></svg>);
    case "check": return (<svg {...c}><circle cx="14" cy="14" r="10" /><path d="M9.5 14l3 3 6-6.5" /></svg>);
    default: return (<svg {...c}><circle cx="14" cy="14" r="9" /></svg>);
  }
}

/* wrap the first occurrence of `hl` inside a string title with the accent keyword span */
function accentTitle(title, hl) {
  if (!hl || typeof title !== "string") return title;
  const i = title.indexOf(hl);
  if (i < 0) return title;
  return [title.slice(0, i), <span className="tword" key="hl">{hl}</span>, title.slice(i + hl.length)];
}

function SecHead({ eyebrow, title, sub, split, action, hl, hue }) {
  return (
    <div className={"sec-head reveal" + (split ? " sec-head--split" : "") + (hue ? " acc-" + hue : "")}>
      <div style={split ? { maxWidth: "30ch" } : undefined}>
        <p className="kicker">{eyebrow}</p>
        <h2 className="sec-head__title">{accentTitle(title, hl)}</h2>
      </div>
      {sub ? <p className="sec-head__sub">{sub}</p> : null}
      {action ? action : null}
    </div>);
}

function PHero({ eyebrow, title, sub, crumb, tone, hl, hue }) {
  return (
    <section className={"phero s-ink-deep" + (tone ? " phero--" + tone : "") + (hue ? " acc-" + hue : "")}>
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="Homepage.html">Home</a><span aria-hidden="true">/</span>
          <span aria-current="page" style={{ color: "var(--on-dark-soft)" }}>{crumb}</span>
        </nav>
        <p className="kicker">{eyebrow}</p>
        <h1 className="phero__title">{accentTitle(title, hl)}</h1>
        <p className="phero__sub lead">{sub}</p>
      </div>
    </section>);
}

function InfoIcon() {
  return (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" /></svg>);
}

/* required: array of strings; examples: array of strings; why: optional string */
function InfoRequired({ required, examples, why }) {
  return (
    <div className="inforeq reveal" role="note">
      <div className="inforeq__head">
        <span className="inforeq__icon"><InfoIcon /></span>
        <span className="inforeq__title">Information Required From ICT</span>
      </div>
      <div className="inforeq__why">
        <span className="inforeq__k">Why we need this</span>
        <p className="inforeq__whytext">{why || "This information demonstrates ICT's expertise and gives prospective clients credible, verifiable proof points."}</p>
      </div>
      <div className="inforeq__grid">
        <div>
          <div className="inforeq__k">Required</div>
          <ul className="inforeq__list">{required.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <div>
          <div className="inforeq__k">Example content</div>
          {examples.map((e, i) => <p className="inforeq__eg" key={i}>“{e}”</p>)}
        </div>
      </div>
      <div className="inforeq__status"><span className="inforeq__dot" aria-hidden="true"></span>Status: awaiting ICT confirmation. Replace with ICT-approved content before launch.</div>
    </div>);
}

/* cards: [{icon, h, p, href?}] */
function IconCards({ cards, cols }) {
  const ncol = cols === 2 ? 2 : 3;
  const rem = cards.length % ncol;
  const fill = rem === 0 ? 0 : ncol - rem; /* empty trailing cells to keep the grid rectangular */
  return (
    <div className={"icard-grid reveal" + (cols === 2 ? " icard-grid--2" : "")}>
      {cards.map((card) => {
        const inner = (
          <>
            <span className="icard__ic"><Icon name={card.icon} /></span>
            <h3 className="icard__h">{card.h}</h3>
            <p className="icard__p">{card.p}</p>
            {card.href ? <span className="tlink icard__link">{card.cta || "Learn more"} <span className="ar" aria-hidden="true">→</span></span> : null}
          </>);
        return card.href
          ? <a className="icard" href={card.href} key={card.h}>{inner}</a>
          : <div className="icard" key={card.h}>{inner}</div>;
      })}
      {Array.from({ length: fill }).map((_, i) => (
        <div className="icard icard--empty" aria-hidden="true" key={"fill" + i}></div>
      ))}
    </div>);
}

/* "where next" band - keeps every page from dead-ending */
function NextBand({ items }) {
  return (
    <section className="section s-ink-deep" style={{ paddingBlock: "clamp(56px,7vw,96px)" }}>
      <div className="wrap">
        <div className="sec-head reveal"><p className="kicker">Keep exploring</p><h2 className="sec-head__title">Where to next.</h2></div>
        <div className="nextgrid reveal">
          {items.map((it) => (
            <a className="nextcard" href={it.href} key={it.h}>
              <span className="nextcard__k">{it.k}</span>
              <span className="nextcard__h">{it.h}</span>
              <span className="nextcard__p">{it.p}</span>
              <span className="tlink" style={{ marginTop: "6px" }}>{it.cta} <span className="ar" aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>);
}

Object.assign(window, { Icon, SecHead, PHero, InfoRequired, IconCards, NextBand, PageCTA, FaqBlock });

/* FAQ accordion (native details/summary — keyboard + screen-reader friendly).
   items: [{q, a}]. Renders matching FAQPage JSON-LD into the document head. */
function FaqBlock({ eyebrow, title, hl, hue, items, bg }) {
  React.useEffect(() => {
    const data = {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: items.map((it) => ({ "@type": "Question", name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a } })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-faq", "1");
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, [items]);
  return (
    <section className={"section " + (bg || "s-paper")}>
      <div className="wrap">
        <SecHead eyebrow={eyebrow || "FAQ"} title={title || "Questions, answered."} hl={hl} hue={hue || "violet"} />
        <div className="faq reveal">
          {items.map((it, i) => (
            <details className="faq__item" key={i}>
              <summary className="faq__q">
                <span>{it.q}</span>
                <svg className="faq__chev" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
              </summary>
              <div className="faq__a"><p>{it.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>);
}

function PageCTA({ title, href, label }) {
  return (
    <section className="section s-ink-deep cta" id="contact">
      <div className="wrap">
        <div className="cta__box reveal">
          <i className="cta__aurora" aria-hidden="true"></i>
          <div className="cta__inner">
            <p className="kicker cta__kicker" style={{ color: "#fff" }}>Let's build what's next</p>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__sub">Talk to ICT about your priorities, and how we advise, build, secure, and operate the technology behind them, here in Qatar.</p>
            <div className="cta__actions">
              <a className="btn btn--primary" href={href || "Contact.html"}>{label || "Start a conversation"} <span className="ar" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
