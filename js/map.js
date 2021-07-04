import {createAdvertisementElement} from './create-advertisement-element.js';
const TOKIO_СOORDINATES = {
  lat: 35.68170,
  lng: 139.75389,
};
const initialMapScale = 13;
const mainIconSize = [52, 52];
const mainIconAnchor = [26, 52];
const iconSize = [40, 40];
const iconAnchor = [20, 40];

//создаем карту
const map = L.map('map-canvas');

const setMap = () => {
  map.setView(
    TOKIO_СOORDINATES,
    initialMapScale);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

//создаем маркер для специальной метки
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: mainIconSize,
  iconAnchor: mainIconAnchor,
});

const mainMarker = L.marker(
  TOKIO_СOORDINATES,
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
      iconSize: iconSize,
      iconAnchor: iconAnchor,
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
export {setMap, mainMarker, map, TOKIO_СOORDINATES, initialMapScale, createMarkers};
