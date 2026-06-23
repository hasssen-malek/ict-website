/* global React, SecHead, IconCards, Icon, PageCTA, FaqBlock, PartnerLogo, accentTitle */
/* Dedicated Microsoft partnership page — built to Sheet 7 + Sheet 9 copy.
   TODO[VERIFY]: Partner ID 1056745, the 5/16 counts. Refresh the credentials
   band on renewal, do not hardcode a certification expiry date in copy.
   TODO[ADD URL]: real Azure Marketplace listing URLs for the two products. */

const MS_DESIGNATIONS = ["Modern Work", "Security", "Infrastructure (Azure)", "Data & AI (Azure)", "Digital & App Innovation (Azure)"];
const MS_SPECIALIZATIONS = ["Data Warehouse Migration", "Kubernetes on Azure", "Analytics", "Azure VMware Solution", "AI Platform on Microsoft Azure", "Adoption and Change Management", "Modernize Endpoints", "Cloud Security", "Identity and Access Management", "Data Security", "Threat Protection", "Infra and Database Migration", "Azure Virtual Desktop", "Migrate Enterprise Applications to Microsoft Azure", "AI Apps on Microsoft Azure", "Copilot"];

const MS_PRACTICES = [
  { icon: "azure", h: "Azure Infrastructure", p: "We move workloads off ageing hardware into Azure, then keep them running, migration, landing zones, and resilient platform operations.",
    tags: ["Infrastructure & database migration", "Kubernetes on Azure", "Azure VMware Solution", "Azure Virtual Desktop", "Landing zones & FinOps"] },
  { icon: "data", h: "Data & AI", p: "We build the governed data foundation, then the intelligence that runs on it, from analytics to production enterprise AI.",
    tags: ["Microsoft Fabric", "Azure AI", "Analytics", "Enterprise AI", "Data platforms"] },
  { icon: "lock", h: "Security & Compliance", p: "We secure identities, devices, and data end to end, and prove it, aligned to Zero Trust and local regulation.",
    tags: ["Microsoft Defender", "Microsoft Entra", "Zero Trust", "Governance", "Compliance"] },
  { icon: "copilot", h: "Microsoft Copilot", p: "We make Copilot a working part of the day, grounded in your data, governed, and wired into real workflows, not just switched on.",
    tags: ["Copilot for Microsoft 365", "Productivity transformation", "Knowledge retrieval", "AI agents", "Intelligent workflows"] },
];

const MS_INDUSTRIES = [
  { icon: "bank", h: "Finance", p: "Secure cloud and fraud analytics.", href: "Industry-Finance.html", cta: "Explore" },
  { icon: "building", h: "Government", p: "Compliant Azure and citizen services.", href: "Industry-Government.html", cta: "Explore" },
  { icon: "health", h: "Healthcare", p: "Secure data and clinical workloads.", href: "Industry-Healthcare.html", cta: "Explore" },
  { icon: "target", h: "Retail", p: "Microsoft-based commerce and personalisation.", href: "Industry-Retail.html", cta: "Explore" },
  { icon: "signal", h: "Telecom", p: "Network and service platforms.", href: "Industry-Telecom.html", cta: "Explore" },
  { icon: "operations", h: "Manufacturing", p: "IoT and analytics on Azure.", href: "Industry-Manufacturing.html", cta: "Explore" },
];

function MsHero() {
  return (
    <section className="phero s-ink-deep acc-blue phero--blue">
      <HeroFigure variant="microsoft" hue="blue" />
      <div className="wrap hero-load">
        <nav className="lhero__crumbs" aria-label="Breadcrumb">
          <a href="index.html">Home</a><span aria-hidden="true">/</span>
          <a href="Partners.html">Partners</a><span aria-hidden="true">/</span>
          <span aria-current="page">Microsoft</span>
        </nav>
        <p className="kicker">Microsoft partnership</p>
        <h1 className="phero__title" style={{ maxWidth: "16ch" }}>{accentTitle("ICT and Microsoft.", "Microsoft")}</h1>
        <p className="phero__sub lead" style={{ maxWidth: "640px" }}>
          We use the Microsoft cloud to help organisations in Qatar modernise infrastructure,
          secure it, and put data and AI to work.
        </p>
        {/* TODO[VERIFY]: designation and specialization counts at publish */}
        <p className="ms-proof">
          A Microsoft AI Cloud Partner Program member, with five Solutions Partner designations
          and sixteen specializations across Azure Infrastructure, security, data and AI, and Copilot.
        </p>
        <div className="hero__cta" style={{ marginTop: "32px" }}>
          <a className="btn btn--primary" href="Contact.html">Talk to our Microsoft team <span className="ar" aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>);
}

function MicrosoftPage() {
  return (
    <>
      <MsHero />

      {/* Overview, answer-first single column */}
      <section className="section s-paper">
        <div className="wrap sintro__grid">
          <div className="reveal acc-blue">
            <p className="kicker">The partnership</p>
            <h2 className="sintro__stmt">The partnership, in one <span className="tword">paragraph</span>.</h2>
          </div>
          <div className="sintro__body reveal d1">
            <p>ICT has built its Microsoft practice around the work clients actually ask for: moving off ageing systems onto Azure, securing identities and data, and getting real use out of Microsoft 365, Copilot, and Azure AI. Our certifications are earned by delivering these projects, not by sitting an exam.</p>
          </div>
        </div>
      </section>

      {/* Credentials band */}
      <section className="section s-paper-2">
        <div className="wrap">
          <SecHead eyebrow="The proof" title="What we are certified to deliver." hl="certified" hue="violet" />
          <div className="ms-cred reveal">
            <div>
              <p className="ms-cred__label">Solutions Partner designations (5)</p>
              <div className="ms-desig">
                {MS_DESIGNATIONS.map((d) => (
                  <div className="ms-desig__item" key={d}><Icon name="check" size={22} /><span className="ms-desig__t">{d}</span></div>
                ))}
              </div>
            </div>
            <div>
              <p className="ms-cred__label">Specializations (16)</p>
              <div className="ms-spec">
                {MS_SPECIALIZATIONS.map((s) => <span className="eco-chip" key={s}>{s}</span>)}
              </div>
              {/* TODO[VERIFY]: Partner ID 1056745. Build to refresh on renewal, no hardcoded expiry. */}
              <p className="ms-verify">
                Verified through the Microsoft AI Cloud Partner Program. Partner ID 1056745.<br />
                <a href="https://aka.ms/MicrosoftSolutionsPartner" target="_blank" rel="noopener noreferrer">aka.ms/MicrosoftSolutionsPartner</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do on Microsoft, expanded practices with capability chips */}
      <section className="section s-ink">
        <div className="wrap">
          <SecHead eyebrow="What we do on Microsoft" title="Four practices, mapped to real specializations." hl="Four practices" hue="magenta"
            sub="A complete Microsoft practice across cloud, data, security, and AI, each grounded in earned specializations and live delivery." />
          <div className="ms-prac reveal">
            {MS_PRACTICES.map((pr, i) => (
              <article className={"ms-prac__card ms-prac__card--" + (i % 2 === 0 ? "a" : "b")} key={pr.h}>
                <span className="ms-prac__idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="ms-prac__icon"><Icon name={pr.icon} size={30} /></span>
                <h3 className="ms-prac__h">{pr.h}</h3>
                <p className="ms-prac__p">{pr.p}</p>
                <div className="ms-prac__tags">
                  {pr.tags.map((t) => <span className="eco-chip" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the Microsoft practice, deep-dive pages */}
      <section className="section s-ink-deep">
        <div className="wrap">
          <SecHead eyebrow="Microsoft practice" title="Go deeper on each capability." hl="each capability" hue="blue"
            sub="A complete Microsoft practice, explore the dedicated pages for cloud, data and AI, security, modern work, and the products we have built on Azure." />
          <div className="msnav reveal d1">
            {[
              { h: "Azure Cloud & Infrastructure", href: "Microsoft-Azure.html" },
              { h: "Data & AI on Azure", href: "Microsoft-Data-AI.html" },
              { h: "Security & Identity", href: "Microsoft-Security.html" },
              { h: "Modern Work & Copilot", href: "Microsoft-Modern-Work.html" },
              { h: "Why ICT on Microsoft", href: "Microsoft-Why-ICT.html" },
              { h: "ICT Unified Enterprise Search", href: "Microsoft-Enterprise-Search.html" },
              { h: "DocumentIQ by ICT", href: "Microsoft-DocumentIQ.html" },
            ].map((n) => (
              <a className="msnav__item" href={n.href} key={n.href}>
                <span className="msnav__h">{n.h}</span>
                <span className="msnav__ar" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section s-paper">
        <div className="wrap">
          <SecHead eyebrow="Industries" title="Where this lands." hl="lands" hue="blue"
            sub="The same six sectors we serve, with a Microsoft angle on each." />
          <IconCards cards={MS_INDUSTRIES} cols={3} />
        </div>
      </section>

      {/* Featured solutions on Azure */}
      <section className="section s-ink-deep">
        <div className="wrap">
          <SecHead eyebrow="Featured solutions" title="Our solutions on the Microsoft Marketplace." hl="Microsoft Marketplace" hue="violet" />
          <div className="ms-products reveal">
            <div className="ms-product">
              <span className="ms-product__badge">Microsoft Marketplace</span>
              <h3 className="ms-product__h">ICT Unified Enterprise Search</h3>
              <p className="ms-product__p">An AI-driven knowledge discovery platform that gives your people one place to search across documents, databases, cloud storage, and internal applications. It goes beyond keyword matching to understand context and relationships, with natural language querying, automatic categorisation, and enterprise-grade security. Built to integrate with your existing infrastructure, including Microsoft Azure.</p>
              {/* TODO[ADD URL]: real Azure Marketplace listing URL */}
              <a className="btn btn--line" href="#" aria-disabled="true">See it on the Microsoft Marketplace <span className="ar" aria-hidden="true">→</span></a>
            </div>
            <div className="ms-product">
              <span className="ms-product__badge">Microsoft Marketplace</span>
              <h3 className="ms-product__h">DocumentIQ by ICT</h3>
              <p className="ms-product__p">An agentic document intelligence platform built on Azure. It ingests documents from any source, uses Azure Document Intelligence and Azure AI Foundry to extract and understand content, and runs autonomous AI agents that review documents, detect risks, and surface insights. Results are searchable through a secure, governed, Azure-native architecture.</p>
              {/* TODO[ADD URL]: real Azure Marketplace listing URL */}
              <a className="btn btn--line" href="#" aria-disabled="true">See it on the Microsoft Marketplace <span className="ar" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Client story */}
      <section className="section s-paper">
        <div className="wrap sintro__grid">
          <div className="reveal acc-orange">
            <p className="kicker">A Microsoft project we delivered</p>
            <h2 className="sintro__stmt">A government data centre, extended into <span className="tword">Azure</span>.</h2>
          </div>
          <div className="sintro__body reveal d1">
            {/* TODO[VERIFY]: client naming before publish */}
            <p>A government entity needed to extend its on-premises VMware data centre into the cloud without compromising security, data sovereignty, or operational continuity. We designed a hybrid cloud architecture on Azure VMware Solution that extended the existing environment into Azure, kept network and operational consistency, and aligned with the entity's governance requirements. The result was a secure, scalable hybrid cloud platform that reduced risk and set a foundation for future modernisation.</p>
            <a className="tlink" href="Case-Hybrid-Cloud.html">Read the case study <span className="ar" aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <FaqBlock eyebrow="FAQ" title="Microsoft, answered." hl="answered" hue="blue" bg="s-ink" items={[
        { q: "What is ICT's Microsoft partnership status?", a: "ICT is a member of the Microsoft AI Cloud Partner Program, with five Solutions Partner designations and sixteen specializations across Azure, security, data and AI, and modern work." },
        { q: "Which Azure work can ICT deliver?", a: "Infrastructure and database migration, Kubernetes on Azure, Azure VMware Solution, Azure Virtual Desktop, and migrating enterprise applications to Azure, alongside data, AI, security, and modern work." },
        { q: "Does ICT build its own products on Azure?", a: "Yes. ICT Unified Enterprise Search and DocumentIQ by ICT are built on Azure and listed on the Microsoft Commercial Marketplace." },
      ]} />

      <PageCTA title="Tell us what you are trying to move, secure, or build on Microsoft." href="Contact.html" label="Talk to our Microsoft team" />
    </>);
}

window.MicrosoftPage = MicrosoftPage;
