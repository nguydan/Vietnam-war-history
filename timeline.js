const timeline = document.getElementById("timeline");
let allEvents = []; 
let currentFilter = "all"; 
let currentLang = localStorage.getItem("lang") || "en"; 

async function loadEvents() {
  try {
    const response = await fetch("events.json");
    allEvents = await response.json();
    renderTimeline(); 
  } catch (error) {
    console.error("Data failed to load:", error);
  }
}

// This is the core function that draws everything
function renderTimeline() {
  if (!timeline) return;
  timeline.innerHTML = ""; 

  // 1. Filter the list by Type
  const filteredEvents = allEvents.filter(event => {
    if (currentFilter === "all") return true;
    return event.type === currentFilter;
  });

  // 2. Draw the cards using the currentLang variable
  filteredEvents.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    const imgHtml = e.image ? `<img src="${e.image}" alt="History Image" style="width:100%; border-radius:4px; margin-top:10px;">` : "";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[currentLang]}</p> 
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

// Listen for Filter Button clicks
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.getAttribute("data-type");
    renderTimeline();
  });
});

// THIS IS THE KEY: This function is what toggle.js calls
window.renderTimeline = (lang) => {
  currentLang = lang; // Update the global language variable
  renderTimeline();   // Redraw the timeline with the new language
};

loadEvents();
