const timeline = document.getElementById("timeline");
let events = [];

async function loadEvents() {
  try {
    // FIX: Using './' ensures it looks in your repo folder, not the root
    // The '?v=' forces the iPhone to bypass old saved cache
    const response = await fetch(`./events.json?v=${new Date().getTime()}`);
    
    if (!response.ok) {
      throw new Error(`Could not find events.json (Status: ${response.status})`);
    }
    
    events = await response.json();

    const savedLang = localStorage.getItem("lang") || 
                     (navigator.language.startsWith("vi") ? "vi" : "en");

    renderTimeline(savedLang);
  } catch (error) {
    console.error("Timeline Error:", error);
    timeline.innerHTML = `<p style="text-align:center; padding:20px; color:red;">
      Error: ${error.message}. Please check if events.json is in your GitHub repo.
    </p>`;
  }
}

function renderTimeline(lang) {
  timeline.innerHTML = "";

  if (events.length === 0) {
    timeline.innerHTML = "<p style='text-align:center;'>No events found.</p>";
    return;
  }

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;

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
