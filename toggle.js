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

  // Update Main Elements
  document.querySelector("h1").textContent = uiTranslations[lang].title;
  document.getElementById("about-title").textContent = uiTranslations[lang].aboutTitle;
  document.getElementById("about-text").textContent = uiTranslations[lang].aboutText;

  // Update Nav and Buttons
  document.getElementById("nav-about").textContent = uiTranslations[lang].navAbout;
  document.getElementById("nav-timeline").textContent = uiTranslations[lang].navTimeline;
  document.getElementById("btn-all").textContent = uiTranslations[lang].btnAll;
  document.getElementById("btn-battles").textContent = uiTranslations[lang].btnBattles;
  document.getElementById("btn-politics").textContent = uiTranslations[lang].btnPolitics;
  document.getElementById("btn-tech").textContent = uiTranslations[lang].btnTech;

  if (typeof renderTimeline === "function") renderTimeline(lang);
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
