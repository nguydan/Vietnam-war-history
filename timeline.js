const timeline = document.getElementById("timeline");
let events = [];

// 1. Wait for the page to be fully ready
document.addEventListener("DOMContentLoaded", () => {
  loadEvents();
});

async function loadEvents() {
  try {
    // 2. The './' and the timestamp are key for Mobile Safari to find the file
    // and ignore old, broken cached versions.
    const url = `./events.json?v=${new Date().getTime()}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`GitHub Status: ${response.status}`);
    }
    
    events = await response.json();

    // Check localStorage for the language preference
    const savedLang = localStorage.getItem("lang") || 
                     (navigator.language.startsWith("vi") ? "vi" : "en");

    renderTimeline(savedLang);

  } catch (error) {
    console.error("Timeline Error:", error);
    timeline.innerHTML = `
      <div style="color:red; text-align:center; padding:20px;">
        <h3>⚠️ Mobile Load Error</h3>
        <p>${error.message}</p>
      </div>`;
  }
}

// This function can be called by toggle.js when the switch is flipped
function renderTimeline(lang) {
  timeline.innerHTML = "";

  if (events.length === 0) {
    timeline.innerHTML = "<p style='text-align:center;'>No events found.</p>";
    return;
  }

  events.forEach(e => {
    const div = document.createElement("div");
    // Ensure the type (battle, political, etc.) is added for CSS coloring
    div.className = `event ${e.type}`;

    // IMPORTANT: The "event-image" class here must match your CSS
    const imgHtml = e.image ? 
      `<div class="event-image">
         <img src="${e.image}" alt="${e[lang]}" loading="lazy">
       </div>` : "";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}
