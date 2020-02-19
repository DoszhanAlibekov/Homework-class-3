// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';
// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [54.673831, 53.701172]
var initialZoom = 1

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}
// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in central park
 new mapboxgl.Marker()
   .setLngLat([69.697266,57.704147])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('Former Soviet Union'))
   .addTo(map);


// iterate over each object in studentData
studentData.forEach(function(Independence) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.marker()
    .setLngLat([Independence.longitude, Independence.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${Independence.name} thinks ${Independence.country} took its Independence`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#Estonia').on('click', function() {
  var EstoniaLngLat = [58.6008994, 22.6901085]
  map.flyTo({
    center: EstoniaLngLat,
    zoom: initialZoom
  })
})

$('#Latvia').on('click', function() {
  var LatviaLngLat = [22.3018705, 56.8600888]
  map.flyTo({
    center: michiganLngLat,
    zoom: initialZoom
  })
})

$('#colombia').on('click', function() {
  var colombiaLngLat = [-73.997208, 0.721615]

  map.flyTo({
    center: colombiaLngLat,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
