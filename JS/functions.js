const cartIcon = document.querySelector(".header__img--cartIcon");
const cart = document.querySelector(".main__section--cartmain");
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const closeCart = cart.firstElementChild;
const checkOut = document.querySelector(".chekcoutButton");
closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
});
checkOut.addEventListener("click", () => {
    cart.classList.remove("show");
});

const menuIcon = document.querySelector(".header__img--menu");
const menu = document.querySelector (".main__section--menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});
const closeMenu = menu.firstElementChild;
closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");})


const iconRemove = document.querySelectorAll(".main__cart--removeicon");  
const contador = document.getElementById("cartCont");   
const cartProducts = document.querySelector(".main__section--cart"); 
const addButton = document.querySelectorAll(".addCartButton");
const lastProd = document.querySelector(".last_cartProd");
//console.log(trashCan);

contador.innerHTML = cartProducts.childElementCount;

iconRemove.forEach (elem => { 
    elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        padre.remove();
        contador.innerHTML = cartProducts.childElementCount;
    })

})

addButton.forEach (elem => {
    elem.addEventListener("click", () => {
        const padre = elem.parentElement;
        const pic = padre.firstElementChild;
        const concepto = pic.nextElementSibling.innerText;
        const precio = padre.lastElementChild.innerText;
        const trashCan = iconRemove[0].cloneNode(false);
        console.log(trashCan);
        console.log(padre);
        console.log(pic);
        console.log(concepto);
        console.log(precio);
        const newSlot = document.createElement("div");
        const newPic = pic.cloneNode(false);
        const newConcepto = document.createElement("p");
        newConcepto.innerText = concepto;
        const newPrecio = document.createElement("p");
        newPrecio.innerText = precio;
        newSlot.appendChild(newPic);
        newSlot.appendChild(newConcepto);
        newSlot.appendChild(newPrecio);
        newSlot.appendChild(trashCan);
        cartProducts.appendChild(newSlot);  
        contador.innerHTML = cartProducts.childElementCount;
        trashCan.addEventListener("click", () => {
            console.log("oprimi borrar")
            trashCan.parentElement.remove();
            contador.innerHTML = cartProducts.childElementCount;
        })
    } )
})



