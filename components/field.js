/* global window, document */
/* =========================================================================
   ICTField - reusable canvas particle engine (ICT brand colours)
   modes: "orbit" (particles orbit a focal point, around the hero globe)
          "drift" (ambient particles drifting in soft vertical streams)
   Depth: 5 parallax layers (size / opacity / speed / parallax weight).
   Motion: slow + seamless, with an always-on autonomous parallax drift so the
   field feels alive without any input. Soft clustering creates density
   variation (arc clusters in orbit, persistent vertical streams in drift).
   Respects prefers-reduced-motion (renders one calm static frame).
   Usage: const stop = window.ICTField(canvasEl, { mode, host, ... }); stop();
   ========================================================================= */
(function () {
  // electric-blue · indigo · violet · purple · magenta - the full ICT spectrum
  const COLORS = ["#0098ff", "#370fdd", "#612df5", "#8a4df0", "#cc47ab"];

  // weighted toward the violet/purple core, with a sparing electric-blue accent
  function pickColor() {
    const r = Math.random();
    if (r < 0.10) return 0;   // electric blue - sparing, ties to the brand accent
    if (r < 0.32) return 1;   // indigo
    if (r < 0.62) return 2;   // violet
    if (r < 0.86) return 3;   // purple
    return 4;                 // magenta
  }

  // soft bell-ish random in ~[-1, 1] for natural clustering falloff
  function gauss() { return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5; }

  function sprite(hex, coreAlpha) {
    const ca = coreAlpha == null ? 0.92 : coreAlpha;
    const s = document.createElement("canvas");
    s.width = s.height = 32;
    const c = s.getContext("2d");
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    const grd = c.createRadialGradient(16, 16, 0, 16, 16, 16);
    grd.addColorStop(0, `rgba(255,255,255,${ca})`);
    grd.addColorStop(0.20, `rgba(${r},${g},${b},1)`);
    grd.addColorStop(0.52, `rgba(${r},${g},${b},0.42)`);
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
    c.fillStyle = grd;
    c.fillRect(0, 0, 32, 32);
    return s;
  }

  // 5 depth planes, far -> near. Wider range than before = richer dimensionality.
  const LAYER_DEPTH = [0.30, 0.50, 0.72, 0.96, 1.22];
  const MID_DEPTH = 0.74; // pivot so far/near layers parallax in opposite directions

  window.ICTField = function (canvas, opts) {
    opts = opts || {};
    const mode = opts.mode || "orbit";
    const host = opts.host || canvas.parentElement;
    const focal = opts.focal || { x: 0.66, y: 0.5 };
    const count = opts.count || 220;
    const baseOpacity = opts.opacity == null ? 1 : opts.opacity;
    const sizeK = opts.size == null ? 1 : opts.size;   // particle size multiplier
    const speed = opts.speed == null ? 1 : opts.speed;
    const parallaxK = opts.parallax == null ? 1 : opts.parallax;
    const cursorReact = !!opts.cursor;   // a few particles gently react to the cursor
    const palette = opts.palette || COLORS;          // custom hex palette (e.g. hero atmosphere)
    const usePaletteUniform = !!opts.palette;        // weighted pickColor only valid for default 5
    const coreAlpha = opts.coreAlpha;                // white hotspot strength (lower = no bright white)
    const riseK = opts.rise == null ? 0 : opts.rise; // net upward drift for "float" mode (dust)
    const ctx = canvas.getContext("2d");
    const sprites = palette.map((c) => sprite(c, coreAlpha));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    let W = 0, H = 0, P = [], raf = 0, running = true, t0 = performance.now();
    let mx = 0, my = 0, cmx = 0, cmy = 0;
    let cpx = -9999, cpy = -9999, scpx = -9999, scpy = -9999, pointerIn = false;

    function build() {
      const r = canvas.getBoundingClientRect();
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const unit = Math.min(W, H);
      const NL = LAYER_DEPTH.length;
      P = [];

      // ----- soft clustering seeds -----
      // orbit: a few arcs (denser bands around the focal point)
      const arcs = [];
      for (let k = 0; k < 3; k++) arcs.push({ ang: Math.random() * Math.PI * 2, spread: 0.45 + Math.random() * 0.55 });
      // drift: persistent vertical "streams" - particles bias toward x-lanes
      const lanes = [];
      for (let k = 0; k < 4; k++) lanes.push(0.12 + Math.random() * 0.76);

      const pick = usePaletteUniform ? function () { return (Math.random() * palette.length) | 0; } : pickColor;
      for (let i = 0; i < count; i++) {
        const layer = i % NL;
        const depth = LAYER_DEPTH[layer];
        if (mode === "orbit") {
          // 70% pulled into arcs for density variation; 30% spread evenly
          let ang;
          if (Math.random() < 0.7) {
            const a = arcs[(Math.random() * arcs.length) | 0];
            ang = a.ang + gauss() * a.spread;
          } else ang = Math.random() * Math.PI * 2;
          const r0 = opts.radius ? opts.radius[0] : 0.30;
          const r1 = opts.radius ? opts.radius[1] : 0.58;
          // bias toward a couple of radius bands -> soft concentric clusters
          const rad = unit * (r0 + (r1 - r0) * (0.45 * Math.random() + 0.55 * Math.random()));
          // counter-rotating planes: even layers one way, odd the other -> depth
          const dir = (layer % 2 === 0 ? 1 : -1);
          P.push({
            layer, depth, ang,
            angVel: (0.011 + Math.random() * 0.022) * dir * speed * (0.7 + depth * 0.5),
            rad, rx: 1, ry: 0.62 + Math.random() * 0.16,
            wob: 0.035 + Math.random() * 0.07, wobPh: Math.random() * 6.28, wobSp: 0.16 + Math.random() * 0.34,
            sz: (0.6 + Math.random() * 1.7) * depth,
            a: (0.16 + Math.random() * 0.5) * Math.min(1, depth),
            cidx: pick(),
            react: Math.random() < 0.28 ? (Math.random() < 0.5 ? 1 : -1) : 0,
          });
        } else if (mode === "float") {
          // evenly scattered across the whole frame; each particle gently bobs
          // in place on two slow, independent sine paths (x & y) -> smooth,
          // round, naturally-floating field with no streaks and no falling.
          P.push({
            layer, depth,
            x: Math.random(), y: Math.random(),
            ampX: (6 + Math.random() * 20) * (0.6 + depth * 0.6),
            ampY: (6 + Math.random() * 20) * (0.6 + depth * 0.6),
            fx: (0.05 + Math.random() * 0.16) * speed,
            fy: (0.05 + Math.random() * 0.16) * speed,
            phx: Math.random() * 6.28, phy: Math.random() * 6.28,
            ph: Math.random() * 6.28,
            sz: (0.6 + Math.random() * 1.7) * depth,
            a: (0.16 + Math.random() * 0.48) * Math.min(1, depth),
            vrise: (0.006 + Math.random() * 0.014) * (0.6 + depth * 0.6),
            cidx: pick(),
          });
        } else {
          // vertical streams: 62% cluster into x-lanes (persistent density), rest spread
          let x;
          if (Math.random() < 0.62) x = lanes[(Math.random() * lanes.length) | 0] + gauss() * 0.055;
          else x = Math.random();
          x = ((x % 1) + 1) % 1;
          P.push({
            layer, depth,
            x, y: Math.random(),
            // near layers fall a touch faster -> parallax between planes
            vy: (2.4 + Math.random() * 6.5) * speed * (0.55 + depth * 0.6),
            sway: 5 + Math.random() * 22, swf: 0.07 + Math.random() * 0.30, ph: Math.random() * 6.28,
            sz: (0.6 + Math.random() * 1.9) * depth,
            a: (0.14 + Math.random() * 0.44) * Math.min(1, depth),
            cidx: pick(),
            // foreground particles draw a soft comet-streak; background stay round
            streak: 1 + Math.max(0, depth - 0.6) * (0.9 + Math.random() * 1.1),
          });
        }
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const fx = W * focal.x, fy = H * focal.y;
      const t = reduce.matches ? 0 : time;
      // autonomous, input-independent parallax drift - long slow sines, layered.
      // Far and near planes shift in opposite directions (depth - MID), so the
      // field breathes with continuous depth even with no cursor / on mobile.
      const driftX = Math.sin(t * 0.05) * 11 + Math.sin(t * 0.017) * 6;
      const driftY = Math.cos(t * 0.043) * 8 + Math.sin(t * 0.013) * 5;
      const px = cmx * parallaxK, py = cmy * parallaxK;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        let x, y;
        const par = p.depth * 30;                 // cursor parallax weight
        const ad = (p.depth - MID_DEPTH);          // autonomous parallax weight (± by plane)
        const agx = driftX * ad, agy = driftY * ad;
        if (mode === "orbit") {
          const ang = p.ang + (reduce.matches ? 0 : p.angVel * time);
          const wob = 1 + p.wob * Math.sin(t * p.wobSp + p.wobPh);
          x = fx + Math.cos(ang) * p.rad * p.rx * wob + px * par + agx;
          y = fy + Math.sin(ang) * p.rad * p.ry * wob + py * par + agy;
        } else if (mode === "float") {
          let by = p.y;
          if (riseK) { by = (p.y - (reduce.matches ? 0 : t * p.vrise * riseK)) % 1; if (by < 0) by += 1; }
          x = p.x * W + p.ampX * Math.sin(t * p.fx + p.phx) + px * par + agx;
          y = by * H + p.ampY * Math.sin(t * p.fy + p.phy) + py * par + agy;
        } else {
          x = p.x * W + p.sway * Math.sin(t * p.swf + p.ph) + px * par + agx;
          let yy = (p.y - (reduce.matches ? 0 : (t * p.vy) / H)) % 1; if (yy < 0) yy += 1;
          y = yy * H + py * par + agy;
        }
        // subtle cursor reactivity - a few particles drift toward/away for depth
        if (cursorReact && p.react && pointerIn && !reduce.matches) {
          const dx = x - scpx, dy = y - scpy;
          const dist = Math.hypot(dx, dy);
          const R = Math.min(W, H) * 0.24;
          if (dist < R && dist > 0.001) {
            const f = (1 - dist / R);
            const push = p.react * f * f * 16 * p.depth;
            x += (dx / dist) * push;
            y += (dy / dist) * push;
          }
        }
        const ph = p.wobPh != null ? p.wobPh : p.ph;
        const tw = mode === "orbit" ? (0.70 + 0.30 * Math.sin(t * 0.7 + ph))
                                    : (0.86 + 0.14 * Math.sin(t * 0.5 + ph));
        const a = p.a * baseOpacity * tw;
        if (a <= 0.012) continue;
        const s = p.sz * 2.4 * sizeK;
        ctx.globalAlpha = Math.min(1, a);
        if (mode !== "orbit" && p.streak > 1.06 && !reduce.matches) {
          // soft vertical comet - stretched along the fall direction
          const hgt = s * p.streak;
          ctx.drawImage(sprites[p.cidx], x - s, y - hgt, s * 2, hgt * 2);
        } else {
          ctx.drawImage(sprites[p.cidx], x - s, y - s, s * 2, s * 2);
        }
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function loop() {
      if (!running) return;
      cmx += (mx - cmx) * 0.05; cmy += (my - cmy) * 0.05;
      if (scpx < -9000) { scpx = cpx; scpy = cpy; } else { scpx += (cpx - scpx) * 0.08; scpy += (cpy - scpy) * 0.08; }
      lastT = (performance.now() - t0) / 1000;
      draw(lastT);
      raf = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const r = host.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      cpx = e.clientX - r.left; cpy = e.clientY - r.top; pointerIn = true;
    }
    function onLeave() { mx = 0; my = 0; pointerIn = false; }

    build();
    draw(0);
    let rt;
    const ro = new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { build(); draw((performance.now() - t0) / 1000); }, 120); });
    ro.observe(canvas);

    var inView = true, pageVis = true, onVis, io, lastT = 0;
    function sync() {
      var should = inView && pageVis && !reduce.matches;
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
      if (finePointer.matches && (parallaxK > 0 || cursorReact)) {
        host.addEventListener("pointermove", onMove);
        host.addEventListener("pointerleave", onLeave);
      }
      onVis = function () { pageVis = !document.hidden; sync(); };
      document.addEventListener("visibilitychange", onVis);
      // Pause the rAF loop (and its blur compositing) whenever the field is
      // scrolled out of view — the single biggest scroll-perf win.
      io = new IntersectionObserver(function (es) { inView = es[0].isIntersecting; sync(); }, { rootMargin: "200px 0px" });
      io.observe(canvas);
    }

    return function stop() {
      running = false; cancelAnimationFrame(raf); ro.disconnect();
      if (io) io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (typeof onVis === "function") document.removeEventListener("visibilitychange", onVis);
    };
  };
})();
