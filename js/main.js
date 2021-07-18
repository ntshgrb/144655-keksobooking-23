import {setDisabledMode, setActiveMode, setActiveFilter} from './change-form-state.js';
import {setMap, renderPlaces, removePlaces} from './map.js';
import {getData} from './fetch.js';
import {showAlert} from './show-alert.js';
import './user-form.js';
import {setFilterFormChange, setFilterPlaces} from './filter.js';
import {debounce} from './debounce.js';

setDisabledMode();
setMap(() => {
  setActiveMode();
  getData((places) => {
    renderPlaces(places);
    setFilterFormChange(debounce(() => {
      removePlaces();
      renderPlaces(setFilterPlaces(places));
    }));
    setActiveFilter();
  }, (error) => showAlert(error));
});
