function renderAllProducts(products) {
  const isLoggedIn = localStorage.getItem("accessToken");
  const list = document.getElementById("all-products");

  list.innerHTML = products
    .map(
      (product) => /*HTML*/`
      <li class="shadow">
        <a href="product.html?id=${product.id}" class="reset">
          <img src="${product.image.url}" alt="${product.image.alt}" loading="lazy"/>
        </a>
        <div class="product-card-information">
          <h5 class="remove-default h5-ajustable">${product.title}</h5>
          <div class="price-section">
            <p class="remove-default highlight">${product.discountedPrice || product.price} kr</p>
            ${isLoggedIn
                ? /*HTML*/`
                <a href="cart.html?add=${product.id}" class="icon-image">
                <img src="./public/icons/cart-add.svg" alt="Add to cart" loading="lazy"/> 
                `
                : ''
            }
            </a>
          </div>
        </div>
      </li>
    `
    )
    .join("");
    
}



async function initProductList() {
  const products = await fetchProducts();
  renderAllProducts(products);
}

initProductList();