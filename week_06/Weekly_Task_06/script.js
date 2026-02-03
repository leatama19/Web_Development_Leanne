const timeEl = document.getElementById("time");
const container = document.getElementById("tiles-container");

// Colors for tiles
const colors = ["#D32F2F","#F57C00","#FFEB3B","#388E3C","#1976D2","#7B1FA2","#F06292","#009688"];

// Create 24 tiles
for (let i = 0; i < 24; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.backgroundColor = colors[i % colors.length];
  container.appendChild(tile);
}

// Simulate hours passing quickly for demo
let fakeHour = 0;
function updateClockAndTiles() {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  timeEl.textContent = `${fakeHour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile, index) => {
    if (index < fakeHour) tile.classList.add("show");
  });

  fakeHour++;
  if (fakeHour > 24) fakeHour = 0;
}

// Update every 500ms
setInterval(updateClockAndTiles, 500);
updateClockAndTiles();
