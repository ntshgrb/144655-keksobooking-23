import {getDisabledMode, getActiveMode} from './change-form-state.js';
import {setMap, map} from './map.js';
import {getData} from './get-data-fetch.js';
import './user-form.js';
getDisabledMode();
map.on('load', () => {
  getActiveMode();
});
setMap();
getData();
