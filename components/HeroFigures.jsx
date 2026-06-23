/* global React */
/* ICT bespoke hero-figure library.
   A FAMILY of distinct monoline schematics — one per page category. Each has
   its own composition, visual metaphor, and motion behaviour, while sharing the
   brand's line-driven look (stroke = currentColor, one accent mark in the
   section hue). No two are the same circular orbit. Motion classes (a-*) and
   keyframes live in css/pages.css, all gated behind prefers-reduced-motion.

   A figure builder receives the accent colour `mk` and returns SVG children for
   a 340x320 canvas. window.HeroFigure({ variant, hue }) wraps + dispatches. */

const HUE_MK = { blue: "var(--tick-1)", purple: "var(--tick-3)", violet: "var(--tick-3)", magenta: "var(--tick-4)", orange: "var(--tick-5)", cyan: "var(--hue-cyan-d)", rose: "var(--hue-rose-d)", mint: "var(--hue-mint-d)", gold: "var(--hue-gold-d)" };

/* small builders -------------------------------------------------------- */
function nodeSq(x, y, s, cls, key) {
  return <rect key={key} x={x - s / 2} y={y - s / 2} width={s} height={s} className={cls || "il-node"} strokeWidth="1" />;
}
function dot(x, y, r, cls, key) {
  return <circle key={key} cx={x} cy={y} r={r} className={cls || "il-node"} strokeWidth="1" />;
}
function ln(x1, y1, x2, y2, cls, key, extra) {
  return <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} className={cls || "il-line"} strokeWidth="1" {...(extra || {})} />;
}

/* figure family --------------------------------------------------------- */
const FIGURES = {
  /* SERVICES hub — central hub wired to eight area nodes; spokes flow outward */
  services(mk) {
    const pts = Array.from({ length: 8 }, (_, i) => {
      const a = (Math.PI * 2 * i) / 8 - Math.PI / 2;
      return [170 + Math.cos(a) * 118, 160 + Math.sin(a) * 118];
    });
    return (<>
      <g className="a-spin" style={{ opacity: .9 }}>
        {pts.map(([x, y], i) => ln(170, 160, x, y, "il-line", "s" + i, { strokeDasharray: "2 7", className: "il-lit a-flow", style: { animationDelay: (i * .3) + "s" } }))}
      </g>
      {pts.map(([x, y], i) => nodeSq(x, y, i === 1 ? 16 : 12, i === 1 ? "il-mk" : "il-node", "n" + i))}
      <circle cx="170" cy="160" r="30" className="il-lit a-pulse" fill="none" strokeWidth="1.2" />
      <rect x="159" y="149" width="22" height="22" className="il-mk" />
    </>);
  },

  /* CONSULTING — a roadmap that draws itself, waypoints, an accent destination flag */
  consulting(mk) {
    const d = "M30 250 C 90 250 80 170 140 170 S 210 110 250 110 300 70 312 60";
    return (<>
      <path d={d} className="il-line" fill="none" strokeWidth="6" style={{ opacity: .12 }} />
      <path d={d} className="il-lit a-draw" fill="none" strokeWidth="1.6" style={{ strokeDasharray: 520, "--len": 520 }} />
      {[[30, 250], [140, 170], [250, 110]].map(([x, y], i) => dot(x, y, 5, "il-node", "w" + i))}
      <line x1="312" y1="60" x2="312" y2="30" className="il-lit" strokeWidth="1.4" />
      <path d="M312 30 L344 40 L312 50 Z" className="il-mk" />
      <circle cx="312" cy="60" r="10" className="il-lit a-pulse" fill="none" strokeWidth="1.2" />
    </>);
  },

  /* CLOUD & INFRASTRUCTURE — floating cloud layers over a connected node fabric */
  cloud(mk) {
    const cloud = (x, y, s) => `M${x} ${y} a${14 * s} ${14 * s} 0 0 1 ${26 * s} ${-2 * s} a${12 * s} ${12 * s} 0 0 1 ${22 * s} ${2 * s} a${11 * s} ${11 * s} 0 0 1 ${-2 * s} ${15 * s} h${-44 * s} a${10 * s} ${10 * s} 0 0 1 ${0 * s} ${-15 * s} Z`;
    const grid = [];
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) grid.push([78 + c * 52, 230 + r * 36]);
    return (<>
      <g className="a-float"><path d={cloud(70, 78, 1.15)} className="il-line" fill="none" strokeWidth="1.4" /></g>
      <g className="a-floatd"><path d={cloud(140, 120, .9)} className="il-mk" style={{ opacity: .5 }} /><path d={cloud(140, 120, .9)} className="il-lit" fill="none" strokeWidth="1.4" /></g>
      <g className="a-float" style={{ animationDelay: "1.4s" }}><path d={cloud(220, 92, .8)} className="il-line" fill="none" strokeWidth="1.4" /></g>
      {grid.map(([x, y], i) => nodeSq(x, y, 11, "il-node", "g" + i))}
      {grid.slice(0, 7).map(([x, y], i) => { const [nx, ny] = grid[i + 1]; return ln(x, y, nx, ny, "il-lit a-flow", "e" + i, { strokeDasharray: "2 6", style: { animationDelay: (i * .25) + "s" } }); })}
      {grid.map(([x, y], i) => ln(x, y - 6, x, 168, "il-line", "v" + i, { style: { opacity: .14 } }))}
    </>);
  },

  /* CYBERSECURITY — nested shield layers with a scanning line and a core lock */
  security(mk) {
    const shield = (s) => `M170 ${60 + (1 - s) * 40} l${70 * s} ${26 * s} v${52 * s} c0 ${44 * s} ${-30 * s} ${78 * s} ${-70 * s} ${92 * s} c${-40 * s} ${-14 * s} ${-70 * s} ${-48 * s} ${-70 * s} ${-92 * s} v${-52 * s} Z`;
    return (<>
      <path d={shield(1)} className="il-line" fill="none" strokeWidth="1.4" />
      <path d={shield(.74)} className="il-lit" fill="none" strokeWidth="1.2" />
      <path d={shield(.48)} className="il-mk" style={{ opacity: .5 }} />
      <g className="a-scan"><rect x="96" y="150" width="148" height="2.4" className="il-lit" fill="currentColor" /></g>
      <rect x="160" y="150" width="20" height="18" className="il-node" rx="2" />
      <path d="M163 150 v-6 a7 7 0 0 1 14 0 v6" className="il-lit" fill="none" strokeWidth="1.4" />
      <circle cx="170" cy="159" r="2.6" className="il-mk a-pulse" />
    </>);
  },

  /* DATA, AI & ANALYTICS (service) — database stack feeding rising bars into an AI core */
  dataai(mk) {
    return (<>
      <g>
        <ellipse cx="78" cy="92" rx="34" ry="11" className="il-line" fill="none" strokeWidth="1.3" />
        <path d="M44 92 v54 c0 6 15 11 34 11 s34 -5 34 -11 v-54" className="il-line" fill="none" strokeWidth="1.3" />
        <path d="M44 119 c0 6 15 11 34 11 s34 -5 34 -11" className="il-lit" fill="none" strokeWidth="1.1" />
      </g>
      {[[150, 196, 34], [176, 196, 58], [202, 196, 44], [228, 196, 72]].map(([x, y, h], i) =>
        <rect key={"b" + i} x={x} y={y - h} width="16" height={h} className={i === 3 ? "il-mk a-rise" : "il-node a-rise"} style={{ animationDelay: (i * .35) + "s" }} />)}
      <line x1="112" y1="120" x2="150" y2="150" className="il-lit a-flow" strokeWidth="1.3" strokeDasharray="2 6" />
      <g className="a-spin" style={{ opacity: .85 }}><circle cx="262" cy="92" r="30" className="il-lit" fill="none" strokeWidth="1" strokeDasharray="3 9" /></g>
      <rect x="250" y="80" width="24" height="24" className="il-mk" />
      <circle cx="262" cy="92" r="44" className="il-line a-pulse" fill="none" strokeWidth="1" />
    </>);
  },

  /* ENTERPRISE APPLICATIONS — four platform tiles joined by an integration loop */
  apps(mk) {
    const tiles = [[96, 92], [244, 92], [96, 228], [244, 228]];
    return (<>
      <path d="M96 92 H244 V228 H96 Z" className="il-lit a-flow" fill="none" strokeWidth="1.3" strokeDasharray="6 8" />
      {tiles.map(([x, y], i) => (
        <g key={"t" + i}>
          <rect x={x - 34} y={y - 26} width="68" height="52" className={i === 0 ? "il-mk" : "il-node"} rx="3" style={i === 0 ? null : { fill: "var(--ink-deep)" }} />
          <line x1={x - 22} y1={y - 8} x2={x + 22} y2={y - 8} className="il-lit" strokeWidth="1.1" style={{ opacity: .7 }} />
          <line x1={x - 22} y1={y + 4} x2={x + 10} y2={y + 4} className="il-line" strokeWidth="1.1" />
        </g>))}
      <rect x="150" y="142" width="40" height="36" className="il-lit" fill="none" strokeWidth="1.2" rx="3" />
      <path d="M163 160 l6 6 12 -13" className="il-mk" fill="none" strokeWidth="1.8" />
    </>);
  },

  /* CUSTOMER EXPERIENCE — channels converging on one customer, personalised rays */
  cx(mk) {
    const ch = [[40, 70], [40, 150], [40, 230], [300, 70], [300, 230]];
    return (<>
      {ch.map(([x, y], i) => (<g key={"c" + i}><rect x={x - 16} y={y - 12} width="32" height="24" className="il-node" rx="3" />{ln(x + (x < 170 ? 16 : -16), y, 170, 160, "il-lit a-flow", "cl" + i, { strokeDasharray: "2 7", style: { animationDelay: (i * .3) + "s" } })}</g>))}
      <circle cx="170" cy="160" r="40" className="il-line a-pulse" fill="none" strokeWidth="1.1" />
      <circle cx="170" cy="160" r="24" className="il-mk" style={{ opacity: .55 }} />
      <circle cx="170" cy="151" r="8" className="il-lit" fill="none" strokeWidth="1.3" />
      <path d="M154 178 a16 14 0 0 1 32 0" className="il-lit" fill="none" strokeWidth="1.3" />
    </>);
  },

  /* MANAGED SERVICES — ops monitor with an uptime heartbeat and a continuous loop */
  managed(mk) {
    return (<>
      <rect x="58" y="78" width="224" height="132" className="il-line" fill="none" strokeWidth="1.3" rx="4" />
      <line x1="58" y1="104" x2="282" y2="104" className="il-line" strokeWidth="1" style={{ opacity: .5 }} />
      {[68, 78, 88].map((x, i) => dot(x, 91, 3, i === 0 ? "il-mk" : "il-node", "d" + i))}
      <path d="M74 158 H120 l12 -28 14 56 12 -40 10 22 H264" className="il-lit a-flow" fill="none" strokeWidth="1.6" strokeDasharray="200" style={{ "--len": 200 }} />
      <line x1="120" y1="186" x2="220" y2="186" className="il-line" strokeWidth="1" style={{ opacity: .4 }} />
      <g className="a-spin"><circle cx="170" cy="248" r="34" className="il-lit" fill="none" strokeWidth="1.2" strokeDasharray="70 16" /></g>
      <path d="M198 240 l8 8 8 -8" className="il-mk" fill="none" strokeWidth="1.6" />
    </>);
  },

  /* EMERGING TECH hub — a floating hex mesh, one accent cell */
  emerging(mk) {
    const hex = (cx, cy, r) => Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 180 * (60 * i - 30); return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }).map(p => p.join(",")).join(" ");
    const cells = [[120, 110], [220, 110], [170, 160], [120, 210], [220, 210], [270, 160], [70, 160]];
    return (<>
      {cells.map(([x, y], i) => (
        <g key={"h" + i} className={i % 2 ? "a-floatd" : "a-float"} style={{ animationDelay: (i * .4) + "s" }}>
          <polygon points={hex(x, y, 30)} className={i === 2 ? "il-mk" : "il-line"} fill={i === 2 ? undefined : "none"} strokeWidth="1.3" style={i === 2 ? { opacity: .5 } : null} />
          {i === 2 ? <polygon points={hex(x, y, 30)} className="il-lit" fill="none" strokeWidth="1.4" /> : null}
          <circle cx={x} cy={y} r="3" className="il-node" />
        </g>))}
    </>);
  },

  /* IoT — a gateway with sensor nodes broadcasting ripple signals */
  iot(mk) {
    const sensors = [[80, 90], [262, 96], [70, 226], [256, 230], [170, 250]];
    return (<>
      {sensors.map(([x, y], i) => (<g key={"s" + i}>
        <circle cx={x} cy={y} r="18" className="il-lit a-ripple" fill="none" strokeWidth="1.2" style={{ animationDelay: (i * .55) + "s" }} />
        {nodeSq(x, y, 12, "il-node", "sn" + i)}
        {ln(x, y, 170, 160, "il-line", "sl" + i, { strokeDasharray: "2 8", className: "il-lit a-flow", style: { animationDelay: (i * .3) + "s" } })}
      </g>))}
      <rect x="150" y="142" width="40" height="36" className="il-mk" rx="3" />
      <line x1="158" y1="152" x2="182" y2="152" className="il-lit" strokeWidth="1.2" style={{ opacity: .8 }} />
      <line x1="158" y1="162" x2="176" y2="162" className="il-lit" strokeWidth="1.2" style={{ opacity: .6 }} />
    </>);
  },

  /* BLOCKCHAIN — a diagonal chain of linked cubes, a pulse travelling the chain */
  blockchain(mk) {
    const cube = (x, y, key, accent) => (
      <g key={key}>
        <path d={`M${x} ${y} l22 -11 l22 11 v24 l-22 11 l-22 -11 Z`} className={accent ? "il-mk" : "il-node"} style={accent ? null : { fill: "var(--ink-deep)" }} />
        <path d={`M${x} ${y} l22 11 l22 -11 M${x + 22} ${y + 11} v24`} className="il-lit" fill="none" strokeWidth="1.1" style={{ opacity: .7 }} />
      </g>);
    const blocks = [[58, 96], [118, 126], [178, 156], [238, 186]];
    return (<>
      {blocks.slice(0, 3).map(([x, y], i) => { const [nx, ny] = blocks[i + 1]; return ln(x + 44, y + 12, nx, ny + 12, "il-lit a-flow", "cl" + i, { strokeDasharray: "3 7", style: { animationDelay: (i * .4) + "s" } }); })}
      {blocks.map(([x, y], i) => cube(x, y, "cb" + i, i === 2))}
      {blocks.map(([x, y], i) => <circle key={"p" + i} cx={x + 22} cy={y + 11} r="4" className="il-mk a-blink" style={{ animationDelay: (i * .5) + "s" }} />)}
    </>);
  },

  /* AR/VR — stacked perspective depth-planes drifting, a viewer reticle */
  arvr(mk) {
    const plane = (o, cls, dl) => (
      <g className="a-float" style={{ animationDelay: dl }}>
        <path d={`M${110 + o} ${108 + o} l120 -20 v92 l-120 20 Z`} className={cls} fill="none" strokeWidth="1.3" />
      </g>);
    return (<>
      {plane(34, "il-line", "0s")}
      {plane(0, "il-lit", ".8s")}
      <g className="a-float" style={{ animationDelay: ".4s" }}>
        <path d="M124 152 l92 -15 v60 l-92 15 Z" className="il-mk" style={{ opacity: .4 }} />
        <circle cx="170" cy="172" r="12" className="il-lit" fill="none" strokeWidth="1.4" />
        <line x1="170" y1="156" x2="170" y2="166" className="il-lit" strokeWidth="1.2" />
        <line x1="170" y1="178" x2="170" y2="188" className="il-lit" strokeWidth="1.2" />
        <line x1="154" y1="172" x2="164" y2="172" className="il-lit" strokeWidth="1.2" />
        <line x1="176" y1="172" x2="186" y2="172" className="il-lit" strokeWidth="1.2" />
      </g>
    </>);
  },

  /* DIGITAL TWINS — a real asset mirrored as a wireframe twin, synced */
  twins(mk) {
    const gear = (x, accent) => (<g>
      <rect x={x - 26} y="130" width="52" height="52" className={accent ? "il-mk" : "il-node"} rx="3" style={accent ? { opacity: .5 } : { fill: "var(--ink-deep)" }} />
      <rect x={x - 26} y="130" width="52" height="52" className={accent ? "il-lit" : "il-line"} fill="none" strokeWidth="1.3" rx="3" />
      <circle cx={x} cy="156" r="14" className={accent ? "il-lit" : "il-line"} fill="none" strokeWidth="1.2" />
      <circle cx={x} cy="156" r="4" className="il-node" />
    </g>);
    return (<>
      {gear(96, false)}
      {gear(244, true)}
      <line x1="124" y1="156" x2="216" y2="156" className="il-line" strokeWidth="1" strokeDasharray="2 5" style={{ opacity: .4 }} />
      <g className="a-flow" style={{ stroke: "none" }}><circle cx="170" cy="156" r="5" className="il-mk a-march" /></g>
      <path d="M150 110 q20 -14 40 0" className="il-lit a-flow" fill="none" strokeWidth="1.3" strokeDasharray="3 6" />
      <path d="M190 202 q-20 14 -40 0" className="il-lit a-flow" fill="none" strokeWidth="1.3" strokeDasharray="3 6" style={{ animationDelay: ".6s" }} />
      <text x="96" y="206" className="il-line" style={{ font: "10px var(--font-mono, monospace)", fill: "currentColor", opacity: .5 }}>physical</text>
      <text x="244" y="206" className="il-lit" textAnchor="middle" style={{ font: "10px var(--font-mono, monospace)", fill: "currentColor", opacity: .6 }}>twin</text>
    </>);
  },

  /* AI & DATA hub — a neural network, pulses travelling the edges */
  aihub(mk) {
    const cols = [[70, [90, 160, 230]], [150, [70, 130, 190, 250]], [230, [110, 160, 210]], [300, [160]]];
    const layout = cols.map(([x, ys]) => ys.map(y => [x, y]));
    const edges = [];
    for (let l = 0; l < layout.length - 1; l++) layout[l].forEach((a, ai) => layout[l + 1].forEach((b, bi) => edges.push([a, b, l, ai, bi])));
    return (<>
      {edges.map(([a, b], i) => ln(a[0], a[1], b[0], b[1], "il-line", "e" + i, { style: { opacity: .12 } }))}
      {edges.filter((_, i) => i % 3 === 0).map(([a, b], i) => ln(a[0], a[1], b[0], b[1], "il-lit a-flow", "f" + i, { strokeDasharray: "2 9", style: { animationDelay: (i * .25) + "s" } }))}
      {layout.flat().map(([x, y], i) => dot(x, y, 5, "il-node", "n" + i))}
      <circle cx="300" cy="160" r="11" className="il-mk" />
      <circle cx="300" cy="160" r="20" className="il-lit a-pulse" fill="none" strokeWidth="1.1" />
    </>);
  },

  /* ENTERPRISE AI — decision pathways branching from a root, drawing on */
  entai(mk) {
    const d = "M50 160 H100 M100 160 V96 H150 M100 160 V224 H150 M150 96 V64 H210 M150 96 V128 H210 M150 224 V192 H210 M150 224 V256 H210";
    const leaves = [[210, 64], [210, 128], [210, 192], [210, 256]];
    return (<>
      <path d={d} className="il-line" fill="none" strokeWidth="6" style={{ opacity: .1 }} />
      <path d={d} className="il-lit a-draw" fill="none" strokeWidth="1.4" style={{ strokeDasharray: 900, "--len": 900 }} />
      {dot(50, 160, 6, "il-node", "root")}
      {[[100, 160], [150, 96], [150, 224]].map(([x, y], i) => dot(x, y, 4, "il-node", "j" + i))}
      {leaves.map(([x, y], i) => i === 0 ? nodeSq(x + 6, y, 16, "il-mk", "lf" + i) : nodeSq(x + 6, y, 12, "il-node", "lf" + i))}
      <circle cx="216" cy="64" r="16" className="il-lit a-pulse" fill="none" strokeWidth="1.1" />
    </>);
  },

  /* DATA & ANALYTICS (AI) — an axis chart, trend line drawing, point pulse */
  analytics(mk) {
    return (<>
      <line x1="56" y1="74" x2="56" y2="240" className="il-line" strokeWidth="1.2" />
      <line x1="56" y1="240" x2="288" y2="240" className="il-line" strokeWidth="1.2" />
      {[200, 160, 120].map((y, i) => <line key={"gl" + i} x1="56" y1={y} x2="288" y2={y} className="il-line" strokeWidth="1" style={{ opacity: .12 }} />)}
      {[[80, 30], [116, 64], [152, 50], [188, 96], [224, 80]].map(([x, h], i) => <rect key={"bb" + i} x={x} y={240 - h} width="14" height={h} className="il-node a-rise" style={{ animationDelay: (i * .3) + "s", opacity: .5 }} />)}
      <path d="M64 210 L104 176 L144 188 L184 132 L224 150 L280 100" className="il-lit a-draw" fill="none" strokeWidth="1.8" style={{ strokeDasharray: 360, "--len": 360 }} />
      <circle cx="280" cy="100" r="6" className="il-mk a-pulse" />
      <circle cx="280" cy="100" r="14" className="il-lit a-pulse" fill="none" strokeWidth="1" />
    </>);
  },

  /* AGENTIC SYSTEMS — autonomous agents orbiting a core at two radii */
  agentic(mk) {
    const ring = (r, n, off) => Array.from({ length: n }, (_, i) => { const a = (Math.PI * 2 * i) / n + off; return [170 + Math.cos(a) * r, 160 + Math.sin(a) * r]; });
    const inner = ring(64, 3, 0), outer = ring(116, 5, .5);
    return (<>
      <circle cx="170" cy="160" r="64" className="il-line" fill="none" strokeWidth="1" strokeDasharray="2 8" style={{ opacity: .3 }} />
      <circle cx="170" cy="160" r="116" className="il-line" fill="none" strokeWidth="1" strokeDasharray="2 10" style={{ opacity: .22 }} />
      <g className="a-spin">{inner.map(([x, y], i) => nodeSq(x, y, 13, "il-node", "i" + i))}</g>
      <g className="a-spin-rev">{outer.map(([x, y], i) => i === 0 ? nodeSq(x, y, 15, "il-mk", "o" + i) : <circle key={"o" + i} cx={x} cy={y} r="6" className="il-node" strokeWidth="1" />)}</g>
      <polygon points="170,146 184,170 156,170" className="il-lit" fill="none" strokeWidth="1.4" />
      <circle cx="170" cy="160" r="30" className="il-lit a-pulse" fill="none" strokeWidth="1.1" />
    </>);
  },

  /* RESPONSIBLE AI — concentric governance rings around a checked core */
  responsible(mk) {
    return (<>
      <g className="a-spin"><circle cx="170" cy="160" r="118" className="il-line" fill="none" strokeWidth="1" strokeDasharray="4 12" /></g>
      <g className="a-spin-rev"><circle cx="170" cy="160" r="88" className="il-lit" fill="none" strokeWidth="1" strokeDasharray="2 14" /></g>
      <circle cx="170" cy="160" r="58" className="il-line" fill="none" strokeWidth="1.2" />
      {[0, 1, 2, 3].map(i => { const a = Math.PI / 2 * i; return nodeSq(170 + Math.cos(a) * 88, 160 + Math.sin(a) * 88, 11, "il-node", "gn" + i); })}
      <circle cx="170" cy="160" r="34" className="il-mk" style={{ opacity: .5 }} />
      <circle cx="170" cy="160" r="34" className="il-lit a-pulse" fill="none" strokeWidth="1.3" />
      <path d="M156 160 l9 10 19 -22" className="il-lit" fill="none" strokeWidth="2" />
    </>);
  },

  /* INDUSTRIES hub — a spinning globe with latitude/longitude and sector dots */
  industries(mk) {
    return (<>
      <circle cx="170" cy="160" r="100" className="il-line" fill="none" strokeWidth="1.3" />
      <g className="a-spin">
        {[34, 66].map((r, i) => <ellipse key={"el" + i} cx="170" cy="160" rx={r} ry="100" className="il-lit" fill="none" strokeWidth="1" style={{ opacity: .5 }} />)}
        <line x1="70" y1="160" x2="270" y2="160" className="il-lit" strokeWidth="1" style={{ opacity: .5 }} />
      </g>
      {[120, 78].map((r, i) => <ellipse key={"lat" + i} cx="170" cy={160} rx="100" ry={i ? 34 : 66} className="il-line" fill="none" strokeWidth="1" style={{ opacity: .18 }} />)}
      {[[120, 110], [228, 132], [150, 224], [212, 210]].map(([x, y], i) => nodeSq(x, y, i === 0 ? 14 : 10, i === 0 ? "il-mk" : "il-node", "sd" + i))}
    </>);
  },

  /* FINANCE — transaction candlesticks rising, a trend overlay, currency mark */
  finance(mk) {
    const bars = [[80, 150, 70], [112, 130, 110], [144, 160, 60], [176, 110, 130], [208, 138, 90], [240, 96, 150]];
    return (<>
      <line x1="56" y1="240" x2="288" y2="240" className="il-line" strokeWidth="1.1" style={{ opacity: .5 }} />
      {bars.map(([x, y, h], i) => (<g key={"cs" + i} className="a-rise" style={{ transformOrigin: x + "px 240px", animationDelay: (i * .3) + "s" }}>
        <line x1={x} y1={y - 14} x2={x} y2={y + h + 14} className="il-lit" strokeWidth="1" style={{ opacity: .6 }} />
        <rect x={x - 8} y={y} width="16" height={h} className={i === 5 ? "il-mk" : "il-node"} style={i === 5 ? null : { fill: "var(--ink-deep)" }} />
      </g>))}
      <path d="M72 200 L112 170 L152 188 L192 132 L232 156 L272 104" className="il-lit a-flow" fill="none" strokeWidth="1.6" strokeDasharray="3 6" />
      <circle cx="280" cy="84" r="13" className="il-lit" fill="none" strokeWidth="1.3" />
      <path d="M280 76 v16 M275 80 h10 M275 88 h10" className="il-mk" strokeWidth="1.6" fill="none" />
    </>);
  },

  /* GOVERNMENT — a civic building facade under a secure ring */
  government(mk) {
    return (<>
      <path d="M88 120 L170 78 L252 120 Z" className="il-lit" fill="none" strokeWidth="1.4" />
      <rect x="96" y="120" width="148" height="10" className="il-line" fill="none" strokeWidth="1.2" />
      {[110, 142, 174, 206].map((x, i) => <rect key={"col" + i} x={x} y="134" width="18" height="78" className="il-node" strokeWidth="1" style={{ fill: "var(--ink-deep)" }} />)}
      <rect x="88" y="216" width="164" height="12" className="il-line" fill="none" strokeWidth="1.2" />
      <line x1="78" y1="232" x2="262" y2="232" className="il-line" strokeWidth="1.2" />
      <g className="a-spin"><circle cx="170" cy="64" r="22" className="il-lit" fill="none" strokeWidth="1" strokeDasharray="3 7" /></g>
      <rect x="161" y="54" width="18" height="16" className="il-mk" rx="2" />
      <path d="M164 54 v-4 a6 6 0 0 1 12 0 v4" className="il-lit" fill="none" strokeWidth="1.3" />
      <circle cx="170" cy="62" r="2.4" className="il-mk a-pulse" />
    </>);
  },

  /* HEALTHCARE — an ECG heartbeat travelling, a care cross, connected nodes */
  healthcare(mk) {
    return (<>
      <circle cx="170" cy="160" r="110" className="il-line" fill="none" strokeWidth="1" style={{ opacity: .14 }} />
      <path d="M48 160 H120 l14 -46 18 92 16 -120 14 74 12 -28 H292" className="il-lit a-flow" fill="none" strokeWidth="1.8" strokeDasharray="260" style={{ "--len": 260 }} />
      <g>
        <rect x="156" y="206" width="28" height="28" className="il-mk" rx="4" />
        <path d="M170 212 v16 M162 220 h16" className="il-lit" strokeWidth="2" fill="none" />
      </g>
      {[[80, 96], [262, 100], [96, 232], [250, 228]].map(([x, y], i) => (<g key={"cn" + i}>{dot(x, y, 7, "il-node", "cd" + i)}<circle cx={x} cy={y} r="13" className="il-lit a-pulse" fill="none" strokeWidth="1" style={{ animationDelay: (i * .5) + "s" }} /></g>))}
    </>);
  },

  /* RETAIL — a customer journey path with stops, a basket accent marching */
  retail(mk) {
    const d = "M40 230 C 90 230 96 130 150 130 S 220 230 280 200";
    const stops = [[40, 230], [150, 130], [280, 200]];
    return (<>
      <path d={d} className="il-line" fill="none" strokeWidth="5" style={{ opacity: .12 }} />
      <path d={d} className="il-lit a-march" fill="none" strokeWidth="1.5" strokeDasharray="6 8" />
      {stops.map(([x, y], i) => (<g key={"st" + i}><circle cx={x} cy={y} r="10" className={i === 2 ? "il-lit" : "il-node"} fill="none" strokeWidth="1.3" />{dot(x, y, 3, i === 2 ? "il-mk" : "il-node", "sp" + i)}</g>))}
      <g transform="translate(150 92)">
        <path d="M-14 -4 h28 l-4 20 h-20 Z" className="il-mk" />
        <path d="M-9 -4 l4 -10 h10 l4 10" className="il-lit" fill="none" strokeWidth="1.3" />
      </g>
      <circle cx="280" cy="200" r="18" className="il-lit a-pulse" fill="none" strokeWidth="1.1" />
    </>);
  },

  /* TELECOM — a broadcast tower emitting expanding signal rings */
  telecom(mk) {
    return (<>
      <path d="M170 96 L150 226 H190 Z" className="il-line" fill="none" strokeWidth="1.4" />
      <path d="M158 168 H182 M154 200 H186" className="il-line" strokeWidth="1.2" />
      <circle cx="170" cy="92" r="6" className="il-mk" />
      {[1, 2, 3].map(i => (<g key={"r" + i}>
        <path d={`M${170 - 26 * i} ${92 - 18 * i} a${32 * i} ${32 * i} 0 0 1 ${52 * i} 0`} className="il-lit a-ripple" fill="none" strokeWidth="1.3" style={{ transformOrigin: "170px 92px", animationDelay: (i * .5) + "s" }} />
      </g>))}
      <line x1="120" y1="226" x2="220" y2="226" className="il-line" strokeWidth="1.2" />
      {[80, 260].map((x, i) => <rect key={"nd" + i} x={x - 9} y="206" width="18" height="20" className="il-node" strokeWidth="1" />)}
      {[80, 260].map((x, i) => ln(x, 216, 170, 200, "il-line", "tl" + i, { strokeDasharray: "2 6", className: "il-lit a-flow", style: { animationDelay: (i * .4) + "s" } }))}
    </>);
  },

  /* MANUFACTURING — interlocking gears spinning, a conveyor of parts marching */
  manufacturing(mk) {
    const gear = (cx, cy, R, teeth, cls) => {
      const els = [];
      for (let i = 0; i < teeth; i++) { const a = (Math.PI * 2 * i) / teeth; els.push(<line key={i} x1={cx + Math.cos(a) * R} y1={cy + Math.sin(a) * R} x2={cx + Math.cos(a) * (R + 8)} y2={cy + Math.sin(a) * (R + 8)} className={cls} strokeWidth="1.4" />); }
      return els;
    };
    return (<>
      <g className="a-spins" style={{ transformOrigin: "128px 120px" }}>
        <circle cx="128" cy="120" r="34" className="il-lit" fill="none" strokeWidth="1.3" />{gear(128, 120, 34, 10, "il-lit")}<circle cx="128" cy="120" r="10" className="il-node" />
      </g>
      <g className="a-spins-rev" style={{ transformOrigin: "204px 150px" }}>
        <circle cx="204" cy="150" r="26" className="il-mk" style={{ opacity: .5 }} /><circle cx="204" cy="150" r="26" className="il-line" fill="none" strokeWidth="1.3" />{gear(204, 150, 26, 8, "il-line")}<circle cx="204" cy="150" r="8" className="il-node" />
      </g>
      <line x1="56" y1="234" x2="288" y2="234" className="il-line" strokeWidth="1.3" />
      <line x1="56" y1="214" x2="288" y2="214" className="il-lit a-march" strokeWidth="1.4" strokeDasharray="14 16" />
      {[84, 140, 196, 252].map((x, i) => nodeSq(x, 224, 14, i === 1 ? "il-mk" : "il-node", "pt" + i))}
    </>);
  },

  /* COMPANY hub — an organisation network branching from a head node */
  company(mk) {
    const tier2 = [[90, 170], [170, 170], [250, 170]];
    const tier3 = [[60, 240], [120, 240], [200, 240], [280, 240]];
    return (<>
      {tier2.map(([x, y], i) => ln(170, 100, x, y, "il-line", "t2" + i, { style: { opacity: .5 } }))}
      {ln(90, 170, 60, 240, "il-line", "a", { style: { opacity: .4 } })}
      {ln(90, 170, 120, 240, "il-line", "b", { style: { opacity: .4 } })}
      {ln(250, 170, 200, 240, "il-line", "c", { style: { opacity: .4 } })}
      {ln(250, 170, 280, 240, "il-line", "d", { style: { opacity: .4 } })}
      <rect x="156" y="86" width="28" height="28" className="il-mk" rx="3" />
      {tier2.map(([x, y], i) => dot(x, y, 9, "il-node", "n2" + i))}
      {tier3.map(([x, y], i) => nodeSq(x, y, 12, "il-node", "n3" + i))}
      <circle cx="170" cy="100" r="22" className="il-lit a-pulse" fill="none" strokeWidth="1.1" />
    </>);
  },

  /* OUR STORY — a timeline rail with era milestones, progress filling along it */
  story(mk) {
    const eras = [[64, "2005"], [148, "2010s"], [232, "2020s"], [300, "Today"]];
    return (<>
      <line x1="56" y1="160" x2="300" y2="160" className="il-line" strokeWidth="2" style={{ opacity: .3 }} />
      <line x1="56" y1="160" x2="300" y2="160" className="il-lit a-march" strokeWidth="2" strokeDasharray="244" style={{ "--len": 244 }} />
      {eras.map(([x, lab], i) => (<g key={"er" + i}>
        <line x1={x} y1="150" x2={x} y2="170" className="il-line" strokeWidth="1.2" />
        {i === 3 ? nodeSq(x, 160, 16, "il-mk", "em" + i) : dot(x, 160, 7, "il-node", "ed" + i)}
        <text x={x} y={i % 2 ? 124 : 200} textAnchor="middle" className="il-lit" style={{ font: "11px var(--font-mono, monospace)", fill: "currentColor", opacity: .65 }}>{lab}</text>
        <line x1={x} y1={i % 2 ? 132 : 170} x2={x} y2={i % 2 ? 150 : 188} className="il-line" strokeWidth="1" style={{ opacity: .3 }} />
      </g>))}
    </>);
  },

  /* LEADERSHIP — a collaboration circle of people linked together */
  leadership(mk) {
    const pts = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI * 2 * i) / 6 - Math.PI / 2; return [170 + Math.cos(a) * 96, 160 + Math.sin(a) * 96]; });
    const person = (x, y, accent, key) => (<g key={key}>
      <circle cx={x} cy={y - 9} r="9" className={accent ? "il-mk" : "il-node"} strokeWidth="1" style={accent ? null : { fill: "var(--ink-deep)" }} />
      <path d={`M${x - 14} ${y + 16} a14 14 0 0 1 28 0`} className={accent ? "il-lit" : "il-line"} fill="none" strokeWidth="1.3" />
    </g>);
    return (<>
      {pts.map(([x, y], i) => ln(x, y, pts[(i + 1) % 6][0], pts[(i + 1) % 6][1], "il-line", "ln" + i, { style: { opacity: .2 } }))}
      {pts.map(([x, y], i) => ln(x, y, 170, 160, "il-line", "sp" + i, { style: { opacity: .14 } }))}
      {pts.map(([x, y], i) => person(x, y, i === 0, "p" + i))}
      <circle cx="170" cy="160" r="18" className="il-lit a-pulse" fill="none" strokeWidth="1.2" />
    </>);
  },

  /* VISION & MISSION — growth vectors converging on a destination target */
  vision(mk) {
    return (<>
      <circle cx="262" cy="120" r="46" className="il-line" fill="none" strokeWidth="1.2" />
      <circle cx="262" cy="120" r="28" className="il-lit" fill="none" strokeWidth="1.2" />
      <circle cx="262" cy="120" r="11" className="il-mk a-pulse" />
      {[[40, 248], [44, 200], [52, 150]].map(([x, y], i) => (
        <g key={"v" + i}>
          <path d={`M${x} ${y} L${230 - i * 6} ${134 + i * 4}`} className="il-lit a-flow" fill="none" strokeWidth="1.5" strokeDasharray="3 7" style={{ animationDelay: (i * .4) + "s" }} />
        </g>))}
      <path d="M218 128 l18 -4 -8 16 Z" className="il-mk" />
      <path d="M40 256 C 120 250 150 210 210 150" className="il-line" fill="none" strokeWidth="1" strokeDasharray="2 6" style={{ opacity: .3 }} />
      {[[40, 248], [44, 200], [52, 150]].map(([x, y], i) => dot(x, y, 4, "il-node", "vd" + i))}
    </>);
  },

  /* VALUES — five connected principles around a foundational core */
  values(mk) {
    const pts = Array.from({ length: 5 }, (_, i) => { const a = (Math.PI * 2 * i) / 5 - Math.PI / 2; return [170 + Math.cos(a) * 100, 160 + Math.sin(a) * 100]; });
    return (<>
      <g className="a-spin" style={{ opacity: .9 }}>
        <polygon points={pts.map(p => p.join(",")).join(" ")} className="il-lit" fill="none" strokeWidth="1.2" />
      </g>
      {pts.map(([x, y], i) => ln(x, y, 170, 160, "il-line", "vl" + i, { style: { opacity: .18 } }))}
      {pts.map(([x, y], i) => i === 0 ? nodeSq(x, y, 18, "il-mk", "vn" + i) : nodeSq(x, y, 13, "il-node", "vn" + i))}
      <circle cx="170" cy="160" r="22" className="il-lit a-pulse" fill="none" strokeWidth="1.2" />
      <rect x="161" y="151" width="18" height="18" className="il-mk" style={{ opacity: .5 }} />
    </>);
  },

  /* CASE STUDIES hub — layered story cards with a forward play */
  casehub(mk) {
    const card = (o, cls, dl) => (<g className="a-float" style={{ animationDelay: dl }}>
      <rect x={96 + o} y={96 + o} width="150" height="100" className={cls} fill="none" strokeWidth="1.3" rx="5" />
    </g>);
    return (<>
      {card(28, "il-line", "0s")}
      {card(14, "il-line", ".5s")}
      <g className="a-float" style={{ animationDelay: "1s" }}>
        <rect x="96" y="96" width="150" height="100" className="il-mk" style={{ opacity: .42 }} rx="5" />
        <rect x="96" y="96" width="150" height="100" className="il-lit" fill="none" strokeWidth="1.4" rx="5" />
        <line x1="116" y1="124" x2="200" y2="124" className="il-lit" strokeWidth="1.2" style={{ opacity: .7 }} />
        <line x1="116" y1="140" x2="180" y2="140" className="il-line" strokeWidth="1.2" />
        <polygon points="160,156 160,182 184,169" className="il-lit" fill="none" strokeWidth="1.4" />
      </g>
    </>);
  },

  /* INSIGHTS — stacked article lines with a signal/idea pulse */
  insights(mk) {
    return (<>
      <rect x="80" y="80" width="150" height="170" className="il-line" fill="none" strokeWidth="1.3" rx="5" />
      {[112, 132, 152, 172, 192, 212].map((y, i) => <line key={"al" + i} x1="100" y1={y} x2={i % 2 ? 190 : 210} y2={y} className={i === 0 ? "il-lit" : "il-line"} strokeWidth={i === 0 ? 1.6 : 1.1} style={{ opacity: i === 0 ? .8 : .4 }} />)}
      <circle cx="246" cy="92" r="20" className="il-lit a-pulse" fill="none" strokeWidth="1.3" />
      <path d="M240 88 a6 6 0 0 1 12 0 c0 4 -3 5 -3 8 h-6 c0 -3 -3 -4 -3 -8 Z" className="il-mk" />
      <line x1="244" y1="104" x2="250" y2="104" className="il-lit" strokeWidth="1.2" />
    </>);
  },

  /* CAREERS — an ascending path of people, growth upward */
  careers(mk) {
    const steps = [[70, 232], [130, 196], [190, 150], [250, 100]];
    const person = (x, y, accent, key) => (<g key={key}>
      <circle cx={x} cy={y - 12} r="9" className={accent ? "il-mk" : "il-node"} strokeWidth="1" style={accent ? null : { fill: "var(--ink-deep)" }} />
      <path d={`M${x - 13} ${y + 12} a13 13 0 0 1 26 0`} className={accent ? "il-lit" : "il-line"} fill="none" strokeWidth="1.3" />
    </g>);
    return (<>
      <path d="M62 244 L70 232 130 196 190 150 250 100 262 88" className="il-line" fill="none" strokeWidth="1.2" strokeDasharray="3 6" style={{ opacity: .4 }} />
      {steps.map(([x, y], i) => <rect key={"bar" + i} x={x - 16} y={y + 20} width="32" height={232 - y + 8} className="il-line" fill="none" strokeWidth="1" style={{ opacity: .22 }} />)}
      {steps.map(([x, y], i) => person(x, y, i === 3, "cp" + i))}
      <path d="M250 78 l16 -6 -6 16" className="il-mk" fill="none" strokeWidth="1.6" />
      <circle cx="250" cy="88" r="20" className="il-lit a-pulse" fill="none" strokeWidth="1" />
    </>);
  },

  /* MICROSOFT — an Azure cloud ecosystem: cloud platform, service tiles, an AI core */
  microsoft(mk) {
    const cloud = "M96 118 a26 26 0 0 1 48 -8 a22 22 0 0 1 40 4 a20 20 0 0 1 -4 38 H100 a20 20 0 0 1 -4 -34 Z";
    const tiles = [[112, 196], [156, 196], [200, 196], [112, 236], [156, 236], [200, 236]];
    return (<>
      <g className="a-float"><path d={cloud} className="il-lit" fill="none" strokeWidth="1.4" /></g>
      <g className="a-float" style={{ animationDelay: ".6s" }}><path d={cloud} className="il-mk" style={{ opacity: .28 }} /></g>
      {tiles.slice(0, 5).map(([x, y], i) => { const [nx, ny] = tiles[i + 1]; return ln(x, y, nx, ny, "il-lit a-flow", "ml" + i, { strokeDasharray: "2 6", style: { animationDelay: (i * .2) + "s" } }); })}
      {tiles.map(([x, y], i) => ln(x, y - 14, x, 150, "il-line", "mv" + i, { style: { opacity: .12 } }))}
      {tiles.map(([x, y], i) => (
        <g key={"mt" + i}>
          <rect x={x - 15} y={y - 13} width="30" height="26" className={i === 2 ? "il-mk" : "il-node"} rx="3" style={i === 2 ? null : { fill: "var(--ink-deep)" }} />
          <line x1={x - 7} y1={y - 2} x2={x + 7} y2={y - 2} className="il-lit" strokeWidth="1" style={{ opacity: .6 }} />
        </g>))}
      <g className="a-spin" style={{ opacity: .8 }}><circle cx="256" cy="120" r="30" className="il-lit" fill="none" strokeWidth="1" strokeDasharray="3 8" /></g>
      <rect x="244" y="108" width="24" height="24" className="il-mk" />
      <circle cx="256" cy="120" r="44" className="il-line a-pulse" fill="none" strokeWidth="1" />
      {ln(216, 134, 234, 120, "il-lit a-flow", "mc", { strokeDasharray: "2 6" })}
    </>);
  },

  /* PARTNERS — interlocking partnership rings with partner nodes around them */
  partners(mk) {
    const onRing = (cx, n, r, off) => Array.from({ length: n }, (_, i) => { const a = (Math.PI * 2 * i) / n + off; return [cx + Math.cos(a) * r, 160 + Math.sin(a) * r]; });
    const left = onRing(134, 4, 60, .3), right = onRing(206, 4, 60, .8);
    return (<>
      <circle cx="134" cy="160" r="60" className="il-lit" fill="none" strokeWidth="1.4" />
      <circle cx="206" cy="160" r="60" className="il-line" fill="none" strokeWidth="1.4" />
      <ellipse cx="170" cy="160" rx="18" ry="40" className="il-mk" style={{ opacity: .4 }} />
      <g className="a-spin" style={{ transformBox: "view-box", transformOrigin: "134px 160px" }}>{left.map(([x, y], i) => nodeSq(x, y, i === 0 ? 15 : 11, i === 0 ? "il-mk" : "il-node", "lp" + i))}</g>
      <g className="a-spin-rev" style={{ transformBox: "view-box", transformOrigin: "206px 160px" }}>{right.map(([x, y], i) => <circle key={"rp" + i} cx={x} cy={y} r={i === 0 ? 8 : 6} className="il-node" strokeWidth="1" />)}</g>
      <circle cx="170" cy="160" r="7" className="il-lit a-pulse" fill="currentColor" />
    </>);
  },

  /* fallback */
  network(mk) {
    const pts = [[60, 90], [280, 80], [70, 240], [262, 236], [170, 60]];
    return (<>
      {pts.map(([x, y], i) => ln(170, 160, x, y, "il-line", "nl" + i, { strokeDasharray: "2 8", className: "il-lit a-flow", style: { animationDelay: (i * .3) + "s" } }))}
      {pts.map(([x, y], i) => nodeSq(x, y, 12, i === 4 ? "il-mk" : "il-node", "nn" + i))}
      <circle cx="170" cy="160" r="24" className="il-lit a-pulse" fill="none" strokeWidth="1.2" />
      <rect x="160" y="150" width="20" height="20" className="il-mk" />
    </>);
  },
};

function HeroFigure({ variant, hue = "blue" }) {
  const mk = HUE_MK[hue] || "var(--tick-1)";
  const fn = FIGURES[variant] || FIGURES.network;
  return (
    <div className={"phero__ill phero__ill--fig fig--" + (variant || "network")} data-parallax="0.05" aria-hidden="true" style={{ "--il-mk": mk }}>
      <svg viewBox="0 0 340 320" preserveAspectRatio="xMidYMid meet">{fn(mk)}</svg>
    </div>);
}

window.HeroFigure = HeroFigure;
