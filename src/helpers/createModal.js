import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { closeMadal } from './closeModal';


function createModal({img, name, price, description}){
//   const option = {
//     handler: null,
//     onShow(instance){
//       console.log(this);
//       this.handler = closeMadal.bind(instance);
//     document.addEventListener('keydown', closeModal);
//   },
//   onClose(){
//      console.log(this);
//   },
  
// };

  
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
`, {
    handler: null,
    onShow(instance){
      console.log(this);
      this.handler = closeMadal.bind(instance);
    document.addEventListener('keydown', this.handler);
  },
  onClose(){
     console.log(this);
     document.removeEventListener('keydown', this.handler);
  },
  
});
instance.show();
// function closeMadal(evt){
//     if(evt.code === 'Escape'){
//       instance.close();
//     }
// }

}



export { createModal };