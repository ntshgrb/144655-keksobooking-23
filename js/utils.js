
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

export {getRandomInteger, getRandomFractional};
