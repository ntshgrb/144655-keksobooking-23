import {getDisabledMode, getActiveMode, getActiveFilter} from './change-form-state.js';
import {createMarkers, setMap} from './map.js';
import {getData} from './fetch.js';
import './user-form.js';
//куда как?
// const SIMILAR_PLACE_COUNT = 10;
// createMarkers(json.slice(0, SIMILAR_PLACE_COUNT));
getDisabledMode();
setMap(getActiveMode);
const promise = new Promise (() => {
  getData(createMarkers);
});
promise.then (
  getActiveFilter());
//???
// getData(createMarkers);
// getActiveFilter();
