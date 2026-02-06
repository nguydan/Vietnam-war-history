document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let allEvents = [];
  let currentLang = document.getElementById("langToggle").checked ? "vi" : "en";

  // Fetch the events from your JSON file
  fetch("events.json")
    .then(response => response.json())
    .then(data => {
      allEvents = data;
      renderTimeline(allEvents);
    });

  // Function to build the timeline HTML
  function renderTimeline(events) {
    timeline.innerHTML = "";
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.className = `event-card ${event.type}`;
      
      // Determine content based on current language
      const title = event[currentLang] || event.en;
      
      // Fixed Year Logic: Checks event.year first, then event.date, then defaults to "????"
      const year = event.year || (event.date ? event.date.split("-")[0] : "????");
      
      let html = `
        <div class="event-date">${year}</div>
        <div class="event-content">
          <p>${title}</p>
      `;

      // MEDIA LOGIC: Check for Video first. If no video, check for Image.
      if (event.video) {
        html += `
          <div class="video-container" style="margin-top:10px;">
            <iframe width="100%" height="200" src="${event.video}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
          </div>`;
      } else if (event.image) {
        html += `<img src="${event.image}" alt="event image" style="width:100%; border-radius:8px; margin-top:10px;">`;
      }

      // BUTTON LOGIC: Adds the link if it exists in the JSON
      if (event.link) {
        html += `
          <div style="margin-top: 15px;">
            <a href="${event.link}" class="read-more-btn">Read Full Report / Xem Chi Tiết</a>
          </div>
        `;
      }

      html += `</div>`;
      eventCard.innerHTML = html;
      timeline.appendChild(eventCard);
    });
  }

  // Language Toggle Logic
  document.getElementById("langToggle").addEventListener("change", (e) => {
    currentLang = e.target.checked ? "vi" : "en";
    renderTimeline(allEvents);
  });

  // Filtering Logic
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.getAttribute("data-type");
      
      if (type === "all") {
        renderTimeline(allEvents);
      } else {
        const filtered = allEvents.filter(e => e.type === type);
        renderTimeline(filtered);
      }
    });
  });
});
