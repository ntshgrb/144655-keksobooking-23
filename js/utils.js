const ALERT_SHOW_TIME = 5000;

//Функция возвращает случайное целое число
const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return null;
};

//Функция возвращает случайное число с плавающей точкой
const getRandomFractional = (min, max, length) => {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return (+rand.toFixed(length));
  }
  return null;
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc' || evt.code === 27;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, getRandomFractional, isEscEvent, showAlert};
