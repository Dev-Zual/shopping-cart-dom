function sumQty(id) {
  const mobileQtyField = document.getElementById(id);
  const mobileQtyValue = parseInt(mobileQtyField.value);
  mobileQtyField.value = mobileQtyValue + 1;
}
function minusQty(id) {
  const mobileQtyField = document.getElementById(id);
  const mobileQtyValue = parseInt(mobileQtyField.value);
  mobileQtyField.value = mobileQtyValue - 1;
}

document.getElementById("phn-qty-plus").addEventListener("click", function () {
  sumQty("mobile-qty");
});
document.getElementById("phn-qty-minus").addEventListener("click", function () {
  minusQty("mobile-qty");
});
document.getElementById("case-qty-plus").addEventListener("click", function () {
  sumQty("casing-qty");
});
document
  .getElementById("case-qty-minus")
  .addEventListener("click", function () {
    minusQty("casing-qty");
  });
