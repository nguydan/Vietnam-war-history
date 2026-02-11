async function renderTimeline(filter = 'all') {
  const container = document.getElementById('timeline-container'); // Updated to match your HTML
  const lang = document.getElementById('langToggle').checked ? 'vi' : 'en';
  
  // 1. Fetch the data
  const response = await fetch('events.json');
  const data = await response.json();
  
  // 2. Clear current view
  container.innerHTML = '';

  // 3. Filter and Render
  data.forEach(event => {
    if (filter === 'all' || event.type === filter) {
      const card = document.createElement('div');
      card.className = `event ${event.type}`;
      
      const titleColor = event.type === 'analysis' ? '#2c3e50' : '#4b5320';

      card.innerHTML = `
        <div class="event-header">
          <span class="year-badge">${event.year}</span>
          <h3 style="color: ${titleColor}">${event[lang]}</h3>
        </div>
        ${event.video ? `
           <div class="video-container">
              <iframe 
                src="${event.video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
          </div>
        ` : ''}
        ${event.link ? `
          <a href="${event.link}" class="read-more-btn">
            ${lang === 'en' ? 'Read Full Report' : 'Xem Báo Cáo Chi Tiết'}
          </a>
        ` : ''}
      `;
      container.appendChild(card);
    }
  });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => renderTimeline());

// Attach to filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const type = e.target.getAttribute('data-type');
    renderTimeline(type);
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});

window.renderTimeline = renderTimeline;
