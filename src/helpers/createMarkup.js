function createMarkup(arr, list){
    // console.log(arr.length);
    let markup;
    if(arr.length){
        markup =  arr.map(({id, img, name})=>`
                    <li data-id=${id} class="card js-card">
                    <img src="${img}" alt="${name}" width="300">
                    <h2>${name}</h2>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite">Add to favorite</button>
                    <button class="js-basket">Add to basket</button>
                    </div>
                    </li>
                    `).join('');
                list.innerHTML = markup;
    }else{
        markup =   `<li class="js-card">
                    <img src="img/no_img.png" alt="404" width="600">
                    </li>`
                list.innerHTML = markup;
    }
};

export { createMarkup };

// const arr02 = [];
// console.log(arr02.length);