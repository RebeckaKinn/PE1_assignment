showCart();
function showCart(){
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    document.getElementById('cart').innerHTML = /*HTML*/`
        ${cart.length == 0 ? /*HTML*/`
            <section>
                <h5>oops!</h5>
                <p class="h5">Looks like your cart is empty.</p>
                <a href="../index.html" class="button">continue shopping</a>
            </section>
            ` 
            : /*HTML*/`
            <section>
                ${showCartItems(cart)}
            </section>
            <section>
                <div>
                    <p class="h5">total</p>
                    <p class="h5"></p>
                </div>
                <div class="button-container">
                    <a class="button border" href="../index.html">exit</a>
                    <a class="button" href="../checkout.html">continue</a>
                </div>
            </section>
            `
        }
    `;
}

function showCartItems(cartItems){
    return cartItems
    .map(
      (item) => /*HTML*/`
        <div class="cart-item shadow">
          <img src="${item.image.url}" alt="${item.image.alt}"/>
          <div>
            <h5>${item.title}</h5>
                <div>
                    <p>price:</p>
                    <p class="h5">${item.discountedPrice || item.price} kr</p>
                </div>
                <div>
                    <p>qty:</p>
                    <div>
                        <button onclick="decreaseQuantity('${item.id}')">-</button>
                        <p>${item.quantity}</p>
                        <button onclick="increaseQuantity('${item.id}')">+</button>
                    </div>
                </div>
          </div>
        </div>
      `
    )
    .join("");
}