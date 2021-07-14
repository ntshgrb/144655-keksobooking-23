import {createAdvertisementElement} from './create-advertisement-element.js';

const TOKIO_СOORDINATES = {
  lat: 35.68170,
  lng: 139.75389,
};
const initialMapScale = 13;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];
const SIMILAR_PLACES_COUNT = 10;

//создаем карту
const map = L.map('map-canvas');

const setMap = (cb) => {
  map.on('load', () => {
    cb();
  })
    .setView(
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
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const mainMarker = L.marker(
  TOKIO_СOORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const markers = [];

const addMarkerOnMap = (place) => {
  const marker = L.marker(
    {
      lat: place.location.lat,
      lng: place.location.lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker.addTo(map).bindPopup(createAdvertisementElement(place),
    {
      keepInView: true,
    },
  );
  markers.push(marker);
};

const renderPlaces = (places) => {
  places.slice(0, SIMILAR_PLACES_COUNT).forEach((place) => {
    addMarkerOnMap(place);
  });
};

const removePlaces = () => {
  markers.forEach((marker) => marker.remove());
};

export {setMap, mainMarker, map, TOKIO_СOORDINATES, initialMapScale, renderPlaces, addMarkerOnMap, removePlaces};
