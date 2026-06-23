/* global React */

/* Minimal outline icons - thin geometric linework matching ICT's schematic
   system. Stroke-only, monochrome (inherits the ink colour). */
function WhyIcon({ kind }) {
  const common = { width: 30, height: 30, viewBox: "0 0 30 30", fill: "none",
    stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": true };
  switch (kind) {
    case "delivery": // end-to-end flow: connected nodes, start → end
      return (
        <svg {...common}>
          <line x1="6" y1="15" x2="24" y2="15" />
          <circle cx="6" cy="15" r="2.4" />
          <circle cx="15" cy="15" r="2.4" />
          <circle cx="24" cy="15" r="2.4" />
        </svg>);

    case "global": // globe: meridian + equator
      return (
        <svg {...common}>
          <circle cx="15" cy="15" r="10.5" />
          <ellipse cx="15" cy="15" rx="4.4" ry="10.5" />
          <line x1="4.5" y1="15" x2="25.5" y2="15" />
        </svg>);

    case "resilient": // layered architecture / foundations
      return (
        <svg {...common}>
          <rect x="4.5" y="5.5" width="21" height="5" rx="1" />
          <rect x="4.5" y="12.5" width="21" height="5" rx="1" />
          <rect x="4.5" y="19.5" width="21" height="5" rx="1" />
        </svg>);

    case "managed": // monitoring: screen + uptime pulse
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="23" height="14" rx="1.5" />
          <line x1="11" y1="25" x2="19" y2="25" />
          <line x1="15" y1="20" x2="15" y2="25" />
          <polyline points="7,14 10.5,14 12.5,10.5 15.5,17 17.5,13 19.5,14 23,14" />
        </svg>);

    case "partnership": // two linked rings - continuity & partnership
    default:
      return (
        <svg {...common}>
          <circle cx="11.5" cy="15" r="6.5" />
          <circle cx="18.5" cy="15" r="6.5" />
        </svg>);

  }
}

function WhyICT() {
  const steps = [
    { icon: "global", h: "In Qatar since 2005", short: "Local presence",
      p: "We know the market, the regulators, and the sectors we serve, with continuity and local knowledge built over nearly two decades.", accent: "var(--tick-1)" },
    { icon: "delivery", h: "One partner across the lifecycle", short: "Lifecycle accountability",
      p: "We advise, build, and run, and we stay accountable for the result, not just the install.", accent: "var(--tick-3)" },
    { icon: "partnership", h: "The platforms you already use", short: "Trusted platforms",
      p: "We work with Microsoft, Databricks, Informatica, and more, so what we build rests on technology you already trust.", accent: "var(--tick-4)" },
    { icon: "managed", h: "AI that reaches production", short: "Production-ready AI",
      p: "Governed and secure, and built to run inside your business every day, not stuck in a pilot.", accent: "var(--tick-5)" },
  ];
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pin = root.querySelector(".why__pin");
    const fill = root.querySelector(".why__line-fill");
    const stepEls = Array.prototype.slice.call(root.querySelectorAll(".why__step"));
    const n = stepEls.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 1024px)").matches;
    const clamp = (v) => Math.max(0, Math.min(1, v));

    function render(p) {
      p = clamp(p);
      if (fill) fill.style.width = (p * 100) + "%"; // line spans 01→04 only
      stepEls.forEach((el, i) => {
        const point = i / (n - 1);
        const reveal = clamp((p - (point - 0.26)) / 0.26);
        const emph = Math.max(0, 1 - Math.abs(p - point) / 0.16);
        // never dim: opacity rises to 1 as a reason appears, then stays at 1.
        // active emphasis is scale + glow only.
        el.style.opacity = reveal.toFixed(3);
        el.style.transform = "translateY(" + ((1 - reveal) * 16).toFixed(1) + "px) scale(" + (1 + emph * 0.03).toFixed(3) + ")";
        el.classList.toggle("is-active", emph > 0.45);
        // dot is born from the line: grows scale(0→1) as the fill reaches it
        const dotK = clamp((p - (point - 0.055)) / 0.06);
        const dot = el.querySelector(".why__dot");
        if (dot) dot.style.transform = "translate(-50%, -50%) scale(" + dotK.toFixed(3) + ")";
        const num = el.querySelector(".why__num");
        if (num) num.style.transform = "scale(" + (1 + emph * 0.06).toFixed(3) + ")";
        el.classList.toggle("is-on", p >= point - 0.01);
        if (i === n - 1) el.classList.toggle("is-final", p > point - 0.02);
      });
    }

    // static, readable fallback (reduced motion, mobile, or no GSAP): show everything
    function showAll() {
      stepEls.forEach((el, i) => {
        el.style.opacity = ""; el.style.transform = "";
        el.classList.add("is-on");
        const dot = el.querySelector(".why__dot"); if (dot) dot.style.transform = "";
        if (i === n - 1) el.classList.add("is-final");
      });
      if (fill) fill.style.width = "";
    }

    if (reduce || mobile || !window.gsap || !window.ScrollTrigger) {
      showAll();
      if (!reduce) {
        // consistent staggered scroll-reveal (same logic as What-we-do on mobile)
        stepEls.forEach((el, i) => el.style.setProperty("--why-delay", (i * 120) + "ms"));
        root.classList.add("why--anim");
        let fired = false;
        const io = new IntersectionObserver((entries) => {
          for (const e of entries) { if (e.isIntersecting && !fired) { fired = true; root.classList.add("is-entered"); io.disconnect(); break; } }
        }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
        io.observe(root);
        return () => io.disconnect();
      }
      return;
    }
    const gsap = window.gsap, ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);
    render(0);
    const st = ST.create({
      trigger: root, start: "top top", end: "+=" + Math.round(window.innerHeight * 3),
      pin: pin, scrub: 0.6, invalidateOnRefresh: true,
      onUpdate: (self) => render(self.progress),
    });
    const ref = () => ST.refresh();
    window.addEventListener("load", ref);
    const tid = setTimeout(ref, 400);
    return () => { clearTimeout(tid); window.removeEventListener("load", ref); st && st.kill(); };
  }, []);

  return (
    <section className="section s-paper why" id="why" ref={rootRef}>
      <div className="why__pin">
        <div className="wrap">
          <div className="why__head">
            <div className="shead reveal acc-orange">
              <p className="kicker">Why ICT</p>
              <h2 className="shead__title" style={{ maxWidth: "420px", width: "380px" }}>
                Why work with <span className="tword">ICT</span>.
              </h2>
            </div>
            <div className="why__headcol reveal d1">
              <p className="lead" style={{ maxWidth: "40ch" }}>
                Four practical reasons organisations across Qatar choose ICT to design,
                build, secure, and operate the technology they depend on.
              </p>
              <a className="tlink head-link" href="Company.html">
                About ICT <span className="ar" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="why__timeline reveal d1">
            <div className="why__line" aria-hidden="true"><span className="why__line-fill"></span></div>
            <ol className="why__steps">
              {steps.map((s, i) => (
                <li className="why__step" data-i={i} key={s.icon} style={{ "--accent": s.accent }}>
                  <span className="why__dot" aria-hidden="true"></span>
                  <span className="why__num">{"0" + (i + 1)}</span>
                  <h3 className="why__h">{s.h}</h3>
                  <p className="why__p">{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>);
}

window.WhyICT = WhyICT;