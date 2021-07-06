import {showAlert} from './show-alert.js';
import {showMessage, messageSuccuss, messageError} from './popup.js';
const DATA_SOURCE = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://23.javascript.pages.academy/keksobooking';

const getData = (useData) => {
  fetch(DATA_SOURCE)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      useData(json);
    })
    .catch((err) => {
      showAlert(err);
    });
};

const sendData = (data, reset) => {
  fetch(
    SERVER,
    {
      method: 'POST',
      body: data,
    },
  )
    .then(() => reset())
    .then(() => showMessage(messageSuccuss))
    .catch(() => {
      showMessage(messageError);
    });
};

export {getData, sendData};
