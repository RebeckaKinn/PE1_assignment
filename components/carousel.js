function renderTopProductsCarousel(products) {
  const track = document.getElementById("top-products"); 
  if(!products){
    track = showErrorMessage("There was a problem getting the products...");
  }
  track.innerHTML = products
    .map(
      (product, index) => /*HTML*/`
      <article>
        <div class="information">
          <h2>${product.title}</h2>
          <div>
            <a href="product.html?id=${product.id}" class="button red">view</a>
          </div>
        </div>
        <div class="product-image">
          <img src="${product.image.url}" alt="${product.image.alt || product.title}" class="shadow" loading="lazy">
        </div>
      </article>
    `
    )
    .join("");
}


async function initCarousel() {
  const topProducts = await fetchTopThreeProducts();
  renderTopProductsCarousel(topProducts);
}

initCarousel();