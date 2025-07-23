const products = [
  { name: "Smartphone", category: "electronics", price: 100000 },
  { name: "Jeans", category: "fashion", price: 800 },
  { name: "Laptop", category: "electronics", price: 60000},
  { name: "Oils.1L", category: "grocery", price: 146},
  { name: "T-shirt", category: "fashion", price: 500 },
  { name: "SmartWatch", category: "electronics", price: 3000 },
  { name: "Rice Bag", category: "grocery", price: 900 }
];

let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  filteredProducts = selectedCategory === "all"
    ? [...products]
    : products.filter(p => p.category === selectedCategory);
  sortProducts(); // re-sort after filtering
}

function sortProducts() {
  const sortOrder = document.getElementById("sortOrder").value;
  let sorted = [...filteredProducts];

  if (sortOrder === "low") sorted.sort((a, b) => a.price - b.price);
  if (sortOrder === "high") sorted.sort((a, b) => b.price - a.price);

  displayProducts(sorted);
}

window.onload = () => {
  displayProducts(products);
};
