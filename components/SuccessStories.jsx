/* global React */

/* Success Stories - curated portfolio: a section intro (headline + lead),
   one full-width featured story, then two secondary story cards side-by-side.
   Homepage thumbnails are clean framed images (the fade-to-dark treatment is
   reserved for the case-study hero pages). Each story carries a brand accent. */

const STORIES = [
  {
    sector: "Finance", corner: "CASE / 01", href: "Case-Investment-Research.html",
    img: "assets/stories/financial.jpg", accent: "blue", pos: "50% 38%",
    title: "An AI research assistant for a financial institution",
    tags: ["Finance", "Governed data platform", "NLP", "Generative AI"],
    desc: "Research data was fragmented across internal research, external feeds, and financial statements. ICT brought it into one governed platform, then added an AI assistant analysts can query in plain language."
  },
  {
    sector: "Education", corner: "CASE / 02", href: "Case-Enterprise-Search.html",
    img: "assets/stories/research.jpg", accent: "magenta", pos: "50% 42%",
    title: "AI-powered enterprise search for an institution",
    tags: ["Education", "Cognitive search", "Semantic & vector", "Multilingual"],
    desc: "Knowledge was scattered across structured and unstructured sources. ICT built a unified, AI-powered search platform with semantic, context-aware, multilingual results and secure access controls."
  },
  {
    sector: "Government", corner: "CASE / 03", href: "Case-Hybrid-Cloud.html",
    img: "assets/stories/public.jpg", accent: "orange", pos: "50% 26%",
    title: "Extending a government data centre into the cloud",
    tags: ["Government", "Azure VMware Solution", "Hybrid cloud", "Data sovereignty"],
    desc: "A complex on-premises VMware estate needed a path to the cloud without re-architecting. ICT designed a hybrid cloud on Azure VMware Solution that kept control, continuity, and compliance intact."
  }
];

function StoryTags({ tags }) {
  return (
    <ul className="story__tags">
      {tags.map((t) => <li className="story__tag" key={t}>{t}</li>)}
    </ul>);
}

function SuccessStories() {
  const featured = STORIES[0];
  const secondary = STORIES.slice(1);

  return (
    <section className="section s-paper" id="stories">
      <div className="story__glow" aria-hidden="true"></div>
      <div className="wrap">
        <div className="story__intro reveal acc-blue">
          <div>
            <p className="kicker">Success stories</p>
            <h2 className="shead__title" style={{ marginTop: "22px", maxWidth: "13ch" }}>
              Real projects, real <span className="tword">outcomes</span>.
            </h2>
          </div>
          <p className="story__lead">A few examples of work we have delivered for clients in finance, education, and government. Each one started with a real problem and ended with something that runs.</p>
        </div>

        <div className="story__system">
        {/* Featured story */}
        <article className={"story story--featured story--link reveal acc-" + featured.accent} key={featured.corner}>
          <div className="story__media">
            <img src={featured.img} alt="" loading="lazy" style={{ objectPosition: featured.pos }} />
          </div>
          <div className="story__text">
            <div className="story__meta">
              <span className="story__mk" aria-hidden="true"></span>
              <span className="story__case">{featured.corner}</span>
              <span className="story__sector">{featured.sector}</span>
            </div>
            <h3 className="story__title">{featured.title}</h3>
            <StoryTags tags={featured.tags} />
            <p className="story__desc">{featured.desc}</p>
            <a className="tlink story__stretch" href={featured.href}>Read case study <span className="ar" aria-hidden="true">→</span></a>
          </div>
        </article>

        {/* Secondary stories */}
        <div className="story__grid">
          {secondary.map((s) =>
          <article className={"story-card story--link reveal acc-" + s.accent} key={s.corner}>
              <div className="story-card__media">
                <img src={s.img} alt="" loading="lazy" style={{ objectPosition: s.pos }} />
              </div>
              <div className="story-card__body">
                <div className="story__meta">
                  <span className="story__mk" aria-hidden="true"></span>
                  <span className="story__case">{s.corner}</span>
                  <span className="story__sector">{s.sector}</span>
                </div>
                <h3 className="story-card__title">{s.title}</h3>
                <StoryTags tags={s.tags} />
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

window.SuccessStories = SuccessStories;
