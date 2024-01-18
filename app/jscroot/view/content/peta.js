export function main() {
  // Set default center map
  var map = L.map("map").setView([-6.914744, 107.60981], 13);

  // Gunakan tile untuk layer dari openstreet
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Get data
  fetch("https://geojson-api.fly.dev/coffee_shops")
    .then((response) => response.json())
    .then((data) => {
      // set center ke data index ke 1
      map.flyTo([
        data.features[0].geometry.coordinates[1],
        data.features[0].geometry.coordinates[0],
      ]);

      // Load datageojsion ke map
      L.geoJSON(data).addTo(map, {
        onEachFeature: function (feature, layer) {
          // Bind a popup to the layer
          layer.bindPopup(feature.properties.name);
        },
      });
    })
    .catch((err) => {
      alert("Gagal Mengambil data GeoJSON");
    });
}
