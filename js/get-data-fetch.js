import {createMarkers} from './map.js';
import {showAlert} from './utils.js';
const DATA_SOURCE = 'https://23.javascript.pages.academy/keksobooking/data';
const SIMILAR_PLACE_COUNT = 10;
const getData = () => {
  fetch(DATA_SOURCE)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      createMarkers(json.slice(0, SIMILAR_PLACE_COUNT));
    })
    .catch((err) => {
      showAlert(err);
    });
};

export {getData};
