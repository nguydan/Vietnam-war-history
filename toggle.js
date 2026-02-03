const toggle = document.getElementById("langToggle");

// Translation dictionary for the static parts of your site
const translations = {
  en: {
    title: "Vietnam War History",
    introTitle: "A Journey Through Time",
    introText: "Explore the complex history, pivotal battles, and the human stories of the Vietnam War through this interactive timeline."
  },
  vi: {
    title: "Lịch Sử Chiến Tranh Việt Nam",
    introTitle: "Hành Trình Qua Thời Gian",
    introText: "Khám phá lịch sử phức tạp, các trận đánh then chốt và những câu chuyện nhân văn của Chiến tranh Việt Nam qua dòng thời gian tương tác này."
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  toggle.checked = lang === "vi";

  // 1. Update the static text on the page
  document.querySelector("h1").textContent = translations[lang].title;
  document.getElementById("intro-title").textContent = translations[lang].introTitle;
  document.getElementById("intro-text").textContent = translations[lang].introText;

  // 2. Tell the timeline to re-render in the new language
  // We check if renderTimeline exists first to avoid errors
  if (typeof renderTimeline === "function") {
    renderTimeline(lang);
  }
}

// Initial Load
const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("vi") ? "vi" : "en");
setLanguage(savedLang);

toggle.addEventListener("change", () => {
  setLanguage(toggle.checked ? "vi" : "en");
});
