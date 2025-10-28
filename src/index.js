
import { instruments } from './instruments';
import { common } from './common';

const{ KEY_FAVORITE, KEY_BASKET }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
// console.log(instruments);

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');



const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
console.log( favoriteArr);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);



console.log(search);




list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target);
        console.log(product);
        const{img, name, price, description}=product
       createModal({img, name, price, description})
       
    }
    if(evt.target.classList.contains('js-favorite')){
        console.log(evt.target);
        const product = findProduct(evt.target);
        const inStorage = favoriteArr.some(({ id })=> id === product.id)
        if(inStorage){
            return
        }
        console.log(product);
        console.log(favoriteArr);
        favoriteArr.push(product);
        console.log(favoriteArr);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
    }


    if(evt.target.classList.contains('js-basket')){
        const product = findProduct(evt.target);
        const inStorage = basketArr.some(({ id })=> id === product.id)
        if(inStorage){
            return
        }
        console.log(product);
        basketArr.push(product);
        console.log(basketArr);
        localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
    }
    

}

createMarkup(instruments, list);

function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id)
    return instruments.find(({id}) => id === productId);
}