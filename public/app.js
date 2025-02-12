const cart = document.getElementById("iconCart")
const cartItems = document.getElementById("item")
const addItem = document.getElementById('plus')
const removeItem = document.getElementById("minus")
const button = document.getElementById("btn-add")
const panier = document.querySelector(".item")
const cartContainer = document.querySelector(".cart-container")
// LOGIC
let cartItem = 0
cartItems.textContent = cartItem
panier.textContent = cartItem
function addToCart() {
    cartItem += 1
    cartItems.textContent = cartItem
    panier.textContent = cartItem
}
function removeToCart() {
    cartItem -= 1
    cartItems.textContent = cartItem
    panier.textContent = cartItem


}
cart.addEventListener("mouseover", () => {
    cartContainer.classList.remove("hidden")
    cartContainer.classList.add('visible')
})
cart.addEventListener("mouseout", () => {
    cartContainer.classList.remove("visible")
    cartContainer.classList.add('hidden')
})
addItem.addEventListener("click", addToCart)
removeItem.addEventListener('click', removeToCart)
button.addEventListener('click', addToCart)
