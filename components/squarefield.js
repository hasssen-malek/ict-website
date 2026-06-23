/* global window, document, performance, requestAnimationFrame, cancelAnimationFrame, ResizeObserver */
/* =========================================================================
   ICTSquareField — hollow-square particle engine (ICT brand spectrum)
   A premium, atmospheric field of tiny outlined squares suspended in space,
   echoing the diagonal data-square motif of the Industries background image.
   Each square slowly drifts, softly fades, gently lerps between two brand
   colours, and a few rotate almost imperceptibly. Some carry a nested inner
   square; a sparse set are large out-of-focus "bokeh".

   One call renders ONE depth layer onto one canvas — call it per canvas so
   CSS blur / z-order give true per-layer depth-of-field & parallax.

   Usage: const stop = window.ICTSquareField(canvasEl, { host, ...layerOpts });
   Respects prefers-reduced-motion (renders one calm static frame).
   ========================================================================= */
(function () {
  // electric blue · cyan · indigo · violet · purple · magenta · coral orange
  const COLORS = [
    [0x00, 0x98, 0xff], [0x19, 0xc6, 0xd6], [0x37, 0x0f, 0xdd],
    [0x61, 0x2d, 0xf5], [0x8a, 0x4d, 0xf0], [0xcc, 0x47, 0xab],
    [0xfc, 0x7f, 0x40],
  ];
  // bias toward the diagonal blue→magenta→coral flow of the source image
  function pickColor() {
    const r = Math.random();
    if (r < 0.30) return Math.random() < 0.5 ? 0 : 1; // blue / cyan
    if (r < 0.62) return 2 + ((Math.random() * 2) | 0); // indigo / violet
    if (r < 0.86) return 4 + ((Math.random() * 2) | 0); // purple / magenta
    return 6; // coral orange (sparing, warm end)
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function mix(c1, c2, t) {
    return [lerp(c1[0], c2[0], t) | 0, lerp(c1[1], c2[1], t) | 0, lerp(c1[2], c2[2], t) | 0];
  }

  window.ICTSquareField = function (canvas, opts) {
    opts = opts || {};
    const host = opts.host || canvas.parentElement;
    const count = opts.count || 90;
    const sizeRange = opts.size || [4, 12];      // px edge length range
    const baseOpacity = opts.opacity == null ? 1 : opts.opacity;
    const speed = opts.speed == null ? 1 : opts.speed;
    const rotateFrac = opts.rotate == null ? 0.18 : opts.rotate;
    const nestedFrac = opts.nested == null ? 0.28 : opts.nested;
    const bokehFrac = opts.bokeh == null ? 0 : opts.bokeh;
    const bloom = opts.bloom == null ? 0 : opts.bloom; // shadowBlur multiplier
    const additive = !!opts.additive;                  // "lighter" blend for glowing bokeh
    const lineW = opts.lineWidth == null ? 1 : opts.lineWidth;

    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let W = 0, H = 0, P = [], raf = 0, running = true, t0 = performance.now();

    function build() {
      const r = canvas.getBoundingClientRect();
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      P = [];
      for (let i = 0; i < count; i++) {
        const isBokeh = Math.random() < bokehFrac;
        const sz = isBokeh
          ? sizeRange[1] * (1.8 + Math.random() * 1.6)
          : sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
        // drift style: 0 rise · 1 diagonal · 2 gentle random
        const style = Math.random();
        const ang0 = style < 0.34 ? -Math.PI / 2                       // rise
          : style < 0.7 ? -Math.PI / 2 + (0.5 + Math.random() * 0.5)   // diagonal (down-right of the flow)
            : Math.random() * Math.PI * 2;                             // random
        const v = (0.005 + Math.random() * 0.011) * speed * (0.6 + sz / sizeRange[1] * 0.8); // larger drift faster
        P.push({
          x: Math.random(), y: Math.random(), sz,
          vx: Math.cos(ang0) * v, vy: Math.sin(ang0) * v,
          ax: 0.012 + Math.random() * 0.026,   // sine wander amplitude (frac of W/H)
          ay: 0.012 + Math.random() * 0.026,
          fx: 0.07 + Math.random() * 0.18, fy: 0.07 + Math.random() * 0.18,
          phx: Math.random() * 6.28, phy: Math.random() * 6.28,
          // subtle swirl: each particle traces a slow circle on top of its drift
          swA: (10 + Math.random() * 26) * (0.5 + sz / sizeRange[1] * 0.9),
          swS: (Math.random() < 0.5 ? -1 : 1) * (0.06 + Math.random() * 0.16) * speed,
          swPh: Math.random() * 6.28,
          a: (0.32 + Math.random() * 0.5) * baseOpacity,
          fadePh: Math.random() * 6.28, fadeSp: 0.06 + Math.random() * 0.14,
          rot: Math.random() < rotateFrac, rotPh: Math.random() * 6.28,
          rotSp: (Math.random() < 0.5 ? -1 : 1) * (0.02 + Math.random() * 0.04),
          baseRot: Math.random() * Math.PI * 2,
          nested: !isBokeh && Math.random() < nestedFrac,
          c1: COLORS[pickColor()], c2: COLORS[pickColor()],
          colPh: Math.random() * 6.28, colSp: 0.03 + Math.random() * 0.05,
          bokeh: isBokeh,
          bright: Math.random() < 0.14,   // occasional brighter, glowier accent
        });
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, W, H);
      if (additive) ctx.globalCompositeOperation = "lighter";
      const t = reduce.matches ? 0 : time;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        let nx = (p.x + p.vx * t) % 1; if (nx < 0) nx += 1;
        let ny = (p.y + p.vy * t) % 1; if (ny < 0) ny += 1;
        const sw = reduce.matches ? 0 : 1;
        const x = nx * W + p.ax * W * Math.sin(t * p.fx + p.phx) + sw * p.swA * Math.cos(t * p.swS + p.swPh);
        const y = ny * H + p.ay * H * Math.sin(t * p.fy + p.phy) + sw * p.swA * Math.sin(t * p.swS + p.swPh);
        // extremely gradual fade
        const fade = 0.62 + 0.38 * Math.sin(t * p.fadeSp + p.fadePh);
        let a = p.a * fade;
        if (p.bokeh) a *= 0.5;
        if (p.bright) a *= 1.5;
        if (a <= 0.015) continue;
        const col = mix(p.c1, p.c2, 0.5 + 0.5 * Math.sin(t * p.colSp + p.colPh));
        const s = p.sz;
        let ang = p.baseRot;
        if (p.rot && !reduce.matches) ang += Math.sin(t * p.rotSp + p.rotPh) * 0.5;
        ctx.save();
        ctx.translate(x, y);
        if (ang) ctx.rotate(ang);
        ctx.globalAlpha = Math.min(1, a);
        ctx.lineWidth = lineW;
        ctx.strokeStyle = rgba(col, 1);
        if (bloom > 0) { ctx.shadowColor = rgba(col, 0.95); ctx.shadowBlur = bloom * s * (p.bright ? 1.8 : 1); }
        ctx.strokeRect(-s / 2, -s / 2, s, s);
        if (p.nested) {
          ctx.shadowBlur = 0;
          ctx.globalAlpha = Math.min(1, a * 0.7);
          ctx.strokeRect(-s / 4, -s / 4, s / 2, s / 2);
        }
        ctx.restore();
      }
      ctx.shadowBlur = 0;
      if (additive) ctx.globalCompositeOperation = "source-over";
    }

    function loop() {
      if (!running) return;
      lastT = (performance.now() - t0) / 1000;
      draw(lastT);
      raf = requestAnimationFrame(loop);
    }

    build();
    draw(0);
    let rt;
    const ro = new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { build(); draw((performance.now() - t0) / 1000); }, 120); });
    ro.observe(canvas);

    let onVis, io, inView = true, pageVis = true, lastT = 0;
    function sync() {
      const should = inView && pageVis && !reduce.matches;
      if (should && !running) {
        running = true;
        t0 = performance.now() - lastT * 1000; // resume seamlessly, no time jump
        raf = requestAnimationFrame(loop);
      } else if (!should && running) {
        running = false; cancelAnimationFrame(raf);
      }
    }

    if (!reduce.matches) {
      running = true;
      raf = requestAnimationFrame(loop);
      onVis = function () { pageVis = !document.hidden; sync(); };
      document.addEventListener("visibilitychange", onVis);
      // Pause the loop (and heavy blur compositing) when scrolled out of view.
      io = new IntersectionObserver(function (es) { inView = es[0].isIntersecting; sync(); }, { rootMargin: "200px 0px" });
      io.observe(canvas);
    }

    return function stop() {
      running = false; cancelAnimationFrame(raf); ro.disconnect();
      if (io) io.disconnect();
      if (onVis) document.removeEventListener("visibilitychange", onVis);
    };
  };
})();
