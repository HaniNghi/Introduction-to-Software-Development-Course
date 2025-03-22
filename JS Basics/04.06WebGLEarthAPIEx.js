var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);

    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Â© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
    earth.setView([10.415088185662377,106.76600446463576])
    earth.setZoom(6)
}

function showCoords() {
   alert(earth.getCenter())
}