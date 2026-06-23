/* global React, window, document */

/* =========================================================================
   HERO - geometric "network sphere" + floating particle field (ICT colours)
   No cursor interaction. Globe breathes slowly; particles drift/orbit around
   it; a circular glow sits centred behind the globe. Reduced-motion safe.
   ========================================================================= */

const { useEffect: useEffectHero, useRef: useRefHero } = React;

function HeroArt() {
  const fgRef = useRefHero(null);
  const farRef = useRefHero(null);
  const medRef = useRefHero(null);
  const bokehRef = useRefHero(null);
  const hostRef = useRefHero(null);
  const artRef = useRefHero(null);
  const videoRef = useRefHero(null);

  // Background video — loaded only when the connection and user preferences
  // allow it. On reduced-motion, Save-Data, or a slow link (2g/3g) we never
  // fetch the file and the static hero image remains as the fallback. The
  // video fades in once it can play, pauses when scrolled off-screen, and
  // loops seamlessly.
  useEffectHero(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    const slow = !!conn && (conn.saveData === true || /(^|-)2g$|^3g$/.test(conn.effectiveType || ""));
    if (reduce || slow) return; // keep the image fallback, fetch nothing

    let io = null;
    const onReady = () => { v.style.opacity = "0.9"; v.play().catch(() => {}); };
    const onError = () => { v.style.opacity = "0"; }; // image stays visible beneath
    v.addEventListener("canplaythrough", onReady, { once: true });
    v.addEventListener("error", onError, true);

    // Begin fetching the video (preload is "none" in markup so nothing loads
    // until we opt in here).
    v.preload = "auto";
    v.src = "assets/hero.mp4";
    v.load();

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        const vis = entries[0] && entries[0].isIntersecting;
        if (vis) { if (parseFloat(v.style.opacity) > 0) v.play().catch(() => {}); }
        else v.pause();
      }, { threshold: 0 });
      io.observe(v);
    }
    return () => {
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("error", onError, true);
      if (io) io.disconnect();
      v.pause();
      v.removeAttribute("src");
      v.load();
    };
  }, []);

  useEffectHero(() => {
    const host = hostRef.current ? hostRef.current.closest(".hero") : null;
    const stops = [];
    // Lighten on phones / coarse-pointer devices: fewer particles and drop the
    // GPU-expensive blurred bokeh plane so scrolling stays smooth.
    const lite = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    const k = lite ? 0.42 : 1;
    // Cinematic 4-layer atmosphere: mostly blue/purple with occasional warm
    // accents, soft cores (never pure white), gentle net upward drift like dust
    // in light. Density ~3x, distribution organic; big empty zones remain
    // around the headline / CTA.
    const heroPalette = ["#2e7bff", "#1f6fff", "#2aa8e0", "#370fdd", "#612df5", "#612df5", "#8a4df0", "#8a4df0", "#370fdd", "#cc47ab", "#fc7f40"];
    // 1 · Background — tiny, faint, slowest (CSS-blurred).
    if (window.ICTField && farRef.current) {
      stops.push(window.ICTField(farRef.current, { mode: "float", host, count: Math.round(300 * k), opacity: 0.36, speed: 0.4, size: 1, rise: 0.7, parallax: 0, cursor: false, palette: heroPalette, coreAlpha: 0.32 }));
    }
    // 2 · Mid — the main particle field.
    if (window.ICTField && fgRef.current) {
      stops.push(window.ICTField(fgRef.current, { mode: "float", host, count: Math.round(430 * k), opacity: 0.58, speed: 0.62, size: 1.4, rise: 1.4, parallax: 0, cursor: false, palette: heroPalette, coreAlpha: 0.4 }));
    }
    // 3 · Foreground — medium glowing particles, slight blur.
    if (window.ICTField && medRef.current) {
      stops.push(window.ICTField(medRef.current, { mode: "float", host, count: Math.round(132 * k), opacity: 0.56, speed: 0.78, size: 3.1, rise: 1.6, parallax: 0, cursor: false, palette: heroPalette, coreAlpha: 0.32 }));
    }
    // 4 · Camera — large out-of-focus bokeh (strong blur). Desktop only.
    if (!lite && window.ICTField && bokehRef.current) {
      stops.push(window.ICTField(bokehRef.current, { mode: "float", host, count: 40, opacity: 0.26, speed: 0.3, size: 12, rise: 0.5, parallax: 0, cursor: false, palette: heroPalette, coreAlpha: 0.26 }));
    }
    return () => stops.forEach((s) => s && s());
  }, []);

  useEffectHero(() => {
    const el = artRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    el.classList.add("is-fading");
    const t = setTimeout(() => el.classList.remove("is-fading"), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="hero__art" ref={(n) => {hostRef.current = n;artRef.current = n;}} aria-hidden="true">
      <img
        className="hero__bgimg"
        src="assets/hero-bg-new.png"
        alt=""
        loading="eager"
        decoding="async" />
      <video
        className="hero__video"
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        aria-hidden="true"></video>

      <div className="hero__scrim"></div>
      <canvas className="hero__field hero__field--far" ref={farRef}></canvas>
      <canvas className="hero__field" ref={fgRef}></canvas>
      <canvas className="hero__field hero__field--med" ref={medRef}></canvas>
      <canvas className="hero__field hero__field--bokeh" ref={bokehRef}></canvas>
      <div className="hero__haze" aria-hidden="true"></div>
    </div>);
}

function Hero() {
  return (
    <section className="hero s-ink-deep" id="top">
      <div className="hero__ambient" aria-hidden="true"></div>
      <HeroArt />
      <div className="wrap hero__grid">
        <div className="hero__head hero__head--load">
          <p className="kicker hero__kicker">ICT&nbsp;·&nbsp;Empowering digital transformation</p>
          <h1 className="hero__title" style={{ maxWidth: "880px" }}>
            Technology that <em><span className="grad-ict">earns its place</span></em> in your business.
          </h1>
          <p className="hero__sub lead">
            For nearly two decades, ICT has helped organisations in Qatar move from
            ageing systems to cloud, data, and AI that work in production, not just
            in pilots.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="Contact.html">
              Start a conversation <span className="ar" aria-hidden="true">→</span>
            </a>
            <a className="tlink" href="Services.html" style={{ justifyContent: "flex-start", alignItems: "center" }}>
              Explore our services <span className="ar" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero__meta hero__meta--load">
          {/* TODO[VERIFY]: founding year 2005 and partner tiers before publish */}
          <span className="hero__meta-item"><b>24/7</b> managed operations</span>
          <span className="hero__meta-item">Founded <b>2005</b></span>
          <span className="hero__meta-item">Cloud, data, and AI <b>in production</b></span>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;