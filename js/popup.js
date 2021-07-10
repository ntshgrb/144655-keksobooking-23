import {isEscEvent} from './utils.js';

const messageSuccuss = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const messageErrorText =messageError.querySelector('.error__message');
const messageErrorButton = messageError.querySelector('.error__button');

const showMessageSuccess = () => {
  document.body.appendChild(messageSuccuss);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      messageSuccuss.remove();
    }
  });
  document.addEventListener('click', () => {
    messageSuccuss.remove();
  });
};

const showMessageError = (message) => {
  messageErrorText.textContent = message;
  document.body.appendChild(messageError);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      messageError.remove();
    }
  });
  messageErrorButton.addEventListener('click', () => {
    messageError.remove();
  });
  document.addEventListener('click', () => {
    messageError.remove();
  });
};

export {showMessageSuccess, showMessageError};

