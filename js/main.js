import {getDisabledMode, getActiveMode} from './change-form-state.js';
import {CreateSimilarPlaces} from './create-similar-places.js';
import {setMap, map, createMarkers} from './map.js';
import './user-form.js';
getDisabledMode();
map.on('load', () => {
  getActiveMode();
});
setMap();
const similarPlaces = CreateSimilarPlaces();
createMarkers(similarPlaces);
