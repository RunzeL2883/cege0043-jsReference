// add a point, line and polygon
function addPointLinePoly() {
	// add a point
	L.marker([51.5, -0.09]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	// add a circle
	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	// add a polygon with 3 end points (i.e. a triangle)
	var myPolygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
		],{
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("I am a polygon.");
}

var client;
var earthquakes;

// create the code to get the Earthquakes data using an XMLHttpRequest
function getEarthquakes() {
	client = new XMLHttpRequest();
	client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work 
	client.send();
}

function loadEarthquakeData() {
    // call the getEarthquakes code
    // keep the alert message so that we know something is happening
    alert("Loading Earthquakes");
    getEarthquakes();
}

function earthquakeResponse() {
    // this function listens out for the server to say that the data is ready - i.e. has state 4
    if (client.readyState == 4) {
        // once the data is ready, process the data
        var earthquakedata = client.responseText;
        loadEarthquakelayer(earthquakedata);
    }
}

var earthquakelayer;

function loadEarthquakelayer(earthquakedata) {
    // convert the text received from the server to JSON
    var earthquakejson = JSON.parse(earthquakedata);
    earthquakes = earthquakejson;

    // load the geoJSON layer
    earthquakelayer = L.geoJson(earthquakejson).addTo(mymap);
    mymap.fitBounds(earthquakelayer.getBounds());
}