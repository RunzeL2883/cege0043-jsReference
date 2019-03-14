
var xhrNode;

function callStudentServer() {
	xhrNode = new XMLHttpRequest();
    var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber;
	xhrNode.open("GET", PortNumber, true);
	xhrNode.onreadystatechange = processDivChange;
    try {
        xhrNode.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
    }
    catch (e) {
        // this only works in internet explorer
    }
	xhrNode.send();
}

function processStudentServer() {
    if (xhrNode.readyState < 4) {// while waiting response from server
    	document.getElementById('ajaxtext').innerHTML = "Loading...";
    }

    else if (xhrNode.readyState === 4) { // 4 = Response from server has been completely loaded.
    	if (xhrNode.status == 200 && xhrNode.status < 300) {// http status between 200 to 299 are all successful
    		document.getElementById('ajaxtext').innerHTML = xhrNode.responseText;
    	}
    }
}