import ScrollAnimation from "./ScrollAnimation.js";

export default function GoogleMap(latitude, longitude, km) {
  const maps = ScrollAnimation('.locais [href^="#"]');

  let mymap = L.map("mapid").setView([latitude, longitude], km);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  var marker = L.marker([latitude, longitude]).addTo(mymap);

  marker.bindPopup("<b>Mineirão!</b><br>Loja ao pe da esquina.").openPopup();

  return { latitude, longitude, km };
}
