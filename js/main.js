import {setDisabledMode, setActiveMode, setActiveFilter} from './change-form-state.js';
import {createMarkers, setMap} from './map.js';
import {getData} from './fetch.js';
import{showAlert} from './show-alert.js';
import './user-form.js';

const SIMILAR_PLACES_COUNT = 10;

setDisabledMode();
setMap(() => {
  setActiveMode();
  getData((json) => {
    createMarkers(json.slice(0, SIMILAR_PLACES_COUNT));
    setActiveFilter();
  }, (error) => showAlert(error));
});
