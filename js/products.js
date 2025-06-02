async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.querySelector("#all-products .container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
            <div class="product-picture">
                <img src="${product.image}" alt="product: ${product.title}" width="250" loading="lazy" />
            </div>
            <div class="product-info">
                <h5 class="categories">${product.category}</h5>
                <h4 class="title">${product.title}</h4>
                <h3 class="price"><span>US$ ${product.price}</span></h3>
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
