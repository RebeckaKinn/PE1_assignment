showCart();
function showCart(){
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    const isLoggedIn = localStorage.getItem("accessToken");
    if(!isLoggedIn){
        document.getElementById('cart').innerHTML = showErrorMessageWithButton("oops!", "You need to be logged in to view your cart.", "/account/login.html", "log in");
        return;
    }
    document.getElementById('cart').innerHTML = /*HTML*/`
        ${cart.length == 0 ? 
            showErrorMessageWithButton("oops!", "Looks like your cart is empty.", "../index.html", "continue shopping")
            : /*HTML*/`
            <section class="center gap-1rem">
                <h1 class="h2">my cart</h1>
                <button class="button red" onclick="emptyCart()">empty cart</button>
            </section>
            <div class="cart-items-container">
                ${showCartItems(cart)}
            </div>
            <div>
                <div class="txt-space-evenly">
                    <p class="h5">total</p>
                    <p class="h5">${getCartTotal(cart)} kr</p>
                </div>
                <div class="button-container">
                    <a class="button border" href="../index.html">exit</a>
                    <a class="button" href="../checkout.html">continue</a>
                </div>
            </div>
            `
        }
    `;
}

function getCartTotal(cart) {
    const total = cart.reduce((sum, item) => {
        const price = item.discountedPrice || item.price;
        return sum + price * item.quantity;
    }, 0);

    return total.toFixed(2);
}

function showCartItems(cartItems){
    return cartItems
    .map(
      (item) => /*HTML*/`
        <div class="cart-item">
            <div class="item-image">
                <img src="${item.image.url}" alt="${item.image.alt || item.title}" loading="lazy">
            </div>
          <div class="cart-information">
            <h5 class="remove-default">${item.title}</h5>
                <div class="txt-space-evenly">
                    <p class="remove-default">price:</p>
                    <p class="remove-default highlight">${item.discountedPrice || item.price} kr</p>
                </div>
                <div class="txt-space-evenly">
                    <p class="remove-default">qty:</p>
                    <div class="button-container">
                        <button class="round-button" onclick="decreaseQuantity('${item.id}')">-</button>
                        <p class="remove-default highlight">${item.quantity}</p>
                        <button class="round-button" onclick="increaseQuantity('${item.id}')">+</button>
                    </div>
                </div>
          </div>
        </div>
      `
    )
    .join("");
}