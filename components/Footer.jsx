/* global React */
function Footer() {
  const columns = [
    [
      {
        h: "Services",
        links: [
          { label: "Digital Transformation Consulting", href: "Service-Consulting.html" },
          { label: "Cloud & Infrastructure", href: "Service-Cloud-Infrastructure.html" },
          { label: "Cybersecurity", href: "Service-Cybersecurity.html" },
          { label: "Data, AI & Analytics", href: "Service-Data-AI-Analytics.html" },
          { label: "Enterprise Applications & Integration", href: "Service-Applications.html" },
          { label: "Customer Experience Platforms", href: "Service-Customer-Experience.html" },
          { label: "Managed & Support Services", href: "Service-Managed-Services.html" },
          { label: "Emerging Tech", href: "Emerging-Tech.html" },
        ],
      },
    ],
    [
      {
        h: "AI & Data",
        links: [
          { label: "Enterprise AI", href: "AI-Enterprise-AI.html" },
          { label: "Data intelligence & analytics", href: "AI-Data-Analytics.html" },
          { label: "Agentic & autonomous systems", href: "AI-Agentic-Systems.html" },
          { label: "Responsible & secure AI", href: "AI-Responsible-AI.html" },
        ],
      },
      {
        h: "Microsoft",
        links: [
          { label: "Partnership Overview", href: "Microsoft.html" },
          { label: "Azure Cloud & Infrastructure", href: "Microsoft-Azure.html" },
          { label: "Data & AI on Azure", href: "Microsoft-Data-AI.html" },
          { label: "Security & Identity", href: "Microsoft-Security.html" },
          { label: "Modern Work & Copilot", href: "Microsoft-Modern-Work.html" },
          { label: "Why ICT on Microsoft", href: "Microsoft-Why-ICT.html" },
          { label: "ICT Unified Enterprise Search", href: "Microsoft-Enterprise-Search.html" },
          { label: "DocumentIQ by ICT", href: "Microsoft-DocumentIQ.html" },
        ],
      },
      {
        h: "Partners",
        links: [
          { label: "Partner ecosystem", href: "Partners.html" },
        ],
      },
    ],
    [
      {
        h: "Industries",
        links: [
          { label: "Finance", href: "Industry-Finance.html" },
          { label: "Government", href: "Industry-Government.html" },
          { label: "Healthcare", href: "Industry-Healthcare.html" },
          { label: "Retail", href: "Industry-Retail.html" },
          { label: "Telecom", href: "Industry-Telecom.html" },
          { label: "Manufacturing", href: "Industry-Manufacturing.html" },
        ],
      },
      {
        h: "Explore",
        links: [
          { label: "Case studies", href: "Case-Studies.html" },
          { label: "Insights", href: "Insights.html" },
          { label: "Contact", href: "Contact.html" },
        ],
      },
    ],
    [
      {
        h: "Company",
        links: [
          { label: "Our story", href: "Company-Our-Story.html" },
          { label: "Leadership", href: "Company-Leadership.html" },
          { label: "Vision & mission", href: "Company-Vision-Mission.html" },
          { label: "Values", href: "Company-Values.html" },
          { label: "Careers", href: "Careers.html" },
        ],
      },
    ],
  ];

  const socials = [
    { label: "LinkedIn", path: "M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0 0 20.45 3zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.08-1.6 2.21v4.25H10V9.75h2.56v1.18h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.7z", fill: true },
  ];

  return (
    <footer className="footer" id="about">
      <div className="wrap">
        <div className="ticks ticks--bar reveal" style={{ marginBottom: "56px" }}><i></i><i></i><i></i><i></i><i></i><i></i></div>

        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="index.html" aria-label="ICT home">
              <img src="assets/ict-logo-mixed.png" alt="ICT, Information and Communication Technology" />
            </a>
            <p className="footer__tag">
              ICT is a digital transformation partner in Doha, Qatar. We help organisations
              modernise their infrastructure, secure it, and put their data and AI to work.
            </p>
            {/* TODO[VERIFY]: full street address, cert letter shows Building #75, Street #250, Doha 24537 */}
            <div className="footer__contact"><strong>Doha HQ</strong>ICT W.L.L., Doha, Qatar</div>
            {/* TODO[VERIFY]: phone and email before publish */}
            <div className="footer__contact"><strong>Contact us</strong>info@ict.com.qa&nbsp;&nbsp;·&nbsp;&nbsp;+974 4440 5000</div>
            <div className="footer__social" aria-label="ICT on social">
              {socials.map((s) => (
                <a key={s.label} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            {columns.map((groups, ci) => (
              <div className="footer__col" key={ci}>
                {groups.map((g) => (
                  <div className="footer__group" key={g.h}>
                    <div className="footer__h">{g.h}</div>
                    <ul>{g.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bot">
          <div>© {new Date().getFullYear()} ICT W.L.L · Doha, Qatar · Empowering digital transformation</div>
          <div className="footer__legal">
            <a href="Privacy-Policy.html">Privacy Policy</a><a href="Terms-of-Use.html">Terms of Use</a><a href="Cookie-Policy.html">Cookie Policy</a><a href="sitemap.xml">Sitemap</a><a href="#" data-cookie-settings onClick={(e) => { e.preventDefault(); if (window.ICTConsent) window.ICTConsent.open(); }}>Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
