function minus(id) {
  const input = document.getElementById(id);
  if (input.value > 0) {
    input.value = Number(input.value) - 1;
  } else {
    return alert("please add positive number");
  }
}

function sum(id) {
  const input = document.getElementById(id);
  input.value = Number(input.value) + 1;
}
