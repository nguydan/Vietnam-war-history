const toggle = document.getElementById("langToggle");

// 1. Translations for the parts of the site that ARE NOT in the JSON
const uiTranslations = {
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
  // Save preference
  localStorage.setItem("lang", lang);
  
  // Update the Toggle switch position
  toggle.checked = lang === "vi";

  // 2. Update the Header and Intro (Static Text)
  // Make sure these IDs match your HTML exactly!
  const mainTitle = document.querySelector("h1");
  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");

  if (mainTitle) mainTitle.textContent = uiTranslations[lang].title;
  if (introTitle) introTitle.textContent = uiTranslations[lang].introTitle;
  if (introText) introText.textContent = uiTranslations[lang].introText;

  // 3. Update the Timeline (Dynamic Text)
  // This calls the function inside your timeline.js
  if (typeof renderTimeline === "function") {
    renderTimeline(lang);
  }
}

// Initial Load: Check local storage, then browser language, default to 'en'
const savedLang = localStorage.getItem("lang") || 
                 (navigator.language.startsWith("vi") ? "vi" : "en");

setLanguage(savedLang);

// Listener for the switch
toggle.addEventListener("change", () => {
  const newLang = toggle.checked ? "vi" : "en";
  setLanguage(newLang);
});
