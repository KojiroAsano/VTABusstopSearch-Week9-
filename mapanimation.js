

// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [];

async function run () {
  const locations = await getBusLocations();
  //console.log(new Date());
  //console.log(locations);
  const input = prompt("input bus number");

  for (let i = 0;i < 1000; i++){
   //console.log(locations[i].geometry.points[0]);
   if(locations[i].attributes.Routes.includes(input)){
      busStops.push(locations[i].geometry.points[0]);
   }
  }   
  for (let i = 0;i < busStops.length; i++) {
    console.log(busStops[i]);
  }
  add();
}


async function getBusLocations() {
  const url = "https://gis.vta.org/gis/rest/services/Transit/BusRoutes_StopsJanuary2020_ODP/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  const response = await fetch(url);
  const json     = await response.json();

  return json.features;
}
run();



// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia29qaXJvYXMiLCJhIjoiY2t1c3V2eGJnNWpyMjJuazZyeHgzMXBzdyJ9.k1Lf03VtLbBp3k_9-GjbdQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.168861, 37.428230],
  zoom: 8,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
// counter here represents the index of the current bus stop

function add() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  for(let i = 0; i < busStops.length; i++) {
    //console.log(busStops[i]); 
    new mapboxgl.Marker()
    .setLngLat(busStops[i])
    .addTo(map);
    console.log("sfasfd");
  }

}



// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
