const toggle = document.getElementById("langToggle");

const uiTranslations = {
  en: { title: "Vietnam War History", introTitle: "A Journey Through Time", introText: "Explore the complex history..." },
  vi: { title: "Lịch Sử Chiến Tranh Việt Nam", introTitle: "Hành Trình Qua Thời Gian", introText: "Khám phá lịch sử phức tạp..." }
};

function setLanguage(lang) {
  console.log("Setting language to:", lang); // Check your Inspect Console for this
  localStorage.setItem("lang", lang);
  
  // Move the switch visually
  if (toggle) {
    toggle.checked = (lang === "vi");
  }

  // Update text
  document.querySelector("h1").textContent = uiTranslations[lang].title;
  document.getElementById("intro-title").textContent = uiTranslations[lang].introTitle;
  document.getElementById("intro-text").textContent = uiTranslations[lang].introText;

  if (typeof renderTimeline === "function") {
    renderTimeline(lang);
  }
}

// Check saved preference or browser default
const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("vi") ? "vi" : "en");
setLanguage(savedLang);

toggle.addEventListener("change", () => {
  const newLang = toggle.checked ? "vi" : "en";
  setLanguage(newLang);
});
