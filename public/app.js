const cart = document.getElementById("iconCart")
const cartItems = document.getElementById("item")
const addItem = document.getElementById('plus')
const removeItem = document.getElementById("minus")
const button = document.getElementById("btn-add")
const panier = document.querySelector(".item")
const cartContainer = document.querySelector(".cart-container")
const cartContent = document.getElementById("cartContent")
// LOGIC
let cartItem = 0
// Valeur dans le bouton plus et moins
cartItems.textContent = cartItem
// Valeur dans l'icone panier
panier.textContent = cartItem
cartContent.textContent = 'Your cart is empty'

// Ajouter
function addToCart(e) {
    cartItem += 1
    cartItems.textContent = cartItem
    panier.textContent = cartItem
    if (cartItem > 0) {
        cartContent.innerHTML = `

        <div>
            <img src='./images/image-product-1-thumbnail.jpg'/>
         
        </div>
        <div>
           <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 *   ${cartItem} <span class='font-bold'>$${125.00 * cartItem}</span></p>
        </div>
        
        

        `
    } else {
        cartContent.innerHTML = `<div>Your cart is empty</div>`
    }


}
// Diminuer
function removeToCart() {
    if (cartItem > 0) {
        cartItem -= 1;
        updateCartDisplay();
    }


}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    cartItems.textContent = cartItem;
    panier.textContent = cartItem;

    // cartContainer.textContent = ? "Your cart is filled" : "Your cart is empty";
}
// 
cart.addEventListener("mouseover", () => {
    cartContainer.classList.remove("hidden")
    cartContainer.classList.add('visible')
})
cart.addEventListener("mouseout", () => {
    cartContainer.classList.remove("visible")
    cartContainer.classList.add('hidden')
})
// 
addItem.addEventListener("click", addToCart)
removeItem.addEventListener('click', removeToCart)
button.addEventListener('click', addToCart)
