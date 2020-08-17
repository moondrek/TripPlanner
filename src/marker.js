import mapboxgl from "mapbox-gl";

function markerCreator(stringMarkerType, arrayLongLat) {
  let el = document.createElement("div");

  el.classList.add(stringMarkerType);

  let marker = new mapboxgl.Marker(el).setLngLat(arrayLongLat);

  return marker;
}

export default markerCreator;
