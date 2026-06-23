/* @ds-bundle: {"format":3,"namespace":"FekrifyDesignSystem_019e26","components":[],"sourceHashes":{"ui_kits/marketing-site/CTA.jsx":"9be510b562ee","ui_kits/marketing-site/Features.jsx":"60528a08fa4c","ui_kits/marketing-site/Footer.jsx":"e6763dd83b1c","ui_kits/marketing-site/Hero.jsx":"ba09459fa4cf","ui_kits/marketing-site/LogoStrip.jsx":"aef13690419b","ui_kits/marketing-site/Navbar.jsx":"a36890a268c3","ui_kits/marketing-site/UseCases.jsx":"7bac40064eb4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FekrifyDesignSystem_019e26 = window.FekrifyDesignSystem_019e26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing-site/CTA.jsx
try { (() => {
// CTA.jsx — Aquamarine block, two-column. components/home/cta-13.

function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "cta scheme-4 section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container cta-grid"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cta-h2"
  }, "Discutons de vos objectifs business"), /*#__PURE__*/React.createElement("div", {
    className: "cta-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, "Parlez avec notre \xE9quipe pour d\xE9couvrir comment nous pouvons aligner votre strat\xE9gie, concevoir des produits digitaux performants et renforcer votre organisation gr\xE2ce au design."), /*#__PURE__*/React.createElement("div", {
    className: "cta-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--primary",
    href: "#"
  }, "Parler \xE0 notre \xE9quipe")))));
}
Object.assign(window, {
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Features.jsx
try { (() => {
// Features.jsx — Sticky-numeral scroll list. Left column shows a giant "01"
// that scrolls through 01 → 02 → 03 as you scroll past each block. From
// components/home/layout-485.

function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const items = [{
    h: "Strategy that drives business results",
    p: "We connect product strategy with user-centered design to create experiences that improve conversion, retention, and customer satisfaction. Every project starts with clear objectives and data-driven insights."
  }, {
    h: "Fast, collaborative delivery",
    p: "Through design sprints, prototyping, and iterative user testing, we reduce risk and speed up time-to-market. Our proven process ensures digital products meet customer needs before full development begins."
  }, {
    h: "Global experience with leading brands",
    p: "We have delivered UX consulting, product design, and innovation services to companies in fintech, retail, insurance, and SaaS. Our global perspective helps businesses scale digital products with confidence."
  }];
  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.3;
      let next = 0;
      cardsRef.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= trigger) next = i;
      });
      setActiveIdx(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "features scheme-1 section",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "container features-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "features-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "features-num-stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "features-num"
  }, "0"), /*#__PURE__*/React.createElement("div", {
    className: "features-num-roll",
    style: {
      transform: `translateY(${-(activeIdx * 100) / items.length}%)`
    }
  }, items.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "features-num"
  }, i + 1))))), /*#__PURE__*/React.createElement("div", {
    className: "features-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "features-item",
    ref: el => cardsRef.current[i] = el
  }, /*#__PURE__*/React.createElement("div", {
    className: "features-num-mobile"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "features-divider"
  }, /*#__PURE__*/React.createElement("div", {
    className: "features-divider-fill",
    style: {
      width: i <= activeIdx ? "100%" : "0%"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "features-h2"
  }, it.h), /*#__PURE__*/React.createElement("p", {
    className: "text-medium"
  }, it.p))))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
// Footer.jsx — Pure-black footer (scheme-5) with newsletter, three link
// columns, social row, and small-print bar. components/footer-01.

function SocialIcon({
  name
}) {
  const stroke = "currentColor";
  // Lucide-substitute marks (geometric monoline).
  const paths = {
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M4 4l16 16M20 4L4 20",
      strokeWidth: "2"
    }),
    linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    youtube: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: stroke,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths[name]);
}
function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const submit = e => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 2500);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer scheme-5 section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "footer-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-dark.png",
    alt: "Fekrify"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-regular footer-blurb"
  }, "Join our newsletter to stay up to date on features and releases."), /*#__PURE__*/React.createElement("form", {
    className: "footer-newsletter",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "email",
    placeholder: subscribed ? "Thanks — we'll be in touch." : "Enter your email",
    value: subscribed ? "" : email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--secondary-alt btn--sm"
  }, subscribed ? "Subscribed" : "Subscribe")), /*#__PURE__*/React.createElement("p", {
    className: "text-tiny footer-fineprint"
  }, "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "footer-col-title"
  }, "Fekrify"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\xC0 propos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cartes de cr\xE9dit HSBC")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Plateforme Cinnox")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Assurance AXA")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "footer-col-title"
  }, "Nos Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Strat\xE9gie d'Exp\xE9rience")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Innovation Produit")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Autonomisation par le Design")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "footer-col-title"
  }, "Follow us"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "facebook"
  }), /*#__PURE__*/React.createElement("span", null, "Facebook"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "instagram"
  }), /*#__PURE__*/React.createElement("span", null, "Instagram"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "x"
  }), /*#__PURE__*/React.createElement("span", null, "X"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "linkedin"
  }), /*#__PURE__*/React.createElement("span", null, "LinkedIn"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "youtube"
  }), /*#__PURE__*/React.createElement("span", null, "Youtube"))))))), /*#__PURE__*/React.createElement("div", {
    className: "divider",
    style: {
      background: "var(--alpha-on-dark-20)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-small"
  }, "\xA9 2026 Fekrify. All rights reserved."), /*#__PURE__*/React.createElement("ul", {
    className: "footer-legal text-small"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "#"
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "#"
  }, "Terms of Service")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: "#"
  }, "Cookies Settings"))))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
// Hero.jsx — Full-bleed hero with dark image overlay + center-aligned headline.
// Pattern: components/home/header-30 (scheme-1 with darkened photo background).

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero scheme-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/main-nav-navbar-0.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-tint"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, "We design strategy-powered experiences that move businesses forward"), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Fekrify is a Design and Innovation studio blending strategic thinking with product design. We help ambitious teams align, ideate, and launch experiences that make real business impact \u2014 fast."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--alternate",
    href: "#contact"
  }, "Speak to us"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--secondary-alt",
    href: "#cases"
  }, "See our work")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/LogoStrip.jsx
try { (() => {
// LogoStrip.jsx — Trust band on deep-violet background (scheme-2).
// Heading on the left, logo grid on the right. From components/home/logo-02.

function LogoStrip() {
  // Stylised neutral logos drawn as text — production has real client SVG logos.
  const logos = ["HSBC", "AXA", "Cinnox", "Orange", "Nespresso"];
  return /*#__PURE__*/React.createElement("section", {
    className: "logo-strip scheme-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container logo-strip-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "logo-strip-heading"
  }, "Trusted by teams at global companies"), /*#__PURE__*/React.createElement("div", {
    className: "logo-strip-grid"
  }, logos.map((name, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "logo-strip-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-strip-mark"
  }, name))))));
}
Object.assign(window, {
  LogoStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Navbar.jsx
try { (() => {
// Navbar.jsx — Fekrify marketing-site top navigation.
// Sticky transparent bar with center links + right-aligned bubble button.
// Two dropdowns (Nos Services, Études de cas) open as full-width megamenus.

function NavLink({
  children,
  hasDropdown,
  onHover,
  onLeave,
  isOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nav-link",
    onMouseEnter: onHover,
    onMouseLeave: onLeave,
    role: hasDropdown ? "button" : undefined
  }, children, hasDropdown && /*#__PURE__*/React.createElement("svg", {
    className: `chev ${isOpen ? "open" : ""}`,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })));
}
function MegaMenu({
  items,
  footerText,
  footerCta,
  visible
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `megamenu ${visible ? "open" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "megamenu-inner container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "megamenu-grid"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "megamenu-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "megamenu-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "megamenu-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "megamenu-desc"
  }, it.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "megamenu-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "megamenu-footer-inner container"
  }, /*#__PURE__*/React.createElement("span", null, footerText), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link"
  }, footerCta))));
}
function Navbar() {
  const [open, setOpen] = useState(null); // 'services' | 'cases' | null

  const services = [{
    title: "Stratégie d'expérience",
    desc: "Optimisez chaque point de contact pour créer des parcours fluides, engageants et alignés sur vos objectifs business."
  }, {
    title: "Innovation produit",
    desc: "Développez des produits digitaux innovants, sans vous brûler les ailes."
  }, {
    title: "Autonomisation par le Design",
    desc: "Nous vous aidons à ancrer les pratiques design dans votre culture, vos projets et votre stratégie digitale."
  }, {
    title: "Audit & Mesure",
    desc: "Évaluez la maturité design de votre organisation et identifiez les leviers d'amélioration."
  }];
  const cases = [{
    title: "Cartes de crédit HSBC",
    desc: "Application mobile native iOS et Android adaptée au marché singapourien."
  }, {
    title: "Plateforme Client Cinnox",
    desc: "Refonte de la plateforme omnicanale pour optimiser les interactions clients."
  }, {
    title: "Assurance Entreprises AXA",
    desc: "Refonte UX stratégique qui a permis à AXA Hong Kong de digitaliser son parcours PME."
  }, {
    title: "Toutes les études de cas",
    desc: "Découvrez l'ensemble de nos projets clients."
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "navbar scheme-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "navbar-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-light.png",
    alt: "Fekrify"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "navbar-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav-link"
  }, "\xC0 propos"), /*#__PURE__*/React.createElement(NavLink, {
    hasDropdown: true,
    isOpen: open === "services",
    onHover: () => setOpen("services"),
    onLeave: () => setOpen(null)
  }, "Nos Services"), /*#__PURE__*/React.createElement(NavLink, {
    hasDropdown: true,
    isOpen: open === "cases",
    onHover: () => setOpen("cases"),
    onLeave: () => setOpen(null)
  }, "\xC9tudes de cas")), /*#__PURE__*/React.createElement("div", {
    className: "navbar-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn--primary btn--sm"
  }, "Parler \xE0 notre \xE9quipe"))), /*#__PURE__*/React.createElement("div", {
    className: "megamenu-anchor",
    onMouseEnter: () => open && setOpen(open),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement(MegaMenu, {
    visible: open === "services",
    items: services,
    footerText: "Want to talk about your project?",
    footerCta: "Get in touch"
  }), /*#__PURE__*/React.createElement(MegaMenu, {
    visible: open === "cases",
    items: cases,
    footerText: "Curious about our process?",
    footerCta: "Read our approach"
  })));
}
Object.assign(window, {
  Navbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/UseCases.jsx
try { (() => {
// UseCases.jsx — Horizontal expanding columns. On desktop, the active column
// fills the row; inactive columns collapse to ~80px showing a vertical label.
// Click any column to open it. Recreation of components/home/layout-351.

function UseCases() {
  const [active, setActive] = useState(0);
  const features = [{
    num: "01",
    label: "HSBC Credit Cards",
    heading: "Native mobile banking, designed for Singapore.",
    body: "We partnered with HSBC to create a native iOS and Android app tailored for the Singaporean market — enabling a seamless digital card experience and unlocking access for over 3 million users.",
    image: "../../assets/images/home-benefits-section-0.jpg"
  }, {
    num: "02",
    label: "Cinnox Platform",
    heading: "An omnichannel platform that operators love.",
    body: "We redesigned Cinnox's omnichannel client platform to streamline customer interactions across voice, chat, and ticketing — improving agent throughput and customer NPS.",
    image: "../../assets/images/home-benefits-section-1.jpg"
  }, {
    num: "03",
    label: "AXA SME Insurance",
    heading: "Digital insurance that small businesses actually buy.",
    body: "Our strategic UX redesign helped AXA Hong Kong digitise its SME insurance journey end-to-end, cutting application time by more than half and lifting conversion across all key segments.",
    image: "../../assets/images/main-nav-navbar-1.jpg"
  }, {
    num: "04",
    label: "Coming soon",
    heading: "A new case study we can't talk about yet.",
    body: "We're currently wrapping up a major engagement with a Fortune 500 fintech. The full story drops Q3 — get in touch if you'd like a preview.",
    image: "../../assets/images/main-nav-navbar-0.jpg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "usecases scheme-3 section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "usecases-intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Use Cases"), /*#__PURE__*/React.createElement("h2", {
    className: "usecases-h2"
  }, "Strategy-led design that drives measurable outcomes"), /*#__PURE__*/React.createElement("p", {
    className: "text-medium",
    style: {
      color: "var(--fg-muted)"
    }
  }, "We help businesses translate complex challenges into meaningful digital experiences \u2014 fast. From mobile banking at scale to data-rich platforms and customer-centric insurance journeys, our work delivers both user value and business impact.")), /*#__PURE__*/React.createElement("div", {
    className: "usecases-card card"
  }, features.map((f, i) => {
    const isOpen = active === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `usecases-col ${isOpen ? "open" : ""}`,
      onClick: () => setActive(i),
      role: "button",
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("div", {
      className: "usecases-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "usecases-num"
    }, f.num), /*#__PURE__*/React.createElement("span", {
      className: "usecases-label"
    }, f.label)), /*#__PURE__*/React.createElement("div", {
      className: "usecases-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "usecases-body-inner"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "usecases-body-heading"
    }, f.heading), /*#__PURE__*/React.createElement("p", {
      className: "text-medium"
    }, f.body), /*#__PURE__*/React.createElement("div", {
      className: "usecases-image"
    }, /*#__PURE__*/React.createElement("img", {
      src: f.image,
      alt: ""
    })))));
  }))));
}
Object.assign(window, {
  UseCases
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/UseCases.jsx", error: String((e && e.message) || e) }); }

})();
