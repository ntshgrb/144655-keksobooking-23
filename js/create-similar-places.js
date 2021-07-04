import {getRandomInteger, getRandomFractional} from './utils.js';

const SIMILAR_PLACE_COUNT = 10;
const PLACE_TITLES = ['студия', 'логово', 'берлога', 'пещера', 'укрытие', 'бастион', 'форт', 'квартира с видом на море', 'бунгало', 'хижина'];
const PLACE_PRICE_MIN = 10000;
const PLACE_PRICE_MAX = 10000000;
const PLACE_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const PLACE_ROOMS_MIN =  1;
const PLACE_ROOMS_MAX =  40;
const GUESTS_NUMBER_MIN = 1;
const GUESTS_NUMBER_MAX = 15;
const PLACE_CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const PLACE_CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const PLACE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PLACE_DESCRIPTIONS = ['просторная кварира', 'тесное помещение', 'светлые комнаты', 'парк напротив дома', 'пять минут до метро', 'окна выходят на солнечную сторону', 'квартира со свежим евроремонтом', 'уютный угол', 'нет шумных соседей', 'в центре города'];
const PLACE_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LAT_LNG_FLOAT = 5;

const createAuthor = () => {
  const avatarIndex = getRandomInteger(1, SIMILAR_PLACE_COUNT);
  if (avatarIndex < 10) {
    return `img/avatars/user0${avatarIndex}.png`;
  }
  return `img/avatars/user${avatarIndex}.png`;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getNewArray = (array) => array.slice(0, getRandomInteger(0, array.length - 1));

const createPlaceNearby = () => {
  const locationLat = getRandomFractional(LAT_MIN, LAT_MAX, LAT_LNG_FLOAT);
  const locationLng = getRandomFractional(LNG_MIN, LNG_MAX, LAT_LNG_FLOAT);
  return {
    author: {
      avatar: createAuthor(),
    },
    offer: {
      title: getRandomArrayElement(PLACE_TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomInteger(PLACE_PRICE_MIN, PLACE_PRICE_MAX),
      type: getRandomArrayElement(PLACE_TYPES),
      rooms: getRandomInteger(PLACE_ROOMS_MIN, PLACE_ROOMS_MAX),
      guests: getRandomInteger(GUESTS_NUMBER_MIN, GUESTS_NUMBER_MAX),
      checkin: getRandomArrayElement(PLACE_CHECKIN_TIME),
      checkout: getRandomArrayElement(PLACE_CHECKOUT_TIME),
      features: getNewArray(PLACE_FEATURES),
      description: getRandomArrayElement(PLACE_DESCRIPTIONS),
      photos: getNewArray(PLACE_PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const CreateSimilarPlaces = () => new Array(SIMILAR_PLACE_COUNT).fill(null).map(() => createPlaceNearby());
export {CreateSimilarPlaces};
