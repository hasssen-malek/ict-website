/* =============================================================
   Smooth in-page anchor scrolling - load on every page.
   ============================================================= */
(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NAV_OFFSET = 88;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScrollTo(targetY) {
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var dist = targetY - startY;
    if (Math.abs(dist) < 2) return;
    var startTime = null;
    var d = Math.max(600, Math.min(1400, Math.abs(dist) * 0.55));
    function step(ts) {
      if (startTime === null) startTime = ts;
      var elapsed = ts - startTime;
      var t = Math.min(1, elapsed / d);
      window.scrollTo(0, startY + dist * easeInOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.addEventListener("click", function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute("href");
    if (!hash || hash === "#" || hash.length < 2) return;
    var el = document.getElementById(hash.slice(1));
    if (!el) return;

    e.preventDefault();
    var rect = el.getBoundingClientRect();
    var pageY = (window.pageYOffset || document.documentElement.scrollTop) + rect.top - NAV_OFFSET;
    pageY = Math.max(0, pageY);
    if (reduced) window.scrollTo(0, pageY);
    else animateScrollTo(pageY);
    if (history.replaceState) history.replaceState(null, "", hash);
  }, false);
})();
