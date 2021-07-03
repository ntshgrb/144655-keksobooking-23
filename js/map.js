import {getActiveMode} from './change-form-state.js';
import {createAdvertisementElement} from './create-advertisement-element.js';
const tokioСoordinates = {
  lat: 35.68170,
  lng: 139.75389,
};

//создаем карту
const map = L.map('map-canvas').on('load', () => {
  getActiveMode();
}).setView(
  tokioСoordinates,
  13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//создаем маркер для специальной метки
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  tokioСoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);

// создаем объявления похожих мест
const createMarkers = (places) => {
  places.forEach((item) => {
    const pinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker.addTo(map).bindPopup(createAdvertisementElement(item),
      {
        keepInView: true,
      },
    );
  });
};
export {mainMarker, map, tokioСoordinates, createMarkers};
