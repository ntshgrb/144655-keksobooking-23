import {getDisabledMode, getActiveMode} from './change-form-state.js';
import {createSimilarPlaces} from './create-similar-places.js';
import {createAdvertisementElement} from './create-advertisement-element.js';
import './user-form.js';

//сюда нужно вставить заполненный фрагмент
const mapCanvas = document.querySelector('#map-canvas');
//фрагмент, который будем заполнять и вставлять в разметку
const similarAdvertisementFragment = document.createDocumentFragment();
//создаем массив из 10 сгенерированных элементов
const similarPlaces = createSimilarPlaces();
//Создаем элемент на основе первого элемента массива
const advertisementElement = createAdvertisementElement(similarPlaces[0]);
similarAdvertisementFragment.appendChild(advertisementElement);
mapCanvas.appendChild(similarAdvertisementFragment);
getActiveMode();
getDisabledMode();
