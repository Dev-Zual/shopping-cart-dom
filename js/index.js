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
  const priceText = document.getElementById(id);
  const totalPrice = qty * price;
  priceText.innerText = totalPrice;
  return totalPrice;
}

function getTextTotal(id) {
  const itemsTotal = document.getElementById(id);
  const itemsTotalValue = parseFloat(itemsTotal.innerText);
  return itemsTotalValue;
}

function calculateSubTotal() {
  const phoneTotal = getTextTotal("mobile-price");
  const casingTotal = getTextTotal("casing-price");
  const subTotalText = document.getElementById("sub-total");
  const subTotalAmount = phoneTotal + casingTotal;
  subTotalText.innerText = subTotalAmount;

  const tax = subTotalAmount * 0.1;
  const taxField = document.getElementById("tax");
  taxField.innerText = tax.toFixed(2);
  const finalTotal = subTotalAmount + parseFloat(tax.toFixed(2));
  const finalField = document.getElementById("final-total");
  finalField.innerText = finalTotal;
}

document.getElementById("phn-qty-plus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", true);
  totalPrice(qty, "mobile-price", 1219);
  calculateSubTotal();
});
document.getElementById("phn-qty-minus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", false);
  totalPrice(qty, "mobile-price", 1219);
  calculateSubTotal();
});
document.getElementById("case-qty-plus").addEventListener("click", function () {
  const qty = countQtyValue("casing-qty", true);
  totalPrice(qty, "casing-price", 59);
  calculateSubTotal();
});
document
  .getElementById("case-qty-minus")
  .addEventListener("click", function () {
    const qty = countQtyValue("casing-qty", false);
    totalPrice(qty, "casing-price", 59);
    calculateSubTotal();
  });
