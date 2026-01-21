orderSummary();
function orderSummary(){
    const orderInformation = getOrders();
    const lastOrder = orderInformation[orderInformation.length - 1];
    if (!lastOrder) return;

    const total = lastOrder.items.reduce((sum, item) => {
        const price = item.discountedPrice || item.price;
        return sum + price * item.quantity;
    }, 0).toFixed(2);
    document.getElementById('order-summary').innerHTML = /*HTML*/`
        <h2 class="main-color-2">order summary</h2>
            <ul class="summary-grid">
                <li>
                    <span class="button-text">item</span>
                    <span class="button-text">price</span>
                    <span class="button-text">qty</span>
                    <span class="button-text">sum</span>
                </li>
                ${orderSummaryInformation(lastOrder.items)}
            </ul>
            <div class="txt-space-evenly">
                <p class="h5">total</p>
                <p class="h5">${total} kr</p>
            </div>
    `;
}

function orderSummaryInformation(items) {
    return items.map(item => /*HTML*/`
        <li>
            <span class="button-text">${item.title}</span>
            <span class="button-text">${item.discountedPrice || item.price}</span>
            <span class="button-text">${item.quantity}</span>
            <span class="button-text">${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}</span>
        </li>
    `).join('');
}

