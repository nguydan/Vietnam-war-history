const timeline = document.getElementById('timeline');

// Full timeline events
const events = [
  { year: '1940', type: 'political', en: 'Early nationalist movements emerge in Vietnam.', vi: 'Các phong trào dân tộc đầu tiên xuất hiện tại Việt Nam.' },
  { year: '1945', type: 'political', en: 'Ho Chi Minh declares independence from France.', vi: 'Hồ Chí Minh tuyên bố độc lập từ Pháp.' },
  { year: '1946', type: 'battle', en: 'First Indochina War begins.', vi: 'Chiến tranh Đông Dương lần thứ nhất bắt đầu.' },
  { year: '1954', type: 'battle', en: 'Battle of Dien Bien Phu leads to French defeat.', vi: 'Trận Điện Biên Phủ kết thúc với thất bại của Pháp.' },
  { year: '1954', type: 'political', en: 'Geneva Accords divide Vietnam at the 17th parallel.', vi: 'Hiệp định Genève chia Việt Nam tại vĩ tuyến 17.' },
  { year: '1955', type: 'us-escalation', en: 'US sends military advisors to South Vietnam.', vi: 'Mỹ gửi cố vấn quân sự tới Nam Việt Nam.' },
  { year: '1964', type: 'us-escalation', en: 'Gulf of Tonkin incident escalates US involvement.', vi: 'Sự kiện Vịnh Bắc Bộ làm Mỹ leo thang tham chiến.' },
  { year: '1965', type: 'us-escalation', en: 'US deploys combat troops to Vietnam.', vi: 'Mỹ triển khai lực lượng chiến đấu tới Việt Nam.' },
  { year: '1968', type: 'battle', en: 'Tet Offensive shocks the US public.', vi: 'Tổng tiến công Tết gây sốc dư luận Mỹ.' },
  { year: '1969', type: 'us-escalation', en: 'Vietnamization policy begins; US troops start withdrawing.', vi: 'Chính sách Việt Nam hóa chiến tranh bắt đầu; Mỹ rút quân.' },
  { year: '1975', type: 'battle', en: 'North Vietnam launches final offensive.', vi: 'Bắc Việt tiến hành tổng tấn công cuối cùng.' },
  { year: '1975', type: 'outcome', en: 'Fall of Saigon marks the end of the war.', vi: 'Sài Gòn thất thủ kết thúc chiến tranh.' },
  { year: '1965', type: 'tech/weapons', en: 'UH-1 Huey helicopters deployed widely.', vi: 'Trực thăng UH-1 Huey được triển khai rộng rãi.' },
  { year: '1966', type: 'tech/weapons', en: 'F-4 Phantom becomes main jet fighter.', vi: 'Máy bay F-4 Phantom trở thành chiến đấu cơ chính.' },
  { year: '1966', type: 'tech/weapons', en: 'M113 APCs used in Vietnam.', vi: 'Xe chở quân bọc thép M113 được sử dụng tại Việt Nam.' },
  { year: '1965', type: 'tech/weapons', en: 'US introduces M16 rifle widely.', vi: 'Mỹ triển khai rộng rãi súng M16.' },
  { year: '1965', type: 'tech/weapons', en: 'Viet Cong uses AK-47s and RPGs.', vi: 'Việt Cộng sử dụng AK-47 và RPG.' },
  { year: '1976', type: 'outcome', en: 'Vietnam reunified under communist government.', vi: 'Việt Nam thống nhất dưới chính quyền cộng sản.' }
];

// Render timeline
function renderTimeline(lang='en') {
  timeline.innerHTML = '';
  events.forEach(ev => {
    const div = document.createElement('div');
    div.classList.add('event', ev.type);
    div.innerHTML = `<h3>${ev.year}</h3><p>${ev[lang]}</p>`;
    timeline.appendChild(div);
  });
}

// Initial render
const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("vi") ? "vi" : "en");
renderTimeline(savedLang);
if(savedLang === "vi") {
  document.getElementById("btn-vi").classList.add("active");
  document.getElementById("btn-en").classList.remove("active");
}
