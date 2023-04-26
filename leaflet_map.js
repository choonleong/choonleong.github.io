// Initialise map to Singapore coordinate and define zoom level
let map = L.map("map").setView([1.3615208221204578, 103.8160867611435], 12);

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

//Add the base map
darkMapLayer.addTo(map);

//Add layer control and keep it expanded
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

//Add location marker
// let locationMarker = L.marker([1.3615208221204578, 103.8160867611435], {
//   draggable: true,
// });
// let locationPopUp = locationMarker
//   .bindPopup("Drag me to the location!")
//   .openPopup();
// locationPopUp.addTo(map);

let locateMe = L.control.locate({ flyTo: true });
locateMe.addTo(map);

// Import taxi API- httpsL//api.data.gov.sg/v1/transport/taxi-availability
const taxiLocation = axios.create({
  baseURL: "https://api.data.gov.sg/v1/transport",
});

$(document).ready(async () => {
  try {
    const response = await taxiLocation.get("/taxi-availability");

    const records = response.data.features[0].geometry.coordinates;
    console.log(records);
  } catch (error) {
    console.log("Error");
  }
});
