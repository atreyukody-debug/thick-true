// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Cookie banner persistence
  const banner = document.getElementById("cookie-banner");
  if (banner && localStorage.getItem("cookiesAccepted") === "true") {
    banner.classList.add("hidden");
  }
});
