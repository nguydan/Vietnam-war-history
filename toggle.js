const toggle = document.getElementById("langToggle");

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  renderTimeline(lang);
  toggle.checked = lang === "vi";
}

const savedLang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("vi") ? "vi" : "en");

setLanguage(savedLang);

toggle.addEventListener("change", () => {
  setLanguage(toggle.checked ? "vi" : "en");
});