function countQtyValue(id, isIncrease) {
  const qtyField = document.getElementById(id);
  const previousQtyValue = parseInt(qtyField.value);
  let newIncreaseValue;
  if (isIncrease) {
    newIncreaseValue = previousQtyValue + 1;
  } else {
    newIncreaseValue = previousQtyValue - 1;
  }
  qtyField.value = newIncreaseValue;
  return newIncreaseValue;
}

function totalPrice(qty, id, price) {
  const mobilePrice = document.getElementById(id);
  const newMobilePrice = qty * price;
  mobilePrice.innerText = newMobilePrice;
}

document.getElementById("phn-qty-plus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", true);
  totalPrice(qty, "mobile-price", 1219);
});
document.getElementById("phn-qty-minus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", false);
  totalPrice(qty, "mobile-price", 1219);
});
document.getElementById("case-qty-plus").addEventListener("click", function () {
  const qty = countQtyValue("casing-qty", true);
  totalPrice(qty, "casing-price", 59);
});
document
  .getElementById("case-qty-minus")
  .addEventListener("click", function () {
    const qty = countQtyValue("casing-qty", false);
    totalPrice(qty, "casing-price", 59);
  });
