const timeline = document.getElementById("timeline");
let events = []; // Global variable so the toggle can access data

// 1. Fetch the data once
async function loadEvents() {
  try {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Failed to load events.json");
    
    events = await response.json();

    // Check what language is currently active in your toggle
    const savedLang = localStorage.getItem("lang") || "en";
    renderTimeline(savedLang);
    
  } catch (error) {
    console.error("Error loading events:", error);
    timeline.innerHTML = `<p style="color:red; text-align:center;">Error loading timeline: ${error.message}</p>`;
  }
}

// 2. The function that the Toggle Switch calls
// This rebuilds the cards instantly when you flip the switch
function renderTimeline(lang) {
  timeline.innerHTML = "";

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;

    // Only create the image HTML if the image exists in the JSON
    const imgHtml = e.image ? 
      `<img src="${e.image}" alt="${e.en}" style="width:100%; height:auto; border-radius:4px; margin-top:15px; border: 1px solid #ddd;">` 
      : "";

    // Pick the correct language text based on 'lang' (en or vi)
    div.innerHTML = `
      <h3>${e.year}</h3>
      <p style="font-size: 1.1rem; color: #444;">${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

// Start the process
loadEvents();
