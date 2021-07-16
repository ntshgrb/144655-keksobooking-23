import {renderPhotoPreview} from './photos.js';
//форма объявления
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
//фильтры
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFeatures = mapFilters.querySelector('.map__features');
//для превью фото
const formAvatarChooser = adForm.querySelector('.ad-form-header__input');
const formAvatarPreview = adForm.querySelector('.ad-form-header__preview img');
const placePhotoChooser = adForm.querySelector('.ad-form__input');
const placePhotoPreview = adForm.querySelector('.ad-form__photo');

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
  formAvatarChooser.addEventListener('change', () => renderPhotoPreview(formAvatarChooser, formAvatarPreview));
  placePhotoChooser.addEventListener('change', () => renderPhotoPreview(placePhotoChooser, placePhotoPreview));
};

const setActiveFilter = () => {
  mapFilters.classList.remove('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.disabled = false;
  });
  mapFiltersFeatures.disabled = false;
};

export {setDisabledMode, setActiveMode, setActiveFilter};
