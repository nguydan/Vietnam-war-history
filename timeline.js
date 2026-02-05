const timeline = document.getElementById("timeline");
let allEvents = []; 
let currentFilter = "all"; 
let currentLang = localStorage.getItem("lang") || "en"; 

// 1. THE BRIDGE (Must be at the top)
window.renderTimeline = (lang) => {
  currentLang = lang; 
  renderTimeline(); 
};

// 2. THE DRAWING ENGINE
function renderTimeline() {
  if (!timeline) return;
  timeline.innerHTML = ""; 

  // If the list is empty, put the 1955 test card in manually
  const dataToUse = (allEvents.length === 0) ? [{
    year: "1955",
    type: "political",
    en: "The Republic of Vietnam is established.",
    vi: "Việt Nam Cộng Hòa được thành lập.",
    image: ""
  }] : allEvents;

  const filtered = dataToUse.filter(e => currentFilter === "all" || e.type === currentFilter);

  filtered.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    const text = e[currentLang] || e.en || "Missing text";
    div.innerHTML = `<h3>${e.year}</h3><p>${text}</p>`;
    timeline.appendChild(div);
  });
}

// 3. THE DATA LOADER
async function loadEvents() {
  try {
    const response = await fetch("events.json");
    if (response.ok) {
      allEvents = await response.json();
      renderTimeline();
    }
  } catch (err) {
    console.error("JSON load failed, sticking with test card.");
  }
}

// 4. FILTER LISTENERS
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    currentFilter = e.target.getAttribute("data-type");
    renderTimeline();
  });
});

// Run immediately
renderTimeline(); 
loadEvents();
