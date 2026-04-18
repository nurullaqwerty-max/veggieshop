let cart = JSON.parse(localStorage.getItem("cart")) || [];

// добавить товар
function addToCart(name, price) {
  cart.push({ name: name, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Добавлено в корзину 🛒");
  updateCount();
}

// обновить счетчик
function updateCount() {
  let count = document.getElementById("count");
  if (count) {
    count.innerText = cart.length;
  }
}

// переход в корзину
function goCart() {
  window.location.href = "cart.html";
}

// назад
function back() {
  window.location.href = "index.html";
}

// показать корзину
function showCart() {
  let cartDiv = document.getElementById("cart");
  let totalText = document.getElementById("total");

  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item.name + " - " + item.price + "₸";
    cartDiv.appendChild(p);
    total += item.price;
  });

  totalText.innerText = "Итого: " + total + "₸";
}

// очистить
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  updateCount();
}

// запуск
updateCount();
showCart();