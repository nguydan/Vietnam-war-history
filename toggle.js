const langToggle = document.getElementById('langToggle');

const translations = {
  en: {
    mainTitle: "Vietnam War History",
    navAbout: "About",
    navTimeline: "Timeline",
    navSpecs: "Technical Specs",
    aboutTitle: "Preserving the Legacy",
    btnAll: "All",
    btnAnalysis: "Analysis",
    btnBattles: "Battles",
    btnPolitics: "Politics",
    btnTech: "Technology"
  },
  vi: {
    mainTitle: "Lịch Sử Chiến Tranh Việt Nam",
    navAbout: "Giới Thiệu",
    navTimeline: "Dòng Thời Gian",
    navSpecs: "Thông Số Kỹ Thuật",
    aboutTitle: "Gìn Giữ Di Sản",
    btnAll: "Tất Cả",
    btnAnalysis: "Phân Tích",
    btnBattles: "Trận Đánh",
    btnPolitics: "Chính Trị",
    btnTech: "Công Nghệ"
  }
};

langToggle.addEventListener('change', () => {
  const lang = langToggle.checked ? 'vi' : 'en';
  
  // Update elements by ID safely
  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  updateText('main-title', translations[lang].mainTitle);
  updateText('nav-about', translations[lang].navAbout);
  updateText('nav-timeline', translations[lang].navTimeline);
  updateText('nav-specs', translations[lang].navSpecs);
  updateText('about-title', translations[lang].aboutTitle);
  updateText('btn-all', translations[lang].btnAll);
  updateText('btn-analysis', translations[lang].btnAnalysis);
  updateText('btn-battles', translations[lang].btnBattles);
  updateText('btn-politics', translations[lang].btnPolitics);
  updateText('btn-tech', translations[lang].btnTech);

  // Re-run the timeline render to update cards
  if (window.renderTimeline) {
    window.renderTimeline();
  }
});
