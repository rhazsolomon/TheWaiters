

function getData() {
    var theUrl = "https://api.doc.govt.nz/v2/huts"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("x-api-key", "bU5t3d5QOv5V0QNWU36yp5nGDhEtmLDc6UbTfvPM");
    xmlHttp.send( null );
    document.getElementById("result").innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
}

async function getData() {
    const headers = { "x-api-key": "bU5t3d5QOv5V0QNWU36yp5nGDhEtmLDc6UbTfvPM" }
    await fetch('https://api.doc.govt.nz/v2/huts', { headers }).then(res => res.json())
}
