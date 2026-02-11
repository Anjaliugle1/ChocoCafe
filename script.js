let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
  showMessage();
}

function showMessage() {
  const msg = document.getElementById("message");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 1500); // hide after 1.5 seconds
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${c.item} - ₹${c.price}</span>
      <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">X</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("totalPrice").innerText = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}
