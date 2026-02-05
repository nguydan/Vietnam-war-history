const timeline = document.getElementById("timeline");
let allEvents = []; 
let currentFilter = "all"; 
let currentLang = localStorage.getItem("lang") || "en"; 

// THE BRIDGE
window.renderTimeline = (lang) => {
  currentLang = lang; 
  renderTimeline(); 
};

async function loadEvents() {
  try {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("File not found");
    allEvents = await response.json();
  } catch (error) {
    console.error("Using fallback data because:", error);
    // FALLBACK DATA: This ensures SOMETHING shows up
    allEvents = [{
      year: "1955",
      type: "political",
      en: "The Republic of Vietnam is established.",
      vi: "Việt Nam Cộng Hòa được thành lập.",
      image: ""
    }];
  }
  renderTimeline(); 
}

function renderTimeline() {
  if (!timeline) return;
  timeline.innerHTML = ""; 

  const filteredEvents = allEvents.filter(event => {
    if (currentFilter === "all") return true;
    return event.type === currentFilter;
  });

  filteredEvents.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    const imgHtml = e.image ? `<img src="${e.image}" alt="History">` : "";
    
    // Safety check for text
    const text = e[currentLang] || e.en || "Text missing";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${text}</p> 
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

// Filter listeners
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.getAttribute("data-type");
    renderTimeline();
  });
});

loadEvents();
