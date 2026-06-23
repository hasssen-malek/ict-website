/* global React */
/* Shared partner/technology logo system.
   One source of truth mapping partner name -> normalised SVG slug.
   Each SVG has been normalised to use fill="currentColor", so a single CSS
   `color` controls the monochrome treatment on any background. */
const { useEffect: useEffectPL, useRef: useRefPL } = React;

/* Profile partner ecosystem - name -> logo slug. Microsoft uses an authentic
   monochrome brand SVG; the rest are monochrome wordmark logotypes,
   all using fill="currentColor" so one CSS colour controls the whole set. */
window.PARTNER_LOGOS = {
  "Microsoft": "microsoft",
  "Informatica": "informatica",
  "Adobe": "adobe",
  "Dataiku": "dataiku",
  "Databricks": "databricks",
  "F5": "f5",
  "Forcepoint": "forcepoint",
  "Vectra AI": "vectra",
  "Progress Sitefinity": "sitefinity",
  "Striim": "striim",
  "Imprivata": "imprivata",
  "Hamsa": "hamsa",
  "Hansa": "hansa",
};

/* name: partner display name (also used for the accessible label + text fallback)
   className: optional extra class on the container */
function PartnerLogo({ name, className }) {
  const ref = useRefPL(null);
  const slug = window.PARTNER_LOGOS[name];

  useEffectPL(() => {
    if (!slug || !ref.current) return;
    let alive = true;
    fetch("assets/partners/" + slug + ".svg")
      .then((r) => r.text())
      .then((svg) => {
        if (!alive || !ref.current) return;
        ref.current.innerHTML = svg;
        const el = ref.current.querySelector("svg");
        if (el) {
          el.removeAttribute("width");
          el.removeAttribute("height");
          el.setAttribute("focusable", "false");
          el.setAttribute("aria-hidden", "true");
        }
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [slug]);

  if (!slug) return <span className="partner-logo__txt">{name}</span>;
  return (
    <span
      className={"partner-logo partner-logo--" + slug + (className ? " " + className : "")}
      ref={ref}
      role="img"
      aria-label={name + " logo"}
    ></span>);
}

window.PartnerLogo = PartnerLogo;
