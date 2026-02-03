const timeline = document.getElementById("timeline");
let events = [];

async function loadEvents() {
  const response = await fetch("events.json");
  events = await response.json();

  const savedLang =
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("vi") ? "vi" : "en");

  renderTimeline(savedLang);
}

function renderTimeline(lang) {
  timeline.innerHTML = "";

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[lang]}</p>
    `;
    timeline.appendChild(div);
  });
}

loadEvents();