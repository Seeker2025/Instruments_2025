console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';


const list = document.querySelector('.js-list');
console.log(list);
const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
console.log(favorite);

createMarkup(favorite,list);

list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target);
        console.log(product);
        const{img, name, price, description}=product
       createModal({img, name, price, description})
       
    }
}

function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id)
    return favorite.find(({id}) => id === productId);
}
