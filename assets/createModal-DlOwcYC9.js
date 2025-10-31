import{b as A}from"./vendor-DaP2veRQ.js";import{t as g,a as h}from"./favorite-BhpQCuI3.js";function b(t,s){let o;t.length?(o=t.map(({id:i,img:n,name:e})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${n}" alt="${e}" width="300">
                    <h2>${e}</h2>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite">Add to favorite</button>
                    <button class="js-basket">Add to basket</button>
                    </div>
                    </li>
                    `).join(""),s.innerHTML=o):(o=`<li class="js-card">
                    <img src="img/no_img.png" alt="404" width="600">
                    </li>`,s.innerHTML=o)}function m(t){t.code==="Escape"&&this.close()}const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function k({img:t,name:s,price:o,description:i,id:n}){console.log(n);const e=A.create(`
	    <div class="modal js-card" data-id=${n}>
            <div class="cross">
                 <img src=${u} alt="close">
            </div>
            <img src="${t}" alt="${s}" width="300">
            <h2>${s}</h2>
            <h3>${o}point</h3>
            <p>${i}</p>
              <div>
                  <button class="js-favorite">Add to favorite</button>
                  <button class="js-basket">Add to basket</button>
              </div>
        </div>
`,{handler:null,onShow(a){console.log(this),this.handler=m.bind(a),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),c.removeEventListener("click",l)}});e.show();const c=document.querySelector(".cross");console.log(c),c.addEventListener("click",l);function l(){console.log("whoa!"),e.close()}const d=document.querySelector(".modal");console.log(d),d.addEventListener("click",r);function r(a){a.target.classList.contains("js-favorite")&&(console.log("Hi",a.target),g(a.target))}evt.target.classList.contains("js-basket")&&h(evt.target)}export{b as a,k as c};
//# sourceMappingURL=createModal-DlOwcYC9.js.map
