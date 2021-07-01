import './change-form-state.js';
import {createSimilarPlaces} from './create-similar-places.js';
import {createMarkers} from './map.js';
import './user-form.js';
const similarPlaces = createSimilarPlaces();
createMarkers(similarPlaces);
