// Initialise map to Singapore coordinate and define zoom level
let map = L.map("map").setView([1.3615208221204578, 103.8160867611435], 12);

//todo: Toggle between colored and dark maps

// Open street layer
let openStreetLayer = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
);

// Dark map layer
let darkMapLayer = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

// Google street layer
let googleLayer = L.tileLayer(
  "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

darkMapLayer.addTo(map);

let baseMaps = {
  "Dark Map": darkMapLayer,
  "Open Street Map": openStreetLayer,
  "Google Streets": googleLayer,
};

// let overlayMaps = {
//   Cities: cities,
// };

let layerControl = L.control.layers(baseMaps, null, {
  collapsed: false,
});
layerControl.addTo(map);
