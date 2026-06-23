# ICT — Design System

**ICT (Information & Communication Technology W.L.L)** is a Qatar-based digital
transformation and technology consultancy. It helps governments, enterprises, and
critical-infrastructure organisations modernise through **cloud & infrastructure,
cybersecurity, AI & intelligent automation, and managed services** — designing,
deploying, securing, and operating the platforms those organisations depend on.

The brand voice is **trusted, intelligent, innovative, technical, premium, human, and
enterprise-focused**. The visual language is **dark-first and editorial**: a midnight
canvas, warm-paper inversions, large confident Space Grotesk headings, generous space,
and the seven-colour brand "Spectrum" used only as a restrained accent. Premium rather
than corporate; modern but timeless; minimal visual noise.

---

## Sources of truth

This system was reverse-engineered and standardised from ICT's live codebase. If you
have access, explore these to go deeper or to extend the system faithfully:

- **`hasssen-malek/ict-design-system`** — https://github.com/hasssen-malek/ict-design-system
  The canonical foundations live here: `ds/colors_and_type.css` (brand palette, type, spacing,
  radii, elevation, motion) and `ds/fonts/` (Space Grotesk + Inter TTF). `css/base.css` defines
  the editorial layer (surfaces, buttons, nav, footer, accent-hue system, partner-logo system),
  and `css/home.css` / `css/pages.css` / `css/service.css` style the marketing pages.
- **`hasssen-malek/ict-website-latest`** — https://github.com/hasssen-malek/ict-website-latest
  The live React (Babel-in-browser) marketing site. `components/*.jsx` are the real section
  components (Nav, Hero, Challenge, Approach, Services, Partners, WhyICT, SuccessStories, CTABanner,
  Footer, ServicePage, ContactPage, …); `components/service-data.js` is the single source of all
  service copy.
- **`hasssen-malek/ict-website`** — earlier iteration; kept for reference.

> Two parallel token layers existed in the source: a "foundation" set
> (`ds/colors_and_type.css`) and an "editorial" override (`css/base.css`). This system
> **standardises them into one coherent set** under `tokens/`, preserving the values the
> live site renders with (Space Grotesk display, flat 2px buttons, paper inversions,
> spectrum-as-ticks).

---

## CONTENT FUNDAMENTALS — how ICT writes

**Spelling:** British / international English. `modernise`, `optimise`, `centre`,
`organisation`, `programme`, `prioritise`. Never American spellings.

**Voice & person:** Third-person and outcome-led. ICT speaks as *"ICT"* or *"we"*; the
reader is *"you" / "your organisation"*, but copy leans on the work itself rather than
hard address. Confident and declarative — states capability, doesn't oversell.

**Tone:** Calm authority. Enterprise B2B, trusted-advisor register. No hype, no
exclamation marks, no emoji, no AI clichés ("unleash", "supercharge", "game-changer",
"revolutionary", "in today's fast-paced world"). Every sentence earns its place.

**Casing:** Sentence case for headlines and UI ("Four practices, one partner.").
Title Case for proper service/product names ("Cloud & Infrastructure Transformation").
Eyebrows / kickers are UPPERCASE in mono with wide tracking ("WHAT WE DO", "WHY ICT").

**Sentence shape:** Short lead statements; one strong idea per sentence. Triads are a
signature rhythm — *"secure, resilient, and ready for what's next"*, *"design, deploy,
secure, and operate"*, *"monitored, maintained, and continuously improved"*.

**Headline pattern:** A short statement with **one** keyword highlighted in the section's
accent colour (the `.tword`). Examples:
- *"The technology foundation for **what's next**."*
- *"Four practices, **one partner**."*
- *"The pressure on modern organisations is **structural**."*
- *"Built to be **relied on**."*
- *"Measurable **impact**, across industries."*

**Proof, not adjectives:** Trust is built with specifics — `ISO 27001 certified`,
`99.99% uptime SLA`, `Headquartered in Doha, Qatar`, `99.95% availability`,
`12M+ documents`, `zero unplanned downtime`. Case-study metrics use bracketed
placeholders until verified: *"Reduced infrastructure footprint by [X]%."*

**CTAs:** Quiet and concrete — *"Schedule a consultation"*, *"Explore this service"*,
*"Read case study"*, *"Let's modernise your infrastructure."* Arrow glyph `→` trails the
link and nudges right on hover.

**Geography & framing:** Qatar / Doha context is explicit and frequent ("enterprises and
government bodies across Qatar", "sovereign cloud", "data sovereignty requirements"). The
company is *"Qatar's enterprise technology partner."*

---

## VISUAL FOUNDATIONS

**Overall feel.** Dark-first, editorial, structural. Type and space carry the design;
colour is a deliberate accent, never a flood. Think the restraint of Vercel/Stripe with
an enterprise-infrastructure seriousness — and a Gulf-premium warmth from the paper tone.

**Colour.**
- *Canvas:* Midnight `#0A091E` (`--ict-ink-1`) is the primary background; `#050416`
  (`--ict-ink-0`) for the deepest hero / CTA wells; `#100F26` for raised cards.
- *Paper inversion:* warm off-white `#F3F1EA` (`--ict-paper-0`) for "light" sections
  (Challenge, Services, Why ICT). Never pure white.
- *Neutral ramp:* cool, indigo-tinted ink ramp (`--ict-ink-0…10`) so darks never go
  flat-grey. Text on dark: headings `#FFFFFF`/`#F4F3FB`, body `#C7C5DE`, muted `#8A88AE`.
- *Brand Spectrum:* seven stops cool→warm — electric blue `#0098FF`, core indigo
  `#370FDD`, violet `#612DF5`, magenta `#CC47AB`, digital orange `#FC7F40`, signal red
  `#FF2A68`. Used as **discrete ticks** (the logo's DNA), as a **single highlighted
  keyword**, as a thin top accent line, or — once per page — as the boxed CTA gradient.
- *Per-section accent:* each section opts into ONE hue via `.acc-blue/.acc-purple/
  .acc-violet/.acc-magenta/.acc-orange`; the kicker tick and the highlighted keyword both
  inherit it, so the section reads as one intentional colour. Two values per hue (bright
  `-d` for dark, deepened `-p` for paper), both AA-checked.
- **Avoid:** flooded blue-purple marketing gradients, full-colour partner logos, neon
  saturation. Gradients are atmospheric (very low opacity) or reserved for the one CTA box.

**Type.** Space Grotesk (display/headings, weight **500** default — confident, not heavy,
tight tracking `-0.018…-0.028em`) + Inter (body/UI, 17px, line-height 1.6) + a mono stack
(eyebrows, indices, metadata, partner-cap chips). Hero clamps to ~66px; section titles to
~52px; nothing oversized. Headlines are sentence case and `text-wrap: balance`.

**Backgrounds & imagery.** Mostly flat midnight or paper. Hero and Approach use a
**full-bleed photographic background** (`hero-bg.png`, `approach-bg.png` — cool, dark,
technological infrastructure imagery) under a **readability scrim gradient** and a
**drifting particle/orbit canvas field**. Story thumbnails are real photos in sharp
6px-radius frames with a faint bottom fade. Imagery vibe: cool, dark, premium, low-key —
never warm stock-photo or grainy.

**Motion.** Subtle and eased (`--ease-out` = `cubic-bezier(.22,1,.36,1)`). Scroll-reveal
(fade + 22px rise, staggered `.d1–.d5`); the spectrum tick-bar wipes in left-to-right;
line-draw SVG schematics stroke themselves on; ambient glows drift slowly (24s). Arrows
translate `+4–5px` on hover. Everything is gated behind
`@media (prefers-reduced-motion: no-preference)`. No bounce except the rare spring; never
distracting.

**Borders, rules & cards.** The system is **line-driven**, not card-driven. Sections are
divided by hairline rules (`rgba(255,255,255,0.12)` on dark; `rgba(21,19,31,0.16)` on
paper) and CSS-grid cells share 1px borders rather than floating as rounded cards. When a
surface is raised it gets `--shadow-2/3` (deep + a 1px inner top highlight). A coloured
3px top accent bar marks grid cells (Approach steps, Why ICT pillars), growing on hover.

**Radius.** Minimal and sharp: **2px** for buttons/inputs/chips (`--radius-xs`), 6px for
media frames, up to 26px only for the single boxed CTA. Tags are the only pills.

**Hover / press / focus.** Hover: text lifts toward white, partner logos lift from grey
toward (not to) white, accent bars grow, underlines wipe in under `.tlink`. Primary button
hover darkens (`color-mix … 86% + #000`); press darkens further and nudges `translateY(1px)`.
Focus: a branded `focus-visible` ring (`#6FB6FF` on dark, `#1E63D6` on paper), 2px,
offset 2px — visible for keyboard, hidden for mouse. Skip-link provided.

**Transparency & blur.** The fixed nav is `rgba(6,5,18,0.82)` with `backdrop-filter:
blur(14px)`, thickening on scroll. Scrims over hero imagery are layered linear gradients.
Used sparingly and purposefully — for legibility, not decoration.

**Layout.** Max width 1320px; fluid gutter `clamp(22px,5vw,84px)`; section rhythm
`clamp(76px,9.5vw,150px)`. Divided multi-column grids with shared hairlines are the
signature layout device. The nav is fixed; everything else flows.

---

## ICONOGRAPHY

ICT uses **custom thin-line geometric SVG icons drawn inline** — no icon font, no icon
library, no emoji, no unicode glyph icons. They match the brand's "schematic" visual
language: `viewBox="0 0 30 30"`, `fill="none"`, `stroke="currentColor"`,
`stroke-width="1.5"`, round caps/joins, monochrome (inherit the section hue). Subjects are
infrastructure-flavoured: connected nodes (delivery/flow), globe (local+global), stacked
bars (layered architecture), monitor + uptime pulse (managed), linked rings (partnership),
shields, radar, locks, clouds, layers.

Larger **schematic line diagrams** (the `.draw` system) illustrate each service —
layered platforms, nested control rings, data-flow pipelines, ops boards — animated with
a stroke-dash "draw-on" reveal, with one brand-colour `s-mark` node per diagram.

The only glyph used as an icon is the trailing **arrow `→`** on links/buttons. Caret
chevrons in nav are small inline SVGs.

**Partner / technology logos** are real SVGs (`assets/partners/*.svg`) normalised to
`fill="currentColor"` so a single CSS `color` renders them monochrome — calm grey
`#9D9BB6` on dark, deep navy `#2C2942` on paper, lifting toward white on hover. **Never**
shown full-colour. Optical per-logo sizing balances perceived weight.

For new work: copy the SVGs in `assets/` and the inline icon patterns documented here.
Do **not** introduce a third-party icon set or emoji.

---

## Foundations index (`tokens/`)

| File | Contents |
|---|---|
| `tokens/fonts.css` | `@font-face` for Space Grotesk (5 weights) + Inter (variable, roman & italic) |
| `tokens/colors.css` | brand spectrum, ink ramp, paper, semantic surfaces/text, per-section hues, gradients |
| `tokens/typography.css` | font families, editorial type scale, weights, line-heights, tracking, element defaults, `.ict-eyebrow`, `.ict-spectrum-text` |
| `tokens/spacing.css` | 8pt spacing scale, minimal radius scale, layout (max width, gutter, section rhythm) |
| `tokens/motion.css` | elevation shadows, brand glow rings, easing, durations |
| `styles.css` | `@import` manifest — the single file consumers link |

---

## Manifest

- **`styles.css`** — global entry point (link this).
- **`tokens/`** — CSS custom-property foundations (see table above).
- **`assets/`** — logos (`ict-logo.png` gradient wordmark, `ict-logo-white.png`,
  `ict-logo-small.png`, `ict-monogram.svg`), backgrounds (`hero-bg.png`,
  `approach-bg.png`, `doha-skyline.jpg`), story photos (`stories/*.jpg`), partner logos
  (`partners/*.svg`), and self-hosted fonts (`fonts/*.ttf`).
- **`components/`** — reusable React primitives (see `components/` cards): buttons, links,
  tags, eyebrow, ticks, accent hue wrapper, partner logo, line-icons, inputs, cards.
- **`ui_kits/website/`** — high-fidelity recreation of the ICT marketing site (homepage +
  service page), composed from the foundations.
- **Specimen cards** — small `.html` files tagged `@dsCard` populate the Design System tab
  (Colors, Type, Spacing, Brand, Components).
- **`SKILL.md`** — makes this system usable as a downloadable Agent Skill.

### Components (`components/`)
Reusable React primitives — import via `window.<Namespace>` (run `check_design_system` for the namespace). Each has a `.d.ts` contract, a `.prompt.md`, and a `@dsCard` thumbnail.
- `buttons/` — **Button** (primary / line / solid-light / solid-dark; sm/md/lg; arrow), **TextLink** (wipe-underline + arrow).
- `labels/` — **Eyebrow** (accent kicker), **Tag** (cap / pill chip), **Ticks** (spectrum geometry: row / sm / bar).
- `content/` — **Card** (surface / cell / flat + accent bar), **Stat** (proof-point metric), **LineIcon** (19 thin-line glyphs).
- `forms/` — **Input** (text / multiline, label / hint / error), **Select** (custom chevron), **Checkbox**.
- `brand/` — **PartnerLogo** (monochrome technology-partner mark).

### UI kit (`ui_kits/website/`)
A faithful, interactive recreation of the ICT marketing site — **Homepage** (hero, challenge, approach, services, partners, why ICT, success stories, CTA), a **Service detail** page, and a **Contact** page with a working validated form. Click services / nav / CTAs to move between screens. Built on `styles.css` + `site.css` + `sections.css`, with the real particle-field engine (`field.js`). `index.html` is also registered as a Starting Point.

> Note on environment: the foundation/component cards in the Design System tab load the compiled `_ds_bundle.js` (the documented pattern). The UI kit is intentionally self-contained against `styles.css` so it renders as a standalone page, a thumbnail, and offline.
