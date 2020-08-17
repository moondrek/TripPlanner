import mapboxgl from "mapbox-gl";
import markerCreator from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9vbmQiLCJhIjoiY2tkeXUwaHdlMG5ieTJzb2djejczZmYxdiJ9.LVHzQ7iY2D9Fxxc9iJ8W_A";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

let marker = markerCreator("restaurant", [-74.009, 40.705]);
marker.addTo(map);
