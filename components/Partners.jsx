/* global React, PartnerLogo */

function Partners() {
  const partners = [
  "Microsoft", "Databricks", "Informatica", "Adobe",
  "Progress Sitefinity", "Striim", "F5", "Forcepoint",
  "Vectra AI", "Imprivata", "Hamsa"];

  const cols = 4;
  const fill = (cols - (partners.length % cols)) % cols;

  return (
    <section className="section s-ink partners" id="partners">
      <div className="wrap">
        <div className="partners__head">
          <div className="shead reveal acc-violet">
            <p className="kicker" style={{ width: "400px" }}>Partners & trust</p>
            <h2 className="shead__title" style={{ maxWidth: "600px", width: "500px" }}>
              We build with the platforms you <span className="tword">already trust</span>.
            </h2>
          </div>
          <div className="partners__headcol reveal d1">
            <p className="lead" style={{ maxWidth: "42ch" }}>
              Our work is grounded in established platforms, alongside specialist security
              and data partners. We hold a Microsoft AI Cloud Partner Program membership
              with five Solutions Partner designations.
            </p>
            {/* TODO[VERIFY]: designation count at publish */}
            <a className="tlink head-link" href="Partners.html">
              Meet our partners <span className="ar" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="partners__marquee reveal d1" aria-label="Partner technologies">
          <div className="partners__track">
            {partners.concat(partners).map((name, i) => (
              <div className="partners__logo" key={name + i} aria-hidden={i >= partners.length ? "true" : undefined}>
                <PartnerLogo name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);

}

window.Partners = Partners;