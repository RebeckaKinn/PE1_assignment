let allProducts = [];
function renderAllProducts(products) {
  const isLoggedIn = localStorage.getItem("accessToken");
  const list = document.getElementById("all-products");


  list.innerHTML = products
    .map(
      (product) => /*HTML*/`
      <li class="shadow">
        <a href="product.html?id=${product.id}" class="reset">
          <img src="${product.image.url}" alt="${product.image.alt || product.title}" loading="lazy"/>
        </a>
        <div class="product-card-information">
          <h5 class="remove-default h5-ajustable">${product.title}</h5>
          <div class="price-section">
            <p class="remove-default highlight">${product.discountedPrice || product.price} kr</p>
            ${isLoggedIn
                ? /*HTML*/`
                <button class="reset icon-image" aria-label="Add to cart" onclick="addToCartById('${product.id}')">
                  <img src="./public/icons/cart-add.svg" alt="Add to cart" loading="lazy"/>
                </button> 
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
  allProducts = await fetchProducts();
  renderAllProducts(allProducts);
}

function addToCartById(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  addToCart(product);
}

initProductList();