const timeline = document.getElementById("timeline");

async function loadEvents() {
  try {
    // Adding the date at the end forces Safari to grab the fresh JSON
    const response = await fetch(`./events.json?v=${new Date().getTime()}`);
    
    if (!response.ok) {
      throw new Error(`GitHub cannot find events.json (Error ${response.status})`);
    }
    
    const events = await response.json();
    const savedLang = localStorage.getItem("lang") || "en";
    renderTimeline(events, savedLang);

  } catch (error) {
    // This will show up on your iPhone screen if it fails
    timeline.innerHTML = `<p style="color:red; text-align:center; padding:20px;">
      ⚠️ Connection Error: ${error.message}
    </p>`;
  }
}

function renderTimeline(events, lang) {
  timeline.innerHTML = "";
  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    const imgHtml = e.image ? `<img src="${e.image}" style="width:100%; margin-top:10px; border-radius:4px;">` : "";
    div.innerHTML = `<h3>${e.year}</h3><p>${e[lang]}</p>${imgHtml}`;
    timeline.appendChild(div);
  });
}

loadEvents();
