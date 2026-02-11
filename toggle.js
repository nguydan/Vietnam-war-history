const langToggle = document.getElementById('langToggle');

const translations = {
  en: {
    mainTitle: "Vietnam War History",
    navAbout: "About",
    navTimeline: "Timeline",
    navSpecs: "Technical Specs",
    aboutTitle: "About the Vietnam War",
    aboutP1: "The Vietnam War was not a single, isolated conflict but a layered struggle shaped by colonialism, nationalism, Cold War ideology, and internal Vietnamese divisions. What began as a fight for independence from French colonial rule gradually evolved into one of the most complex and controversial wars of the twentieth century.",
    aboutP2: "For the Vietnamese people, the conflict spanned decades and involved competing visions for the nation’s future. For the United States and its allies, Vietnam became a focal point of global containment strategy against communism. These overlapping objectives transformed a regional struggle into an international war with far-reaching political, social, and human consequences.",
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
    aboutTitle: "Về Chiến Tranh Việt Nam",
    aboutP1: "Chiến tranh Việt Nam không phải là một cuộc xung đột đơn lẻ, biệt lập mà là một cuộc đấu tranh nhiều tầng lớp được định hình bởi chủ nghĩa thực dân, chủ nghĩa dân tộc, hệ tư tưởng Chiến tranh Lạnh và sự chia rẽ nội bộ của Việt Nam. Những gì bắt đầu như một cuộc đấu tranh giành độc lập khỏi ách thống trị thực dân Pháp dần dần phát triển thành một trong những cuộc chiến phức tạp và gây tranh cãi nhất thế kỷ XX.",
    aboutP2: "Đối với người dân Việt Nam, cuộc xung đột kéo dài nhiều thập kỷ và liên quan đến những tầm nhìn đối lập về tương lai của đất nước. Đối với Hoa Kỳ và các đồng minh, Việt Nam đã trở thành trọng điểm của chiến lược kiềm chế toàn cầu chống lại chủ nghĩa cộng sản. Những mục tiêu chồng chéo này đã biến một cuộc đấu tranh khu vực thành một cuộc chiến quốc tế với những hậu quả sâu rộng về chính trị, xã hội và con người.",
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
      if (isHTML) el.innerHTML = text; 
      else el.textContent = text;
    }
  };

  // Nav & Titles
  updateText('main-title', translations[lang].mainTitle);
  updateText('nav-about', translations[lang].navAbout);
  updateText('nav-timeline', translations[lang].navTimeline);
  updateText('nav-specs', translations[lang].navSpecs);
  updateText('about-title', translations[lang].aboutTitle);
  
  // Longer Introduction Paragraphs
  updateText('about-p1', translations[lang].aboutP1);
  updateText('about-p2', translations[lang].aboutP2);
  
  // Key Eras List
  updateText('eras-title', translations[lang].erasTitle);
  updateText('era-1', translations[lang].era1, true);
  updateText('era-2', translations[lang].era2, true);
  updateText('era-3', translations[lang].era3, true);

  // Filter Buttons
  updateText('btn-all', translations[lang].btnAll);
  updateText('btn-analysis', translations[lang].btnAnalysis);
  updateText('btn-battles', translations[lang].btnBattles);
  updateText('btn-politics', translations[lang].btnPolitics);
  updateText('btn-tech', translations[lang].btnTech);

  if (window.renderTimeline) {
    window.renderTimeline();
  }
});
