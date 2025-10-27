import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { instruments } from './instruments';
console.log(instruments);

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const KEY_FAVORITE = 'favorite';
const KEY_BASKET = 'basket';

const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];



console.log(search);

function createMarkup(arr){
    const markup = arr.map(({id, img, name})=>`<li data-id=${id} class="js-card">
          <img src="${img}" alt="${name}" width="300">
            <h2>${name}</h2>
                <p><a href="#" class="js-info">More Information</a></p>
            <div>
                <button class="js-favorite">Add to favorite</button>
                <button class="js-basket">Add to basket</button>
            </div>
        </li>`).join('');
        list.innerHTML = markup;
};


list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target);
        console.log(product);
        const{img, name, price, description}=product
        const instance = basicLightbox.create(`
	    <div class="modal">
            <img src="${img}" alt="${name}" width="300">
            <h2>${name}</h2>
            <h3>${price}point</h3>
            <p>${description}</p>
              <div>
                  <button>Add to favorite</button>
                  <button>Add to basket</button>
              </div>
        </div>
`);
instance.show();
    }
    if(evt.target.classList.contains('js-basket')){
        const product = findProduct(evt.target);
        console.log(product);
        basketArr.push(product);
        localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
    }
    if(evt.target.classList.contains('js-favorite')){
        const product = findProduct(evt.target);
        console.log(product);
        favoriteArr.push(product);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
    }

}

createMarkup(instruments);

function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id)
    return instruments.find(({id}) => id === productId);
}