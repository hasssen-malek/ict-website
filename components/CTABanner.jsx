/* global React */
function CTABanner() {
  return (
    <section className="section s-ink-deep cta" id="contact">
      <div className="wrap">
        <div className="cta__box reveal">
          <i className="cta__aurora" aria-hidden="true"></i>
          <div className="cta__inner">
            <p className="kicker cta__kicker" style={{ color: "rgb(255, 255, 255)" }}>Let's build what's next</p>
            <h2 className="cta__title">Let's transform what's next, together.</h2>
            <p className="cta__sub">
              Talk to ICT about modernising infrastructure, strengthening resilience,
              and operationalising AI, engineered for scale, here in Qatar.
            </p>
            <div className="cta__actions">
              <a className="btn btn--primary" href="Contact-Us.html">
                Schedule a consultation <span className="ar" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

window.CTABanner = CTABanner;