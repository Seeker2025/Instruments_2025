console.log('check');
console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET } = common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { toFavorite } from './helpers/favoriteFun';


const list = document.querySelector('.js-list');
console.log(list);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);

createMarkup(basketArr, list);
const btnBasket = document.querySelector('.js-basket');
    console.log(btnBasket);
    btnBasket.disabled = true;
    btnBasket.classList.add('red')

list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target);
        console.log(product);
        const{img, name, price, description} = product
       createModal({img, name, price, description})
       
    }
    if(evt.target.classList.contains('js-favorite')){
        console.log(evt.target);
        toFavorite(evt.target)
    }
   
    
}

// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return basketArr.find(({id}) => id === productId);
// }