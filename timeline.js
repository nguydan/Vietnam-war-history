const timeline = document.getElementById("timeline");
let events = [];

async function loadEvents() {
  try {
    // Show loading state
    timeline.innerHTML = "<p style='text-align:center;'>Loading historical records...</p>";
    
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Failed to load events.json");
    
    events = await response.json();

    const savedLang = localStorage.getItem("lang") || 
                     (navigator.language.startsWith("vi") ? "vi" : "en");

    renderTimeline(savedLang);
  } catch (error) {
    timeline.innerHTML = "<p style='text-align:center; color:red;'>Error loading history data. Please check if events.json exists.</p>";
    console.error(error);
  }
}

function renderTimeline(lang) {
  timeline.innerHTML = "";

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;

    // Display image if available
    const imgHtml = e.image ? 
      `<img src="${e.image}" alt="${e.en}" style="width:100%; height:auto; border-radius:4px; margin-top:12px; border: 1px solid #ddd;">` : "";

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="margin:0;">${e.year}</h3>
        <span style="font-size:12px; text-transform:uppercase; color:#666;">${e.type.replace('-', ' ')}</span>
      </div>
      <p style="margin-top:10px;">${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

// Start the process
loadEvents();
