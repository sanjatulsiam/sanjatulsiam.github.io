// Modern template behaviour: stamp the current year in the footer.
document.querySelectorAll('.site-footer p').forEach(function (el) {
  el.textContent = el.textContent.replace(/\b20\d{2}\b/, String(new Date().getFullYear()))
})
