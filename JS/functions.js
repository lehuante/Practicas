//console.log(iconRemove)




const cartIcon = document.querySelector(".header__img--cartIcon");
const cart = document.querySelector(".main__section--cartmain");
//console.log(cartIcon);

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const closeCart = cart.firstElementChild;
closeCart.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const menuIcon = document.querySelector(".header__img--menu");
const menu = document.querySelector (".main__section--menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});
const closeMenu = menu.firstElementChild;
closeMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
})
const iconRemove = document.querySelectorAll(".remove");

const addToCart = document.querySelectorAll(".addCartButton");
const cartProducts = document.querySelector(".main__section--cart");

addToCart[0].addEventListener ("click", () => {
        const padre = addToCart[0].parentElement;
        const newElem = document.createElement("div");
        newElem.setAttribute ("class","cartProd");
        cartProducts.append (newElem);
        const imagen = padre.firstElementChild;
        const imagenClon = imagen.cloneNode (false);
        newElem.append (imagenClon);
        const concept = imagen.nextElementSibling;
        const conceptClon = concept.cloneNode (true);
        newElem.append(conceptClon);
        const price = padre.lastElementChild;
        const priceClon = price.cloneNode(true);
        newElem.append(priceClon);
        const iconRemove = document.querySelectorAll(".remove");
        newElem.append(iconRemove);
         })

         addToCart[1].addEventListener ("click", () => {
            const padre = addToCart[1].parentElement;
            const newElem = document.createElement("div");
            newElem.setAttribute ("class","cartProd");
            cartProducts.append (newElem);
            const imagen = padre.firstElementChild;
            const imagenClon = imagen.cloneNode (false);
            newElem.append (imagenClon);
            const concept = imagen.nextElementSibling;
            const conceptClon = concept.cloneNode (true);
            newElem.append(conceptClon);
            const price = padre.lastElementChild;
            const priceClon = price.cloneNode(true);
            newElem.append(priceClon);
            const iconRemove = document.querySelectorAll(".remove");
            newElem.append(iconRemove);
             })

             addToCart[2].addEventListener ("click", () => {
                const padre = addToCart[2].parentElement;
                const newElem = document.createElement("div");
                newElem.setAttribute ("class","cartProd");
                cartProducts.append (newElem);
                const imagen = padre.firstElementChild;
                const imagenClon = imagen.cloneNode (false);
                newElem.append (imagenClon);
                const concept = imagen.nextElementSibling;
                const conceptClon = concept.cloneNode (true);
                newElem.append(conceptClon);
                const price = padre.lastElementChild;
                const priceClon = price.cloneNode(true);
                newElem.append(priceClon);
                const iconRemove = document.querySelectorAll(".remove");
                newElem.append(iconRemove);
                 })
                 addToCart[3].addEventListener ("click", () => {
                    const padre = addToCart[3].parentElement;
                    const newElem = document.createElement("div");
                    newElem.setAttribute ("class","cartProd");
                    cartProducts.append (newElem);
                    const imagen = padre.firstElementChild;
                    const imagenClon = imagen.cloneNode (false);
                    newElem.append (imagenClon);
                    const concept = imagen.nextElementSibling;
                    const conceptClon = concept.cloneNode (true);
                    newElem.append(conceptClon);
                    const price = padre.lastElementChild;
                    const priceClon = price.cloneNode(true);
                    newElem.append(priceClon);
                    const iconRemove = document.querySelectorAll(".remove");
                    newElem.append(iconRemove);
                     })
                     addToCart[4].addEventListener ("click", () => {
                        const padre = addToCart[4].parentElement;
                        const newElem = document.createElement("div");
                        newElem.setAttribute ("class","cartProd");
                        cartProducts.append (newElem);
                        const imagen = padre.firstElementChild;
                        const imagenClon = imagen.cloneNode (false);
                        newElem.append (imagenClon);
                        const concept = imagen.nextElementSibling;
                        const conceptClon = concept.cloneNode (true);
                        newElem.append(conceptClon);
                        const price = padre.lastElementChild;
                        const priceClon = price.cloneNode(true);
                        newElem.append(priceClon);
                        const iconRemove = document.querySelectorAll(".remove");
                        newElem.append(iconRemove);
                         })

         

iconRemove.forEach (elem => { 
        elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        // console.log(padre);
        padre.remove();
        })
})   

const contador = document.getElementById("cartCont");
console.log(contador);
contador.innerHTML = cartProducts.childElementCount;
console.log(cartProducts.childElementCount);

