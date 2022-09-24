console.log("Preparando todo guachooo!");
var map
console.log("conectando con el mapa")

function load_map() {
    var platform = new H.service.Platform({
        'apikey': 'AvbT5cYNLBio0mwECTEY7C4qk3kRoCYkYKg9d8XpfXU'
    });

    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map, {
            zoom: 14,
            center: { lat: -41.9604985, lng: -71.536930 }
        });
    mapEvents = new H.mapevents.MapEvents(map);
    var behavior = new H.mapevents.Behavior(mapEvents);
    var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');
    var bubble = new H.ui.InfoBubble({ lng: -41.9595776, lat: -71.5343402 }, {
        content: '<b>Hello World!</b>'
    });

    // Create a marker icon from an image URL:
    nogalito = new H.map.Icon('imagenes/nogalito.png');

    // Create a marker using the previously instantiated icon:

    nogal1 = new H.map.Marker({ lat: "-41.95", lng: "-71.5343401" }, { icon: nogalito });
    nogal2 = new H.map.Marker({ lat: "-41.97", lng: "-71.5343402" }, { icon: nogalito });
    nogal3 = new H.map.Marker({ lat: "-41.96", lng: "-71.5343404" }, { icon: nogalito });

    // Add the marker to the map:
    map.addObject(nogal1);
    map.addObject(nogal2);
    map.addObject(nogal3);

}


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready');
    load_map();

});

const db = firebase.firestore()

function registrar_nogal(lat, long) {
    db.collection("Nogales").doc().set({
        Ubicacion: new firebase.firestore.GeoPoint(lat, long)
    })
}

function traer_nogales() {
    db.collection("Nogales").get()
        .then(function(nogales) {
            nogales.forEach(function(doc) {

                console.log(doc.data().Ubicacion.latitude)
                console.log(doc.data().Ubicacion.longitude)
            });
        })
        .catch(function(error) {

            console.log("Error: ", error);

        })
};
//registrar_nogal(15, 15)
traer_nogales()