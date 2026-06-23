/* global React */
const { useState: useStateContact } = React;

const FIELDS = [
  { name: "name", label: "Full name", type: "text", auto: "name", ph: "Your name", required: true, err: "Please enter your name." },
  { name: "email", label: "Work email", type: "email", auto: "email", ph: "you@organisation.qa", required: true, err: "Please enter a valid business email address." },
  { name: "company", label: "Company / organisation", type: "text", auto: "organization", ph: "Organisation name", required: true, err: "Please enter your company or organisation." },
];

const INTERESTS = [
  "New project",
  "Support",
  "Partnership",
  "Careers",
];

function validate(values) {
  const e = {};
  if (!values.name || !values.name.trim()) e.name = "Please enter your name.";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid business email address.";
  if (!values.company || !values.company.trim()) e.company = "Please enter your company or organisation.";
  if (!values.interest) e.interest = "Please select an area of interest.";
  if (!values.message || !values.message.trim()) e.message = "Please tell us about your challenge.";
  return e;
}

function ContactPage() {
  const [values, setValues] = useStateContact({});
  const [errors, setErrors] = useStateContact({});
  const [sent, setSent] = useStateContact(false);

  const setField = (name, v) => {
    setValues((p) => ({ ...p, [name]: v }));
    setErrors((p) => {
      if (!p[name]) return p;
      const next = { ...p, [name]: v };
      const re = validate(next);
      const cp = { ...p };
      if (!re[name]) delete cp[name];
      return cp;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    } else {
      const first = document.getElementById("f-" + Object.keys(errs)[0]);
      if (first) first.focus();
    }
  };

  return (
    <>
      {/* HERO - atmospheric Doha skyline emerging from the dark */}
      <section className="chero s-ink-deep">
        <div className="chero__bg" aria-hidden="true">
          <img src="assets/doha-skyline.jpg" alt="" loading="eager" decoding="async"
            onError={(ev) => { ev.currentTarget.style.display = "none"; }} />
          <div className="chero__bg-overlay"></div>
        </div>
        <div className="wrap chero__inner">
          <div className="hero-load" style={{ maxWidth: "46ch" }}>
            <nav className="lhero__crumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a><span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "var(--on-dark-soft)" }}>Contact</span>
            </nav>
            <p className="kicker">Contact ICT</p>
            <h1 className="chero__title">Tell us what you are <span className="tword">trying to build</span>.</h1>
            <p className="chero__sub lead">
              Talk to our team about your project. We will tell you honestly whether and
              how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section s-paper" id="enquiry">
        <div className="wrap cform__grid">
          <div className="cform__intro reveal">
            <p className="kicker">Make an enquiry</p>
            <h2 className="shead__title" style={{ marginTop: "22px", fontSize: "var(--t-h2)" }}>Start a <span className="tword">conversation</span>.</h2>
            <p className="lead">A specialist will respond to scope the right engagement, typically within one business day.</p>
            {/* TODO[VERIFY]: address, phone, and email before publish. Cert letter shows Building #75, Street #250, Doha 24537. */}
            <div className="cform__details">
              <div className="cform__d"><span className="cform__dk">Email</span><a href="mailto:info@ict.com.qa">info@ict.com.qa</a></div>
              <div className="cform__d"><span className="cform__dk">Phone</span><a href="tel:+97444405000">+974 4440 5000</a></div>
              <div className="cform__d"><span className="cform__dk">Office</span><span>ICT W.L.L., Doha, Qatar</span></div>
              <div className="cform__d"><span className="cform__dk">Web</span><a href="https://www.ict.com.qa">www.ict.com.qa</a></div>
            </div>
          </div>

          <div className="cform__panel reveal d1">
            {sent ? (
              <div className="cform__success" role="status" aria-live="polite">
                <span className="cform__tick" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                    <path className="cform__tickpath" d="M15 24.5l6 6 12-13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="cform__success-h">Message sent successfully</h3>
                <p className="cform__success-p">
                  Thank you for contacting ICT. A member of our team will review your enquiry
                  and get back to you shortly.
                </p>
                <p className="cform__success-note">A copy of your enquiry has been logged under the email you provided.</p>
              </div>
            ) : (
              <form className="cform" onSubmit={onSubmit} noValidate>
                {FIELDS.map((f) => (
                  <div className={"field" + (errors[f.name] ? " has-error" : "")} key={f.name}>
                    <label htmlFor={"f-" + f.name}>{f.label}{f.required ? <span className="req"> *</span> : null}</label>
                    <input
                      id={"f-" + f.name} name={f.name} type={f.type} autoComplete={f.auto} placeholder={f.ph}
                      value={values[f.name] || ""}
                      aria-invalid={errors[f.name] ? "true" : undefined}
                      aria-required={f.required ? "true" : undefined}
                      aria-describedby={errors[f.name] ? "e-" + f.name : undefined}
                      onChange={(e) => setField(f.name, e.target.value)}
                    />
                    {errors[f.name] ? <span className="field__err" id={"e-" + f.name} role="alert">{errors[f.name]}</span> : null}
                  </div>
                ))}

                <div className={"field" + (errors.interest ? " has-error" : "")}>
                  <label htmlFor="f-interest">What can we help with?<span className="req"> *</span></label>
                  <select id="f-interest" name="interest" value={values.interest || ""}
                    aria-invalid={errors.interest ? "true" : undefined}
                    aria-required="true"
                    aria-describedby={errors.interest ? "e-interest" : undefined}
                    onChange={(e) => setField("interest", e.target.value)}>
                    <option value="" disabled>Select an area</option>
                    {INTERESTS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  {errors.interest ? <span className="field__err" id="e-interest" role="alert">{errors.interest}</span> : null}
                </div>

                <div className={"field field--full" + (errors.message ? " has-error" : "")}>
                  <label htmlFor="f-message">Tell us about your challenge<span className="req"> *</span></label>
                  <textarea id="f-message" name="message" rows="4" placeholder="A few lines on your environment, objectives, or the problem you need to solve."
                    value={values.message || ""}
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-required="true"
                    aria-describedby={errors.message ? "e-message" : undefined}
                    onChange={(e) => setField("message", e.target.value)}></textarea>
                  {errors.message ? <span className="field__err" id="e-message" role="alert">{errors.message}</span> : null}
                </div>

                <div className="cform__foot">
                  <p className="cform__hint">By submitting, you agree to ICT contacting you about your enquiry. See our <a href="Privacy-Policy.html">Privacy Policy</a>.</p>
                  <button className="btn btn--primary" type="submit">Send <span className="ar" aria-hidden="true">→</span></button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>);

}

window.ContactPage = ContactPage;
