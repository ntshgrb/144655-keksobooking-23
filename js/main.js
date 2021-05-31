function getRandomInteger(min, max) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  alert ('Ошибка');
}

function getRandomFractional(min, max, length) {
  if (min >= 0 && max > min) {
    const rand = min + Math.random() * (max + 1 - min);
    return (+rand.toFixed(length));
  }
  alert ('Ошибка');
}
