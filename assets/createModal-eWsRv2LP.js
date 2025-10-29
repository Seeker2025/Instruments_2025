import{b as a}from"./vendor-DaP2veRQ.js";const l={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"};function r(t,n){let o;t.length?(o=t.map(({id:i,img:e,name:s})=>`
                    <li data-id=${i} class="js-card">
                    <img src="${e}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    <p><a href="#" class="js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite">Add to favorite</button>
                    <button class="js-basket">Add to basket</button>
                    </div>
                    </li>
                    `).join(""),n.innerHTML=o):(o=`<li class="js-card">
                    <img src="img/no_img.png" alt="404" width="600">
                    </li>`,n.innerHTML=o)}function d(t){t.code==="Escape"&&this.close()}function h({img:t,name:n,price:o,description:i}){a.create(`
	    <div class="modal">
            <img src="${t}" alt="${n}" width="300">
            <h2>${n}</h2>
            <h3>${o}point</h3>
            <p>${i}</p>
              <div>
                  <button>Add to favorite</button>
                  <button>Add to basket</button>
              </div>
        </div>
`,{handler:null,onShow(s){console.log(this),this.handler=d.bind(s),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler)}}).show()}export{h as a,r as b,l as c};
//# sourceMappingURL=createModal-eWsRv2LP.js.map
