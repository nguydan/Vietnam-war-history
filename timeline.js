const timeline = document.getElementById("timeline");
let events = [];

async function loadEvents() {
  try {
    // The "./" and "?v=" ensure the iPhone finds the file and ignores old cache
    const response = await fetch(`./events.json?v=${new Date().getTime()}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    events = await response.json();

    const savedLang = localStorage.getItem("lang") || 
                     (navigator.language.startsWith("vi") ? "vi" : "en");

    renderTimeline(savedLang);
  } catch (error) {
    console.error("Error loading events:", error);
    timeline.innerHTML = `<p style="text-align:center; padding:20px;">
      Error loading history data. Please try refreshing.
    </p>`;
  }
}

function renderTimeline(lang) {
  timeline.innerHTML = "";

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;

    // Responsive image handling
    const imgHtml = e.image ? 
      `<div class="event-image" style="margin-top:12px;">
         <img src="${e.image}" alt="${e.en}" 
              style="width:100%; height:auto; border-radius:4px; display:block; border: 1px solid #ddd;">
       </div>` : "";

    div.innerHTML = `
      <h3 style="margin-bottom:5px;">${e.year}</h3>
      <p style="margin:0; font-size:1.05rem;">${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

loadEvents();
