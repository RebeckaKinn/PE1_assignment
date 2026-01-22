async function renderProduct(product) {
    const isLoggedIn = localStorage.getItem("accessToken");
    const highestRating = await getHighestRating();
  if (!product) {
    document.getElementById("product-container").innerHTML = /*HTML*/`
        <p>Produkt ikke funnet</p>
    `;
    return;
  }

  document.getElementById("product-container").innerHTML = /*HTML*/`
    <section class="single-product-container">
        <h1 class="hidden">Product page</h1>
        <div class="product-image">
            <img src="${product.image.url}" alt="${product.image.alt}" loading="lazy">
        </div>

        <div class="product-information">
            <h3 class="remove-default">${product.title}</h3>
            <p class="remove-default h5">${product.discountedPrice ? /*HTML*/`<span class="discount">${product.price}</span> <span>${product.discountedPrice}</span>`:  product.price} kr</p>
            <p class="remove-default">
                ${product.tags.map(tag => 
                    /*HTML*/`
                    <span class="tags">#${tag}</span>`
                ).join('')
                }
            </p>
            <p class="remove-default">
                <span class="button-text">Rating:</span>
                <span class="h5">
                    <span class="h4">${product.rating}</span>/${highestRating}
                </span>
            </p>
            <div class="icon">
                <a href="#" id="share-button" data-id="${product.id}">
                    <img src="./public/icons/Share.svg" alt="" loading="lazy">
                </a>
            </div>
            ${isLoggedIn
                ? /*HTML*/`
                <button class="button red" id="add-to-cart">
                    <img src="./public/icons/cart-add-white.svg" alt="" loading="lazy">
                    <span>add</span>
                </button>
                `
                : ''
            }  
        </div>

        <div class="description">
            <h5>Description</h5>
            <p class="remove-default">${product.description}</p>  
        </div>
    </section>

    <section class="review-container">
        <h1 class="h5">Reviews</h1>
        <div class="product-list">${getReviews(product.reviews, highestRating)}</div>
    </section>
  `;
  if(isLoggedIn){
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener("click", () => addToCart(product));
  }
  enableShareButton(product.id);
}

function enableShareButton(productId) {
    const shareButton = document.querySelector("#share-button");
    if (!shareButton) return;

    shareButton.addEventListener("click", (e) => {
        e.preventDefault();
        const shareURL = `${window.location.origin}${window.location.pathname}?id=${productId}`;
        navigator.clipboard.writeText(shareURL)
            .then(() => {
                alert("URL copied to clipboard!");
            })
            .catch((err) => {
                console.error("Could not copy URL: ", err);
            });
    });
}


function getReviews(reviewsArray, highestRating){
    if (!reviewsArray || reviewsArray.length === 0) {
        return /*HTML*/`<p>No reviews yet.</p>`;
    }

    return reviewsArray
        .map(
        (review) => /*HTML*/`
            <article class="under-shadow review-card">
                <h3 class="remove-default name">${review.username}</h3>
                <p class="remove-default">${review.description}</p>
                <p class="remove-default rating">
                    <i>Rating:</i>
                    <span class="h5">
                        <span class="h4">${review.rating}</span>/${highestRating}
                    </span>
                </p>
            </article>
            
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