const timeline = document.getElementById("timeline");
let allEvents = []; 
let currentFilter = "all"; 
let currentLang = localStorage.getItem("lang") || "en"; 

// THE BRIDGE: Attached to window so toggle.js can always see it
window.renderTimeline = (lang) => {
  console.log("Timeline script received language change to:", lang);
  currentLang = lang; 
  
  // Safety Gate: Only render if we actually have data
  if (allEvents.length > 0) {
    renderTimeline(); 
  } else {
    console.log("Data not ready yet, will render once loadEvents finishes.");
  }
};

async function loadEvents() {
  try {
    const response = await fetch("events.json");
    allEvents = await response.json();
    console.log("Data loaded successfully:", allEvents.length, "events found.");
    renderTimeline(); 
  } catch (error) {
    console.error("Data failed to load:", error);
  }
}

function renderTimeline() {
  if (!timeline) return;
  timeline.innerHTML = ""; 

  // Check if we actually have data before trying to loop
  if (!allEvents || allEvents.length === 0) {
    timeline.innerHTML = "<p>Loading events...</p>";
    return;
  }

  const filteredEvents = allEvents.filter(event => {
    if (currentFilter === "all") return true;
    return event.type === currentFilter;
  });

  filteredEvents.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    
    const imgHtml = e.image ? `<img src="${e.image}" alt="History Image" style="width:100%; border-radius:4px; margin-top:10px;">` : "";

    // IMPORTANT: Check if the language key exists in your JSON
    // If e[currentLang] is missing, it will show an empty card
    const description = e[currentLang] || e.en || "No description available";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${description}</p> 
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}


// Button Listeners
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.getAttribute("data-type");
    renderTimeline();
  });
});

// Start the loading process
loadEvents();
