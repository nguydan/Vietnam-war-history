fetch("events.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load events.json");
    return res.json();
  })
  .then(events => {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = ""; // remove "Loading history..."

    events.forEach(event => {
      const entry = document.createElement("div");
      entry.className = `event ${event.type}`;

      entry.innerHTML = `
        <h3>${event.year}</h3>
        <p class="en">${event.en}</p>
        <p class="vi" style="display:none;">${event.vi}</p>
        ${event.image ? `<img src="${event.image}" alt="${event.year} image">` : ""}
      `;

      timeline.appendChild(entry);
    });
  })
  .catch(err => {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = `<p style="color:red; text-align:center;">
      Error loading timeline: ${err.message}
    </p>`;
    console.error(err);
  });
