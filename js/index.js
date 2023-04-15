let count = 1;
function minus(id) {
  count--;
  const input = document.getElementById(id);

  input.value = count;
}
function sum(id) {
  count++;
  const input = document.getElementById(id);
  input.value = count;
}
