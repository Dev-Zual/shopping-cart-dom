let count = 0;
function minus() {
  count--;
  const input = document.getElementById("input-value");
  input.value = count;
}
function sum() {
  count++;
  const input = document.getElementById("input-value");
  input.value = count;
}
