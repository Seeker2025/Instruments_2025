console.log('check');
console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';


const list = document.querySelector('.js-list');
console.log(list);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);