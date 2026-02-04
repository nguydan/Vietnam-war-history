const toggle = document.getElementById("langToggle");

const uiTranslations = {
  en: { 
    title: "Vietnam War History", 
    aboutTitle: "Preserving the Legacy",
    aboutText: "This archive is dedicated to documenting the history of the Vietnam War...",
    navAbout: "About",
    navTimeline: "Timeline",
    btnAll: "All",
    btnBattles: "Battles",
    btnPolitics: "Politics",
    btnTech: "Technology"
  },
  vi: { 
    title: "Lịch Sử Chiến Tranh Việt Nam", 
    aboutTitle: "Gìn Giữ Di Sản",
    aboutText: "Kho lưu trữ này được dành riêng để ghi lại lịch sử Chiến tranh Việt Nam...",
    navAbout: "Giới Thiệu",
    navTimeline: "Dòng Thời Gian",
    btnAll: "Tất Cả",
    btnBattles: "Trận Đánh",
    btnPolitics: "Chính Trị",
    btnTech: "Kỹ Thuật"
  }
};

function setLanguage(lang) {
  console.log("Checking language to:", lang); // <--- DEBUG LOG
  localStorage.setItem("lang", lang);
  
  if (toggle) toggle.checked = (lang === "vi");

  // A more robust way to update text
  const elUpdate = (id, text) => {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    } else {
        console.warn("Could not find element with ID:", id); // <--- DEBUG LOG
    }
  };

  const h1 = document.querySelector("h1");
  if (h1) h1.textContent = uiTranslations[lang].title;

  elUpdate("about-title", uiTranslations[lang].aboutTitle);
  elUpdate("about-text", uiTranslations[lang].aboutText);
  elUpdate("nav-about", uiTranslations[lang].navAbout);
  elUpdate("nav-timeline", uiTranslations[lang].navTimeline);
  elUpdate("btn-all", uiTranslations[lang].btnAll);
  elUpdate("btn-battles", uiTranslations[lang].btnBattles);
  elUpdate("btn-politics", uiTranslations[lang].btnPolitics);
  elUpdate("btn-tech", uiTranslations[lang].btnTech);

  if (typeof renderTimeline === "function") {
    console.log("Calling renderTimeline for cards...");
    renderTimeline(lang);
  } else {
    console.error("renderTimeline function NOT FOUND! Check timeline.js");
  }
}

// Check saved preference or browser default
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

if (toggle) {
  toggle.addEventListener("change", () => {
    console.log("Toggle clicked! New state:", toggle.checked);
    const newLang = toggle.checked ? "vi" : "en";
    setLanguage(newLang);
  });
}
