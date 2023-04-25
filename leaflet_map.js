// Initialise map to Singapore coordinate and define zoom level
var map = L.map("map").setView([1.3615208221204578, 103.8160867611435], 12);

// Map Layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
