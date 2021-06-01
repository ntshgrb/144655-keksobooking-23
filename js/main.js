//Функция возвращает случайное целое число
function getRandomInteger(min, max) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return null;
}

getRandomInteger(3, 23);

//Функция возвращает случайное число с плавающей точкой
function getRandomFractional(min, max, length) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return (+rand.toFixed(length));
  }
  return null;
}

getRandomFractional(20, 546, 7);
