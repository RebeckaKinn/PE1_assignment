async function renderProduct(product) {
    const highestRating = await getHighestRating();
  if (!product) {
    document.getElementById("product-container").innerHTML = /*HTML*/`
        <p>Produkt ikke funnet</p>
    `;
    return;
  }

  document.getElementById("product-container").innerHTML = /*HTML*/`
    <section class="single-product-container">
        <div>
            <img src="${product.image.url}" alt="${product.image.alt}" loading="lazy"/>
        </div>

        <div>
            <h3>${product.title}</h3>
            <p class="h5">${product.discountedPrice || product.price} kr</p>
            <p>
                ${product.tags.map(tag => 
                    /*HTML*/`
                    <span>#${tag}</span>`
                ).join('')
                }
            </p>
            <p>
                <span>Rating:</span>
                <span>${product.rating} / ${highestRating}</span>
            </p>
            <div class="icon">
                <a href="">
                    <img src="public/icons/Share.svg" alt="" loading="lazy"/>
                </a>
            </div>
            <a href="" class="button red">
               
                    <img src="public/icons/cart-add-white.svg" alt="" loading="lazy"/>
                
                <span>add</span>
            </a>
        </div>

        <div class="description">
            <h5>Description</h5>
            <p>${product.description}</p>  
        </div>
    </section>

    <section>
        <h5>Reviews</h5>
        <div>${getReviews(product.reviews, highestRating)}</div>
    </section>
  `;
}

function getReviews(reviewsArray, highestRating){
    if (!reviewsArray || reviewsArray.length === 0) {
        return /*HTML*/`<p>No reviews yet.</p>`;
    }

    return reviewsArray
        .map(
        (review) => /*HTML*/`
            <div class="shadow">
                <h3>${review.username}</h3>
                <p>${review.description}</p>
                <p>
                    <span>Rating:</span>
                    <span>${review.rating} / ${highestRating}</span>
                </p>
            </div>
        `
        )
        .join("");
}

async function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id"); 

  if (!productId) return;

  const product = await fetchProductById(productId);
  renderProduct(product);
}

initProductPage();