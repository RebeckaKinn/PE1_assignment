const API_URL = "https://v2.api.noroff.dev";
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmViZWNrYWtpbm4iLCJlbWFpbCI6InJlYmtpbjAyNzU1QHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzY4Mjk1OTEyfQ.HLmQo1sRE5U9DMjuEm-oLZc2iqi6SJV_XJ9Z7_4c0PA',
    "X-Noroff-API-Key": '2191ebfa-cc8f-48e9-a01f-9af139045325'
  }
};


async function fetchProducts(){
    const response = await fetch(`${API_URL}/online-shop`, options)
    const data = await response.json()
    return data.data;
}

async function fetchTopThreeProducts(){
    const products = await fetchProducts();
    const result = products.sort((a, b) => b.rating - a.rating).slice(0, 3);
    return result;
}

/*
{
      "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
      "title": "Gold headphones",
      "description": "Professional headphones with gold trim.",
      "price": 449.99,
      "discountedPrice": 382.49,
      "image": {
        "url": "https://static.cloud.noroff.dev/api/online-shop/3-headphones-beats.jpg",
        "alt": "Gold headphones laying on a white background"
      },
      "rating": 4,
      "tags": ["headphones"],
      "reviews": [
        {
          "id": "88e11191-d2e5-4bfb-9bcb-d7e158284657",
          "username": "Michael J.",
          "rating": 4,
          "description": "Good sound quality."
        }
      ]
    },
*/