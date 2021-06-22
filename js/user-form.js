const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const adTitleInput = document.querySelector('#title');
const adPriceInput = document.querySelector('#price');

//Валидация поля названия
adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
});

//Валидация поля цены
adPriceInput.addEventListener('input', () => {
  const value = adPriceInput.value;
  if (value > MAX_PRICE) {
    adPriceInput.setCustomValidity(`Максимальная цена за ночь превышена на ${value - MAX_PRICE}руб.`);
  } else {
    adPriceInput.setCustomValidity('');
  }
  adPriceInput.reportValidity();
});

//Синхронизация поля «Количество комнат» и пол «Количество мест»
const roomNumberSelect = document.querySelector('#room_number');
const roomCapacitySelect = document.querySelector('#capacity');
if (roomNumberSelect.value === '1') {
  roomCapacitySelect.options[2].selected = true;
}
const syncRoomCapacity = () => {
  if (roomNumberSelect.value === '1' && roomCapacitySelect.value !== '1') {
    roomCapacitySelect.setCustomValidity('В одной комнате может разместиться только один постоялец');
  } else if (roomNumberSelect.value === '2' && roomCapacitySelect.value !== '1' && roomCapacitySelect.value !== '2') {
    roomCapacitySelect.setCustomValidity('Могут заселиться один или два постояльца');
  } else if (roomNumberSelect.value === '3' && roomCapacitySelect.value === '0') {
    roomCapacitySelect.setCustomValidity('Могут разместиться от одного до трех человек');
  } else if (roomNumberSelect.value === '100' && roomCapacitySelect.value !== '0') {
    roomCapacitySelect.setCustomValidity('Помещение не для проживания');
  } else {
    roomCapacitySelect.setCustomValidity('');
  }
  roomCapacitySelect.reportValidity();
};

roomNumberSelect.addEventListener('change', syncRoomCapacity);
roomCapacitySelect.addEventListener('change', syncRoomCapacity);
