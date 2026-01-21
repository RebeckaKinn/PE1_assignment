function checkout(event) {
    const message = document.getElementById("message");
    event.preventDefault();

    const cart = JSON.parse(localStorage.getItem("localCart")) || [];
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => {
        const price = item.discountedPrice || item.price;
        return sum + price * item.quantity;
    }, 0).toFixed(2);

    const deliveryInfo = {
        name: document.getElementById("name").value,
        address: document.getElementById("adress").value,
        zip: document.getElementById("zip").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("number").value,
    };
    
    if (!isValidInfo(deliveryInfo)) {
         message.textContent = "Please fill in all fields before continuing.";
         message.style.color = "red";
        return;
     }

    const paymentMethod = document.querySelector(
        'input[name="payment-method"]:checked'
    )?.id;

     if (!paymentMethod) {
         message.textContent = "Please select a payment method.";
         message.style.color = "red";
         return;
     }

    const order = {
        id: Math.random()*500,
        date: new Date().toISOString(),
        items: cart,
        total,
        deliveryInfo,
        paymentMethod,
    };

    saveSingleOrder(order);
    localStorage.removeItem("localCart");
    window.location.href = "../success.html";
    console.log("orders: ", getOrders());
}

function isValidInfo(deliveryInfo) {
    return Object.values(deliveryInfo).every(value => value.trim() !== "");
}

function saveSingleOrder(order) {
    localStorage.setItem("orders", JSON.stringify([order]));
}
function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}