import {setDisabledMode, setActiveMode, setActiveFilter} from './change-form-state.js';
import {setMap, renderPlaces, removePlaces} from './map.js';
import {getData} from './fetch.js';
import {showAlert} from './show-alert.js';
import './user-form.js';
import {setFilterFormChange, setFilterPlaces} from './filter.js';
import {debounce} from './utils/debounce.js';

setDisabledMode();
setMap(() => {
  setActiveMode();
  getData((places) => {
    renderPlaces(places);
    setFilterFormChange(() => {
      const filteredPlaces = setFilterPlaces(places);
      removePlaces();
      debounce(() => renderPlaces(filteredPlaces));
    });
    setActiveFilter();
  }, (error) => showAlert(error));
});
