//форма объявления
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
//фильтры
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFeatures = mapFilters.querySelector('.map__features');

const setDisabledMode = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.disabled = true;
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.disabled = true;
  });
  mapFiltersFeatures.disabled = true;
};

const setActiveMode = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.disabled = false;
  });
};

const setActiveFilter = () => {
  mapFilters.classList.remove('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.disabled = false;
  });
  mapFiltersFeatures.disabled = false;
};

export {setDisabledMode, setActiveMode, setActiveFilter};
