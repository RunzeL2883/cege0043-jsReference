function trackAndCircle() {
	addPointLinePoly();
	trackLocation();
	getEarthquakes();
	getPort();

}
function startup() {
	document.addEventListener('DOMContentLoaded', function() {
		trackAndCircle ();
	}, false);
}
function loadW3HTML() {
    w3.includeHTML();
}