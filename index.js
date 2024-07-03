let products = [
  { name: 'Audi r8', price: 5000000 , image: 'audir8.jpeg' },
  { name: 'Rolls royce', price: 18000000 , image: 'rollsroyce.png' },
  { name: 'Dodge hellcat', price: 5000000, image: 'dodgehellcat.png' },
  { name: 'Mclaren senna', price: 55000000, image: 'mclarensenna.jpeg' },
  { name: 'Mustang shelby', price: 7000000, image: 'mustangshelby.jpeg' },
  { name: 'Porsche brabus', price: 20000000, image: 'porschebrabus.jpeg' },

];

function loadProducts() {
  const productContainer = document.getElementById('product-list');
  products.forEach((product, index) => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('col-md-4', 'mb-3');
    productDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">₱${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>
        `;
    productContainer.appendChild(productDiv);
  });
}

let cart = [];

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let totalCost = 0;
  cart.forEach(item => {
    cartItems.innerHTML += <p>${item.name} - ₱${item.price}</p>;
    totalCost += item.price;
  });
  document.getElementById('total-cost').innerText = totalCost;
}

function calculateChange() {
  const payment = document.getElementById('payment').value;
  const totalCost = document.getElementById('total-cost').innerText;
  const change = payment - totalCost;
  document.getElementById('change').innerText = change >= 0 ? change : 'Insufficient payment';
}

window.onload = loadProducts;
