import {SIMILAR_PLACE_COUNT, createPlaceNearby} from './create-place.js';

const similarPlace = new Array(SIMILAR_PLACE_COUNT).fill(null).map(() => createPlaceNearby());
similarPlace;
