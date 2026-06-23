/* @ds-bundle: {"format":3,"namespace":"ICTDesignSystem_ed0ed6","components":[{"name":"PartnerLogo","sourcePath":"components/brand/PartnerLogo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"LineIcon","sourcePath":"components/content/LineIcon.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"},{"name":"Ticks","sourcePath":"components/labels/Ticks.jsx"}],"sourceHashes":{"components/brand/PartnerLogo.jsx":"03fb1e5c12fb","components/buttons/Button.jsx":"3345d1ac9f0f","components/buttons/TextLink.jsx":"2da93023c0d4","components/content/Card.jsx":"cac0a44f1580","components/content/LineIcon.jsx":"fc59b7a3d985","components/content/Stat.jsx":"f30690da439e","components/forms/Checkbox.jsx":"6dfe306c4cb2","components/forms/Input.jsx":"2e7f754c40ad","components/forms/Select.jsx":"350fe751e84a","components/labels/Eyebrow.jsx":"54cdfe82b85e","components/labels/Tag.jsx":"d5694e88c2c9","components/labels/Ticks.jsx":"8b22cd29a8f2","ui_kits/website/chrome.jsx":"5f7d4231064c","ui_kits/website/field.js":"6604ec142f8e","ui_kits/website/home.jsx":"22c5cf3032fa","ui_kits/website/pages.jsx":"0c11d8874449"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ICTDesignSystem_ed0ed6 = window.ICTDesignSystem_ed0ed6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/PartnerLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — PartnerLogo. Loads a normalised partner SVG (fill:currentColor) and
   renders it monochrome — calm grey on dark, deep navy on paper, lifting
   toward white on hover. Per-logo optical sizing keeps perceived weight even.
   `basePath` points at the folder holding the partner SVGs. */

const {
  useEffect: useEffectPL,
  useRef: useRefPL
} = React;
const ICTDS_PARTNERS = {
  "Microsoft": "microsoft",
  "Cisco": "cisco",
  "Google Cloud": "googlecloud",
  "Palo Alto Networks": "paloalto",
  "IBM": "ibm",
  "Dell Technologies": "dell",
  "HPE": "hpe",
  "Nutanix": "nutanix",
  "Veeam": "veeam"
};

/* optical max-heights (px) balanced as a set, not mathematically equal */
const ICTDS_PARTNER_H = {
  cisco: 35,
  dell: 40,
  hpe: 43,
  googlecloud: 33,
  ibm: 29,
  nutanix: 19,
  microsoft: 26,
  veeam: 23,
  paloalto: 21
};
const ICTDS_PARTNER_CSS = `
.ictds-partner { display: inline-flex; align-items: center; justify-content: center; color: var(--ictds-logo-ink, #9D9BB6); transition: color var(--dur-base) var(--ease-out); }
.ictds-partner svg { display: block; width: auto; height: var(--ictds-lh, 28px); max-width: 168px; }
.ictds-partner--paper { --ictds-logo-ink: #2C2942; }
.ictds-partner__txt { font-family: var(--font-display); font-weight: 500; letter-spacing: -0.01em; color: var(--ictds-logo-ink, #9D9BB6); }
`;
function ensureICTDSPartnerStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-partner-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-partner-css";
  s.textContent = ICTDS_PARTNER_CSS;
  document.head.appendChild(s);
}
function PartnerLogo({
  name,
  basePath = "assets/partners",
  onPaper = false,
  className = "",
  ...rest
}) {
  const ref = useRefPL(null);
  const slug = ICTDS_PARTNERS[name];
  useEffectPL(ensureICTDSPartnerStyles, []);
  ensureICTDSPartnerStyles();
  useEffectPL(() => {
    if (!slug || !ref.current) return;
    let alive = true;
    const base = basePath.replace(/\/$/, "");
    fetch(base + "/" + slug + ".svg").then(r => r.text()).then(svg => {
      if (!alive || !ref.current) return;
      ref.current.innerHTML = svg;
      const el = ref.current.querySelector("svg");
      if (el) {
        el.removeAttribute("width");
        el.removeAttribute("height");
        el.setAttribute("focusable", "false");
        el.setAttribute("aria-hidden", "true");
      }
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [slug, basePath]);
  if (!slug) return /*#__PURE__*/React.createElement("span", {
    className: "ictds-partner__txt"
  }, name);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ictds-partner", onPaper ? "ictds-partner--paper" : "", className].filter(Boolean).join(" "),
    style: {
      "--ictds-lh": (ICTDS_PARTNER_H[slug] || 28) + "px"
    },
    ref: ref,
    role: "img",
    "aria-label": name + " logo"
  }, rest));
}
Object.assign(__ds_scope, { PartnerLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PartnerLogo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Button. Flat, editorial, 2px radius. Brand-accented primary + outline
   and solid variants for dark and paper surfaces. */

const {
  useEffect: useEffectBtn
} = React;
const ICTDS_BTN_CSS = `
.ictds-btn {
  font-family: var(--font-display);
  font-weight: var(--fw-medium);
  font-size: 15px;
  letter-spacing: 0.005em;
  line-height: 1;
  padding: 15px 26px;
  border: 1px solid transparent;
  border-radius: var(--radius-xs);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color var(--dur-base) var(--ease-out),
    color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-out);
}
.ictds-btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.ictds-btn .ictds-btn__ar { transition: transform var(--dur-base) var(--ease-out); }
.ictds-btn:hover .ictds-btn__ar { transform: translateX(5px); }
.ictds-btn--sm { font-size: 13.5px; padding: 11px 18px; }
.ictds-btn--lg { font-size: 16px; padding: 18px 32px; }

.ictds-btn--primary { background: var(--color-accent); color: #fff; }
.ictds-btn--primary:hover { background: color-mix(in oklab, var(--color-accent) 86%, #000); }
.ictds-btn--primary:active { background: color-mix(in oklab, var(--color-accent) 74%, #000); transform: translateY(1px); }

.ictds-btn--line { border-color: var(--color-border-strong); color: var(--color-fg); background: transparent; }
.ictds-btn--line:hover { border-color: var(--color-fg); background: rgba(255,255,255,0.04); }

.ictds-btn--solid-light { background: var(--color-paper); color: var(--ict-ink-1); }
.ictds-btn--solid-light:hover { background: #fff; }

.ictds-btn--solid-dark { background: var(--ict-ink-1); color: var(--color-paper); }
.ictds-btn--solid-dark:hover { background: var(--ict-ink-0); }

.ictds-btn:disabled, .ictds-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
`;
function ensureICTDSBtnStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-btn-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-btn-css";
  s.textContent = ICTDS_BTN_CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  useEffectBtn(ensureICTDSBtnStyles, []);
  ensureICTDSBtnStyles();
  const cls = ["ictds-btn", "ictds-btn--" + variant, size !== "md" ? "ictds-btn--" + size : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-btn__ar",
    "aria-hidden": "true"
  }, "\u2192") : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — TextLink (.tlink). Editorial text link with an underline that wipes
   in and an arrow that nudges; turns electric blue on hover. */

const {
  useEffect: useEffectTL
} = React;
const ICTDS_TLINK_CSS = `
.ictds-tlink {
  font-family: var(--font-display);
  font-weight: var(--fw-medium);
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: relative;
  padding-bottom: 4px;
  max-width: max-content;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color var(--dur-base) var(--ease-out);
}
.ictds-tlink::after {
  content: ""; position: absolute; left: 0; bottom: 0; height: 1px; width: 100%;
  background: currentColor; transform: scaleX(0); transform-origin: left;
  transition: transform var(--dur-slow) var(--ease-out);
}
.ictds-tlink:hover { color: var(--color-accent-blue); }
.ictds-tlink:hover::after { transform: scaleX(1); }
.ictds-tlink:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; }
.ictds-tlink .ictds-tlink__ar { transition: transform var(--dur-base) var(--ease-out); }
.ictds-tlink:hover .ictds-tlink__ar { transform: translateX(4px); }
`;
function ensureICTDSTLinkStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-tlink-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-tlink-css";
  s.textContent = ICTDS_TLINK_CSS;
  document.head.appendChild(s);
}
function TextLink({
  children,
  href = "#",
  arrow = true,
  onClick,
  className = "",
  ...rest
}) {
  useEffectTL(ensureICTDSTLinkStyles, []);
  ensureICTDSTLinkStyles();
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ["ictds-tlink", className].filter(Boolean).join(" "),
    href: href,
    onClick: onClick
  }, rest), children, arrow ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-tlink__ar",
    "aria-hidden": "true"
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Card. A raised surface (dark) or a connected grid cell with a coloured
   3px top accent bar that grows on hover. The accent-bar treatment is ICT's
   signature for grids of pillars / steps. */

const {
  useEffect: useEffectCard
} = React;
const ICTDS_CARD_CSS = `
.ictds-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-2);
  transition: background-color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-out);
}
.ictds-card--flat { box-shadow: none; }
.ictds-card--cell {
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  border-top: 1px solid var(--color-border);
  padding: var(--space-7) var(--space-6) var(--space-6);
}
.ictds-card--accent::before {
  content: ""; position: absolute; top: -1px; left: var(--space-6);
  width: 40px; height: 3px; background: var(--accent, var(--tick-1));
  opacity: 0.92; transition: width var(--dur-slow) var(--ease-out);
}
.ictds-card--cell.ictds-card--accent::before { left: 0; }
.ictds-card--interactive { cursor: pointer; }
.ictds-card--interactive:hover { background: var(--color-surface-hover); }
.ictds-card--interactive.ictds-card--accent:hover::before { width: 64px; }
.ictds-card__accentbar { display: none; }
`;
const ICTDS_CARD_HUES = {
  blue: "var(--hue-blue-d)",
  purple: "var(--hue-purple-d)",
  violet: "var(--hue-violet-d)",
  magenta: "var(--hue-magenta-d)",
  orange: "var(--hue-orange-d)",
  tick1: "var(--tick-1)",
  tick3: "var(--tick-3)",
  tick4: "var(--tick-4)",
  tick5: "var(--tick-5)"
};
function ensureICTDSCardStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-card-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-card-css";
  s.textContent = ICTDS_CARD_CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  variant = "surface",
  accent,
  interactive = false,
  className = "",
  style = {},
  ...rest
}) {
  useEffectCard(ensureICTDSCardStyles, []);
  ensureICTDSCardStyles();
  const cls = ["ictds-card", variant === "cell" ? "ictds-card--cell" : "", variant === "flat" ? "ictds-card--flat" : "", accent ? "ictds-card--accent" : "", interactive ? "ictds-card--interactive" : "", className].filter(Boolean).join(" ");
  const mergedStyle = accent ? {
    "--accent": ICTDS_CARD_HUES[accent] || accent,
    ...style
  } : style;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: mergedStyle
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/LineIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — LineIcon. Thin geometric outline icons matching the brand's schematic
   system: 24×24, fill:none, stroke:currentColor, 1.5 weight, round joins.
   Monochrome — colour is controlled by the parent's `color`. */

const ICTDS_ICON_PATHS = {
  cloud: /*#__PURE__*/React.createElement("path", {
    d: "M7 18a4 4 0 0 1-.4-7.98A5 5 0 0 1 16.5 9.4 3.5 3.5 0 0 1 17 18H7z"
  }),
  shield: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v5c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V6l7-3z"
  }),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3"
  })),
  layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 5-9 5-9-5 9-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13l9 5 9-5"
  })),
  data: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "6",
    rx: "7",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
  })),
  network: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2v3.8M11 11l-4.5 5M13 11l4.5 5"
  })),
  radar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12l6-3.5"
  })),
  identity: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8.5",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 19a6.5 6.5 0 0 1 13 0"
  })),
  ai: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "12",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.2"
  })),
  operations: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
  })),
  improve: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 16l5-5 4 4 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h4v4"
  })),
  check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12.5l2.5 2.5 4.5-5"
  })),
  compass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.5l-2 5-5 2 2-5 5-2z"
  })),
  bolt: /*#__PURE__*/React.createElement("path", {
    d: "M13 3l-7 9h5l-1 9 7-10h-5l1-8z"
  }),
  target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "0.6"
  })),
  globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "12",
    rx: "3.6",
    ry: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 12h17"
  })),
  delivery: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "2"
  })),
  managed: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "5.5",
    width: "17",
    height: "11",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20h5M12 16.5V20"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "6.5,11 9,11 10.5,8.5 13,13.5 14.5,11 17.5,11"
  })),
  partnership: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14.5",
    cy: "12",
    r: "5"
  }))
};
function LineIcon({
  name = "delivery",
  size = 24,
  strokeWidth = 1.5,
  className = "",
  ...rest
}) {
  const glyph = ICTDS_ICON_PATHS[name] || ICTDS_ICON_PATHS.delivery;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: ["ictds-icon", className].filter(Boolean).join(" "),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, rest), glyph);
}
Object.assign(__ds_scope, { LineIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LineIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Stat. A proof point: a large display value over a mono label. Used in
   hero meta rows and outcome grids to build trust with specifics. */

const {
  useEffect: useEffectStat
} = React;
const ICTDS_STAT_CSS = `
.ictds-stat { display: flex; flex-direction: column; gap: 8px; }
.ictds-stat__value {
  font-family: var(--font-display);
  font-weight: var(--fw-medium);
  font-size: clamp(30px, 3.4vw, 46px);
  letter-spacing: -0.022em;
  line-height: 1;
  color: var(--color-fg-strong);
}
.ictds-stat__value .ictds-stat__unit { color: var(--accent, var(--tick-1)); }
.ictds-stat__label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-fg-subtle);
}
.ictds-stat--paper .ictds-stat__value { color: var(--on-paper); }
.ictds-stat--paper .ictds-stat__label { color: var(--on-paper-mute); }
`;
const ICTDS_STAT_HUES = {
  blue: "var(--hue-blue-d)",
  purple: "var(--hue-purple-d)",
  violet: "var(--hue-violet-d)",
  magenta: "var(--hue-magenta-d)",
  orange: "var(--hue-orange-d)"
};
function ensureICTDSStatStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-stat-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-stat-css";
  s.textContent = ICTDS_STAT_CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  unit,
  label,
  accent = "blue",
  onPaper = false,
  className = "",
  ...rest
}) {
  useEffectStat(ensureICTDSStatStyles, []);
  ensureICTDSStatStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ictds-stat", onPaper ? "ictds-stat--paper" : "", className].filter(Boolean).join(" "),
    style: {
      "--accent": ICTDS_STAT_HUES[accent] || accent
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ictds-stat__value"
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-stat__unit"
  }, unit) : null), label ? /*#__PURE__*/React.createElement("div", {
    className: "ictds-stat__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Checkbox. Square 2px control, fills with core-indigo and shows a tick
   when checked. Uses the shared field stylesheet (see Input.jsx). */

const {
  useEffect: useEffectCheck
} = React;
function ensureICTDSCheckStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-check-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-check-css";
  s.textContent = `
.ictds-check { display: inline-flex; align-items: flex-start; gap: 12px; cursor: pointer; font-size: 15px; color: var(--color-fg-muted); line-height: 1.5; }
.ictds-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.ictds-check__box { flex: 0 0 auto; width: 20px; height: 20px; margin-top: 1px; border: 1px solid var(--color-border-strong); border-radius: var(--radius-xs); background: var(--ict-ink-2); display: inline-flex; align-items: center; justify-content: center; transition: border-color var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out); }
.ictds-check:hover .ictds-check__box { border-color: var(--color-fg-subtle); }
.ictds-check__box svg { opacity: 0; transition: opacity var(--dur-fast) var(--ease-out); }
.ictds-check input:checked + .ictds-check__box { background: var(--color-accent); border-color: var(--color-accent); }
.ictds-check input:checked + .ictds-check__box svg { opacity: 1; }
.ictds-check input:focus-visible + .ictds-check__box { outline: 2px solid var(--color-focus); outline-offset: 2px; }`;
  document.head.appendChild(s);
}
function Checkbox({
  children,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled,
  className = "",
  ...rest
}) {
  useEffectCheck(ensureICTDSCheckStyles, []);
  ensureICTDSCheckStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["ictds-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    name: name,
    value: value,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ictds-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5l2.3 2.3L9.5 3.5"
  }))), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — form controls (Input, Textarea, Select, Checkbox). Premium dark fields:
   midnight surface, hairline border that lifts on focus to a branded ring,
   mono uppercase label above. Shared stylesheet, injected once. */

const {
  useEffect: useEffectField
} = React;
const ICTDS_FIELD_CSS = `
.ictds-field { display: flex; flex-direction: column; gap: 9px; }
.ictds-field__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-fg-subtle);
}
.ictds-field__req { color: var(--color-accent-blue); margin-left: 4px; }
.ictds-control {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-fg);
  background: var(--ict-ink-2);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-xs);
  padding: 14px 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out);
}
.ictds-control::placeholder { color: var(--color-fg-faint); }
.ictds-control:hover { border-color: var(--color-fg-subtle); }
.ictds-control:focus { outline: none; border-color: var(--color-accent-blue); box-shadow: 0 0 0 3px rgba(0,152,255,0.22); background: var(--ict-ink-3); }
.ictds-control:disabled { opacity: 0.5; cursor: not-allowed; }
.ictds-field--error .ictds-control { border-color: var(--color-danger); }
.ictds-field--error .ictds-control:focus { box-shadow: 0 0 0 3px rgba(255,42,104,0.22); }
textarea.ictds-control { resize: vertical; min-height: 120px; line-height: 1.55; }
.ictds-select-wrap { position: relative; }
select.ictds-control { appearance: none; -webkit-appearance: none; padding-right: 42px; cursor: pointer; }
.ictds-select-wrap::after {
  content: ""; position: absolute; right: 18px; top: 50%; width: 8px; height: 8px;
  border-right: 1.6px solid var(--color-fg-subtle); border-bottom: 1.6px solid var(--color-fg-subtle);
  transform: translateY(-70%) rotate(45deg); pointer-events: none;
}
.ictds-field__hint { font-size: 13px; color: var(--color-fg-subtle); }
.ictds-field--error .ictds-field__hint { color: var(--color-danger); }
.ictds-check { display: inline-flex; align-items: flex-start; gap: 12px; cursor: pointer; font-size: 15px; color: var(--color-fg-muted); line-height: 1.5; }
.ictds-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.ictds-check__box {
  flex: 0 0 auto; width: 20px; height: 20px; margin-top: 1px;
  border: 1px solid var(--color-border-strong); border-radius: var(--radius-xs);
  background: var(--ict-ink-2); display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out);
}
.ictds-check__box svg { opacity: 0; transition: opacity var(--dur-fast) var(--ease-out); }
.ictds-check input:checked + .ictds-check__box { background: var(--color-accent); border-color: var(--color-accent); }
.ictds-check input:checked + .ictds-check__box svg { opacity: 1; }
.ictds-check input:focus-visible + .ictds-check__box { outline: 2px solid var(--color-focus); outline-offset: 2px; }
`;
function ensureICTDSFieldStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-field-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-field-css";
  s.textContent = ICTDS_FIELD_CSS;
  document.head.appendChild(s);
}
function FieldShell({
  label,
  required,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ictds-field", error ? "ictds-field--error" : ""].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__label"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__req",
    "aria-hidden": "true"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__hint"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__hint"
  }, hint) : null);
}
function Input({
  label,
  required,
  hint,
  error,
  multiline = false,
  className = "",
  ...rest
}) {
  useEffectField(ensureICTDSFieldStyles, []);
  ensureICTDSFieldStyles();
  return /*#__PURE__*/React.createElement(FieldShell, {
    label: label,
    required: required,
    hint: hint,
    error: error
  }, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["ictds-control", className].filter(Boolean).join(" ")
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    className: ["ictds-control", className].filter(Boolean).join(" ")
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Select. Native select styled to match the field system, with a custom
   chevron. Shares the injected field stylesheet from Input.jsx. */

const {
  useEffect: useEffectSelect
} = React;
function ensureICTDSFieldStylesForSelect() {
  // Styles live in the shared #ictds-field-css block (see Input.jsx). If Input
  // hasn't mounted yet, inject a minimal copy so Select still renders correctly.
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-field-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-field-css";
  s.textContent = `
.ictds-field { display: flex; flex-direction: column; gap: 9px; }
.ictds-field__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-fg-subtle); }
.ictds-control { font-family: var(--font-body); font-size: 16px; color: var(--color-fg); background: var(--ict-ink-2); border: 1px solid var(--color-border-strong); border-radius: var(--radius-xs); padding: 14px 16px; width: 100%; box-sizing: border-box; transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out); }
.ictds-control:hover { border-color: var(--color-fg-subtle); }
.ictds-control:focus { outline: none; border-color: var(--color-accent-blue); box-shadow: 0 0 0 3px rgba(0,152,255,0.22); background: var(--ict-ink-3); }
.ictds-select-wrap { position: relative; }
select.ictds-control { appearance: none; -webkit-appearance: none; padding-right: 42px; cursor: pointer; }
.ictds-select-wrap::after { content: ""; position: absolute; right: 18px; top: 50%; width: 8px; height: 8px; border-right: 1.6px solid var(--color-fg-subtle); border-bottom: 1.6px solid var(--color-fg-subtle); transform: translateY(-70%) rotate(45deg); pointer-events: none; }
.ictds-field__hint { font-size: 13px; color: var(--color-fg-subtle); }`;
  document.head.appendChild(s);
}
function Select({
  label,
  required,
  hint,
  options = [],
  placeholder,
  className = "",
  ...rest
}) {
  useEffectSelect(ensureICTDSFieldStylesForSelect, []);
  ensureICTDSFieldStylesForSelect();
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    className: "ictds-field"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__label"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__req",
    "aria-hidden": "true"
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "ictds-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["ictds-control", className].filter(Boolean).join(" "),
    defaultValue: placeholder ? "" : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))), hint ? /*#__PURE__*/React.createElement("span", {
    className: "ictds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Eyebrow / kicker. Mono uppercase label with a leading accent tick.
   Sits above section titles; inherits the section's accent hue. */

const {
  useEffect: useEffectEb
} = React;
const ICTDS_EYEBROW_CSS = `
.ictds-eyebrow {
  font-family: var(--font-mono);
  font-weight: var(--fw-medium);
  font-size: var(--fs-label);
  letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0;
}
.ictds-eyebrow::before {
  content: ""; width: 16px; height: 2px; flex: 0 0 auto;
  background: var(--accent, var(--tick-3)); opacity: 0.92;
}
.ictds-eyebrow--paper { color: var(--on-paper-mute); }
.ictds-eyebrow--paper::before { background: var(--accent-ink, var(--tick-3)); }
`;
const ICTDS_HUES = {
  blue: {
    d: "var(--hue-blue-d)",
    p: "var(--hue-blue-p)"
  },
  purple: {
    d: "var(--hue-purple-d)",
    p: "var(--hue-purple-p)"
  },
  violet: {
    d: "var(--hue-violet-d)",
    p: "var(--hue-violet-p)"
  },
  magenta: {
    d: "var(--hue-magenta-d)",
    p: "var(--hue-magenta-p)"
  },
  orange: {
    d: "var(--hue-orange-d)",
    p: "var(--hue-orange-p)"
  }
};
function ensureICTDSEyebrowStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-eyebrow-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-eyebrow-css";
  s.textContent = ICTDS_EYEBROW_CSS;
  document.head.appendChild(s);
}
function Eyebrow({
  children,
  accent = "violet",
  onPaper = false,
  className = "",
  ...rest
}) {
  useEffectEb(ensureICTDSEyebrowStyles, []);
  ensureICTDSEyebrowStyles();
  const hue = ICTDS_HUES[accent] || ICTDS_HUES.violet;
  const style = {
    "--accent": hue.d,
    "--accent-ink": hue.p
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    className: ["ictds-eyebrow", onPaper ? "ictds-eyebrow--paper" : "", className].filter(Boolean).join(" "),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Tag / capability chip. Mono uppercase. Square "cap" style (service
   capability chips) or rounded "pill" style (story tags). */

const {
  useEffect: useEffectTag
} = React;
const ICTDS_TAG_CSS = `
.ictds-tag {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  border: 1px solid var(--color-border);
  background: transparent;
  padding: 7px 12px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  border-radius: var(--radius-xs);
}
.ictds-tag--pill { border-radius: var(--radius-pill); background: rgba(255,255,255,0.025); font-size: 11px; padding: 6px 13px; }
.ictds-tag--paper { color: var(--on-paper-soft); border-color: var(--rule-paper); }
`;
function ensureICTDSTagStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-tag-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-tag-css";
  s.textContent = ICTDS_TAG_CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  variant = "cap",
  onPaper = false,
  className = "",
  ...rest
}) {
  useEffectTag(ensureICTDSTagStyles, []);
  ensureICTDSTagStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ictds-tag", variant === "pill" ? "ictds-tag--pill" : "", onPaper ? "ictds-tag--paper" : "", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// components/labels/Ticks.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* ICT — Ticks. The brand spectrum rendered as discrete geometry: a row of
   squares, or a full-width 6-segment bar used as a section divider. */

const {
  useEffect: useEffectTk
} = React;
const ICTDS_TICKS_CSS = `
.ictds-ticks { display: inline-flex; gap: 4px; align-items: center; }
.ictds-ticks i { display: block; }
.ictds-ticks--row i { width: 10px; height: 10px; }
.ictds-ticks--sm i { width: 7px; height: 7px; }
.ictds-ticks--bar { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; width: 100%; }
.ictds-ticks--bar i { width: 100%; height: 3px; }
.ictds-ticks i:nth-child(1) { background: var(--tick-1); }
.ictds-ticks i:nth-child(2) { background: var(--tick-2); }
.ictds-ticks i:nth-child(3) { background: var(--tick-3); }
.ictds-ticks i:nth-child(4) { background: var(--tick-4); }
.ictds-ticks i:nth-child(5) { background: var(--tick-5); }
.ictds-ticks i:nth-child(6) { background: var(--tick-6); }
`;
function ensureICTDSTicksStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ictds-ticks-css")) return;
  const s = document.createElement("style");
  s.id = "ictds-ticks-css";
  s.textContent = ICTDS_TICKS_CSS;
  document.head.appendChild(s);
}
function Ticks({
  variant = "row",
  className = "",
  ...rest
}) {
  useEffectTk(ensureICTDSTicksStyles, []);
  ensureICTDSTicksStyles();
  const variantCls = variant === "bar" ? "ictds-ticks--bar" : variant === "sm" ? "ictds-ticks--row ictds-ticks--sm" : "ictds-ticks--row";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ictds-ticks", variantCls, className].filter(Boolean).join(" "),
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null));
}
Object.assign(__ds_scope, { Ticks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Ticks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* global React */
/* ICT Website UI Kit — Nav + Footer. `go(screen, opts)` switches the SPA. */
const {
  useState: useStateChrome,
  useEffect: useEffectChrome,
  useRef: useRefChrome
} = React;
const ICT_LOGO = "../../assets/ict-logo-small.png";
const NAV_ITEMS = [{
  id: "services",
  label: "Services",
  panel: [{
    no: "01",
    h: "Cloud & Infrastructure Transformation",
    p: "Resilient, scalable, future-ready infrastructure.",
    slug: "cloud"
  }, {
    no: "02",
    h: "Cybersecurity & Digital Resilience",
    p: "Protection, detection, and continuity at enterprise scale.",
    slug: "cybersecurity"
  }, {
    no: "03",
    h: "AI & Intelligent Automation",
    p: "Governed AI and automation that drive measurable outcomes.",
    slug: "ai"
  }, {
    no: "04",
    h: "Managed & Support Services",
    p: "Operate and optimise mission-critical environments.",
    slug: "managed"
  }]
}, {
  id: "approach",
  label: "Approach",
  screen: "home",
  anchor: "approach"
}, {
  id: "stories",
  label: "Success Stories",
  screen: "home",
  anchor: "stories"
}, {
  id: "about",
  label: "About ICT",
  screen: "home",
  anchor: "why"
}];
function Caret() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "nav__caret",
    viewBox: "0 0 12 12",
    width: "11",
    height: "11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4.5l3 3 3-3"
  }));
}
function Nav({
  go
}) {
  const [scrolled, setScrolled] = useStateChrome(false);
  const [openId, setOpenId] = useStateChrome(null);
  const timer = useRefChrome(null);
  useEffectChrome(() => {
    const sc = document.querySelector(".ictsite__scroll") || window;
    const onScroll = () => setScrolled((sc.scrollTop || window.scrollY || 0) > 16);
    onScroll();
    sc.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => sc.removeEventListener("scroll", onScroll);
  }, []);
  const open = id => {
    if (timer.current) clearTimeout(timer.current);
    setOpenId(id);
  };
  const close = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpenId(null), 130);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " is-scrolled" : "")
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav__row",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__logo",
    onClick: () => go("home"),
    "aria-label": "ICT \u2014 home",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICT_LOGO,
    alt: "ICT"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav__links"
  }, NAV_ITEMS.map(item => {
    const isOpen = openId === item.id;
    return /*#__PURE__*/React.createElement("li", {
      key: item.id,
      className: "nav__item" + (isOpen ? " is-open" : ""),
      onMouseEnter: () => item.panel && open(item.id),
      onMouseLeave: () => item.panel && close()
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav__link",
      type: "button",
      "aria-haspopup": item.panel ? "true" : undefined,
      "aria-expanded": item.panel ? isOpen : undefined,
      onClick: () => {
        if (item.panel) {
          setOpenId(isOpen ? null : item.id);
        } else {
          go(item.screen, {
            anchor: item.anchor
          });
        }
      }
    }, /*#__PURE__*/React.createElement("span", null, item.label), item.panel ? /*#__PURE__*/React.createElement(Caret, null) : null), item.panel && isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "nav__panel",
      role: "menu",
      onMouseEnter: () => open(item.id),
      onMouseLeave: close
    }, item.panel.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.no,
      className: "nav__panel-link",
      role: "menuitem",
      type: "button",
      onClick: () => {
        setOpenId(null);
        go("service", {
          slug: l.slug
        });
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nav__panel-no"
    }, l.no), /*#__PURE__*/React.createElement("span", {
      className: "nav__panel-h"
    }, l.h), /*#__PURE__*/React.createElement("span", {
      className: "nav__panel-ar",
      "aria-hidden": "true"
    }, "\u2192"), /*#__PURE__*/React.createElement("span", {
      className: "nav__panel-p"
    }, l.p)))) : null);
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav__spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "nav__cta",
    type: "button",
    onClick: () => go("contact")
  }, /*#__PURE__*/React.createElement("span", null, "Schedule a consultation"), /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192"))));
}
function Footer({
  go
}) {
  const cols = [{
    h: "Services",
    links: [{
      label: "Cloud & Infrastructure Transformation",
      slug: "cloud"
    }, {
      label: "Cybersecurity & Digital Resilience",
      slug: "cybersecurity"
    }, {
      label: "AI & Intelligent Automation",
      slug: "ai"
    }, {
      label: "Managed & Support Services",
      slug: "managed"
    }]
  }, {
    h: "Success Stories",
    links: [{
      label: "Financial Services",
      screen: "home",
      anchor: "stories"
    }, {
      label: "Education & Research",
      screen: "home",
      anchor: "stories"
    }, {
      label: "Public Sector",
      screen: "home",
      anchor: "stories"
    }]
  }, {
    h: "About ICT",
    links: [{
      label: "Company Overview",
      screen: "home",
      anchor: "why"
    }, {
      label: "Technology Partnerships",
      screen: "home",
      anchor: "partners"
    }, {
      label: "Why ICT",
      screen: "home",
      anchor: "why"
    }, {
      label: "Contact Us",
      screen: "contact"
    }]
  }];
  const socials = [{
    label: "LinkedIn",
    path: "M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0 0 20.45 3zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.08-1.6 2.21v4.25H10V9.75h2.56v1.18h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.7z"
  }, {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231z"
  }];
  const handle = l => l.slug ? go("service", {
    slug: l.slug
  }) : go(l.screen || "home", {
    anchor: l.anchor
  });
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticks ticks--bar",
    style: {
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "footer__logo",
    onClick: () => go("home"),
    "aria-label": "ICT \u2014 home",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ict-logo-white.png",
    alt: "ICT"
  })), /*#__PURE__*/React.createElement("p", {
    className: "footer__tag"
  }, "Qatar's enterprise technology partner \u2014 designing, deploying, securing, and operating the platforms organisations depend on."), /*#__PURE__*/React.createElement("div", {
    className: "footer__contact"
  }, /*#__PURE__*/React.createElement("strong", null, "Doha HQ"), "Lusail Boulevard, West Bay, Doha, Qatar"), /*#__PURE__*/React.createElement("div", {
    className: "footer__contact"
  }, /*#__PURE__*/React.createElement("strong", null, "Contact us"), "hello@ict.qa\xA0\xA0\xB7\xA0\xA0+974 4000 0000"), /*#__PURE__*/React.createElement("div", {
    className: "footer__social",
    "aria-label": "ICT on social"
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: "#",
    "aria-label": s.label,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: s.path
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "footer__cols"
  }, cols.map(g => /*#__PURE__*/React.createElement("div", {
    className: "footer__col",
    key: g.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__h"
  }, g.h), /*#__PURE__*/React.createElement("ul", null, g.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => handle(l)
  }, l.label))))))))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bot"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " ICT W.L.L \xB7 Doha, Qatar"), /*#__PURE__*/React.createElement("div", {
    className: "footer__legal"
  }, /*#__PURE__*/React.createElement("a", null, "Privacy Policy"), /*#__PURE__*/React.createElement("a", null, "Terms of Use"), /*#__PURE__*/React.createElement("a", null, "Cookie Policy")))));
}
Object.assign(window, {
  ICTNav: Nav,
  ICTFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/field.js
try { (() => {
/* global window, document */
/* =========================================================================
   ICTField — reusable canvas particle engine (ICT brand colours)
   modes: "orbit" (particles orbit a focal point, around the hero globe)
          "drift" (ambient particles drifting + twinkling, for the Approach bg)
   Layered depth (size/opacity/parallax), slow seamless motion, cursor parallax.
   Respects prefers-reduced-motion (renders one static frame).
   Usage: const stop = window.ICTField(canvasEl, { mode, host, ... }); stop();
   ========================================================================= */
(function () {
  const COLORS = ["#370fdd", "#612df5", "#8a4df0", "#cc47ab"]; // indigo · violet · purple · magenta

  function sprite(hex) {
    const s = document.createElement("canvas");
    s.width = s.height = 32;
    const c = s.getContext("2d");
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    const grd = c.createRadialGradient(16, 16, 0, 16, 16, 16);
    grd.addColorStop(0, `rgba(255,255,255,0.9)`);
    grd.addColorStop(0.22, `rgba(${r},${g},${b},1)`);
    grd.addColorStop(0.55, `rgba(${r},${g},${b},0.4)`);
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
    c.fillStyle = grd;
    c.fillRect(0, 0, 32, 32);
    return s;
  }
  window.ICTField = function (canvas, opts) {
    opts = opts || {};
    const mode = opts.mode || "orbit";
    const host = opts.host || canvas.parentElement;
    const focal = opts.focal || {
      x: 0.66,
      y: 0.5
    };
    const count = opts.count || 220;
    const baseOpacity = opts.opacity == null ? 1 : opts.opacity;
    const speed = opts.speed == null ? 1 : opts.speed;
    const parallaxK = opts.parallax == null ? 1 : opts.parallax;
    const cursorReact = !!opts.cursor; // a few particles gently react to the cursor
    const ctx = canvas.getContext("2d");
    const sprites = COLORS.map(sprite);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let W = 0,
      H = 0,
      P = [],
      raf = 0,
      running = true,
      t0 = performance.now();
    let mx = 0,
      my = 0,
      cmx = 0,
      cmy = 0;
    let cpx = -9999,
      cpy = -9999,
      scpx = -9999,
      scpy = -9999,
      pointerIn = false;
    function build() {
      const r = canvas.getBoundingClientRect();
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const unit = Math.min(W, H);
      P = [];
      for (let i = 0; i < count; i++) {
        const layer = i % 3; // 0 far .. 2 near
        const depth = 0.45 + layer * 0.32; // size / opacity / parallax weight
        if (mode === "orbit") {
          const rad = unit * (opts.radius ? opts.radius[0] : 0.30) + Math.random() * unit * (opts.radius ? opts.radius[1] - opts.radius[0] : 0.28);
          P.push({
            layer,
            depth,
            ang: Math.random() * Math.PI * 2,
            angVel: (0.018 + Math.random() * 0.03) * (Math.random() < 0.5 ? 1 : -1) * speed,
            rad,
            rx: 1,
            ry: 0.62 + Math.random() * 0.16,
            wob: 0.04 + Math.random() * 0.07,
            wobPh: Math.random() * 6.28,
            wobSp: 0.2 + Math.random() * 0.4,
            sz: (0.7 + Math.random() * 1.6) * depth,
            a: (0.18 + Math.random() * 0.5) * depth,
            cidx: Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1,
            react: Math.random() < 0.32 ? Math.random() < 0.5 ? 1 : -1 : 0 // toward / away / none
          });
        } else {
          P.push({
            layer,
            depth,
            x: Math.random(),
            y: Math.random(),
            vy: (3 + Math.random() * 8) * speed,
            sway: 6 + Math.random() * 26,
            swf: 0.1 + Math.random() * 0.4,
            ph: Math.random() * 6.28,
            sz: (0.7 + Math.random() * 1.8) * depth,
            a: (0.16 + Math.random() * 0.4) * depth,
            cidx: Math.random() < 0.55 ? 3 : Math.random() < 0.5 ? 2 : 1
          });
        }
      }
    }
    function draw(time) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const fx = W * focal.x,
        fy = H * focal.y;
      const px = cmx * parallaxK,
        py = cmy * parallaxK;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        let x, y;
        const par = p.depth * 26;
        if (mode === "orbit") {
          const ang = reduce.matches ? p.ang : p.ang + p.angVel * time;
          const wob = 1 + p.wob * Math.sin((reduce.matches ? 0 : time) * p.wobSp + p.wobPh);
          x = fx + Math.cos(ang) * p.rad * p.rx * wob + px * par;
          y = fy + Math.sin(ang) * p.rad * p.ry * wob + py * par;
        } else {
          const secs = reduce.matches ? 0 : time;
          x = p.x * W + p.sway * Math.sin(secs * p.swf + p.ph) + px * par;
          let yy = (p.y - (reduce.matches ? 0 : secs * p.vy / H)) % 1;
          if (yy < 0) yy += 1;
          y = yy * H + py * par;
        }
        // subtle cursor reactivity — a few particles drift toward/away for depth
        if (cursorReact && p.react && pointerIn && !reduce.matches) {
          const dx = x - scpx,
            dy = y - scpy;
          const dist = Math.hypot(dx, dy);
          const R = Math.min(W, H) * 0.24;
          if (dist < R && dist > 0.001) {
            const f = 1 - dist / R;
            const push = p.react * f * f * 16 * p.depth; // eased, depth-weighted, max ~16px
            x += dx / dist * push;
            y += dy / dist * push;
          }
        }
        const tw = 0.7 + 0.3 * Math.sin((reduce.matches ? 0 : time) * 0.7 + p.wobPh ? p.wobPh || p.ph : 0);
        const a = p.a * baseOpacity * (mode === "orbit" ? tw : 1);
        if (a <= 0.012) continue;
        const s = p.sz * 2.4;
        ctx.globalAlpha = Math.min(1, a);
        ctx.drawImage(sprites[p.cidx], x - s, y - s, s * 2, s * 2);
      }
      ctx.globalCompositeOperation = "source-over";
    }
    function loop() {
      if (!running) return;
      cmx += (mx - cmx) * 0.05;
      cmy += (my - cmy) * 0.05;
      if (scpx < -9000) {
        scpx = cpx;
        scpy = cpy;
      } else {
        scpx += (cpx - scpx) * 0.08;
        scpy += (cpy - scpy) * 0.08;
      }
      draw((performance.now() - t0) / 1000);
      raf = requestAnimationFrame(loop);
    }
    function onMove(e) {
      const r = host.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      cpx = e.clientX - r.left;
      cpy = e.clientY - r.top;
      pointerIn = true;
    }
    function onLeave() {
      mx = 0;
      my = 0;
      pointerIn = false;
    }
    build();
    draw(0);
    let rt;
    const ro = new ResizeObserver(() => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        build();
        draw((performance.now() - t0) / 1000);
      }, 120);
    });
    ro.observe(canvas);
    if (!reduce.matches) {
      raf = requestAnimationFrame(loop);
      if (finePointer.matches && (parallaxK > 0 || cursorReact)) {
        host.addEventListener("pointermove", onMove);
        host.addEventListener("pointerleave", onLeave);
      }
      var onVis = function () {
        running = !document.hidden;
        if (running) raf = requestAnimationFrame(loop);
      };
      document.addEventListener("visibilitychange", onVis);
    }
    return function stop() {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (typeof onVis === "function") document.removeEventListener("visibilitychange", onVis);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/field.js", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* global React, window */
/* ICT Website UI Kit — Homepage sections. `go` switches screens. */
const {
  useEffect: useEffectHome,
  useRef: useRefHome
} = React;

/* ---- service schematic diagrams (from the live site) ---- */
function SvcDiagram({
  kind
}) {
  switch (kind) {
    case "cloud":
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 360 240",
        "aria-hidden": "true"
      }, [36, 110, 184].map(y => /*#__PURE__*/React.createElement("rect", {
        key: y,
        x: "20",
        y: y,
        width: "320",
        height: "44",
        className: "s-line",
        strokeWidth: "1"
      })), [80, 180, 280].map(x => /*#__PURE__*/React.createElement("line", {
        key: x,
        x1: x,
        y1: "80",
        x2: x,
        y2: "184",
        className: "s-line",
        strokeWidth: "1"
      })), [80, 180, 280].map((x, i) => [58, 132, 206].map(y => i === 1 && y === 132 ? /*#__PURE__*/React.createElement("rect", {
        key: `${x}-${y}`,
        x: x - 6,
        y: y - 6,
        width: "12",
        height: "12",
        className: "s-mark",
        style: {
          "--mk": "var(--tick-1)"
        }
      }) : /*#__PURE__*/React.createElement("rect", {
        key: `${x}-${y}`,
        x: x - 5,
        y: y - 5,
        width: "10",
        height: "10",
        className: "s-node",
        strokeWidth: "1"
      }))));
    case "cyber":
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 360 240",
        "aria-hidden": "true"
      }, [[30, 24, 300, 192], [70, 54, 220, 132], [110, 84, 140, 72]].map(([x, y, w, h], i) => /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: w,
        height: h,
        className: "s-line",
        strokeWidth: "1"
      })), /*#__PURE__*/React.createElement("rect", {
        x: "162",
        y: "102",
        width: "36",
        height: "36",
        className: "s-mark",
        style: {
          "--mk": "var(--tick-3)"
        }
      }));
    case "ai":
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 360 240",
        "aria-hidden": "true"
      }, [60, 110, 160].map(y => /*#__PURE__*/React.createElement("g", {
        key: y
      }, /*#__PURE__*/React.createElement("rect", {
        x: "28",
        y: y - 12,
        width: "40",
        height: "24",
        className: "s-node",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "68",
        y1: y,
        x2: "150",
        y2: "120",
        className: "s-line",
        strokeWidth: "1"
      }))), /*#__PURE__*/React.createElement("rect", {
        x: "150",
        y: "92",
        width: "56",
        height: "56",
        className: "s-mark",
        style: {
          "--mk": "var(--tick-4)"
        }
      }), /*#__PURE__*/React.createElement("line", {
        x1: "206",
        y1: "120",
        x2: "288",
        y2: "120",
        className: "s-line-lit",
        strokeWidth: "1.4"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "288",
        y: "104",
        width: "44",
        height: "32",
        className: "s-node",
        strokeWidth: "1"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 360 240",
        "aria-hidden": "true"
      }, Array.from({
        length: 18
      }).map((_, i) => {
        const c = i % 6,
          r = Math.floor(i / 6);
        const x = 24 + c * 54,
          y = 36 + r * 40;
        return i === 8 ? /*#__PURE__*/React.createElement("rect", {
          key: i,
          x: x,
          y: y,
          width: "44",
          height: "28",
          className: "s-mark",
          style: {
            "--mk": "var(--tick-5)"
          }
        }) : /*#__PURE__*/React.createElement("rect", {
          key: i,
          x: x,
          y: y,
          width: "44",
          height: "28",
          className: "s-line",
          strokeWidth: "1"
        });
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "24,196 70,180 116,200 162,170 208,188 254,164 300,182 332,172",
        className: "s-line-lit",
        fill: "none",
        strokeWidth: "1.4"
      }));
  }
}
function WhyIcon({
  kind
}) {
  const c = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };
  switch (kind) {
    case "delivery":
      return /*#__PURE__*/React.createElement("svg", c, /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "15",
        x2: "24",
        y2: "15"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "15",
        r: "2.4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "2.4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "24",
        cy: "15",
        r: "2.4"
      }));
    case "global":
      return /*#__PURE__*/React.createElement("svg", c, /*#__PURE__*/React.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "10.5"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "15",
        cy: "15",
        rx: "4.4",
        ry: "10.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "4.5",
        y1: "15",
        x2: "25.5",
        y2: "15"
      }));
    case "resilient":
      return /*#__PURE__*/React.createElement("svg", c, /*#__PURE__*/React.createElement("rect", {
        x: "4.5",
        y: "5.5",
        width: "21",
        height: "5",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "4.5",
        y: "12.5",
        width: "21",
        height: "5",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "4.5",
        y: "19.5",
        width: "21",
        height: "5",
        rx: "1"
      }));
    case "managed":
      return /*#__PURE__*/React.createElement("svg", c, /*#__PURE__*/React.createElement("rect", {
        x: "3.5",
        y: "6",
        width: "23",
        height: "14",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "11",
        y1: "25",
        x2: "19",
        y2: "25"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "25"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "7,14 10.5,14 12.5,10.5 15.5,17 17.5,13 19.5,14 23,14"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", c, /*#__PURE__*/React.createElement("circle", {
        cx: "11.5",
        cy: "15",
        r: "6.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18.5",
        cy: "15",
        r: "6.5"
      }));
  }
}
function Hero({
  go
}) {
  const fgRef = useRefHome(null);
  const hostRef = useRefHome(null);
  useEffectHome(() => {
    const host = hostRef.current;
    if (window.ICTField && fgRef.current && host) {
      const stop = window.ICTField(fgRef.current, {
        mode: "orbit",
        host,
        focal: {
          x: 0.7,
          y: 0.42
        },
        count: 200,
        radius: [0.26, 0.8],
        opacity: 0.7,
        speed: 0.78,
        parallax: 0
      });
      return () => stop && stop();
    }
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero s-ink-deep",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__art",
    ref: hostRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__bgimg",
    src: "../../assets/hero-bg.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  }), /*#__PURE__*/React.createElement("canvas", {
    className: "hero__field",
    ref: fgRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__head reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker hero__kicker"
  }, "ICT\xA0\xB7\xA0Enterprise Technology Partner"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "The technology foundation for ", /*#__PURE__*/React.createElement("em", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ict-electric-blue)"
    }
  }, "what's next."))), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub lead"
  }, "From cloud and infrastructure to cybersecurity, AI, and managed services, ICT builds and operates the technology platforms that keep organisations secure, resilient, and ready for what's next."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    type: "button",
    onClick: () => go("contact")
  }, "Schedule a consultation ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    type: "button",
    onClick: () => go("home", {
      anchor: "services"
    }),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "inherit"
    }
  }, "Explore our services ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta reveal d3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__meta-item"
  }, /*#__PURE__*/React.createElement("b", null, "ISO 27001"), "\xA0certified"), /*#__PURE__*/React.createElement("span", {
    className: "hero__meta-item"
  }, /*#__PURE__*/React.createElement("b", null, "99.99%"), "\xA0uptime SLA"), /*#__PURE__*/React.createElement("span", {
    className: "hero__meta-item"
  }, "Headquartered in\xA0", /*#__PURE__*/React.createElement("b", null, "Doha, Qatar")))));
}
function Challenge() {
  const items = [{
    no: "01",
    h: "Legacy infrastructure constrains the business",
    p: "Aging data centres, end-of-life platforms, and brittle integrations drive up cost and risk — and slow every change the business needs to make."
  }, {
    no: "02",
    h: "Security and compliance pressure keeps rising",
    p: "Expanding attack surfaces, stricter regulation, and persistent threats demand security, governance, and resilience engineered into every layer."
  }, {
    no: "03",
    h: "Hybrid and multi-cloud add operational complexity",
    p: "On-premises, hybrid, and multi-cloud estates fragment visibility, cost, and control without consistent architecture and governance."
  }, {
    no: "04",
    h: "Data and AI readiness exposes the foundations",
    p: "Production AI depends on the maturity of the data, infrastructure, and controls beneath it — most environments are not yet ready to run it reliably."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-paper",
    id: "challenge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap chal__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chal__intro reveal acc-purple"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "The pressure"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title"
  }, "The pressure on modern organisations is ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "structural"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Four operational realities facing CIOs, CTOs, and IT leaders in Qatar \u2014 and none can be solved in isolation."), /*#__PURE__*/React.createElement("div", {
    className: "ticks",
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "chal__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "chal__item reveal d" + (i + 1),
    key: it.no
  }, /*#__PURE__*/React.createElement("span", {
    className: "chal__no"
  }, it.no), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "chal__h"
  }, it.h), /*#__PURE__*/React.createElement("p", {
    className: "chal__p"
  }, it.p)))))));
}
function Approach({
  go
}) {
  const fieldRef = useRefHome(null);
  const secRef = useRefHome(null);
  useEffectHome(() => {
    const sec = secRef.current;
    if (window.ICTField && fieldRef.current && sec) {
      const stop = window.ICTField(fieldRef.current, {
        mode: "orbit",
        host: sec,
        focal: {
          x: 0.5,
          y: 1.0
        },
        count: 200,
        radius: [0.32, 0.7],
        opacity: 0.68,
        speed: 0.8,
        parallax: 0
      });
      return () => stop && stop();
    }
  }, []);
  const steps = [{
    no: "01",
    name: "Assess",
    p: "Understand infrastructure, risks, dependencies, and business priorities to define a clear target architecture and roadmap."
  }, {
    no: "02",
    name: "Modernise",
    p: "Upgrade platforms, cloud environments, and critical systems with migrations engineered for minimal disruption."
  }, {
    no: "03",
    name: "Secure",
    p: "Embed security, governance, and resilience across every layer — identity, data, network, and operations."
  }, {
    no: "04",
    name: "Operate",
    p: "Monitor, support, and continuously optimise environments through SLA-backed managed services."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-ink appr",
    id: "approach",
    ref: secRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "appr__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: "appr__bgimg",
    src: "../../assets/approach-bg.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "appr__scrim"
  }), /*#__PURE__*/React.createElement("canvas", {
    className: "appr__field",
    ref: fieldRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "appr__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal acc-blue"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "The ICT approach"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "9ch"
    }
  }, "One ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "method"), ", end to end.")), /*#__PURE__*/React.createElement("div", {
    className: "appr__headcol reveal d1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "We design, deploy, secure, and continuously optimise technology environments \u2014 from strategy through day-two operations, under one accountable partner."), /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    type: "button",
    onClick: () => go("service", {
      slug: "cloud"
    }),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "inherit"
    }
  }, "Learn more about our approach ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "appr__flow"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "appr__step reveal d" + (i + 1),
    key: s.no
  }, /*#__PURE__*/React.createElement("span", {
    className: "appr__no"
  }, s.no), /*#__PURE__*/React.createElement("h3", {
    className: "appr__name"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "appr__desc"
  }, s.p))))));
}
function Services({
  go
}) {
  const services = [{
    no: "01",
    kind: "cloud",
    slug: "cloud",
    title: "Cloud & Infrastructure Transformation",
    desc: "Design, build, and operate hybrid and multi-cloud platforms, modernise data centres, and migrate workloads across enterprise networks engineered for performance and resilience.",
    caps: ["Hybrid & multi-cloud", "Data centre modernisation", "Enterprise networking", "Workload migration"]
  }, {
    no: "02",
    kind: "cyber",
    slug: "cybersecurity",
    title: "Cybersecurity & Digital Resilience",
    desc: "Run security operations, harden identity and access, protect data, and keep critical services available through tested business continuity and disaster recovery.",
    caps: ["Security operations (SOC)", "Identity & access", "Threat detection", "Continuity & DR"]
  }, {
    no: "03",
    kind: "ai",
    slug: "ai",
    title: "AI & Intelligent Automation",
    desc: "Stand up enterprise AI infrastructure and platforms, get data production-ready, and deploy governed automation into operations — on infrastructure you control.",
    caps: ["AI infrastructure", "Data readiness", "Automation", "AI governance"]
  }, {
    no: "04",
    kind: "managed",
    slug: "managed",
    title: "Managed & Support Services",
    desc: "Operate infrastructure and applications to defined SLAs — 24×7 monitoring, ITSM, incident response, and lifecycle management with proactive optimisation.",
    caps: ["Managed infra & apps", "24×7 monitoring", "ITSM & support", "Lifecycle management"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-paper",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal acc-magenta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "10ch"
    }
  }, "Four practices, ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "one partner"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "lead reveal d1",
    style: {
      maxWidth: "40ch"
    }
  }, "Deep capability across the disciplines that keep enterprise technology running \u2014 combined into the right approach for your environment and stage.")), /*#__PURE__*/React.createElement("div", {
    className: "svc__list"
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    className: "svc__panel reveal",
    key: s.no,
    onClick: () => go("service", {
      slug: s.slug
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__no"
  }, s.no), /*#__PURE__*/React.createElement("div", {
    className: "svc__main"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "svc__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "svc__desc"
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "svc__caps"
  }, s.caps.map(c => /*#__PURE__*/React.createElement("span", {
    className: "svc__cap",
    key: c
  }, c))), /*#__PURE__*/React.createElement("span", {
    className: "tlink svc__link"
  }, "Explore this service ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "svc__diagram"
  }, /*#__PURE__*/React.createElement(SvcDiagram, {
    kind: s.kind
  })))))));
}
function Partners() {
  const names = ["Microsoft", "Cisco", "Google Cloud", "Palo Alto Networks", "IBM", "Dell Technologies", "HPE", "Nutanix", "Veeam"];
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-ink partners",
    id: "partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "partners__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal acc-violet"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Technology partnerships"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "14ch"
    }
  }, "Powered by ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "world-class"), " technology partnerships.")), /*#__PURE__*/React.createElement("div", {
    className: "partners__headcol reveal d1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: "42ch"
    }
  }, "ICT combines deep local expertise with leading global technology ecosystems \u2014 to deliver secure, scalable, and reliable solutions."))), /*#__PURE__*/React.createElement("div", {
    className: "partners__grid reveal d1"
  }, names.map(name => /*#__PURE__*/React.createElement("div", {
    className: "partners__cell",
    key: name
  }, window.ICTDS_PartnerLogo ? /*#__PURE__*/React.createElement(window.ICTDS_PartnerLogo, {
    name: name,
    basePath: "../../assets/partners"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "partner-logo__txt"
  }, name))))));
}
function WhyICT({
  go
}) {
  const pillars = [{
    icon: "delivery",
    h: "End-to-end delivery",
    p: "From strategy and architecture through deployment, support, and optimisation — one accountable partner across the full lifecycle."
  }, {
    icon: "global",
    h: "Local expertise, global standards",
    p: "Deep understanding of Qatar's market and regulation, combined with international best practice and certified engineering."
  }, {
    icon: "resilient",
    h: "Resilient architectures",
    p: "Cloud, cybersecurity, and AI foundations designed for security, continuity, and long-term operational resilience."
  }, {
    icon: "managed",
    h: "Managed services excellence",
    p: "Dedicated, SLA-backed operational support for mission-critical environments — monitored, maintained, and continuously improved."
  }, {
    icon: "partnership",
    h: "Long-term partnership",
    p: "A trusted partner focused on outcomes, reliability, and continuity — not one-off projects."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-paper why",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal acc-orange"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Why ICT"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "10ch"
    }
  }, "Built to be ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "relied on"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "why__headcol reveal d1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: "40ch"
    }
  }, "Practical reasons enterprises and government bodies across Qatar choose ICT to design, deploy, secure, and operate the technology they depend on."), /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    type: "button",
    onClick: () => go("contact"),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "inherit"
    }
  }, "Talk to ICT ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "why__grid"
  }, pillars.map(p => /*#__PURE__*/React.createElement("div", {
    className: "why__item reveal",
    key: p.icon
  }, /*#__PURE__*/React.createElement("span", {
    className: "why__icon"
  }, /*#__PURE__*/React.createElement(WhyIcon, {
    kind: p.icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "why__h"
  }, p.h), /*#__PURE__*/React.createElement("p", {
    className: "why__p"
  }, p.p))))));
}
const STORIES = [{
  sector: "Financial Services",
  corner: "CASE / 01",
  img: "../../assets/stories/financial.jpg",
  accent: "blue",
  pos: "50% 38%",
  title: "Intelligent investment research assistant",
  tags: ["AI", "Azure OpenAI", "Knowledge Retrieval", "Arabic NLP"],
  desc: "Investment data was fragmented across systems. ICT deployed a governed, Arabic-first retrieval platform on Azure OpenAI — every recommendation traceable to its source, running at 99.95% availability."
}, {
  sector: "Education & Research",
  corner: "CASE / 02",
  img: "../../assets/stories/research.jpg",
  accent: "magenta",
  pos: "50% 42%",
  title: "AI-powered unified enterprise search",
  tags: ["Enterprise Search", "Semantic Search", "AI"],
  desc: "Access-aware semantic search over 12M+ documents — sub-2-second queries that respect existing governance and permissions."
}, {
  sector: "Public Sector",
  corner: "CASE / 03",
  img: "../../assets/stories/public.jpg",
  accent: "orange",
  pos: "50% 26%",
  title: "Modernising the data centre with hybrid cloud",
  tags: ["Hybrid Cloud", "Sovereign Cloud", "Migration"],
  desc: "On-premises infrastructure extended into a sovereign cloud landing zone — 100% of workloads migrated with zero unplanned downtime."
}];
function StoryTags({
  tags
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "story__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement("li", {
    className: "story__tag",
    key: t
  }, t)));
}
function SuccessStories({
  go
}) {
  const featured = STORIES[0];
  const secondary = STORIES.slice(1);
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-ink",
    id: "stories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story__intro reveal acc-blue"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Success stories"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title"
  }, "Measurable ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "impact"), ", across industries.")), /*#__PURE__*/React.createElement("p", {
    className: "story__lead"
  }, "From AI-powered knowledge platforms to cloud modernisation and critical infrastructure transformation, ICT delivers measurable outcomes across highly regulated industries.")), /*#__PURE__*/React.createElement("div", {
    className: "story__system"
  }, /*#__PURE__*/React.createElement("article", {
    className: "story--featured reveal acc-" + featured.accent,
    onClick: () => go("contact")
  }, /*#__PURE__*/React.createElement("div", {
    className: "story__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: featured.img,
    alt: "",
    style: {
      objectPosition: featured.pos
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "story__text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "story__mk",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "story__case"
  }, featured.corner), /*#__PURE__*/React.createElement("span", {
    className: "story__sector"
  }, featured.sector)), /*#__PURE__*/React.createElement("h3", {
    className: "story__title"
  }, featured.title), /*#__PURE__*/React.createElement(StoryTags, {
    tags: featured.tags
  }), /*#__PURE__*/React.createElement("p", {
    className: "story__desc"
  }, featured.desc), /*#__PURE__*/React.createElement("span", {
    className: "tlink"
  }, "Read case study ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "story__grid"
  }, secondary.map(s => /*#__PURE__*/React.createElement("article", {
    className: "story-card reveal acc-" + s.accent,
    key: s.corner,
    onClick: () => go("contact")
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    style: {
      objectPosition: s.pos
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "story-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "story__mk",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "story__case"
  }, s.corner), /*#__PURE__*/React.createElement("span", {
    className: "story__sector"
  }, s.sector)), /*#__PURE__*/React.createElement("h3", {
    className: "story-card__title"
  }, s.title), /*#__PURE__*/React.createElement(StoryTags, {
    tags: s.tags
  }), /*#__PURE__*/React.createElement("p", {
    className: "story-card__desc"
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "tlink"
  }, "Read case study ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))))))));
}
function CTABanner({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section s-ink-deep cta",
    id: "contact-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__box reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker cta__kicker"
  }, "Let's build what's next"), /*#__PURE__*/React.createElement("h2", {
    className: "cta__title"
  }, "Let's transform what's next, together."), /*#__PURE__*/React.createElement("p", {
    className: "cta__sub"
  }, "Talk to ICT about modernising infrastructure, strengthening resilience, and operationalising AI \u2014 engineered for scale, here in Qatar."), /*#__PURE__*/React.createElement("div", {
    className: "cta__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--solid-light",
    type: "button",
    onClick: () => go("contact")
  }, "Schedule a consultation ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Challenge, null), /*#__PURE__*/React.createElement(Approach, {
    go: go
  }), /*#__PURE__*/React.createElement(Services, {
    go: go
  }), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(WhyICT, {
    go: go
  }), /*#__PURE__*/React.createElement(SuccessStories, {
    go: go
  }), /*#__PURE__*/React.createElement(CTABanner, {
    go: go
  }));
}
Object.assign(window, {
  ICTHomeScreen: HomeScreen,
  ICTWhyIcon: WhyIcon,
  ICTSvcDiagram: SvcDiagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
/* global React, window */
/* ICT Website UI Kit — Service detail + Contact screens. */
const {
  useState: useStatePages
} = React;
const ICT_SERVICES = {
  cloud: {
    slug: "cloud",
    tint: "blue",
    no: "01",
    title: "Cloud & Infrastructure Transformation",
    headline: "Modern infrastructure built for resilience, scale, and control.",
    hl: "resilience, scale, and control",
    sub: "Technology transformation starts with strong foundations. ICT helps organisations modernise infrastructure, extend into hybrid cloud, optimise operations, and build platforms ready for future growth — without compromising security, performance, or operational continuity.",
    challengeLead: "Infrastructure wasn't built for today's demands.",
    challengeSub: "Organisations are under increasing pressure to modernise while maintaining uptime, security, and operational stability.",
    challenges: ["Legacy infrastructure limiting agility", "Rising operational costs", "Data sovereignty requirements", "Complex cloud adoption programmes", "Capacity constraints", "Business continuity concerns"],
    deliver: [{
      h: "Hybrid & Multi-Cloud Architecture",
      p: "Design and implementation of public, private, hybrid, and multi-cloud environments."
    }, {
      h: "Cloud Migration & Optimisation",
      p: "Accelerate cloud adoption while maintaining governance and operational control."
    }, {
      h: "Data Centre Modernisation",
      p: "Upgrade compute, storage, networking, and virtualisation platforms."
    }, {
      h: "Software-Defined Infrastructure",
      p: "Build flexible infrastructure environments designed for future growth."
    }],
    ecosystem: ["Microsoft Azure", "VMware", "Cisco", "Dell Technologies", "HPE", "IBM", "Google Cloud"],
    outcomes: ["Improved infrastructure resilience and continuity.", "Faster deployment cycles for new services.", "Better cloud governance, visibility, and cost control.", "Enhanced scalability without bottlenecks.", "Simplified operations across hybrid estates.", "Stronger disaster-recovery readiness."],
    cta: "Let's modernise your infrastructure."
  },
  cybersecurity: {
    slug: "cybersecurity",
    tint: "violet",
    no: "02",
    title: "Cybersecurity & Digital Resilience",
    headline: "Security engineered into every layer of the enterprise.",
    hl: "every layer",
    sub: "Cybersecurity is no longer a standalone function. It must be embedded across infrastructure, applications, identities, data, and operations. ICT helps organisations build resilient environments that defend against evolving threats while supporting business growth.",
    challengeLead: "The threat landscape continues to evolve.",
    challengeSub: "Security and resilience now sit at board level — and the pressure on enterprises in Qatar keeps rising.",
    challenges: ["Sophisticated cyber threats", "Regulatory requirements", "Cloud security risks", "Identity attacks", "Data protection obligations", "Operational resilience requirements"],
    deliver: [{
      h: "Security Strategy & Governance",
      p: "Align security investments with business priorities and risk profiles."
    }, {
      h: "Security Operations Centre Services",
      p: "Continuous monitoring and threat detection."
    }, {
      h: "Identity & Access Management",
      p: "Protect users, applications, and critical assets."
    }, {
      h: "Zero Trust Architecture",
      p: "Reduce attack surfaces and improve security posture."
    }],
    ecosystem: ["Microsoft Security", "Palo Alto Networks", "Cisco Security", "Microsoft Defender", "Identity Platforms", "Security Monitoring"],
    outcomes: ["Stronger security posture, reduced exposure.", "Faster threat detection and response.", "Improved governance aligned to objectives.", "Enhanced compliance readiness.", "Reduced operational risk across environments.", "Better protection of critical assets."],
    cta: "Let's strengthen your security posture."
  },
  ai: {
    slug: "ai",
    tint: "magenta",
    no: "03",
    title: "AI & Intelligent Automation",
    headline: "Moving AI from experimentation to enterprise value.",
    hl: "enterprise value",
    sub: "AI only creates value when it becomes part of everyday operations. ICT helps organisations operationalise AI through secure, governed, and scalable platforms that turn data into insight and automation into measurable outcomes.",
    challengeLead: "Most organisations aren't struggling with AI ideas — they're struggling with AI adoption.",
    challengeSub: "The gap between a promising pilot and production value is where most initiatives stall.",
    challenges: ["Data readiness", "AI governance", "Security concerns", "Integration complexity", "Lack of operationalisation", "Scaling successful pilots"],
    deliver: [{
      h: "Enterprise AI Platforms",
      p: "Production-ready AI environments built for scale."
    }, {
      h: "Data Intelligence & Analytics",
      p: "Transform data into actionable business insights."
    }, {
      h: "Agentic AI Systems",
      p: "Design intelligent agents capable of supporting complex workflows."
    }, {
      h: "Responsible AI Governance",
      p: "Embed transparency, security, and compliance into AI initiatives."
    }],
    ecosystem: ["Azure AI", "Azure OpenAI", "Enterprise Data Platforms", "Analytics Platforms", "Knowledge Management", "Search Technologies"],
    outcomes: ["Faster decision making on trusted information.", "Improved operational efficiency.", "Better information discovery across systems.", "Stronger AI governance and compliance.", "Increased productivity on higher-value work.", "Enterprise-ready AI adoption beyond pilots."],
    cta: "Let's operationalise AI."
  },
  managed: {
    slug: "managed",
    tint: "orange",
    no: "04",
    title: "Managed & Support Services",
    headline: "Technology operations that never stop evolving.",
    hl: "never stop evolving",
    sub: "Technology environments require continuous attention. ICT provides managed services that help organisations maintain, optimise, secure, and improve critical technology environments long after implementation.",
    challengeLead: "The real challenge begins after deployment.",
    challengeSub: "Keeping mission-critical environments available, secure, and improving is a discipline of its own.",
    challenges: ["Limited internal resources", "Monitoring gaps", "Operational complexity", "Security management", "Performance issues", "Business continuity requirements"],
    deliver: [{
      h: "Managed Infrastructure Services",
      p: "Continuous management of critical technology environments."
    }, {
      h: "Managed Cloud Operations",
      p: "Optimise cloud performance, governance, and cost."
    }, {
      h: "Managed Security Services",
      p: "Strengthen protection through continuous monitoring and response."
    }, {
      h: "Business Continuity & Disaster Recovery",
      p: "Prepare for disruption and maintain resilience."
    }],
    ecosystem: ["Monitoring Platforms", "Cloud Platforms", "Security Platforms", "ITSM Platforms", "Infrastructure Platforms", "Analytics Platforms"],
    outcomes: ["Improved service availability for the business.", "Reduced operational complexity.", "Faster incident resolution.", "Better user experience and stability.", "Enhanced operational resilience.", "Long-term technology value protected."],
    cta: "Let's optimise your operations."
  }
};
const ACCENT_CLASS = {
  blue: "acc-blue",
  violet: "acc-violet",
  magenta: "acc-magenta",
  orange: "acc-orange"
};
function ServiceScreen({
  slug,
  go
}) {
  const data = ICT_SERVICES[slug] || ICT_SERVICES.cloud;
  const SvcDiagram = window.ICTSvcDiagram;
  const diagramKind = {
    cloud: "cloud",
    cybersecurity: "cyber",
    ai: "ai",
    managed: "managed"
  }[data.slug];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "shero s-ink-deep " + ACCENT_CLASS[data.tint]
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "shero__crumbs",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home", {
      anchor: "services"
    })
  }, "Services"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: "var(--on-dark-soft)"
    }
  }, data.title)), /*#__PURE__*/React.createElement("div", {
    className: "shero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal is-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shero__index"
  }, /*#__PURE__*/React.createElement("b", null, data.no), /*#__PURE__*/React.createElement("span", null, "/ Service")), /*#__PURE__*/React.createElement("h1", {
    className: "shero__title"
  }, data.title), /*#__PURE__*/React.createElement("p", {
    className: "shero__sub lead"
  }, data.sub), /*#__PURE__*/React.createElement("div", {
    className: "shero__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    type: "button",
    onClick: () => go("contact")
  }, "Schedule a consultation ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "tlink",
    type: "button",
    onClick: () => go("home", {
      anchor: "services"
    }),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "inherit"
    }
  }, "All services ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "shero__viz reveal is-in d1",
    style: {
      "--mk": "var(--accent)"
    }
  }, SvcDiagram ? /*#__PURE__*/React.createElement(SvcDiagram, {
    kind: diagramKind
  }) : null)))), /*#__PURE__*/React.createElement("section", {
    className: "section s-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sintro__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal is-in acc-purple"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Industry challenges"), /*#__PURE__*/React.createElement("h2", {
    className: "sintro__stmt"
  }, data.challengeLead)), /*#__PURE__*/React.createElement("div", {
    className: "sintro__body reveal is-in d1"
  }, /*#__PURE__*/React.createElement("p", null, data.challengeSub), /*#__PURE__*/React.createElement("ul", {
    className: "sintro__list " + ACCENT_CLASS[data.tint]
  }, data.challenges.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c))))))), /*#__PURE__*/React.createElement("section", {
    className: "section s-ink " + ACCENT_CLASS.magenta
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scaps__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal is-in acc-magenta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "What we deliver"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "12ch"
    }
  }, "Capabilities, ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "engineered"), " for scale.")), /*#__PURE__*/React.createElement("p", {
    className: "lead reveal is-in d1"
  }, "Core capability areas that combine into the right approach for your environment and stage.")), /*#__PURE__*/React.createElement("div", {
    className: "scaps__list"
  }, data.deliver.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "scap reveal is-in",
    key: d.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "scap__no"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    className: "scap__h"
  }, d.h), /*#__PURE__*/React.createElement("p", {
    className: "scap__p"
  }, d.p)))))), /*#__PURE__*/React.createElement("section", {
    className: "section s-ink " + ACCENT_CLASS.blue
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco__head shead reveal is-in acc-blue"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Technology ecosystem"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      maxWidth: "16ch"
    }
  }, "Built on platforms you ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "trust"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "ecogrid reveal is-in"
  }, data.ecosystem.map(e => /*#__PURE__*/React.createElement("span", {
    className: "eco-chip",
    key: e
  }, e))))), /*#__PURE__*/React.createElement("section", {
    className: "section s-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simpact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simpact__intro reveal is-in acc-violet"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Outcomes we deliver"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      marginTop: "8px",
      maxWidth: "10ch"
    }
  }, "What ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "good"), " looks like."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "The operational outcomes organisations gain \u2014 measured against your KPIs.")), /*#__PURE__*/React.createElement("ul", {
    className: "simpact__list reveal is-in d1"
  }, data.outcomes.map(o => /*#__PURE__*/React.createElement("li", {
    className: "simpact__item",
    key: o
  }, /*#__PURE__*/React.createElement("span", {
    className: "simpact__mk",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "simpact__text"
  }, o))))))), /*#__PURE__*/React.createElement("section", {
    className: "section s-ink-deep cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__box reveal is-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker cta__kicker"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    className: "cta__title"
  }, data.cta), /*#__PURE__*/React.createElement("p", {
    className: "cta__sub"
  }, "Tell us about your environment and objectives \u2014 we'll scope the right engagement."), /*#__PURE__*/React.createElement("div", {
    className: "cta__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--solid-light",
    type: "button",
    onClick: () => go("contact")
  }, "Schedule a consultation ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192"))))))));
}

/* ---------------- CONTACT ---------------- */
const C_FIELDS = [{
  name: "name",
  label: "Full name",
  type: "text",
  ph: "Your name",
  required: true
}, {
  name: "email",
  label: "Work email",
  type: "email",
  ph: "you@organisation.qa",
  required: true
}, {
  name: "company",
  label: "Company / organisation",
  type: "text",
  ph: "Organisation name",
  required: true
}, {
  name: "title",
  label: "Job title",
  type: "text",
  ph: "Your role",
  required: false
}, {
  name: "phone",
  label: "Phone number",
  type: "tel",
  ph: "+974 …",
  required: false
}];
const C_INTERESTS = ["Cloud & Infrastructure Transformation", "Cybersecurity & Digital Resilience", "AI & Intelligent Automation", "Managed & Support Services", "General enquiry"];
function cValidate(v) {
  const e = {};
  if (!v.name || !v.name.trim()) e.name = "Please enter your name.";
  if (!v.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v.email || "").trim())) e.email = "Please enter a valid business email address.";
  if (!v.company || !v.company.trim()) e.company = "Please enter your company or organisation.";
  if (!v.interest) e.interest = "Please select an area of interest.";
  if (!v.message || !v.message.trim()) e.message = "Please tell us about your challenge.";
  return e;
}
function ContactScreen({
  go
}) {
  const [values, setValues] = useStatePages({});
  const [errors, setErrors] = useStatePages({});
  const [sent, setSent] = useStatePages(false);
  const set = (n, val) => setValues(p => ({
    ...p,
    [n]: val
  }));
  const onSubmit = e => {
    e.preventDefault();
    const errs = cValidate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "chero s-ink-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chero__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/doha-skyline.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "chero__bg-overlay"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap chero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal is-in",
    style: {
      maxWidth: "44ch"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "lhero__crumbs",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: "var(--on-dark-soft)"
    }
  }, "Contact")), /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Contact ICT"), /*#__PURE__*/React.createElement("h1", {
    className: "chero__title"
  }, "Let's build your ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "technology foundation"), "."), /*#__PURE__*/React.createElement("p", {
    className: "chero__sub lead"
  }, "Talk to ICT about cloud infrastructure, cybersecurity, AI enablement, managed services, or the operational challenges your organisation needs to solve.")))), /*#__PURE__*/React.createElement("section", {
    className: "section s-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cform__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cform__intro reveal is-in acc-blue"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kicker"
  }, "Make an enquiry"), /*#__PURE__*/React.createElement("h2", {
    className: "shead__title",
    style: {
      fontSize: "var(--t-h2)"
    }
  }, "Tell us what you're ", /*#__PURE__*/React.createElement("span", {
    className: "tword"
  }, "solving"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "A specialist will respond to scope the right engagement \u2014 typically within one business day."), /*#__PURE__*/React.createElement("div", {
    className: "cform__details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cform__d"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cform__dk"
  }, "Email"), /*#__PURE__*/React.createElement("a", null, "hello@ict.qa")), /*#__PURE__*/React.createElement("div", {
    className: "cform__d"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cform__dk"
  }, "Phone"), /*#__PURE__*/React.createElement("a", null, "+974 4000 0000")), /*#__PURE__*/React.createElement("div", {
    className: "cform__d"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cform__dk"
  }, "Office"), /*#__PURE__*/React.createElement("span", null, "ICT W.L.L \xB7 Doha, Qatar")))), /*#__PURE__*/React.createElement("div", {
    className: "cform__panel reveal is-in d1"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "cform__success",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cform__tick",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: "48",
    height: "48",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "22",
    stroke: "currentColor",
    strokeWidth: "2",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 24.5l6 6 12-13",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "cform__success-h"
  }, "Message sent successfully"), /*#__PURE__*/React.createElement("p", {
    className: "cform__success-p"
  }, "Thank you for contacting ICT. A member of our team will review your enquiry and get back to you shortly."), /*#__PURE__*/React.createElement("p", {
    className: "cform__success-note"
  }, "A copy of your enquiry has been logged under the email you provided.")) : /*#__PURE__*/React.createElement("form", {
    className: "cform",
    onSubmit: onSubmit,
    noValidate: true
  }, C_FIELDS.map(f => /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors[f.name] ? " has-error" : ""),
    key: f.name
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-" + f.name
  }, f.label, f.required ? /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, " *") : null), /*#__PURE__*/React.createElement("input", {
    id: "f-" + f.name,
    name: f.name,
    type: f.type,
    placeholder: f.ph,
    value: values[f.name] || "",
    onChange: e => set(f.name, e.target.value)
  }), errors[f.name] ? /*#__PURE__*/React.createElement("span", {
    className: "field__err"
  }, errors[f.name]) : null)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.interest ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-interest"
  }, "Area of interest", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, " *")), /*#__PURE__*/React.createElement("select", {
    id: "f-interest",
    name: "interest",
    value: values.interest || "",
    onChange: e => set("interest", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select an area"), C_INTERESTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), errors.interest ? /*#__PURE__*/React.createElement("span", {
    className: "field__err"
  }, errors.interest) : null), /*#__PURE__*/React.createElement("div", {
    className: "field field--full" + (errors.message ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-message"
  }, "Tell us about your challenge", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    id: "f-message",
    name: "message",
    rows: "4",
    placeholder: "A few lines on your environment, objectives, or the problem you need to solve.",
    value: values.message || "",
    onChange: e => set("message", e.target.value)
  }), errors.message ? /*#__PURE__*/React.createElement("span", {
    className: "field__err"
  }, errors.message) : null), /*#__PURE__*/React.createElement("div", {
    className: "cform__foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cform__hint"
  }, "By submitting, you agree to ICT contacting you about your enquiry. See our ", /*#__PURE__*/React.createElement("a", null, "Privacy Policy"), "."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    type: "submit"
  }, "Send enquiry ", /*#__PURE__*/React.createElement("span", {
    className: "ar",
    "aria-hidden": "true"
  }, "\u2192"))))))));
}
Object.assign(window, {
  ICTServiceScreen: ServiceScreen,
  ICTContactScreen: ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PartnerLogo = __ds_scope.PartnerLogo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.LineIcon = __ds_scope.LineIcon;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Ticks = __ds_scope.Ticks;

})();
