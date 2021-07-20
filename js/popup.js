import {isEscEvent} from './utils.js';

const messageSuccuss = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const messageErrorText = messageError.querySelector('.error__message');
const messageErrorButton = messageError.querySelector('.error__button');

const showMessageSuccess = () => {
  document.body.appendChild(messageSuccuss);
  const keydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      messageSuccuss.remove();
      document.removeEventListener('keydown', keydownHandler);
    }
  };
  document.addEventListener('keydown', keydownHandler);
  messageSuccuss.addEventListener('click', () => {
    messageSuccuss.remove();
    document.removeEventListener('keydown', keydownHandler);
  });
};

const showMessageError = (message) => {
  messageErrorText.textContent = message;
  document.body.appendChild(messageError);
  const keydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      messageError.remove();
      document.removeEventListener('keydown', keydownHandler);
    }
  };
  document.addEventListener('keydown', keydownHandler);
  messageErrorButton.addEventListener('click', () => {
    messageError.remove();
    document.removeEventListener('keydown', keydownHandler);
  });
  messageError.addEventListener('click', () => {
    messageError.remove();
    document.removeEventListener('keydown', keydownHandler);
  });
};

export {showMessageSuccess, showMessageError};
