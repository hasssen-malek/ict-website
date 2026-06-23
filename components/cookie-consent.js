/* global window, document */
/* =========================================================================
   ICTConsent - GDPR / ePrivacy cookie consent (vanilla, no dependencies)
   - Self-injecting banner + accessible preferences dialog
   - Categories: necessary (always on), analytics, marketing, preferences
   - Persists choice in localStorage; nothing optional fires until granted
   - Re-open later via window.ICTConsent.open() (wired to the footer link)
   - Gate your own scripts with window.ICTConsent.onGranted('analytics', cb)
   - Respects prefers-reduced-motion; full keyboard + screen-reader support
   ========================================================================= */
(function () {
  var STORE_KEY = "ict_consent_v1";
  var VERSION = 1;
  var CATS = [
    { id: "necessary", name: "Strictly necessary", required: true,
      desc: "Required for the site to work: security, network management, and remembering your cookie choices. These cannot be switched off.",
      ex: "Session security, load balancing, saved cookie preferences" },
    { id: "analytics", name: "Analytics", required: false,
      desc: "Help us understand, in aggregate, how the site is used so we can improve it. No data is collected until you allow this.",
      ex: "Google Analytics, Microsoft Clarity, performance monitoring" },
    { id: "marketing", name: "Marketing", required: false,
      desc: "Used to measure campaign performance and show relevant ICT content on other platforms. Off by default.",
      ex: "LinkedIn Insight Tag, Meta Pixel, advertising measurement" },
    { id: "preferences", name: "Preferences", required: false,
      desc: "Remember choices such as region or language to give you a more consistent experience.",
      ex: "Region, language, and layout preferences" }
  ];

  var listeners = {}; // category -> [cb]
  var els = {};
  var lastFocus = null;

  function readStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (!v || v.version !== VERSION) return null;
      return v;
    } catch (e) { return null; }
  }
  function writeStore(consent) {
    var payload = { version: VERSION, ts: new Date().toISOString(), consent: consent };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(payload)); } catch (e) {}
    return payload;
  }

  function currentConsent() {
    var s = readStore();
    if (s && s.consent) return s.consent;
    return { necessary: true, analytics: false, marketing: false, preferences: false };
  }

  function emit(consent) {
    CATS.forEach(function (c) {
      if (consent[c.id] && listeners[c.id]) {
        listeners[c.id].forEach(function (cb) { try { cb(consent); } catch (e) {} });
        listeners[c.id] = []; // fire once per granted category
      }
    });
    try {
      document.dispatchEvent(new CustomEvent("ictconsentchange", { detail: consent }));
    } catch (e) {}
  }

  function save(consent) {
    consent.necessary = true;
    writeStore(consent);
    emit(consent);
    hideBanner();
    closeModal();
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, marketing: true, preferences: true });
  }
  function rejectNonEssential() {
    save({ necessary: true, analytics: false, marketing: false, preferences: false });
  }

  /* ---------- DOM building ---------- */
  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function buildBanner() {
    var wrap = el("div", "cc-banner", { role: "region", "aria-label": "Cookie consent", "aria-describedby": "cc-banner-text" });
    wrap.innerHTML =
      '<div class="cc-banner__inner">' +
        '<div class="cc-banner__tick" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
        '<div class="cc-banner__body">' +
          '<h2 class="cc-banner__title">Your privacy on this site</h2>' +
          '<p class="cc-banner__text" id="cc-banner-text">We use necessary cookies to make this site work. With your consent, we also use analytics and other optional cookies to understand usage and improve the experience. You can change your choice at any time. See our <a href="Cookie-Policy.html">Cookie Policy</a>.</p>' +
        '</div>' +
        '<div class="cc-banner__actions">' +
          '<button type="button" class="cc-btn cc-btn--ghost" data-cc="manage">Manage preferences</button>' +
          '<button type="button" class="cc-btn cc-btn--solid" data-cc="reject">Reject non-essential</button>' +
          '<button type="button" class="cc-btn cc-btn--primary" data-cc="accept">Accept all</button>' +
        '</div>' +
      '</div>';
    wrap.addEventListener("click", function (e) {
      var t = e.target.closest("[data-cc]");
      if (!t) return;
      var a = t.getAttribute("data-cc");
      if (a === "accept") acceptAll();
      else if (a === "reject") rejectNonEssential();
      else if (a === "manage") openModal();
    });
    return wrap;
  }

  function buildModal() {
    var overlay = el("div", "cc-modal", { "aria-hidden": "true" });
    var rows = CATS.map(function (c) {
      var checked = currentConsent()[c.id] ? " checked" : "";
      var disabled = c.required ? " disabled" : "";
      var on = c.required ? " is-locked" : "";
      return '<div class="cc-cat">' +
          '<div class="cc-cat__head">' +
            '<span class="cc-cat__name">' + c.name + (c.required ? ' <span class="cc-cat__req">Always on</span>' : '') + '</span>' +
            '<label class="cc-switch' + on + '">' +
              '<input type="checkbox" data-cat="' + c.id + '"' + checked + disabled + ' aria-label="' + c.name + ' cookies" />' +
              '<span class="cc-switch__track" aria-hidden="true"></span>' +
            '</label>' +
          '</div>' +
          '<p class="cc-cat__desc">' + c.desc + '</p>' +
          '<p class="cc-cat__ex"><span>Examples</span>' + c.ex + '</p>' +
        '</div>';
    }).join("");

    overlay.innerHTML =
      '<div class="cc-modal__scrim" data-cc="close"></div>' +
      '<div class="cc-dialog" role="dialog" aria-modal="true" aria-labelledby="cc-dialog-title" aria-describedby="cc-dialog-desc">' +
        '<div class="cc-dialog__head">' +
          '<div>' +
            '<p class="cc-dialog__eyebrow">Privacy preferences</p>' +
            '<h2 class="cc-dialog__title" id="cc-dialog-title">Manage your cookies</h2>' +
          '</div>' +
          '<button type="button" class="cc-dialog__close" data-cc="close" aria-label="Close preferences">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
          '</button>' +
        '</div>' +
        '<p class="cc-dialog__desc" id="cc-dialog-desc">Choose which categories of cookies ICT may use. Necessary cookies are always active. Your choice applies across the site and can be updated whenever you like.</p>' +
        '<div class="cc-cats">' + rows + '</div>' +
        '<div class="cc-dialog__actions">' +
          '<button type="button" class="cc-btn cc-btn--solid" data-cc="reject">Reject non-essential</button>' +
          '<button type="button" class="cc-btn cc-btn--line" data-cc="save">Save preferences</button>' +
          '<button type="button" class="cc-btn cc-btn--primary" data-cc="accept">Accept all</button>' +
        '</div>' +
      '</div>';

    overlay.addEventListener("click", function (e) {
      var t = e.target.closest("[data-cc]");
      if (!t) return;
      var a = t.getAttribute("data-cc");
      if (a === "close") closeModal();
      else if (a === "accept") acceptAll();
      else if (a === "reject") rejectNonEssential();
      else if (a === "save") {
        var consent = { necessary: true };
        overlay.querySelectorAll("input[data-cat]").forEach(function (inp) {
          consent[inp.getAttribute("data-cat")] = inp.checked;
        });
        save(consent);
      }
    });
    overlay.addEventListener("keydown", trapTab);
    return overlay;
  }

  /* ---------- show / hide ---------- */
  function showBanner() {
    if (!els.banner) { els.banner = buildBanner(); document.body.appendChild(els.banner); }
    requestAnimationFrame(function () { els.banner.classList.add("is-in"); });
  }
  function hideBanner() {
    if (els.banner) els.banner.classList.remove("is-in");
  }
  function openModal() {
    if (!els.modal) { els.modal = buildModal(); document.body.appendChild(els.modal); }
    // sync toggles to current state each open
    var cur = currentConsent();
    els.modal.querySelectorAll("input[data-cat]").forEach(function (inp) {
      var id = inp.getAttribute("data-cat");
      if (id !== "necessary") inp.checked = !!cur[id];
    });
    lastFocus = document.activeElement;
    els.modal.setAttribute("aria-hidden", "false");
    els.modal.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    var first = els.modal.querySelector(".cc-dialog__close");
    if (first) first.focus();
  }
  function closeModal() {
    if (!els.modal) return;
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function trapTab(e) {
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key !== "Tab") return;
    var f = els.modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])');
    f = Array.prototype.filter.call(f, function (n) { return n.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------- public API ---------- */
  window.ICTConsent = {
    open: function () { openModal(); },
    get: function () { return currentConsent(); },
    // Run cb once when (or if) the given category is granted, now or later.
    onGranted: function (cat, cb) {
      var cur = currentConsent();
      if (cur[cat]) { try { cb(cur); } catch (e) {} return; }
      (listeners[cat] = listeners[cat] || []).push(cb);
    }
  };

  function init() {
    // Wire any footer / in-page trigger: [data-cookie-settings] or #cookie-settings
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-cookie-settings], #cookie-settings");
      if (t) { e.preventDefault(); openModal(); }
    });
    var stored = readStore();
    if (stored && stored.consent) {
      emit(stored.consent); // honour prior consent for gated scripts
    } else {
      showBanner();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
