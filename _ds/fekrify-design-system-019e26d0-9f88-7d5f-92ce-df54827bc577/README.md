# Fekrify Design System

A design system extracted from the **Fekrify** marketing site — a Relume-built React/Next.js codebase exported on 2026-05-14.

## Who is Fekrify?

**Fekrify** is a Design & Innovation studio. Tagline: _"We design strategy-powered experiences that move businesses forward."_ The brand positions itself as a senior consulting partner that helps companies align product strategy, improve UX, and ship faster. Confirmed clients in the codebase include **HSBC** (credit-card mobile app — iOS + Android, Singapore), **AXA Hong Kong** (digitised SME insurance journey), and **Cinnox** (omnichannel client platform). The site is bilingual but defaults to French.

### Services (the three core pillars)
1. **Stratégie d'Expérience** — Experience Strategy
2. **Innovation Produit** — Product Innovation
3. **Autonomisation par le Design** — Design Empowerment

### Surfaces represented in the export
- **Marketing website** — the only surface in this export. Pages: Home, Old Home (legacy variant), Use-case pages (HSBC, AXA, Cinnox), Service pages (the three pillars), À propos, Contact, Landing Page, legal pages. App screens (mobile banking) appear only as image references inside case studies — not as built UI.

### Sources
- **Codebase** (mounted, read-only): `fekrify-updated-design/` — Next.js App Router + Tailwind v4 + `motion/react` + `relume-icons`
- **Provider**: Exported from [Relume](https://www.relume.io) on 2026-05-14
- Per-section homepage screenshots: `reference/homepage/01-navbar.png` … `09-footer.png`
- Token source of truth: `fekrify-updated-design/DESIGN.md` (YAML frontmatter) and `fekrify-updated-design/react/globals.css`
- Sitemap & scheme assignment: `fekrify-updated-design/sitemap.md`
- Asset placement: `fekrify-updated-design/assets.md`

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — context, content rules, visual foundations, iconography |
| `colors_and_type.css` | All design tokens — colors, type scale, schemes, radii, spacing, button/input/badge primitives |
| `SKILL.md` | Skill manifest for Agent Skills compatibility |
| `fonts/` | IBM Plex Sans woff2 (weights 100–700) |
| `assets/logo-light.png` | Wordmark in **dark ink** (use on light backgrounds) |
| `assets/logo-dark.png` | Wordmark in **white** (use on dark backgrounds) |
| `assets/images/` | Photography from the site (benefits, navbar megamenu) |
| `reference/homepage/` | Per-section homepage screenshots (truth source) |
| `preview/` | Design-system tab specimen cards (typography, colors, components, brand) |
| `ui_kits/marketing-site/` | UI kit recreation of the marketing site — components + clickable index |

---

## CONTENT FUNDAMENTALS

**Language.** Primary content is French (`fr`), with English peppered through interface boilerplate (Relume defaults the team hasn't localised yet). Treat French as the canonical voice; mirror in English when needed but the headline brand voice is French.

**Person.** _Nous_ / _we_ — the studio addresses prospects in first-person plural and refers to the reader as _vous_ (formal you). Examples from the site:
- _"**Nous** vous aidons à ancrer les pratiques design dans votre culture…"_
- _"**We** help businesses translate complex challenges into meaningful digital experiences — fast."_
- _"**Parlez avec notre équipe** pour découvrir comment **nous** pouvons aligner votre stratégie…"_

**Tone.** Confident, results-oriented, business-fluent. Strategy + outcomes vocabulary: _"measurable growth"_, _"business impact"_, _"performant"_, _"alignment"_, _"speed-to-market"_. Not playful, not jargony, not academic. It reads like a senior consultant pitching to a CxO.

**Casing.** Sentence case for headings (`Strategy-led design that drives measurable outcomes`), Title Case only for brand/proper-noun lockups (`Cartes de crédit HSBC`, `Plateforme Client Cinnox`). All-caps is reserved for the "eyebrow" tag above headings (`USE CASES`, `OUR EXPERTISE` — small and bold).

**Headlines.** Long-form, declarative, full-sentence. Often a verb phrase or value statement. They do not fear length: hero copy regularly runs three full lines (`We design strategy-powered experiences that move businesses forward`).

**Body copy.** Short, scannable paragraphs (2–4 sentences). Frequent em-dash for emphasis (`— fast.`). Statements over questions. Always grounded in business value (_conversion, retention, customer satisfaction_) — abstract benefits are pinned to concrete outcomes.

**CTAs.** Verb-led, formal. `Parler à notre équipe`, `Speak to us`, `See our work`, `Get in touch`. Never "Submit" or "Click here". CTAs in French use vous-form imperative.

**No emoji.** Zero emoji anywhere in the source. Don't add them.

**No exclamation points.** The voice is even-keeled.

**Numbers** are used sparingly but with weight (`over 3 million users`, `01 / 02 / 03 / 04` as section markers). Stats appear as proof, not decoration.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Editorial, gallery-quiet, confident. Picture a high-end design consultancy folio: vast white margins, oversized typography, splashes of saturated colour used as graphic blocks rather than backgrounds.

### Type
- **Single family**: IBM Plex Sans (no serif, no mono pairing). Weights 400 + 700 do all the work; 500/600 used for nav labels and small captions. h1 at 56px desktop / 40px mobile. Default body is 16–18px. Letter-spacing nudges tight (–1%) on headings.
- **Type as graphic.** Numerals are rendered at extreme scale (up to 14rem / 224px) as section dividers — see the "01" sticky-scroll in `layout-485`.

### Color
- **5 schemes, applied at the section level.** This is the system's defining mechanic: every `<section>` carries one of `.scheme-1`…`.scheme-5`, and all descendant text/border/accent colors flow from that scheme. Tweak a section's look by swapping classes — never by hand-painting children.
- Three "quiet" schemes (white, near-white wild-sand, pure black) carry most of the page. Two "loud" schemes (deep violet `#0A103D`, electric aquamarine `#4EF1FF`) are reserved for impact blocks: logo strip and CTA.
- Razzle-dazzle Rose `#E734DA` is defined but rarely used on the home page. Available as accent in case studies.
- No gradients. Blocks of solid colour, edge-to-edge.

### Spacing & layout
- **Container max 1280px**, centred. Horizontal page gutter is **5%**.
- **Section padding** is the primary vertical rhythm: `py-16 md:py-24 lg:py-28` (64 / 96 / 112 px). Section breaks are felt through breathing room, not dividers.
- 12-column thinking but the code uses CSS Grid with `auto-cols-fr` and named track sizes (`[0.75fr_1fr]`, `[max-content_1fr]`).
- Big, asymmetric whitespace — content often sits in `max-w-lg` (32rem) inside a much wider container.

### Imagery
- Photography is warm-toned, human, professional (hands holding phones, office candids). Used as supporting evidence, not decoration.
- Images sit inside cards with `border-radius: 1rem` (16px). No drop shadows on images.
- Hero backgrounds use **dark overlay** (`bg-neutral-darkest/50`) to drop white headline copy onto photography.
- No illustrations, no isometrics, no abstract shapes.

### Backgrounds
- **Solid colour, full-bleed** — every section is its own scheme. Sections never inherit; they declare.
- **No repeating patterns**, no textures, no grain.
- No gradients of any kind.

### Cards & containers
- **Flat style.** `border-width: 0`, `radius: 16px`, no shadow. The card is a content container, not a UI element with its own visual weight.
- Borders use `--border` (15% black on light schemes, 20% white on dark) and appear as **dividers, never frames**.

### Corners
- **12px** on buttons, badges, inputs.
- **16px** on cards and images.
- **4px** on checkboxes.

### Shadows — the one signature effect
- **Bubble buttons.** This is the system's distinctive flourish: every primary/alternate/secondary button has a **solid-colour 5px offset shadow stacked below it**, making it look like a key on a keyboard. On hover it shifts `translateY(3px)` and the shadow tightens to 2px — a satisfying "press". Defined as `--bubble-shadow-rest / --bubble-shadow-press` in `colors_and_type.css`.
- **No drop shadows anywhere else.** Cards are flat. Modals are flat. The bubble shadow is the only shadow in the system.

### Borders
- **Hair-thin** (`1px`) and **low-contrast** — `rgba(1,1,3,0.15)` on light; `rgba(255,255,255,0.20)` on dark. Used to suggest structure, never to box things in.
- Borders mostly appear as section dividers in the footer and as 0.5px progress tracks in scroll-driven sections.

### Animation
- **Motion (`motion/react`) is used for two patterns:** scroll-progress reveal (the giant `01 / 02 / 03` numerals that scroll in `layout-485`) and accordion/menu transitions (mobile nav slide-in 0.4s, dropdowns 0.2–0.3s).
- **Easing**: `ease-in-out` everywhere. Spring physics (`stiffness: 300, damping: 30`) for the numeric scroll-tracker.
- **No bounces, no playful overshoot.** Even the spring tunings produce critically-damped motion.
- **Marquees** are present for testimonial/logo loops (`marquee-horizontally` at 30s linear infinite) but the homepage doesn't use them.
- **Button hover** is the only micro-interaction: a 200ms `ease-in-out` translateY + shadow tighten.

### Hover & press states
- **Buttons**: press down 3px on hover, shadow compresses.
- **Links**: underline already present; no additional change.
- **Nav items**: no underline, no colour change — Fekrify trusts the user to know they're clickable.
- **Cards**: no hover state.

### Use of transparency & blur
- **`backdrop-filter: blur(10px)`** on translucent buttons and inputs. The intent is glass-over-photography (hero buttons over the dark-tinted hero image).
- Translucent fills come from the alpha ramp: `5% / 10% / 15% / 20% black` on light surfaces, same ramp in white for dark surfaces. Never coloured tints.

### Fixed elements
- **Navbar**: `position: relative` + `z-index: 999` — not actually sticky in the source. (Common pattern is to make it sticky in production.)
- **Megamenu dropdowns**: positioned absolutely below the nav; extend full-viewport width with a `bg-scheme-foreground` strip at the bottom for the "Want to talk about your project?" CTA.

### Layout rules
- All sections share `px-[5%]` horizontal padding so content alignment is consistent across schemes.
- Hero variants use `min-h-svh` (or `min-h-screen`) to claim a full viewport.
- Two-column patterns are dominant; three-column appears only in the footer.

---

## ICONOGRAPHY

**Source.** The codebase uses **`relume-icons`** (Relume's house icon font, distributed as a React package on npm — not bundled with this export, not available on a public CDN). Icons in the code: `RelumeIcon` (their cube logo), `KeyboardArrowDown` (chevron, Material-like), social-platform logos (`FacebookLogo`, `InstagramLogo`, `XLogo`, `LinkedinLogo`, `YoutubeLogo`).

**Style.** Filled / monoline hybrid, ~24px (`size-6` in Tailwind), single-colour (`text-scheme-text`). Roughly Material-Symbols Filled in feel — geometric, generous interior, no outlines, no two-tone, no rounded soft cuteness.

**Substitution.** Since `relume-icons` is not freely redistributable, **this design system substitutes [Lucide](https://lucide.dev)** (CDN-available, MIT-licensed, similar geometric monoline) for new work. Stroke weight 2, 24px, `currentColor`. **⚠️ This is a substitution — flag with the user if pixel-perfect parity with the production site is required.**

- Use Lucide via CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="chevron-down"></i>` + `lucide.createIcons()`.
- For brand/social logos use Lucide's bundled brand icons (`facebook`, `instagram`, `linkedin`, `youtube`, `twitter`) or [Simple Icons](https://simpleicons.org) if exact-brand SVGs are required.

**Emoji**: **never**. Not in marketing, not in UI.

**Unicode chars as icons**: not in this codebase. Em-dash (`—`) is used liberally as a typographic device but never as an icon.

**SVG vs PNG.**
- Logo: PNG (provided in `assets/logo-light.png` and `assets/logo-dark.png`).
- Icons: SVG (via Lucide).
- Photography: JPG (warm-toned, real people).
- No SVG illustrations on the home page (per `assets.md`: "No SVGs were found on the home page.").

**Logo rules** (from `DESIGN.md`):
- `logo-light.png` → use on **light** backgrounds (scheme-1, scheme-3, scheme-4). The wordmark is dark ink.
- `logo-dark.png` → use on **dark** backgrounds (scheme-2, scheme-5). The wordmark is white.
- The Fekrify wordmark is lowercase `fekrify` with a tiny lightbulb-glyph dotting the `i`. Don't separate the mark from the wordmark; they ship as a single image.

---

## How to use this design system

1. Link `colors_and_type.css` from the head of any HTML file.
2. Wrap each section in an element with one of the five scheme classes (`scheme-1` … `scheme-5`).
3. Use semantic class names from the CSS (`.btn .btn--primary`, `.input`, `.badge`, `.card`).
4. Pull images from `assets/images/` and logos from `assets/`.
5. For icons, load Lucide from CDN (see ICONOGRAPHY above).
6. Reference `ui_kits/marketing-site/` for fully composed component examples — recreations of the navbar, hero, footer, CTA, use-case section, and feature blocks.

## Caveats / open questions

- **`relume-icons` is not bundled** — we substitute Lucide. Confirm with user if icon-parity with production is critical.
- **`logo-dark.png` is a flat white wordmark** — visible only against a non-white background. This is correct (see `assets.md`) but worth noting.
- The codebase contains pages for case studies (HSBC, AXA, Cinnox) and service detail pages, but no actual product UI screens were exported. App screens shown in the site are just photography.
