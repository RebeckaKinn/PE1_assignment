function renderProduct(product) {
  if (!product) {
    document.getElementById("product-container").innerHTML = /*HTML*/`
        <p>Produkt ikke funnet</p>
    `;
    return;
  }

  document.getElementById("product-container").innerHTML = /*HTML*/`
    <h1>${product.title}</h1>
    <div>
      <img src="${product.image.url}" alt="${product.image.alt}" loading="lazy"/>
    </div>
    <p>${product.discountedPrice || product.price} kr</p>
    <p>${product.description}</p>
  `;
}

async function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id"); 

  if (!productId) return;

  const product = await fetchProductById(productId);
  renderProduct(product);
}

initProductPage();