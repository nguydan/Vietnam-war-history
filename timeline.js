fetch("events.json")
  .then(response => response.json())
  .then(data => {

    const timeline = document.getElementById("timeline-container");

    // ===== SORT EVENTS BY YEAR =====
    data.sort((a, b) => {

      function getStartYear(yearString) {
        // Extract first 4-digit number
        const match = yearString.match(/\d{4}/);
        return match ? parseInt(match[0]) : 0;
      }

      return getStartYear(a.year) - getStartYear(b.year);
    });

    // ===== RENDER EVENTS =====
    data.forEach(event => {

      const card = document.createElement("div");
      card.classList.add("event");

      const year = document.createElement("h3");
      year.textContent = event.year;
      card.appendChild(year);

      const enText = document.createElement("p");
      enText.classList.add("en");
      enText.textContent = event.en;
      card.appendChild(enText);

      const viText = document.createElement("p");
      viText.classList.add("vi");
      viText.textContent = event.vi;
      card.appendChild(viText);

      if (event.video) {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        const iframe = document.createElement("iframe");
        iframe.src = event.video;
        iframe.allowFullscreen = true;

        videoContainer.appendChild(iframe);
        card.appendChild(videoContainer);
      }

      if (event.link) {
        const readMoreBtn = document.createElement("a");
        readMoreBtn.href = event.link;
        readMoreBtn.target = "_blank";
        readMoreBtn.classList.add("read-more-btn");

        readMoreBtn.innerHTML = `
          <span class="en">Read Full Report</span>
          <span class="vi">Xem Báo Cáo Đầy Đủ</span>
        `;

        card.appendChild(readMoreBtn);
      }

      timeline.appendChild(card);
    });

  });