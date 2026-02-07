const langToggle = document.getElementById('langToggle');

const translations = {
  en: {
    mainTitle: "Vietnam War History",
    navAbout: "About",
    navTimeline: "Timeline",
    navSpecs: "Technical Specs",
    aboutTitle: "Preserving the Legacy",
    aboutText: "This archive documents the Vietnam War's complexities, from its colonial roots to its technocratic conclusion. We focus on the strategic evolution of the conflict and the experiences of those who served in the ARVN and allied forces.",
    erasTitle: "Key Eras:",
    era1: "<strong>1945-1954:</strong> The Anti-French Resistance and the birth of the DRV.",
    era2: "<strong>1954-1964:</strong> The Partition and the rise of the Republic of Vietnam.",
    era3: "<strong>1965-1975:</strong> American Intervention and the limits of conventional power.",
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
    aboutText: "Kho lưu trữ này ghi lại những phức tạp của Chiến tranh Việt Nam, từ nguồn gốc thuộc địa đến kết thúc kỹ trị. Chúng tôi tập trung vào sự phát triển chiến lược của cuộc xung đột và kinh nghiệm của những người đã phục vụ trong QLVNCH và các lực lượng đồng minh.",
    erasTitle: "Các Giai Đoạn Chính:",
    era1: "<strong>1945-1954:</strong> Kháng chiến chống Pháp và sự ra đời của VNDCCH.",
    era2: "<strong>1954-1964:</strong> Chia cắt đất nước và sự trỗi dậy của Việt Nam Cộng Hòa.",
    era3: "<strong>1965-1975:</strong> Sự can thiệp của Mỹ và những giới hạn của quyền lực quy ước.",
    btnAll: "Tất Cả",
    btnAnalysis: "Phân Tích",
    btnBattles: "Trận Đánh",
    btnPolitics: "Chính Trị",
    btnTech: "Công Nghệ"
  }
};

langToggle.addEventListener('change', () => {
  const lang = langToggle.checked ? 'vi' : 'en';
  
  const updateText = (id, text, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) el.innerHTML = text; // Use innerHTML for <strong> tags
      else el.textContent = text;
    }
  };

  updateText('main-title', translations[lang].mainTitle);
  updateText('nav-about', translations[lang].navAbout);
  updateText('nav-timeline', translations[lang].navTimeline);
  updateText('nav-specs', translations[lang].navSpecs);
  updateText('about-title', translations[lang].aboutTitle);
  
  // New updates for the About section content
  updateText('about-text', translations[lang].aboutText);
  updateText('eras-title', translations[lang].erasTitle);
  updateText('era-1', translations[lang].era1, true);
  updateText('era-2', translations[lang].era2, true);
  updateText('era-3', translations[lang].era3, true);

  updateText('btn-all', translations[lang].btnAll);
  updateText('btn-analysis', translations[lang].btnAnalysis);
  updateText('btn-battles', translations[lang].btnBattles);
  updateText('btn-politics', translations[lang].btnPolitics);
  updateText('btn-tech', translations[lang].btnTech);

  if (window.renderTimeline) {
    window.renderTimeline();
  }
});
