const uz = { lat: 41.3775, lng: 64.5853 };

const map = L.map("uz-map", {
  zoomControl: true,
}).setView([uz.lat, uz.lng], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([41.3111, 69.2797]).addTo(map).bindPopup("Tashkent, Uzbekistan");