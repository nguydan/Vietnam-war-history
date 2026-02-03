const timeline = document.getElementById("timeline");

// 1. Wait for the page to be fully loaded before running
document.addEventListener("DOMContentLoaded", () => {
  timeline.innerHTML = "<p style='text-align:center;'>Loading History...</p>";
  loadEvents();
});

async function loadEvents() {
  try {
    // 2. The './' and the timestamp are key for Mobile Safari
    const url = `./events.json?v=${new Date().getTime()}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`GitHub Status: ${response.status}`);
    }
    
    const events = await response.json();
    const savedLang = localStorage.getItem("lang") || "en";
    
    renderTimeline(events, savedLang);

  } catch (error) {
    // 3. This will tell us EXACTLY why it fails on your iPhone
    timeline.innerHTML = `
      <div style="color:red; text-align:center; padding:20px; border:1px solid red;">
        <h3>⚠️ Mobile Load Error</h3>
        <p>${error.message}</p>
        <small>Make sure events.json is in the main folder.</small>
      </div>`;
  }
}

function renderTimeline(events, lang) {
  timeline.innerHTML = "";
  
  if (!events || events.length === 0) {
    timeline.innerHTML = "<p>No events found in file.</p>";
    return;
  }

  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    
    const imgHtml = e.image ? 
      `<img src="${e.image}" style="width:100%; height:auto; border-radius:4px; margin-top:10px; display:block;">` : "";

    div.innerHTML = `
      <h3 style="margin:0;">${e.year}</h3>
      <p style="margin-top:8px;">${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}
