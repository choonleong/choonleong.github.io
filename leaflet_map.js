// Declare global variables
let areaData; // API call
let markers = L.markerClusterGroup(); //marker cluster

//Icons
const helpIcon = L.icon({
  iconUrl: "images/help.png",
  iconSize: [50, 50],
});

const taxiIcon = L.icon({
  iconUrl: "images/taxi.png",
  iconSize: [35, 35],
});

// Import taxi API- httpsL//api.data.gov.sg/v1/transport/taxi-availability
const taxiLocation = axios.create({
  baseURL: "https://api.data.gov.sg/v1/transport",
});

// Get data from API, resolve to refreshData()
async function getAreaData() {
  return new Promise((resolve, reject) => {
    $(document).ready(async () => {
      try {
        const response = await taxiLocation.get("/taxi-availability");
        const areaData = response.data.features[0].geometry.coordinates;

        resolve(areaData); // resolve with the areaData
      } catch (error) {
        reject(error); // reject with the error
      }
    });
  });
}

// clear markers first, then add single markers. Grouped under markerClusterGroup()
function refreshData() {
  getAreaData()
    .then((areaData) => {
      // Remove existing markers from the map
      markers.clearLayers();

      // Loop through whole list, add to marker layer and display them
      areaData.forEach((i) => {
        markers.addLayer(
          L.marker([i[1], i[0]], {
            icon: taxiIcon,
          })
        ); // API[1] is Lng, API[0] is Lat
        map.addLayer(markers.bindPopup("<h2>I'm a taxi</h2>"));
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

//Call the markers for the first instance, then refresh at set interval
refreshData();
setInterval(refreshData, 30000);

// Initialise map to Singapore coordinate and define zoom level
let map = L.map("map").setView([1.3615208221204578, 103.8160867611435], 12);

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
    maxZoom: 19,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

// Singapore One Map layer
let omLayer = L.tileLayer(
  "https://maps-{s}.onemap.sg/v3/Night/{z}/{x}/{y}.png",
  {
    detectRetina: true,
    maxZoom: 19,
    minZoom: 11,
    //Do not remove this attribution
    attribution:
      '<img src="https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>',
  }
);

//Add the base map
omLayer.addTo(map);

//Add layer control and keep it expanded
let baseMaps = {
  "Dark Map - Clean": darkMapLayer,
  "Google Streets": googleLayer,
  "One Map": omLayer,
};

let overlayMaps = {
  "Taxi Markers": markers,
};

let layerControl = L.control.layers(baseMaps, overlayMaps, {
  collapsed: false,
});
layerControl.addTo(map);

// Add location marker
let locationMarker = L.marker([1.3615208221204578, 103.8160867611435], {
  icon: helpIcon,
  draggable: true,
});
let locationPopUp = locationMarker
  .bindPopup("Drag me to the location!")
  .openPopup();
locationPopUp.addTo(map);

// Locate my location and zoom to me
let locateMe = L.control.locate({ flyTo: true });
locateMe.addTo(map);
