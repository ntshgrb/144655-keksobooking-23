const PLACE_TYPES_LIST = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};
//шаблон, который нужно склонировать и заполнить
const similarAdvertisementTemplate = document.querySelector('#card').content.querySelector('.popup');

const createAdvertisementElement = (currentItem) => {
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  advertisementElement.querySelector('.popup__title').textContent = currentItem.offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = currentItem.offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = `${currentItem.offer.price}₽/ночь`;
  const placeTypeKey = currentItem.offer.type;
  advertisementElement.querySelector('.popup__type').textContent = PLACE_TYPES_LIST[placeTypeKey];
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${currentItem.offer.rooms} комнаты для ${currentItem.offer.guests} гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${currentItem.offer.checkin}, выезд до ${currentItem.offer.checkout}`;

  //выводим все доступные удобства в объявлении
  const featuresListContainer = advertisementElement.querySelector('.popup__features');
  if (currentItem.offer.features) {
    const modifiers = currentItem.offer.features.map((feature) => `popup__feature--${feature}`);
    featuresListContainer.querySelectorAll('.popup__feature').forEach((classItem) => {
      const modifier = classItem.classList[1];
      if (!modifiers.includes(modifier)) {
        classItem.remove();
      }
    });
  } else {
    featuresListContainer.remove();
  }
  //выводим описание
  advertisementElement.querySelector('.popup__description').textContent = currentItem.offer.description;
  if (advertisementElement.querySelector('.popup__description').textContent === undefined || advertisementElement.querySelector('.popup__description').textContent === '') {
    advertisementElement.querySelector('.popup__description').remove();
  }

  //выводим фотографии из списка offer.photos
  const photosContainer = advertisementElement.querySelector('.popup__photos');
  if (!currentItem.offer.photos) {
    photosContainer.remove();
  } else {
    const photoItemTemplate = photosContainer.querySelector('.popup__photo');
    const photosSrc = currentItem.offer.photos;
    photosContainer.children[0].remove();
    photosSrc.forEach((photoSrc) => {
      const photoItem = photoItemTemplate.cloneNode(true);
      photoItem.src = photoSrc;
      photosContainer.appendChild(photoItem);
    });
  }

  advertisementElement.querySelector('.popup__avatar').src = currentItem.author.avatar;

  return advertisementElement;
};

export {createAdvertisementElement};
