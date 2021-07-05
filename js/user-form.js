import {mainMarker, map, TOKIO_СOORDINATES, initialMapScale} from './map.js';
import {showMessage, messageSuccuss, messageError} from './popup.js';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const formElement = document.querySelector('.ad-form');
const formFiltersElement = document.querySelector('.map__filters');
const titleInputElement = formElement.querySelector('#title');
const priceInputElement = formElement.querySelector('#price');
const roomNumberElement = formElement.querySelector('#room_number');
const roomCapacityElement = formElement.querySelector('#capacity');
const placeTypeElement = formElement.querySelector('#type');
const placePriceElement = formElement.querySelector('#price');
const timeinElement = formElement.querySelector('#timein');
const timeoutElement = formElement.querySelector('#timeout');
const addressInputElement= formElement.querySelector('#address');
const buttonResetElement = formElement.querySelector('.ad-form__reset');
const SERVER = 'https://23.javascript.pages.academy/keksobooking';

//Валидация поля названия
titleInputElement.addEventListener('input', () => {
  const valueLength = titleInputElement.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInputElement.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInputElement.setCustomValidity(`Удалите ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInputElement.setCustomValidity('');
  }
  titleInputElement.reportValidity();
});

//Валидация поля цены
priceInputElement.addEventListener('input', () => {
  const value = priceInputElement.value;
  if (value > MAX_PRICE) {
    priceInputElement.setCustomValidity(`Максимальная цена за ночь превышена на ${value - MAX_PRICE}руб.`);
  } else {
    priceInputElement.setCustomValidity('');
  }
  priceInputElement.reportValidity();
});

//Синхронизация поля «Количество комнат» и пол «Количество мест»
const roomCapacityHandler = () => {
  if (roomNumberElement.value === '1' && roomCapacityElement.value !== '1') {
    roomCapacityElement.setCustomValidity('В одной комнате может разместиться только один постоялец');
  } else if (roomNumberElement.value === '2' && roomCapacityElement.value !== '1' && roomCapacityElement.value !== '2') {
    roomCapacityElement.setCustomValidity('Могут заселиться один или два постояльца');
  } else if (roomNumberElement.value === '3' && roomCapacityElement.value === '0') {
    roomCapacityElement.setCustomValidity('Могут разместиться от одного до трех человек');
  } else if (roomNumberElement.value === '100' && roomCapacityElement.value !== '0') {
    roomCapacityElement.setCustomValidity('Помещение не для проживания');
  } else {
    roomCapacityElement.setCustomValidity('');
  }
  roomCapacityElement.reportValidity();
};

roomNumberElement.addEventListener('change', roomCapacityHandler);
roomCapacityElement.addEventListener('change', roomCapacityHandler);

//синхронизация полей «Тип жилья» и «Цена за ночь»
const placeTypeElementHandler = () => {
  if (placeTypeElement.value === 'bungalow') {
    placePriceElement.placeholder = '0';
  } else if (placeTypeElement.value === 'flat') {
    placePriceElement.placeholder = '1000';
    placePriceElement.min = '1000';
  } else if (placeTypeElement.value === 'hotel') {
    placePriceElement.placeholder = '3000';
    placePriceElement.min = '3000';
  } else if (placeTypeElement.value === 'house') {
    placePriceElement.placeholder = '5000';
    placePriceElement.min = '5000';
  } else if (placeTypeElement.value === 'palace') {
    placePriceElement.placeholder = '10000';
    placePriceElement.min = '10000';
  }
};
placeTypeElementHandler();
placeTypeElement.addEventListener('change', placeTypeElementHandler);

//синхронизация полей «Время заезда-выезда»
const timeinHandler = () => {
  timeoutElement.value = timeinElement.value;
};
const timeoutHandler = () => {
  timeinElement.value = timeoutElement.value;
};
timeinElement.addEventListener('change', timeinHandler);
timeoutElement.addEventListener('change', timeoutHandler);

//передаем координаты главной метки
addressInputElement.readOnly = true;
const setAddressCoordinates = (markerPosition) => {
  addressInputElement.value = `${markerPosition.getLatLng().lat.toFixed(5)}, ${markerPosition.getLatLng().lng.toFixed(5)}`;
};

//задаем изначальное значение поля с координатами центрами
setAddressCoordinates(mainMarker);

//определение координат при смещении маркера
mainMarker.on('moveend', (evt) => {
  setAddressCoordinates(evt.target);
});

//форма и карта переходит в дефолтное состояние
const setDefaultState = () => {
  formElement.reset();
  formFiltersElement.reset();
  mainMarker.setLatLng(
    TOKIO_СOORDINATES,
  );
  map.setView(
    TOKIO_СOORDINATES,
    initialMapScale);
  setAddressCoordinates(mainMarker);
};

//нажатие на кнопку reset
buttonResetElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  setDefaultState();
});

//submit формы
formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    SERVER,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then(() => setDefaultState())
    .then(() => showMessage(messageSuccuss))
    .catch(() => {
      showMessage(messageError);
    });
});
