const timeline = document.getElementById("timeline");
let events = [];

async function loadEvents() {
  try {
    const response = await fetch("events.json");
    events = await response.json();

    const savedLang = localStorage.getItem("lang") || 
                     (navigator.language.startsWith("vi") ? "vi" : "en");

    renderTimeline(savedLang);
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

function renderTimeline(lang) {
  timeline.innerHTML = "";

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;

    // Add image if the JSON has an image URL
    const imgHtml = e.image ? 
      `<div class="event-image">
         <img src="${e.image}" alt="${e.en}" style="width:100%; height:auto; border-radius:4px; margin-top:10px; display:block;">
       </div>` : "";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

loadEvents();
