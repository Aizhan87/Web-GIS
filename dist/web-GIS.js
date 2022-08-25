// Full screen map view
var mapId = document.getElementById('map')

function fullScreenView() {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        mapId.requestFullscreen()
    }
}

// Print
L.control.browserPrint({ position: 'topright', title: 'Print ...' }).addTo(map);


// Search for location
L.Control.geocoder().addTo(map);


// Measure
L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map)

// zoom to a location
$('.zoom-to-layer').click(function () {
    map.setView([38.8610, 71.2761], 7)
})