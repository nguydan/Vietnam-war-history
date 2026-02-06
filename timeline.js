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
      const year = event.year || event.date.split("-")[0];
      
      let html = `
        <div class="event-date">${year}</div>
        <div class="event-content">
          <p>${title}</p>
      `;

      // Check if there is an image
      if (event.image) {
        html += `<img src="${event.image}" alt="event image" style="width:100%; border-radius:8px; margin-top:10px;">`;
      }

      // NEW: Check if there is a link for the "Read More" button
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
