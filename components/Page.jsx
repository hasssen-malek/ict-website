/* global React, ReactDOM, Nav, Footer, TemplatePage */
/* Root mounter for all templated pages. Reads window.PAGE_ID, looks up
   window.PAGES[id], renders Nav + TemplatePage + Footer, sets the document
   title, and injects BreadcrumbList / Service / Article JSON-LD. */
(function () {
  const { useEffect } = React;
  const BASE = "https://www.ict.com.qa/";

  function useScrollReveal() {
    useEffect(() => {
      const els = document.querySelectorAll(".reveal");
      if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }
      }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);
  }

  function addSchema(obj) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-page-schema", "1");
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  function injectSchema(d) {
    // BreadcrumbList
    const trail = [{ name: "Home", url: BASE }].concat((d.crumbs || []).map((c) => ({ name: c.label, url: c.href ? BASE + c.href : undefined })));
    addSchema({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
    });
    if (d.serviceSchema) {
      addSchema({
        "@context": "https://schema.org", "@type": "Service",
        serviceType: d.serviceType || d.h1, provider: { "@type": "Organization", name: "ICT W.L.L", url: BASE },
        areaServed: { "@type": "Country", name: "Qatar" }, description: d.meta.desc,
      });
    }
    if (d.kind === "case") {
      addSchema({
        "@context": "https://schema.org", "@type": "Article",
        headline: d.h1, about: d.sectorTag, author: { "@type": "Organization", name: "ICT W.L.L" },
        publisher: { "@type": "Organization", name: "ICT W.L.L", logo: { "@type": "ImageObject", url: BASE + "assets/ict-logo.png" } },
        description: d.meta.desc,
      });
    }
    if (d.kind === "hub" && d.cards) {
      addSchema({
        "@context": "https://schema.org", "@type": "ItemList",
        itemListElement: d.cards.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.h, url: c.href ? BASE + c.href : undefined })),
      });
    }
  }

  function PageRoot() {
    const id = window.PAGE_ID;
    const d = window.PAGES && window.PAGES[id];
    useScrollReveal();
    useEffect(() => { if (d) { document.title = d.meta.title; injectSchema(d); } }, []);
    if (!d) return React.createElement("main", { style: { padding: "140px 24px", fontFamily: "system-ui" } }, "Page data not found for id: " + String(id));
    return React.createElement(React.Fragment, null,
      React.createElement(Nav),
      React.createElement("main", { id: "main-content", tabIndex: "-1" }, React.createElement(TemplatePage, { data: d })),
      React.createElement(Footer));
  }

  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(PageRoot));
})();
