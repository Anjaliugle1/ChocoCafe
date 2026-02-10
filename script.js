let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((c) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = `<span>${c.item}</span><span>₹${c.price}</span>`;
    cartItems.appendChild(li);
  });

  document.getElementById("totalPrice").innerText = total;
}
