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
  return Number(qtyField.value);
}

document.getElementById("phn-qty-plus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", true);
  const mobilePrice = document.getElementById("mobile-price");
  const mobilePriceValue = parseInt(mobilePrice.innerText);
  mobilePrice.innerText = mobilePriceValue * qty;
});
document.getElementById("phn-qty-minus").addEventListener("click", function () {
  const qty = countQtyValue("mobile-qty", false);
  const mobilePrice = document.getElementById("mobile-price");
  const mobilePriceValue = parseInt(mobilePrice.innerText);
  const newPrice = mobilePriceValue * qty;
  mobilePrice.innerText = newPrice;
});
document.getElementById("case-qty-plus").addEventListener("click", function () {
  countQtyValue("casing-qty", true);
});
document
  .getElementById("case-qty-minus")
  .addEventListener("click", function () {
    countQtyValue("casing-qty", false);
  });
