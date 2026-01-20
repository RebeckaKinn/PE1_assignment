function showCart(){
    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
}

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
    console.log("cart:", cart);
}