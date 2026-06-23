/* global React, Icon, SecHead, IconCards, PartnerLogo */
/* New homepage sections built to the workbook's 10-section structure.
   Reuses the established ICT classes (sec-head, icard-grid, cta box, sintro). */

/* ---- 02 · What we do strip ------------------------------------------------ */
function HomeWhatWeDo() {
  const cards = [
    { key: "cloud", icon: "cloud", tag: "01 · Foundation", h: "Cloud & Infrastructure",
      p: "Resilient foundations across hybrid and multi-cloud, designed, migrated, and run without breaking what already works.", accent: "#8472FF" },
    { key: "cyber", icon: "shield", tag: "02 · Protection", h: "Cybersecurity",
      p: "Security and resilience engineered into every layer, identity, data, endpoints, and operations, monitored around the clock.", accent: "#B481FF" },
    { key: "data", icon: "data", tag: "03 · Intelligence", h: "Data, AI & Analytics",
      p: "From governed data foundations to production AI and automation your teams actually use, governed, secure, and accountable.", accent: "#E36CC4" },
  ];
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pin = root.querySelector(".wwd__pin");
    const order = ["cloud", "cyber", "data"];
    const els = order.map((k) => root.querySelector('.wwd__card[data-k="' + k + '"]'));
    if (els.some((e) => !e)) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 1024px)").matches;

    // ---- maths helpers --------------------------------------------------
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
    // smootherstep: zero 1st AND 2nd derivative at both ends → no snap, soft settle
    const smoother = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * t * (t * (t * 6 - 15) + 10); };
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4); // ≈ cubic-bezier(0.22,1,0.36,1)

    // ---- continuous choreography ---------------------------------------
    // A single "focus" glides 0 → 1 → 2 across scroll. Each transition is a
    // smootherstep of identical width, so card1→2 is exactly as smooth as
    // card0→1. Each card rests at front (focus == its index) for a readable
    // beat, then everything interpolates continuously — no keyframe stages.
    const ACC = [[132, 114, 255], [180, 129, 255], [227, 108, 196]]; // cloud · cyber · data
    function focusOf(p) {
      return smoother(0.14, 0.44, p) + smoother(0.56, 0.86, p);
    }
    // Pose is a pure continuous function of d = focus - cardIndex.
    //   d < 0  → card is still waiting, just below & behind
    //   d = 0  → card is at the front, full size
    //   d > 0  → card has glided up & back into the pile
    function poseOf(d) {
      const ad = Math.min(Math.abs(d), 1.6);
      const e = easeOutCubic(ad / 1.6) * 1.6;       // eased depth — gentle near front, settles far out
      const below = d <= 0;
      const y  = below ? e * 90 : -e * 112;          // rise from below / glide up on exit
      const s  = 1 - Math.min(e, 1) * 0.10 - Math.max(0, e - 1) * 0.05;
      const zt = -e * 150;                           // perspective depth
      const rx = below ? e * 2.2 : e * 6.5;          // gentle tilt waiting, more on exit
      const zi = Math.round(1000 - ad * 120);        // continuous depth order — swaps only at true crossover
      return { y, s, zt, rx, zi };
    }

    // Per-card entrance modifier (extra opacity / offset that decays in once).
    const ent = els.map(() => ({ o: reduce ? 1 : 0, dy: reduce ? 0 : 26, ds: reduce ? 1 : 0.955 }));

    function applyCard(el, P, m) {
      el.style.transform =
        "translate(-50%, -50%) translateY(" + (P.y + m.dy).toFixed(1) + "px) translateZ(" + P.zt.toFixed(1) +
        "px) rotateX(" + P.rx.toFixed(2) + "deg) scale(" + (P.s * m.ds).toFixed(4) + ")";
      el.style.zIndex = P.zi;
      el.style.opacity = m.o.toFixed(3);
    }

    let curP = 0;
    function render(p) {
      curP = p;
      const f = focusOf(p);
      els.forEach((el, i) => applyCard(el, poseOf(f - i), ent[i]));
      // ambient glow blends continuously toward whichever card is in focus
      const glow = root.querySelector(".wwd__glow");
      if (glow) {
        const lo = Math.min(Math.floor(clamp(f, 0, 1.999)), 1), fr = clamp(f - lo, 0, 1);
        const A = ACC[lo], B = ACC[lo + 1];
        const r = Math.round(A[0] + (B[0] - A[0]) * fr), g = Math.round(A[1] + (B[1] - A[1]) * fr), b = Math.round(A[2] + (B[2] - A[2]) * fr);
        glow.style.background = "radial-gradient(closest-side, rgba(" + r + "," + g + "," + b + ",0.5), transparent 72%)";
      }
      // gentle camera — the whole stack lifts & eases back a touch mid-journey, settling at the ends
      const cards = root.querySelector(".wwd__cards");
      if (cards) { const c = Math.sin(clamp(p, 0, 1) * Math.PI); cards.style.transform = "translateY(" + (-c * 12).toFixed(1) + "px) scale(" + (1 - c * 0.015).toFixed(4) + ")"; }
    }

    function showAll() {
      els.forEach((el) => { el.style.transform = ""; el.style.zIndex = ""; el.style.opacity = ""; });
      const cards = root.querySelector(".wwd__cards"); if (cards) cards.style.transform = "";
    }

    // ---- one-time entrance: cards pop in 1 → 2 → 3 on first viewport enter
    let entered = reduce;
    function runEntrance() {
      if (entered) return; entered = true;
      const start = performance.now(), dur = 820, stagger = 150;
      function tick(now) {
        let done = true;
        for (let i = 0; i < ent.length; i++) {
          const t = clamp((now - start - i * stagger) / dur, 0, 1);
          const k = easeOutQuart(t);
          ent[i].o = k; ent[i].dy = (1 - k) * 26; ent[i].ds = 0.955 + 0.045 * k;
          if (t < 1) done = false;
        }
        render(curP);
        if (!done) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // ---- mobile / reduced-motion: clean static flow + light CSS fade-up ----
    if (reduce || mobile || !window.gsap || !window.ScrollTrigger) {
      showAll();
      if (!reduce) {
        const delays = [0, 150, 300];
        els.forEach((el, i) => el.style.setProperty("--pop-delay", (delays[i] != null ? delays[i] : 300) + "ms"));
        root.classList.add("wwd--anim");
        let f2 = false;
        const io2 = new IntersectionObserver((entries) => {
          for (const e of entries) { if (e.isIntersecting && !f2) { f2 = true; root.classList.add("is-entered"); io2.disconnect(); break; } }
        }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
        io2.observe(root);
        return () => io2.disconnect();
      }
      return;
    }

    // ---- desktop / tablet: continuous scrubbed journey + JS entrance ----
    render(0); // cards start hidden (ent.o = 0) until the entrance fires
    let fired = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting && !fired) { fired = true; runEntrance(); io.disconnect(); break; } }
    }, { threshold: 0, rootMargin: "0px 0px -12% 0px" });
    io.observe(root);

    const gsap = window.gsap, ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    const st = ST.create({
      trigger: root, start: "top top", end: "+=" + Math.round(window.innerHeight * 3),
      pin: pin, scrub: 0.85, invalidateOnRefresh: true,
      onEnter: runEntrance, onEnterBack: runEntrance, // safety: never leave cards hidden
      onUpdate: (self) => render(self.progress),
    });
    const ref = () => ST.refresh();
    window.addEventListener("load", ref);
    const tid = setTimeout(ref, 400);
    return () => { clearTimeout(tid); window.removeEventListener("load", ref); io.disconnect(); st && st.kill(); };
  }, []);

  return (
    <section className="section s-paper wwd" ref={rootRef}>
      <div className="wwd__pin">
        <div className="wrap wwd__inner">
          <div className="wwd__intro reveal acc-blue">
            <div>
              <p className="kicker">What we do</p>
              <h2 className="wwd__heading">{accentTitle("We advise, build, and run.", "build")}</h2>
            </div>
            <p className="wwd__lead">Most organisations already have the tools. The hard part is making them work together, keeping them secure, and turning the data into decisions you can act on. That is the work we do.</p>
          </div>
          <div className="wwd__stage">
            <div className="wwd__glow" aria-hidden="true"></div>
            <div className="wwd__cards">
              {cards.map((c) => (
                <article className="wwd__card" data-k={c.key} key={c.key} style={{ "--accent": c.accent }}>
                  <div className="wwd__cardin">
                    <span className="wwd__card-tag">{c.tag}</span>
                    <div className="wwd__card-body">
                      <span className="wwd__card-icon"><Icon name={c.icon} size={50} /></span>
                      <h3 className="wwd__card-title">{c.h}</h3>
                      <p className="wwd__card-desc">{c.p}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ---- 02b · Eight core service pillars (staggered cards) ------------ */
function HomePillars() {
  const pillars = [
    { icon: "compass", h: "Digital Transformation Consulting", p: "Strategy, enterprise architecture, and a roadmap you can act on.", href: "Service-Consulting.html", accent: "#2BA4FF", dx: -150, dy: -110, rot: -4 },
    { icon: "cloud", h: "Cloud & Infrastructure", p: "Resilient foundations across hybrid and multi-cloud, built to scale.", href: "Service-Cloud-Infrastructure.html", accent: "#8472FF", dx: 0, dy: -140, rot: 3 },
    { icon: "shield", h: "Cybersecurity", p: "Security and resilience engineered into every layer of the estate.", href: "Service-Cybersecurity.html", accent: "#B481FF", dx: 150, dy: -110, rot: 4 },
    { icon: "data", h: "Data, AI & Analytics", p: "From governed data foundations to production AI and automation.", href: "Service-Data-AI-Analytics.html", accent: "#E36CC4", dx: -180, dy: 0, rot: -3 },
    { icon: "layers", h: "Enterprise Applications & Integration", p: "ERP, CRM, and the API-first integrations that connect them.", href: "Service-Applications.html", accent: "#FF9255", dx: 180, dy: 0, rot: 3 },
    { icon: "target", h: "Customer Experience Platforms", p: "Omnichannel engagement and commerce, one experience across every channel.", href: "Service-Customer-Experience.html", accent: "#2BD9E0", dx: -150, dy: 120, rot: -4 },
    { icon: "managed", h: "Managed & Support Services", p: "We operate, monitor, and continuously improve it, around the clock.", href: "Service-Managed-Services.html", accent: "#4ED9A4", dx: 150, dy: 120, rot: 4 },
    { icon: "network", h: "Emerging Tech", p: "IoT, blockchain, AR/VR and digital twins, tied to real operations.", href: "Emerging-Tech.html", accent: "#EAB308", dx: 0, dy: 140, rot: -3 },
  ];
  const gridRef = React.useRef(null);
  React.useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cells = Array.prototype.slice.call(grid.querySelectorAll(".pcell"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !cells.length) { cells.forEach((c) => c.style.setProperty("--asm", "1")); return; }
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let rafId = 0, running = false;
    function frame() {
      const vh = window.innerHeight || 800;
      const r = grid.getBoundingClientRect();
      const start = vh * 0.96, end = vh * 0.38;
      let prog = (start - r.top) / (start - end);
      prog = Math.max(0, Math.min(1, prog));
      for (let i = 0; i < cells.length; i++) {
        const stag = i * 0.07;          // staggered orchestration
        const span = 0.62;              // each card's own settle window (different speeds)
        let lp = (prog - stag) / span;
        lp = Math.max(0, Math.min(1, lp));
        cells[i].style.setProperty("--asm", ease(lp).toFixed(3));
      }
      // keep animating only while the section is in/near view
      if (running) rafId = requestAnimationFrame(frame);
    }
    const io = new IntersectionObserver((entries) => {
      const visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; rafId = requestAnimationFrame(frame); }
      else if (!visible && running) { running = false; cancelAnimationFrame(rafId); frame(); }
    }, { rootMargin: "200px 0px 200px 0px" });
    io.observe(grid);
    frame(); // set initial state immediately
    return () => { running = false; cancelAnimationFrame(rafId); io.disconnect(); };
  }, []);
  return (
    <section className="section s-ink-deep pillars" id="pillars">
      <div className="wrap">
        <div className="sec-head reveal acc-blue">
          <div>
            <p className="kicker">What we do</p>
            <h2 className="sec-head__title">{accentTitle("Eight pillars, one accountable partner.", "Eight pillars")}</h2>
          </div>
          <p className="sec-head__sub">Eight interconnected capabilities working as one system, advised, built, secured, and run together, not as disconnected projects.</p>
          <a className="tlink" href="Services.html" style={{ marginTop: "18px", display: "inline-flex" }}>See all services <span className="ar" aria-hidden="true">→</span></a>
        </div>
        <div className="pcards" ref={gridRef}>
          {pillars.map((p, i) => (
            <div className="pcell" key={p.h}
                 style={{ "--dx": p.dx + "px", "--dy": p.dy + "px", "--rot": p.rot + "deg", "--accent": p.accent }}>
              <a className="pcards__card" href={p.href}>
                <span className="pcards__no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="pcards__icon"><Icon name={p.icon} size={32} /></span>
                <span className="pcards__h">{p.h}</span>
                <span className="pcards__p">{p.p}</span>
                <span className="pcards__cta">Explore <span className="pcards__ar" aria-hidden="true">→</span></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>);
}

/* ---- 03 · Services overview (eight pillars, Data/AI + Security + Cloud led) */
function HomeServices() {
  const cards = [
    { icon: "data", h: "Data, AI & Analytics", p: "From raw data to decisions.", href: "Service-Data-AI-Analytics.html", cta: "Explore" },
    { icon: "shield", h: "Cybersecurity", p: "Security at every layer.", href: "Service-Cybersecurity.html", cta: "Explore" },
    { icon: "cloud", h: "Cloud & Infrastructure", p: "Built to scale, run anywhere.", href: "Service-Cloud-Infrastructure.html", cta: "Explore" },
    { icon: "compass", h: "Digital Transformation Consulting", p: "Strategy and a roadmap you can act on.", href: "Service-Consulting.html", cta: "Explore" },
    { icon: "layers", h: "Enterprise Applications & Integration", p: "Systems that talk to each other.", href: "Service-Applications.html", cta: "Explore" },
    { icon: "target", h: "Customer Experience Platforms", p: "Every channel, one experience.", href: "Service-Customer-Experience.html", cta: "Explore" },
    { icon: "managed", h: "Managed & Support Services", p: "We keep it running, around the clock.", href: "Service-Managed-Services.html", cta: "Explore" },
    { icon: "network", h: "Emerging Tech", p: "IoT, blockchain, AR and VR, and digital twins, applied to real operations.", href: "Emerging-Tech.html", cta: "Explore" },
  ];
  return (
    <section className="section s-paper" id="services">
      <div className="wrap">
        <SecHead eyebrow="Services" title="What we help with." hl="help with" hue="magenta"
          sub="Eight areas of work, one partner accountable for the outcome." />
        <IconCards cards={cards} cols={3} />
      </div>
    </section>);
}

/* ---- 04 · AI & Data spotlight --------------------------------------------- */
function HomeAISpotlight() {
  const areas = [
    { icon: "ai", h: "Enterprise AI", p: "From strategy to systems that run in production." },
    { icon: "data", h: "Data intelligence and analytics", p: "Turning raw data into decisions." },
    { icon: "operations", h: "Agentic and autonomous systems", p: "AI that plans and acts across workflows." },
    { icon: "shield", h: "Responsible and secure AI", p: "Governance and security built into every step." },
  ];
  const logos = ["Databricks", "Microsoft", "Informatica"];
  return (
    <section className="section s-paper aisec">
      <div className="wrap">
        <div className="sec-head reveal acc-magenta">
          <div>
            <p className="kicker">AI &amp; Data</p>
            <h2 className="sec-head__title">{accentTitle("AI that reaches production.", "reaches production")}</h2>
          </div>
          <p className="sec-head__sub">Plenty of AI projects stall after the pilot. We design and build AI that runs inside your business every day, governed and secure, from the data foundation up to the assistants and agents your teams actually use.</p>
          <a className="tlink" href="AI-Data.html" style={{ marginTop: "18px", display: "inline-flex" }}>See our AI and data work <span className="ar" aria-hidden="true">→</span></a>
        </div>
        <IconCards cards={areas} cols={2} />
        <div className="aisp-logos reveal d1">
          <span className="aisp-logos__label">Built with</span>
          {logos.map((n) => <span className="aisp-logos__logo" key={n}><PartnerLogo name={n} /></span>)}
        </div>
      </div>
    </section>);
}

/* ---- 05 · Industry verticals ---------------------------------------------- */
function HomeIndustries() {
  const secRef = React.useRef(null);
  const fieldRef = React.useRef(null);
  const farRef = React.useRef(null);
  const fgRef = React.useRef(null);
  const camRef = React.useRef(null);
  const lensRef = React.useRef(null);

  React.useEffect(() => {
    const sec = secRef.current;
    if (!sec || !window.ICTSquareField) return;
    const stops = [];
    // On phones / coarse-pointer devices, drop the two heavy blurred planes and
    // thin the rest so scrolling stays smooth.
    const lite = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    const k = lite ? 0.5 : 1;
    // Five gentle depth planes — subtle, premium, discovered after a few seconds.
    // 1 · Background — faint, slowest.
    if (farRef.current) {
      stops.push(window.ICTSquareField(farRef.current, { host: sec, count: Math.round(60 * k), size: [3, 7], opacity: 0.2, speed: 0.28, rotate: 0.08, nested: 0.1, lineWidth: 1 }));
    }
    // 2 · Mid — main concentration, gentle drift.
    if (fieldRef.current) {
      stops.push(window.ICTSquareField(fieldRef.current, { host: sec, count: Math.round(70 * k), size: [5, 13], opacity: 0.4, speed: 0.5, rotate: 0.14, nested: 0.28, lineWidth: 1.05 }));
    }
    // 3 · Foreground — larger, slightly faster, soft glow.
    if (fgRef.current) {
      stops.push(window.ICTSquareField(fgRef.current, { host: sec, count: Math.round(18 * k), size: [20, 48], opacity: 0.22, speed: 0.7, rotate: 0.2, nested: 0.4, bokeh: 0.2, bloom: 0.4, additive: true, lineWidth: 1.3 }));
    }
    // 4 · Camera — a few large softly-blurred squares, slow. Desktop only.
    if (!lite && camRef.current) {
      stops.push(window.ICTSquareField(camRef.current, { host: sec, count: 8, size: [52, 110], opacity: 0.1, speed: 0.55, rotate: 0.28, nested: 0.5, bloom: 0.3, additive: true, lineWidth: 1.7 }));
    }
    // 5 · Lens — a couple of huge, very faint abstract bokeh, slow. Desktop only.
    if (!lite && lensRef.current) {
      stops.push(window.ICTSquareField(lensRef.current, { host: sec, count: 4, size: [120, 260], opacity: 0.06, speed: 0.6, rotate: 0.32, nested: 0.4, bloom: 0.3, additive: true, lineWidth: 2.2 }));
    }
    return () => stops.forEach((s) => s && s());
  }, []);

  const cards = [
    { icon: "bank", h: "Finance", p: "Digital banking, compliance, and fraud detection.", href: "Industry-Finance.html", cta: "Explore" },
    { icon: "building", h: "Government", p: "Smart cities, eGovernment platforms, and citizen services.", href: "Industry-Government.html", cta: "Explore" },
    { icon: "health", h: "Healthcare", p: "Electronic health records, telemedicine, and clinical analytics.", href: "Industry-Healthcare.html", cta: "Explore" },
    { icon: "target", h: "Retail", p: "Omnichannel commerce and personalisation.", href: "Industry-Retail.html", cta: "Explore" },
    { icon: "signal", h: "Telecom", p: "Network optimisation and digital service delivery.", href: "Industry-Telecom.html", cta: "Explore" },
    { icon: "operations", h: "Manufacturing", p: "Industry 4.0, IoT, and predictive maintenance.", href: "Industry-Manufacturing.html", cta: "Explore" },
  ];
  return (
    <section className="section s-ink ind" ref={secRef}>
      <div className="ind__bg" aria-hidden="true">
        <img className="ind__bgimg" src="assets/industries-bg.png" alt="" loading="lazy" decoding="async" />
        <div className="ind__scrim"></div>
        <canvas className="ind__field ind__field--far" ref={farRef}></canvas>
        <canvas className="ind__field" ref={fieldRef}></canvas>
        <canvas className="ind__field ind__field--fg" ref={fgRef}></canvas>
        <canvas className="ind__field ind__field--cam" ref={camRef}></canvas>
        <canvas className="ind__field ind__field--lens" ref={lensRef}></canvas>
        <div className="ind__clouds"></div>
      </div>
      <div className="wrap">
        <SecHead eyebrow="Industries" title="Where we work." hl="work" hue="blue"
          sub="Every sector has its own pressures, rules, and language. We work across six, with solutions shaped for each one." />
        <IconCards cards={cards} cols={3} />
      </div>
    </section>);
}

/* ---- 08 · Insights & thought leadership (placeholder until commissioned) -- */
function HomeInsights() {
  /* TODO[ACTION]: replace with real articles. Each needs a named author, title,
     photo, date, category, image, and read time before publish. */
  const cards = [
    { cat: "AI in the enterprise", k: "Insight" },
    { cat: "Cloud", k: "Insight" },
    { cat: "Cybersecurity", k: "Insight" },
  ];
  return (
    <section className="section s-ink">
      <div className="wrap">
        <SecHead eyebrow="Insights" title="From the people who do the work." hl="do the work" hue="violet"
          sub="Practical thinking on AI in production, cloud, cybersecurity, and digital transformation."
          action={<a className="tlink head-link" href="Insights.html">Read all insights <span className="ar" aria-hidden="true">→</span></a>} />
        <div className="ins-grid reveal d1">
          {cards.map((c, i) => (
            <a className="ins-card" href="Insights.html" key={i}>
              <div className="ins-card__media" aria-hidden="true"><span className="ins-card__cat">{c.cat}</span></div>
              <div className="ins-card__body">
                <span className="ins-card__soon">Article coming soon</span>
                <p className="ins-card__meta">By a named ICT author · pending</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>);
}

/* ---- 09 · Contact strip ---------------------------------------------------- */
function HomeContact() {
  return (
    <section className="section s-ink-deep cta" id="contact">
      <div className="wrap">
        <div className="cta__box reveal">
          <i className="cta__aurora" aria-hidden="true"></i>
          <div className="cta__inner">
            <p className="kicker cta__kicker" style={{ color: "#fff" }}>Start here</p>
            <h2 className="cta__title">Tell us what you are trying to build.</h2>
            <p className="cta__sub">
              Talk to our team about your project. We will tell you honestly whether and
              how we can help.
            </p>
            <div className="cta__actions">
              <a className="btn btn--primary" href="Contact.html">
                Start a conversation <span className="ar" aria-hidden="true">→</span>
              </a>
              {/* TODO[ACTION]: link a real capability statement PDF */}
              <a className="btn btn--line" href="#" aria-disabled="true">
                Download capability statement <span className="ar" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

Object.assign(window, { HomeWhatWeDo, HomePillars, HomeServices, HomeAISpotlight, HomeIndustries, HomeInsights, HomeContact });
