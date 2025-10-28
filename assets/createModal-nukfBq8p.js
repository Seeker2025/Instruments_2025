import{b as e}from"./vendor-DaP2veRQ.js";const d={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"};function r(a,o){let t;a.length?(t=a.map(({id:s,img:n,name:i})=>`<li data-id=${s} class="js-card">
          <img src="${n}" alt="${i}" width="300">
            <h2>${i}</h2>
                <p><a href="#" class="js-info">More Information</a></p>
            <div>
                <button class="js-favorite">Add to favorite</button>
                <button class="js-basket">Add to basket</button>
            </div>
        </li>`).join(""),o.innerHTML=t):(t=`<li class="js-card">
          <img src="img/no_img.png" alt="404" width="600">
          </li>`,o.innerHTML=t)}function l({img:a,name:o,price:t,description:s}){e.create(`
	    <div class="modal">
            <img src="${a}" alt="${o}" width="300">
            <h2>${o}</h2>
            <h3>${t}point</h3>
            <p>${s}</p>
              <div>
                  <button>Add to favorite</button>
                  <button>Add to basket</button>
              </div>
        </div>
`,{onShow:i=>{},onClose:i=>{}}).show()}export{l as a,r as b,d as c};
//# sourceMappingURL=createModal-nukfBq8p.js.map
