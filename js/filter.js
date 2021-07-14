const mapFilterElement = document.querySelector('.map__filters');
const housingTypeSelect = mapFilterElement.querySelector('#housing-type');
const housingPriceSelect = mapFilterElement.querySelector('#housing-price');
const housingRoomsSelect = mapFilterElement.querySelector('#housing-rooms');
const housingGuestsSelect = mapFilterElement.querySelector('#housing-guests');
const housingFeaturesFieldset = mapFilterElement.querySelector('#housing-features');
const DEFAULT_SELECT_VALUE = 'any';
const PRICE_BREAKPOINT_MIN = 10000;
const PRICE_BREAKPOINT_MAX = 50000;
const PRICE_VALUE_MIDDLE = 'middle';
const PRICE_VALUE_LOW = 'low';
const PRICE_VALUE_HIGH = 'high';

const filterByHousingType = (place) => housingTypeSelect.value === place.offer.type || housingTypeSelect.value === DEFAULT_SELECT_VALUE;

const filterByPrice = (place) => {
  switch (housingPriceSelect.value) {
    case PRICE_VALUE_MIDDLE:
      return place.offer.price >= PRICE_BREAKPOINT_MIN && place.offer.price <= PRICE_BREAKPOINT_MAX;
    case PRICE_VALUE_LOW:
      return place.offer.price < PRICE_BREAKPOINT_MIN;
    case PRICE_VALUE_HIGH:
      return place.offer.price > PRICE_BREAKPOINT_MAX;
    case DEFAULT_SELECT_VALUE:
      return true;
  }
};

const filterByRooms = (place) => {
  if (housingRoomsSelect.value === DEFAULT_SELECT_VALUE) {
    return true;
  }
  return +housingRoomsSelect.value === place.offer.rooms;
};

const filterByGuests = (place) => {
  if (housingGuestsSelect.value === DEFAULT_SELECT_VALUE) {
    return true;
  }
  return +housingGuestsSelect.value === place.offer.guests;
};

const filterByFeatures = (place) => {
  const checkedFeatures = housingFeaturesFieldset.querySelectorAll('input[type="checkbox"]:checked');
  const featuresArray = [];
  checkedFeatures.forEach((item) => featuresArray.push(item.value));
  const placeFeatures = place.offer.features;
  let commonFeatures = 0;
  if (placeFeatures) {
    featuresArray.forEach((feature) => {
      if (placeFeatures.includes(feature)) {
        commonFeatures += 1;
      }
    });
  }
  return featuresArray.length === commonFeatures;
};

const setFilterPlaces = (places) => places.filter((place) =>
  filterByHousingType(place) &&
  filterByPrice(place) &&
  filterByRooms(place) &&
  filterByGuests(place) &&
  filterByFeatures(place));

const setFilterFormChange = (cb) => {
  mapFilterElement.addEventListener('change', () => {
    cb();
  });
};

export {setFilterPlaces, setFilterFormChange};
