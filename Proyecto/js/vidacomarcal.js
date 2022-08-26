console.log("Preparando todo guachooo!");
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