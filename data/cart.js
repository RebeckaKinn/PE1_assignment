

function addToCart(product){
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        discountedPrice: product.discountedPrice || null,
        image: product.image,
        quantity: 1
        });
    }
    localStorage.setItem("localCart", JSON.stringify(cart));
    const button = event.currentTarget;
    button.classList.add("added");
        setTimeout(() => {
        button.classList.remove("added");
    }, 1000);

     const icon = button.querySelector("img");
    const originalSrc = icon.src;

    icon.src = "./public/icons/check.svg"; 

    setTimeout(() => {
        icon.src = originalSrc; 
        icon.alt = "Add to cart";
    }, 1000);
}

function increaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    const item = cart.find(p => p.id === productId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem("localCart", JSON.stringify(cart));
        showCart(); 
    }
}

function decreaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    const item = cart.find(p => p.id === productId);

    if (item) {
        if (item.quantity > 1) {
        item.quantity -= 1;
        } else {
        const index = cart.findIndex(p => p.id === productId);
        cart.splice(index, 1);
        }
        localStorage.setItem("localCart", JSON.stringify(cart));
        showCart();
    }
}

function emptyCart() {
    localStorage.removeItem("localCart");
    showCart();
}