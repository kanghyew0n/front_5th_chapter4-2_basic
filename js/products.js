async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (err) {
    console.log(err);
  }
}

function displayProducts(products) {
  const container = document.querySelector("#all-products .container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
            <div class="product-picture">
                <img src="${product.image}" alt="product: ${product.title}" width="250"  loading="lazy" />
            </div>
            <div class="product-info">
                <h2 class="categories">${product.category}</h2>
                <h3 class="title">${product.title}</h3>
                <h4 class="price"><span>US$ ${product.price}</span></h4>
                <button>Add to bag</button>
            </div>
        `;
    container.appendChild(productElement);
  });
}

loadProducts();

// Simulate heavy operation. It could be a complex price calculation.
for (let i = 0; i < 10000000; i++) {
  const temp = Math.sqrt(i) * Math.sqrt(i);
}
