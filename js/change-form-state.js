const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const getDisabledMode = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.setAttribute('disabled', '');
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.setAttribute('disabled', '');
  });
  mapFiltersFieldsets.forEach((item) => {
    item.setAttribute('disabled', '');
  });
};

const getActiveMode = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.removeAttribute('disabled', '');
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.removeAttribute('disabled', '');
  });
  mapFiltersFieldsets.forEach((item) => {
    item.removeAttribute('disabled', '');
  });
};

export {getDisabledMode, getActiveMode};
