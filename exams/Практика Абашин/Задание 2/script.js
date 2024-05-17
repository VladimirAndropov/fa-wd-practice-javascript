function on_load() {
  let N = prompt("Введите значение N", "10");
  N = parseInt(N);
  for (let i = 0; i < N; i++) {
    document.getElementById("div-inputs").innerHTML +=
      '<p><input type="number" class=".num"></p>';
  }
}

function calculate_sum() {
  let inputs = document.getElementsByClassName(".num");
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += parseInt(inputs[i].value);
  }
  document.getElementById("result").innerHTML = sum;
}
