/* global React, window, document */
const { useEffect: useEffectAppr, useRef: useRefAppr } = React;

function Approach() {
  const secRef = useRefAppr(null);
  const fieldRef = useRefAppr(null);
  const farRef = useRefAppr(null);
  const artRef = useRefAppr(null);

  useEffectAppr(() => {
    const sec = secRef.current;
    const canvas = fieldRef.current;
    if (!sec || !canvas || !window.ICTField) return;

    // Two coordinated planes: a sparse far layer drifting slowly beneath a
    // nearer float layer -> the background breathes with continuous depth.
    const stops = [];
    stops.push(window.ICTField(canvas, { mode: "float", host: sec, count: 460, opacity: 0.7, speed: 1, size: 1.3, parallax: 0 }));
    if (farRef.current) {
      stops.push(window.ICTField(farRef.current, { mode: "float", host: sec, count: 150, opacity: 0.34, speed: 0.5, size: 1.3, parallax: 0 }));
    }
    return () => stops.forEach((s) => s && s());
  }, []);

  const steps = [
  { no: "01", name: "Assess", p: "Understand infrastructure, risks, dependencies, and business priorities to define a clear target architecture and roadmap." },
  { no: "02", name: "Modernise", p: "Upgrade platforms, cloud environments, and critical systems with migrations engineered for minimal disruption." },
  { no: "03", name: "Secure", p: "Embed security, governance, and resilience across every layer: identity, data, network, and operations." },
  { no: "04", name: "Operate", p: "Monitor, support, and continuously optimise environments through SLA-backed managed services." }];


  return (
    <section className="section s-ink appr" id="approach" ref={secRef}>
      <div className="appr__bg" aria-hidden="true">
        <img className="appr__bgimg" src="assets/approach-bg.png" alt="" loading="lazy" decoding="async" />
        <div className="appr__glow"></div>
        <div className="appr__scrim"></div>
        <canvas className="appr__field appr__field--far" ref={farRef}></canvas>
        <canvas className="appr__field" ref={fieldRef}></canvas>
      </div>
      <div className="wrap">
        <div className="appr__head">
          <div className="shead reveal acc-blue">
            <p className="kicker">The ICT approach</p>
            <h2 className="shead__title" style={{ maxWidth: "400px", width: "360px" }}>One <span className="tword">method</span>, end to end.</h2>
          </div>
          <div className="appr__headcol reveal d1">
            <p className="lead">
              We design, deploy, secure, and continuously optimise technology environments,
              from strategy through day-two operations, under one accountable partner.
            </p>
            <a className="tlink head-link" href="Approach.html">
              Learn more about our approach <span className="ar" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="appr__flow">
          {steps.map((s, i) =>
          <div className={"appr__step reveal d" + (i + 1)} key={s.no}>
              <span className="appr__no" style={{ color: "rgb(255, 255, 255)" }}>{s.no}</span>
              <h3 className="appr__name">{s.name}</h3>
              <p className="appr__desc">{s.p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Approach = Approach;