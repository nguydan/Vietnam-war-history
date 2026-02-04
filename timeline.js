const timeline = document.getElementById("timeline");
let allEvents = []; // Our "Master List" (the bag of beads)
let currentFilter = "all"; // Tracks what shape we want
let currentLang = localStorage.getItem("lang") || "en"; // Tracks what color we want

// 1. Fetch the data
async function loadEvents() {
  try {
    const response = await fetch("events.json");
    allEvents = await response.json();
    renderTimeline(); // Draw the page for the first time
  } catch (error) {
    console.error("Data failed to load:", error);
  }
}

// 2. The Filter Logic
// This function "cleans" the list before we show it
function renderTimeline() {
  timeline.innerHTML = ""; // Clear the screen first

  // THE MAGIC LINE: .filter() creates a new list based on our rule
  const filteredEvents = allEvents.filter(event => {
    if (currentFilter === "all") return true; // Keep everything
    return event.type === currentFilter; // Only keep if it matches
  });

  // Now we take our filtered list and draw the cards
  filteredEvents.forEach(e => {
    const div = document.createElement("div");
    div.className = `event ${e.type}`;
    const imgHtml = e.image ? `<img src="${e.image}" alt="History Image">` : "";

    div.innerHTML = `
      <h3>${e.year}</h3>
      <p>${e[currentLang]}</p> 
      ${imgHtml}
    `;
    timeline.appendChild(div);
  });
}

// 3. The Button Listeners
// We find all buttons in the filter-container
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    // 1. Remove "active" look from all buttons
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    // 2. Add "active" look to the one we clicked
    e.target.classList.add("active");

    // 3. Change our current filter to the "sticky note" value
    currentFilter = e.target.getAttribute("data-type");

    // 4. Redraw the timeline!
    renderTimeline();
  });
});

// This makes the toggle switch work with this new script
window.renderTimeline = (lang) => {
  currentLang = lang;
  renderTimeline();
};

loadEvents();
