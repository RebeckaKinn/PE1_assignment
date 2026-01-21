document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("delivery-form");
    form.addEventListener("submit", checkout);
    checkoutItems(); 
});
function checkoutItems(){
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    const total = cart.reduce((sum, item) => {
        const price = item.discountedPrice || item.price;
        return sum + price * item.quantity;
    }, 0);
    const totalSum = total.toFixed(2);
    document.getElementById('checkoutItems').innerHTML = /*HTML*/`
            <div class="cart-items-container">${showCheckoutItems(cart)}</div>
            <div class="txt-space-evenly">
                <p class="h5">total</p>
                <p class="h5">${totalSum} kr</p>
            </div>   
    `;
}

function showCheckoutItems(cart){
    return cart
    .map(
      (item) => /*HTML*/`
        <div class="cart-item">
            <div class="item-image">
                <img src="${item.image.url}" alt="${item.image.alt}"/>
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
                        <p class="remove-default highlight">${item.quantity}</p>
                    </div>
                </div>
          </div>
        </div>
      `
    )
    .join("");
}


