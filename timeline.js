function renderTimeline(events, lang) {
  timeline.innerHTML = "";
  
  events.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    
    // 1. Ensure the class name matches your CSS: "event-image"
    // 2. Add an 'onerror' check to see if the link is the problem
    const imgHtml = e.image ? 
      `<div class="event-image">
         <img src="${e.image}" 
              alt="${e[lang]}" 
              onerror="this.parentElement.innerHTML='<p style=\'font-size:12px; color:gray;\'>Image failed to load from source</p>'">
       </div>` : "";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[lang]}</p>
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}
