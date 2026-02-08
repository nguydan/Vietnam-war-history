// ===== timeline.js =====

// Load the events JSON dynamically
fetch('events.json')
  .then(response => response.json())
  .then(events => buildTimeline(events))
  .catch(error => console.error('Error loading events:', error));

function buildTimeline(events) {
  const timelineContainer = document.getElementById('timeline');
  if (!timelineContainer) return;

  // Clear container
  timelineContainer.innerHTML = '<h2>Timeline of Key Events</h2>';

  events.forEach(event => {
    // Create event card
    const card = document.createElement('div');
    card.classList.add('timeline-card');

    // Year
    const yearEl = document.createElement('h3');
    yearEl.textContent = event.year;
    card.appendChild(yearEl);

    // Event text container
    const textContainer = document.createElement('div');
    textContainer.classList.add('timeline-text');

    // English + Vietnamese
    const enText = document.createElement('p');
    enText.classList.add('en');
    enText.textContent = event.en;
    textContainer.appendChild(enText);

    const viText = document.createElement('p');
    viText.classList.add('vi');
    viText.textContent = event.vi || '';
    textContainer.appendChild(viText);

    card.appendChild(textContainer);

    // Optional link
    if (event.link) {
      const linkEl = document.createElement('a');
      linkEl.href = event.link;
      linkEl.textContent = 'Read More';
      linkEl.target = '_blank';
      linkEl.classList.add('timeline-link');
      card.appendChild(linkEl);
    }

    // Optional video
    if (event.video) {
      const videoContainer = document.createElement('div');
      videoContainer.classList.add('timeline-video');
      videoContainer.innerHTML = `
        <iframe width="100%" height="315" src="${event.video}" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
      `;
      card.appendChild(videoContainer);
    }

    // Append card to timeline container
    timelineContainer.appendChild(card);
  });
}

// ===== Toggle EN/VI =====
const toggleBtn = document.getElementById('lang-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('vi-mode');
  });
}