import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{b as l}from"./assets/vendor-DaP2veRQ.js";const r=[{id:1,img:"./img/in01.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:"./img/in02.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:"./img/in03.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:"./img/in04.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:"./img/in05.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:"./img/in06.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:"./img/in07.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:"./img/in08.jpg",name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:"./img/in09.jpg",name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:"./img/in10.jpg",name:"Лобзик електричний",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}];console.log(r);const u=document.querySelector(".js-search"),p=document.querySelector(".js-list"),d="favorite",g="basket",c=JSON.parse(localStorage.getItem(d))??[],a=JSON.parse(localStorage.getItem(g))??[];console.log(u);function f(t){const i=t.map(({id:o,img:n,name:s})=>`<li data-id=${o} class="js-card">
          <img src="${n}" alt="${s}" width="300">
            <h2>${s}</h2>
                <p><a href="#" class="js-info">More Information</a></p>
            <div>
                <button class="js-favorite">Add to favorite</button>
                <button class="js-basket">Add to basket</button>
            </div>
        </li>`).join("");p.innerHTML=i}p.addEventListener("click",j);function j(t){if(t.preventDefault(),t.target.classList.contains("js-info")){const i=e(t.target);console.log(i);const{img:o,name:n,price:s,description:m}=i;l.create(`
	    <div class="modal">
            <img src="${o}" alt="${n}" width="300">
            <h2>${n}</h2>
            <h3>${s}point</h3>
            <p>${m}</p>
              <div>
                  <button>Add to favorite</button>
                  <button>Add to basket</button>
              </div>
        </div>
`).show()}if(t.target.classList.contains("js-basket")){const i=e(t.target);console.log(i),a.push(i),localStorage.setItem(g,JSON.stringify(a))}if(t.target.classList.contains("js-favorite")){const i=e(t.target);console.log(i),c.push(i),localStorage.setItem(d,JSON.stringify(c))}}f(r);function e(t){const i=Number(t.closest(".js-card").dataset.id);return r.find(({id:o})=>o===i)}
//# sourceMappingURL=index.js.map
