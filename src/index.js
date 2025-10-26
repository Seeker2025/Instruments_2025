import { instruments } from './instruments';
console.log(instruments);

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

console.log(search);

function createMarkup(arr){
    const markup = arr.map(({id, img, name})=>`<li data-id=${id} class="js-card">
          <img src="${img}" alt="${name}" width="300">
            <h2>${name}</h2>
                <p><a href="#" class="js-info">More Information</a></p>
            <div>
                <button>Add to favorite</button>
                <button>Add to basket</button>
            </div>
        </li>`).join('');
        list.innerHTML = markup;
};


list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
        const {id} = evt.target.closest('.js-card').dataset
        console.log(id);
        const product = findProduct(Number(id));
        console.log(product);
    }

}

createMarkup(instruments);

function findProduct(productId){
    return instruments.find(({id}) => id === productId);
}