import {isEscEvent} from './utils.js';

const messageSuccuss = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

//функция появления сообщения
const showMessage = (message) => {
  document.body.appendChild(message);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      message.remove();
    }
  });
  document.addEventListener('click', () => {
    message.remove();
  });
};

export {showMessage, messageSuccuss, messageError};

