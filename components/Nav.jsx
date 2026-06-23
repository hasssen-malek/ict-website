/* global React */
const { useState: useStateNav, useEffect: useEffectNav, useRef: useRefNav } = React;

const NAV_ITEMS = [
  {
    id: "services",
    label: "Services",
    href: "Services.html",
    panel: [
      { no: "01", h: "Data, AI & Analytics", p: "A governed data foundation and the AI that runs on it.", href: "Service-Data-AI-Analytics.html" },
      { no: "02", h: "Cybersecurity", p: "Security at every layer.", href: "Service-Cybersecurity.html" },
      { no: "03", h: "Cloud & Infrastructure", p: "Built to scale, run anywhere.", href: "Service-Cloud-Infrastructure.html" },
      { no: "04", h: "Digital Transformation Consulting", p: "Strategy and a roadmap you can act on.", href: "Service-Consulting.html" },
      { no: "05", h: "Enterprise Applications & Integration", p: "Systems that talk to each other.", href: "Service-Applications.html" },
      { no: "06", h: "Application Modernization", p: "Legacy to cloud-native, the right way.", href: "Service-Applications.html" },
      { no: "07", h: "Customer Experience Platforms", p: "Every channel, one experience.", href: "Service-Customer-Experience.html" },
      { no: "08", h: "Managed & Support Services", p: "We keep it running, around the clock.", href: "Service-Managed-Services.html" },
      { no: "09", h: "Emerging Tech", p: "IoT, blockchain, AR/VR and digital twins.", href: "Emerging-Tech.html" },
    ],
  },
  {
    id: "emerging",
    label: "Emerging Tech",
    href: "Emerging-Tech.html",
    panel: [
      { no: "01", h: "Internet of Things", p: "Connect physical assets and act on what they tell you.", href: "Emerging-IoT.html" },
      { no: "02", h: "Blockchain", p: "Shared, tamper-evident records for trust.", href: "Emerging-Blockchain.html" },
      { no: "03", h: "Augmented & virtual reality", p: "Immersive training, simulation, and remote assistance.", href: "Emerging-AR-VR.html" },
      { no: "04", h: "Digital twins", p: "A live virtual model you can monitor and plan against.", href: "Emerging-Digital-Twins.html" },
    ],
  },
  {
    id: "aidata",
    label: "AI & Data",
    href: "AI-Data.html",
    panel: [
      { no: "01", h: "Enterprise AI", p: "From strategy to systems that run in production.", href: "AI-Enterprise-AI.html" },
      { no: "02", h: "Data intelligence & analytics", p: "Turning raw data into decisions.", href: "AI-Data-Analytics.html" },
      { no: "03", h: "Agentic & autonomous systems", p: "AI that plans and acts across workflows.", href: "AI-Agentic-Systems.html" },
      { no: "04", h: "Responsible & secure AI", p: "Governance and security built into every step.", href: "AI-Responsible-AI.html" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    href: "Industries.html",
    panel: [
      { no: "01", h: "Finance", p: "Digital banking, compliance, and fraud detection.", href: "Industry-Finance.html" },
      { no: "02", h: "Government", p: "Smart cities, eGovernment, and citizen services.", href: "Industry-Government.html" },
      { no: "03", h: "Healthcare", p: "EHR, telemedicine, and clinical analytics.", href: "Industry-Healthcare.html" },
      { no: "04", h: "Retail", p: "Omnichannel commerce and personalisation.", href: "Industry-Retail.html" },
      { no: "05", h: "Telecom", p: "Network optimisation and service delivery.", href: "Industry-Telecom.html" },
      { no: "06", h: "Manufacturing", p: "Industry 4.0, IoT, and predictive maintenance.", href: "Industry-Manufacturing.html" },
    ],
  },
  {
    id: "cases",
    label: "Case Studies",
    href: "Case-Studies.html",
    panel: [
      { no: "01", h: "Investment research assistant", p: "An AI research assistant for a financial institution.", href: "Case-Investment-Research.html" },
      { no: "02", h: "Unified enterprise search", p: "AI-powered search for an educational institution.", href: "Case-Enterprise-Search.html" },
      { no: "03", h: "Hybrid cloud data centre", p: "A government data centre extended into Azure.", href: "Case-Hybrid-Cloud.html" },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    href: "Partners.html",
    panel: [
      { no: "01", h: "Partner ecosystem", p: "The platforms behind everything we build.", href: "Partners.html" },
      { no: "02", h: "Microsoft Partnership Overview", p: "Our deepest platform relationship, certified.", href: "Microsoft.html" },
      { no: "03", h: "Azure Cloud & Infrastructure", p: "Migration and infrastructure modernisation.", href: "Microsoft-Azure.html" },
      { no: "04", h: "Data & AI on Azure", p: "Fabric, Azure AI, analytics, and AI apps.", href: "Microsoft-Data-AI.html" },
      { no: "05", h: "Security & Identity", p: "Defender, Entra, and threat protection.", href: "Microsoft-Security.html" },
      { no: "06", h: "Modern Work & Copilot", p: "Microsoft 365 and Copilot adoption.", href: "Microsoft-Modern-Work.html" },
      { no: "07", h: "Why ICT on Microsoft", p: "Credentials you can verify.", href: "Microsoft-Why-ICT.html" },
      { no: "08", h: "ICT Unified Enterprise Search", p: "Azure-based enterprise search.", href: "Microsoft-Enterprise-Search.html" },
      { no: "09", h: "DocumentIQ by ICT", p: "Agentic document intelligence on Azure.", href: "Microsoft-DocumentIQ.html" },
    ],
  },
  { id: "insights", label: "Insights", href: "Insights.html",
    panel: [
      { no: "01", h: "Articles", p: "Practical thinking on AI, cloud, and security.", href: "Insights.html" },
      { no: "02", h: "Case studies", p: "Real projects we have delivered.", href: "Case-Studies.html" },
      { no: "03", h: "Resources", p: "Guides and reference material.", href: "Insights.html" },
      { no: "04", h: "FAQs", p: "Answers to common questions.", href: "Insights.html" },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "Company.html",
    panel: [
      { no: "01", h: "Our story", p: "From a systems integrator in 2005 to a transformation partner.", href: "Company-Our-Story.html" },
      { no: "02", h: "Leadership", p: "The people who lead our work.", href: "Company-Leadership.html" },
      { no: "03", h: "Vision & mission", p: "What we are working towards, and how.", href: "Company-Vision-Mission.html" },
      { no: "04", h: "Values", p: "The five values that guide every engagement.", href: "Company-Values.html" },
    ],
  },
];

/* ============================ MEGA MENU (desktop ≥1280px) ============================ */
function NavIcon({ name, size = 22 }) {
  const c = { width: size, height: size, viewBox: "0 0 28 28", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  switch (name) {
    case "compass": return (<svg {...c}><circle cx="14" cy="14" r="10" /><path d="M18 10l-2.4 5.6L10 18l2.4-5.6L18 10Z" /></svg>);
    case "cloud": return (<svg {...c}><path d="M8 20h11a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 7.7 11 4.5 4.5 0 0 0 8 20Z" /></svg>);
    case "shield": return (<svg {...c}><path d="M14 3l8 3v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" /><path d="M10.5 13.5l2.3 2.3 4.2-4.6" /></svg>);
    case "data": return (<svg {...c}><ellipse cx="14" cy="7" rx="8" ry="3" /><path d="M6 7v7c0 1.7 3.6 3 8 3s8-1.3 8-3V7M6 14v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></svg>);
    case "layers": return (<svg {...c}><path d="M14 4l9 5-9 5-9-5 9-5Z" /><path d="M5 14l9 5 9-5M5 18.5l9 5 9-5" /></svg>);
    case "improve": return (<svg {...c}><path d="M6 14a8 8 0 0 1 13.5-5.8L22 10" /><path d="M22 5v5h-5" /><path d="M22 14a8 8 0 0 1-13.5 5.8L6 18" /><path d="M6 23v-5h5" /></svg>);
    case "managed": return (<svg {...c}><rect x="4" y="6" width="20" height="13" rx="1.5" /><path d="M10 23h8M14 19v4" /><path d="M8 12.5l2.5 2.5L8 17.5M13 16h4" /></svg>);
    case "network": return (<svg {...c}><circle cx="14" cy="6" r="2.6" /><circle cx="6" cy="21" r="2.6" /><circle cx="22" cy="21" r="2.6" /><path d="M14 8.6v4M12 14l-4 4.6M16 14l4 4.6" /></svg>);
    case "target": return (<svg {...c}><circle cx="14" cy="14" r="9" /><circle cx="14" cy="14" r="5" /><circle cx="14" cy="14" r="1.3" fill="currentColor" stroke="none" /></svg>);
    case "operations": return (<svg {...c}><circle cx="14" cy="14" r="3.2" /><path d="M14 4v3M14 21v3M4 14h3M21 14h3M7 7l2 2M19 19l2 2M7 21l2-2M19 9l2-2" /></svg>);
    case "ai": return (<svg {...c}><rect x="8" y="8" width="12" height="12" rx="1.5" /><path d="M11 5v3M17 5v3M11 20v3M17 20v3M5 11h3M5 17h3M20 11h3M20 17h3" /><circle cx="14" cy="14" r="2.4" /></svg>);
    case "bank": return (<svg {...c}><path d="M14 4l9 5H5l9-5Z" /><path d="M7 11v8M12 11v8M16 11v8M21 11v8M5 22h18" /></svg>);
    case "building": return (<svg {...c}><rect x="6" y="4" width="16" height="20" rx="1" /><path d="M10 9h2M16 9h2M10 13h2M16 13h2M10 17h2M16 17h2M12 24v-3h4v3" /></svg>);
    case "health": return (<svg {...c}><rect x="5" y="5" width="18" height="18" rx="3" /><path d="M14 9v10M9 14h10" /></svg>);
    case "signal": return (<svg {...c}><path d="M6 21V11M11 21V7M16 21v-8M21 21V4" /></svg>);
    case "partner": return (<svg {...c}><circle cx="10" cy="14" r="6" /><circle cx="18" cy="14" r="6" /></svg>);
    case "identity": return (<svg {...c}><circle cx="11" cy="10" r="4" /><path d="M4 22a7 7 0 0 1 14 0" /><path d="M19 12h4M21 10v4" /></svg>);
    case "doc": return (<svg {...c}><path d="M8 4h8l4 4v16H8V4Z" /><path d="M16 4v4h4M11 14h6M11 18h6M11 10h2" /></svg>);
    case "help": return (<svg {...c}><circle cx="14" cy="14" r="10" /><path d="M11 11a3 3 0 1 1 4 2.8c-.8.4-1 .9-1 1.7" /><circle cx="14" cy="19" r="1.1" fill="currentColor" stroke="none" /></svg>);
    case "azure": return (<svg {...c}><path d="M13 4l-7.5 14.5L4 21h7.5l1.2-2.4-3.8-.2L13 9.2 16.5 19l-2.8 0L13 21h9l-1.3-2.6L13 4Z" /></svg>);
    case "copilot": return (<svg {...c}><path d="M13.5 4c.7 4.4 2 5.7 6.4 6.4-4.4.7-5.7 2-6.4 6.4-.7-4.4-2-5.7-6.4-6.4 4.4-.7 5.7-2 6.4-6.4Z" /><path d="M20.5 16.5c.3 2 .9 2.6 2.9 2.9-2 .3-2.6.9-2.9 2.9-.3-2-.9-2.6-2.9-2.9 2-.3 2.6-.9 2.9-2.9Z" /></svg>);
    case "check": return (<svg {...c}><circle cx="14" cy="14" r="10" /><path d="M9.5 14l3 3 6-6.5" /></svg>);
    default: return (<svg {...c}><circle cx="14" cy="14" r="9" /></svg>);
  }
}

/* One unified, scalable model for every mega menu:
   { desc, groups:[ { title?, items:[ {icon, h, p?, href} ] } ] }
   A single renderer lays them out identically — add items/groups to grow. */
const NAV_MEGA = {
  services: {
    desc: "Modernisation, cloud, AI, security and managed services designed to help organisations scale confidently.",
    groups: [{ items: [
      { icon: "compass", accent: "#2BA4FF", h: "Digital Transformation Consulting", p: "Strategy and a roadmap you can act on.", href: "Service-Consulting.html" },
      { icon: "cloud", accent: "#8472FF", h: "Cloud & Infrastructure", p: "Built to scale, run anywhere.", href: "Service-Cloud-Infrastructure.html" },
      { icon: "shield", accent: "#B481FF", h: "Cybersecurity", p: "Security at every layer.", href: "Service-Cybersecurity.html" },
      { icon: "data", accent: "#E36CC4", h: "Data, AI & Analytics", p: "From raw data to decisions.", href: "Service-Data-AI-Analytics.html" },
      { icon: "layers", accent: "#FF9255", h: "Enterprise Applications & Integration", p: "Systems that talk to each other.", href: "Service-Applications.html" },
      { icon: "improve", accent: "#2BD9E0", h: "Application Modernization", p: "Legacy to cloud-native, the right way.", href: "Service-Applications.html" },
      { icon: "target", accent: "#FF6FA5", h: "Customer Experience Platforms", p: "Every channel, one experience.", href: "Service-Customer-Experience.html" },
      { icon: "managed", accent: "#4ED9A4", h: "Managed & Support Services", p: "Run, monitored and improved around the clock.", href: "Service-Managed-Services.html" },
      { icon: "network", accent: "#EAB308", h: "Emerging Tech", p: "IoT, blockchain, AR/VR and digital twins.", href: "Emerging-Tech.html" },
    ] }],
  },
  emerging: {
    desc: "Applied IoT, blockchain, immersive and digital-twin technology, grounded in real operations.",
    groups: [{ items: [
      { icon: "network", h: "Internet of Things", p: "Connect assets and act on what they tell you.", href: "Emerging-IoT.html" },
      { icon: "layers", h: "Blockchain", p: "Shared, tamper-evident records for trust.", href: "Emerging-Blockchain.html" },
      { icon: "target", h: "Augmented & Virtual Reality", p: "Immersive training, simulation, remote assist.", href: "Emerging-AR-VR.html" },
      { icon: "operations", h: "Digital Twins", p: "A live virtual model to monitor and plan.", href: "Emerging-Digital-Twins.html" },
    ] }],
  },
  aidata: {
    desc: "From governed data foundations to production AI, agents and responsible-AI governance.",
    groups: [{ items: [
      { icon: "ai", h: "Enterprise AI", p: "From strategy to systems that run in production.", href: "AI-Enterprise-AI.html" },
      { icon: "data", h: "Data Intelligence & Analytics", p: "Turning raw data into decisions.", href: "AI-Data-Analytics.html" },
      { icon: "operations", h: "Agentic & Autonomous Systems", p: "AI that plans and acts across workflows.", href: "AI-Agentic-Systems.html" },
      { icon: "shield", h: "Responsible & Secure AI", p: "Governance and security at every step.", href: "AI-Responsible-AI.html" },
    ] }],
  },
  industries: {
    desc: "Six sectors, each with solutions shaped to its pressures, rules and language.",
    groups: [{ items: [
      { icon: "bank", h: "Finance", p: "Digital banking, compliance, fraud detection.", href: "Industry-Finance.html" },
      { icon: "building", h: "Government", p: "Smart cities and citizen services.", href: "Industry-Government.html" },
      { icon: "health", h: "Healthcare", p: "EHR, telemedicine, clinical analytics.", href: "Industry-Healthcare.html" },
      { icon: "target", h: "Retail", p: "Omnichannel commerce and personalisation.", href: "Industry-Retail.html" },
      { icon: "signal", h: "Telecom", p: "Network optimisation and service delivery.", href: "Industry-Telecom.html" },
      { icon: "operations", h: "Manufacturing", p: "Industry 4.0, IoT, predictive maintenance.", href: "Industry-Manufacturing.html" },
    ] }],
  },
  cases: {
    desc: "Real projects we have delivered across finance, education and government in Qatar.",
    groups: [{ items: [
      { icon: "data", h: "Investment Research Assistant", p: "An AI research assistant for a financial institution.", href: "Case-Investment-Research.html" },
      { icon: "ai", h: "Unified Enterprise Search", p: "AI-powered search for an educational institution.", href: "Case-Enterprise-Search.html" },
      { icon: "cloud", h: "Hybrid Cloud Data Centre", p: "A government data centre extended into Azure.", href: "Case-Hybrid-Cloud.html" },
    ] }],
  },
  partners: {
    desc: "We build on platforms that are proven, supported and here for the long term, led by a complete Microsoft practice.",
    groups: [
      { title: "Ecosystem", items: [
        { icon: "partner", h: "Partner Ecosystem", p: "The platforms behind everything we build.", href: "Partners.html" },
      ] },
      { title: "Microsoft practice", items: [
        { icon: "target", h: "Microsoft Partnership Overview", p: "Designations, specializations, and why ICT.", href: "Microsoft.html" },
        { icon: "azure", h: "Azure Cloud & Infrastructure", p: "Migration and infrastructure modernisation.", href: "Microsoft-Azure.html" },
        { icon: "data", h: "Data & AI on Azure", p: "Fabric, Azure AI, analytics, and AI apps.", href: "Microsoft-Data-AI.html" },
        { icon: "shield", h: "Security & Identity", p: "Defender, Entra, and threat protection.", href: "Microsoft-Security.html" },
        { icon: "copilot", h: "Modern Work & Copilot", p: "Microsoft 365 and Copilot adoption.", href: "Microsoft-Modern-Work.html" },
        { icon: "check", h: "Why ICT on Microsoft", p: "Credentials you can verify.", href: "Microsoft-Why-ICT.html" },
        { icon: "network", h: "ICT Unified Enterprise Search", p: "Azure-based enterprise search.", href: "Microsoft-Enterprise-Search.html" },
        { icon: "layers", h: "DocumentIQ by ICT", p: "Agentic document intelligence on Azure.", href: "Microsoft-DocumentIQ.html" },
      ] },
    ],
  },
  insights: {
    desc: "Practical thinking on AI in production, cloud, cybersecurity and digital transformation.",
    groups: [{ items: [
      { icon: "doc", h: "Articles", p: "Perspectives from the people who do the work.", href: "Insights.html" },
      { icon: "data", h: "Case Studies", p: "Real projects, real outcomes.", href: "Case-Studies.html" },
      { icon: "help", h: "FAQs", p: "Answers to common questions.", href: "Insights.html" },
    ] }],
  },
  company: {
    desc: "Qatar's enterprise technology partner since 2005, the people and principles behind the work.",
    groups: [{ items: [
      { icon: "compass", h: "Our Story", p: "From systems integrator to transformation partner.", href: "Company-Our-Story.html" },
      { icon: "target", h: "Vision & Mission", p: "What we are working towards, and how.", href: "Company-Vision-Mission.html" },
      { icon: "partner", h: "Values", p: "The five values that guide every engagement.", href: "Company-Values.html" },
      { icon: "identity", h: "Leadership", p: "The people who lead our work.", href: "Company-Leadership.html" },
      { icon: "improve", h: "Careers", p: "Build the future of technology in Qatar.", href: "Careers.html" },
    ] }],
  },
};

/* Single consistent layout for every menu — left title + description, right grid of
   icon links. Groups render as labelled sub-sections; the grid is auto-fit so any
   number of items stays balanced. */
function MegaPanel({ item, onNavigate }) {
  const m = NAV_MEGA[item.id];
  if (!m) return null;
  const close = () => onNavigate && onNavigate();
  const groups = m.groups || [{ items: m.items || [] }];
  return (
    <div className="mega">
      <div className="mega__inner">
        <div className="mega__left">
          <p className="mega__eyebrow">{item.label}</p>
          <p className="mega__desc">{m.desc}</p>
        </div>
        <div className="mega__right">
          {groups.map((g, gi) => (
            <div className="mega__group" key={gi}>
              {g.title ? <p className="mega__group-h">{g.title}</p> : null}
              <div className="mega__grid">
                {g.items.map((cd) => (
                  <a className={"mega__card" + (cd.accent ? " mega__card--accent" : "")} href={cd.href} key={cd.h} onClick={close}
                     style={cd.accent ? { "--mega-accent": cd.accent } : undefined}>
                    <span className="mega__card-ic"><NavIcon name={cd.icon} size={22} /></span>
                    <span className="mega__card-t">
                      <span className="mega__card-h">{cd.h}</span>
                      {cd.p ? <span className="mega__card-p">{cd.p}</span> : null}
                    </span>
                    <span className="mega__card-ar" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Caret() {
  return (
    <svg className="nav__caret" viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [openId, setOpenId] = useStateNav(null);
  const [mobileOpen, setMobileOpen] = useStateNav(false);
  const [openSub, setOpenSub] = useStateNav(null);
  const timer = useRefNav(null);
  const burgerRef = useRefNav(null);
  const sheetRef = useRefNav(null);

  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffectNav(() => {
    const onKey = (e) => { if (e.key === "Escape") { setOpenId(null); setMobileOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock + focus management + focus trap while the mobile menu is open
  useEffectNav(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      const sheet = sheetRef.current;
      if (sheet) {
        const first = sheet.querySelector(".navm__close");
        if (first) first.focus();
      }
    } else {
      document.documentElement.style.overflow = "";
      // Return focus to the trigger only if focus is still inside the (closing) sheet
      const active = document.activeElement;
      if (burgerRef.current && (!active || active === document.body || (sheetRef.current && sheetRef.current.contains(active)))) {
        burgerRef.current.focus();
      }
      setOpenSub(null);
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobileOpen]);

  // Trap Tab focus within the open mobile sheet
  const onSheetKeyDown = (e) => {
    if (e.key !== "Tab") return;
    const sheet = sheetRef.current;
    if (!sheet) return;
    const focusable = Array.from(
      sheet.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.offsetParent !== null || el === document.activeElement);
    if (focusable.length === 0) return;
    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault();
      lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus();
    }
  };

  const open = (id) => { if (timer.current) clearTimeout(timer.current); setOpenId(id); };
  const close = () => { if (timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => setOpenId(null), 130); };

  return (
    <React.Fragment>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
        <nav className="nav__row" aria-label="Primary">
          <a href="index.html" className="nav__logo" aria-label="ICT home">
            <img src="assets/ict-logo-small.png" alt="ICT" />
          </a>

          <ul className="nav__links">
            {NAV_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li
                  key={item.id}
                  className={"nav__item" + (isOpen ? " is-open" : "")}
                  onMouseEnter={() => item.panel && open(item.id)}
                  onMouseLeave={() => item.panel && close()}
                >
                  <a
                    href={item.href}
                    className="nav__link"
                    aria-haspopup={item.panel ? "true" : undefined}
                    aria-expanded={item.panel ? isOpen : undefined}
                    onClick={(e) => { if (item.panel) { e.preventDefault(); setOpenId(isOpen ? null : item.id); } }}
                  >
                    <span>{item.label}</span>
                    {item.panel ? <Caret /> : null}
                  </a>
                  {item.panel && isOpen ? (
                    <div className="nav__panel" role="menu" onMouseEnter={() => open(item.id)} onMouseLeave={close}>
                      {item.panel.map((l) => (
                        <a key={l.no} className="nav__panel-link" href={l.href} role="menuitem" onClick={() => setOpenId(null)}>
                          <span className="nav__panel-no">{l.no}</span>
                          <span className="nav__panel-h">{l.h}</span>
                          <span className="nav__panel-ar" aria-hidden="true">→</span>
                          <span className="nav__panel-p">{l.p}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <span className="nav__spacer" />

          <a className="nav__cta" href="Contact.html" aria-label="Contact us">
            <span>Contact us</span>
            <span className="ar" aria-hidden="true">→</span>
          </a>

          <button
            className={"nav__burger" + (mobileOpen ? " is-open" : "")}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
            ref={burgerRef}
          >
            <span className="nav__burger-label">{mobileOpen ? "Close" : "Menu"}</span>
            <span className="nav__burger-icon" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </nav>
        {(() => {
          const openItem = NAV_ITEMS.find((i) => i.id === openId && NAV_MEGA[i.id]);
          return (
            <div
              className={"nav__mega-host" + (openItem ? " is-open" : "")}
              onMouseEnter={() => openItem && open(openItem.id)}
              onMouseLeave={close}
              aria-hidden={openItem ? undefined : "true"}
            >
              {openItem ? <MegaPanel item={openItem} onNavigate={() => setOpenId(null)} /> : null}
            </div>
          );
        })()}
      </header>

      <div className={"navm" + (mobileOpen ? " is-open" : "")} id="mobile-nav">
          <div className="navm__scrim" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <aside
            className="navm__sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            ref={sheetRef}
            onKeyDown={onSheetKeyDown}
            {...(!mobileOpen ? { inert: "", "aria-hidden": "true" } : {})}
          >
            <div className="navm__head">
              <a href="index.html" className="navm__logo" aria-label="ICT home" onClick={() => setMobileOpen(false)}>
                <img src="assets/ict-logo-small.png" alt="ICT" />
              </a>
              <button className="navm__close" aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} type="button">
                <span>Close</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <nav className="navm__body" aria-label="Mobile">
              {NAV_ITEMS.map((item) => {
                const subOpen = openSub === item.id;
                return (
                  <div className={"navm__group" + (subOpen ? " is-open" : "")} key={item.id}>
                    <div className="navm__row">
                      <a className="navm__link" href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </a>
                      {item.panel ? (
                        <button
                          className="navm__toggle"
                          type="button"
                          aria-label={(subOpen ? "Collapse " : "Expand ") + item.label}
                          aria-expanded={subOpen}
                          aria-controls={"navm-sub-" + item.id}
                          onClick={() => setOpenSub(subOpen ? null : item.id)}
                        >
                          <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 5.5l3.5 3.5 3.5-3.5" /></svg>
                        </button>
                      ) : null}
                    </div>
                    {item.panel ? (
                      <div className="navm__sub" id={"navm-sub-" + item.id}>
                        <div className="navm__sub-inner" {...(!subOpen ? { inert: "" } : {})}>
                          {item.panel.map((l) => (
                            <a key={l.no} href={l.href} onClick={() => setMobileOpen(false)}>
                              <span className="navm__sub-no" aria-hidden="true">{l.no}</span>
                              <span>{l.h}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="navm__foot">
              <a className="btn btn--primary navm__cta" href="Contact.html" aria-label="Contact us" onClick={() => setMobileOpen(false)}>
                Contact us <span className="ar" aria-hidden="true">→</span>
              </a>
              <div className="navm__contact">
                <a href="mailto:info@ict.com.qa">info@ict.com.qa</a>
                <span aria-hidden="true">·</span>
                <span>Doha, Qatar</span>
              </div>
              <p className="navm__brandline">ICT. Empowering digital transformation in Qatar.</p>
            </div>
          </aside>
        </div>
    </React.Fragment>
  );
}

window.Nav = Nav;
