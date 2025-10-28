import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";


function createModal({img, name, price, description}){
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
`,{
  onShow: (instance) => {},
  onClose: (instance) => {},
});
instance.show();
}

export { createModal };