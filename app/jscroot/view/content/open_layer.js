export async function main() {
  var geoJsonData = null
  try {
    const res = await fetch("https://geojson-api.fly.dev/coffee_shops").then(
      (response) => response.json()
    );
    geoJsonData = res
  } catch (error) {}

  var logoElement = document.createElement("a");
  logoElement.href = "https://www.osgeo.org/";
  logoElement.target = "_blank";

  var logoImage = document.createElement("img");
  logoImage.src =
    "https://www.osgeo.org/wp-content/themes/roots/assets/img/logo-osgeo.svg";

  logoElement.appendChild(logoImage);

  const view = new ol.View({
    center: [0, 0],
    zoom: 4,
  });

  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    target: "map",
    view: view,
    logo: logoElement,
  });

  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
  });

  map.addLayer(vectorLayer);

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lonLat = ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]);

        map.getView().setCenter(lonLat);
        map.getView().setZoom(15);

        var marker = new ol.Feature({
          geometry: new ol.geom.Point(lonLat),
        });

        vectorLayer.getSource().addFeature(marker);
      },
      function (error) {
        console.error('Error getting user location:', error.message);
      }
    );
  } else {
    console.error('Geolocation is not supported by your browser');
  }

  if (geoJsonData != null) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geoJsonData),
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          src: 'marker.png',
          scale: 0.1,
        }),
      }),
    });
  
    map.addLayer(vectorLayer);
  }
}
