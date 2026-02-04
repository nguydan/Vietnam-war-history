const toggle = document.getElementById("langToggle");

const uiTranslations = {
  en: { 
    title: "Vietnam War History", 
    aboutTitle: "Preserving the Legacy",
    aboutText: "This archive is dedicated to documenting the history of the Vietnam War, with a special focus on the Republic of Vietnam (South Vietnam). Our mission is to preserve the stories of the ARVN soldiers and the civilian experience for future generations.",
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
    aboutText: "Kho lưu trữ này được dành riêng để ghi lại lịch sử Chiến tranh Việt Nam, đặc biệt tập trung vào Việt Nam Cộng Hòa. Sứ mệnh của chúng tôi là bảo tồn những câu chuyện của những người lính VNCH và trải nghiệm của người dân cho các thế hệ mai sau.",
    navAbout: "Giới Thiệu",
    navTimeline: "Dòng Thời Gian",
    btnAll: "Tất Cả",
    btnBattles: "Trận Đánh",
    btnPolitics: "Chính Trị",
    btnTech: "Kỹ Thuật"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  if (toggle) toggle.checked = (lang === "vi");

  // 1. Safe Translation Helper
  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // 2. Update Main Title (uses querySelector for the <h1>)
  const h1 = document.querySelector("h1");
  if (h1) h1.textContent = uiTranslations[lang].title;

  // 3. Update all other elements safely
  updateText("about-title", uiTranslations[lang].aboutTitle);
  updateText("about-text", uiTranslations[lang].aboutText);
  updateText("nav-about", uiTranslations[lang].navAbout);
  updateText("nav-timeline", uiTranslations[lang].navTimeline);
  updateText("btn-all", uiTranslations[lang].btnAll);
  updateText("btn-battles", uiTranslations[lang].btnBattles);
  updateText("btn-politics", uiTranslations[lang].btnPolitics);
  updateText("btn-tech", uiTranslations[lang].btnTech);

  // 4. Update the Timeline cards
  if (typeof renderTimeline === "function") {
    renderTimeline(lang);
  }
}

// Initial Load
const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("vi") ? "vi" : "en");
setLanguage(savedLang);

// Toggle Listener
if (toggle) {
  toggle.addEventListener("change", () => {
    const newLang = toggle.checked ? "vi" : "en";
    setLanguage(newLang);
  });
}
