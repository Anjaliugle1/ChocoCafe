let discount = 0;

let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("totalPrice").innerText = total;

  updateCart();
  showMessage();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((product) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = product.item + " - ₹" + product.price;
    cartItems.appendChild(li);
  });
}

function showMessage() {
  const message = document.getElementById("cartMessage");
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}





// Show toast
  var toast = new bootstrap.Toast(document.getElementById("cartToast"), {
    delay: 2000   // 2 seconds nantar auto hide
  });
  toast.show();

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function signupSuccess() {
  
  alert("🎉 Signup Successful!");

  // Signup modal close kara
  var signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
  signupModal.hide();

  // Optional: Login modal open kara automatically
  var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  loginModal.show();
}

