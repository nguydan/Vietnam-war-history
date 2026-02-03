const timeline = document.getElementById("timeline");

let events = [];

async function loadEvents() {
  try {
    const response = await fetch("events.json");
    events = await response.json();
    const lang = localStorage.getItem("lang") || 
      (navigator.language.startsWith("vi") ? "vi" : "en");
    renderTimeline(lang);
  } catch (err) {
    timeline.innerHTML = "<p>Failed to load timeline data.</p>";
  }
}

function renderTimeline(lang) {
  timeline.innerHTML = "";
  events.forEach(ev => {
    const div = document.createElement("div");
    div.className = `event ${ev.type}`;
    div.innerHTML = `
      <h3>${ev.year}</h3>
      <p>${ev[lang]}</p>
    `;
    timeline.appendChild(div);
  });
}

loadEvents();