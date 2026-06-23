/* global React */

/* Shared legal-page layout: header + sticky table of contents + sections.
   Each HTML page provides window.LEGAL_DATA = { title, updated, intro, sections:[{h, body:[...]}] }
   body entries: a string (paragraph) or { ul: [...] } for a bullet list. */
function LegalPage({ data }) {
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <>
      <section className="lhero s-ink-deep">
        <div className="wrap hero-load">
          <nav className="lhero__crumbs" aria-label="Breadcrumb">
            <a href="Homepage.html">Home</a><span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "var(--on-dark-soft)" }}>{data.title}</span>
          </nav>
          <p className="kicker">Legal</p>
          <h1 className="lhero__title" style={{ marginTop: "22px" }}>{data.title}</h1>
          <p className="lhero__meta">Last updated · {data.updated}</p>
        </div>
      </section>

      <section className="section s-paper" style={{ paddingTop: "clamp(48px, 6vw, 88px)" }}>
        <div className="wrap legal__grid">
          <aside className="legal__toc reveal" aria-label="On this page">
            <span className="legal__toc-h">On this page</span>
            {data.sections.map((s) => (
              <a key={s.h} href={"#" + slug(s.h)}>{s.h}</a>
            ))}
          </aside>

          <div className="legal__body reveal d1">
            {data.intro ? (
              <div className="legal__sec" id="introduction">
                <h2><span className="legal__no">00</span>Introduction</h2>
                {data.intro.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
            ) : null}
            {data.sections.map((s, si) => (
              <div className="legal__sec" id={slug(s.h)} key={s.h}>
                <h2><span className="legal__no">{String(si + 1).padStart(2, "0")}</span>{s.h}</h2>
                {s.body.map((b, i) =>
                  typeof b === "string"
                    ? <p key={i} dangerouslySetInnerHTML={{ __html: b }} />
                    : <ul key={i}>{b.ul.map((li, j) => <li key={j} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>);

}

window.LegalPage = LegalPage;
