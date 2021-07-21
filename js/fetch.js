const DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://23.javascript.pages.academy/keksobooking';
const SERVER_ERROR_FROM = 500;
const SERVER_ERROR_TO = 505;

const getData = (onSuccess, onFail) => {
  fetch(DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onFail(`Ошибка загрузки данных ${err}`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else if (response.status >= SERVER_ERROR_FROM && response.status <= SERVER_ERROR_TO) {
        onFail('Произошла ошибка на сервере. Попробуйте ещё раз');
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
