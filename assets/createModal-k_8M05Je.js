import{b as A}from"./vendor-DaP2veRQ.js";const h={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"};function g(o,e){let t;o.length?(t=o.map(({id:i,img:n,name:s})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${n}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite">Add to favorite</button>
                    <button class="js-basket">Add to basket</button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=t):(t=`<li class="js-card">
                    <img src="img/no_img.png" alt="404" width="600">
                    </li>`,e.innerHTML=t)}function d(o){o.code==="Escape"&&this.close()}const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function m({img:o,name:e,price:t,description:i}){const n=A.create(`
	    <div class="modal">
            <div class="cross">
                 <img src=${l} alt="close">
            </div>
            <img src="${o}" alt="${e}" width="300">
            <h2>${e}</h2>
            <h3>${t}point</h3>
            <p>${i}</p>
              <div>
                  <button>Add to favorite</button>
                  <button>Add to basket</button>
              </div>
        </div>
`,{handler:null,onShow(a){console.log(this),this.handler=d.bind(a),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),s.removeEventListener("click",c)}});n.show();const s=document.querySelector(".cross");console.log(s),s.addEventListener("click",c);function c(){console.log("whoa!"),n.close()}}export{m as a,g as b,h as c};
//# sourceMappingURL=createModal-k_8M05Je.js.map
