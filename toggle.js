const toggle = document.getElementById("langToggle");

const uiTranslations = {
  en: { 
    title: "Vietnam War History", 
    aboutTitle: "Preserving Our History",
    aboutText: "This project serves as a digital archive dedicated to the history of the Republic of Vietnam...",
    navAbout: "About",
    navTimeline: "Timeline",
    navResources: "Resources"
  },
  vi: { 
    title: "Lịch Sử Chiến Tranh Việt Nam", 
    aboutTitle: "Gìn Giữ Lịch Sử",
    aboutText: "Dự án này đóng vai trò như một kho lưu trữ kỹ thuật số dành riêng cho lịch sử Việt Nam Cộng Hòa...",
    navAbout: "Giới Thiệu",
    navTimeline: "Dòng Thời Gian",
    navResources: "Tài Liệu"
  }
};

// Inside your setLanguage(lang) function, add these:
document.getElementById("about-title").textContent = uiTranslations[lang].aboutTitle;
document.getElementById("about-text").textContent = uiTranslations[lang].aboutText;
// ...and update the nav links...

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
