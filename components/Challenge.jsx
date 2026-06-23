/* global React */
function Challenge() {
  const items = [
  {
    no: "01",
    h: "Legacy infrastructure constrains the business",
    p: "Aging data centres, end-of-life platforms, and brittle integrations drive up cost and risk, and slow every change the business needs to make."
  },
  {
    no: "02",
    h: "Security and compliance pressure keeps rising",
    p: "Expanding attack surfaces, stricter regulation, and persistent threats demand security, governance, and resilience engineered into every layer."
  },
  {
    no: "03",
    h: "Hybrid and multi-cloud add operational complexity",
    p: "On-premises, hybrid, and multi-cloud estates fragment visibility, cost, and control without consistent architecture and governance."
  },
  {
    no: "04",
    h: "Data and AI readiness exposes the foundations",
    p: "Production AI depends on the maturity of the data, infrastructure, and controls beneath it. Most environments are not yet ready to run it reliably."
  }];


  return (
    <section className="section s-paper" id="challenge">
      <div className="wrap chal__grid">
        <div className="chal__intro reveal acc-purple">
          <p className="kicker">The pressure</p>
          <h2 className="shead__title" style={{ marginTop: "24px", maxWidth: "400px" }}>
            The pressure on modern organisations is <span className="tword">structural</span>.
          </h2>
          <p className="lead">
            Four operational realities facing CIOs, CTOs, and IT leaders in Qatar,
            and none can be solved in isolation.
          </p>
          <div className="ticks" style={{ marginTop: "30px" }}>
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className="chal__list">
          {items.map((it, i) =>
          <div className={"chal__item reveal d" + (i + 1)} key={it.no}>
              <span className="chal__no">{it.no}</span>
              <div>
                <h3 className="chal__h">{it.h}</h3>
                <p className="chal__p">{it.p}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Challenge = Challenge;