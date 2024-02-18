function on_load() {
  let td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function () {
      this.style.backgroundColor = "red";
    });
    console.log(i);
  }
}

function calculate_highlighted() {
  let td = document.querySelectorAll("td");
  let sum = 0;
  for (let i = 0; i < td.length; i++) {
    if (td[i].style.backgroundColor == "red") {
      sum += parseInt(td[i].innerHTML);
    }
  }
  document.getElementById("span-result").innerHTML = sum;
}

function clear_highlighting() {
  let td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    td[i].style.backgroundColor = "";
  }
  document.getElementById("span-result").innerHTML = "";
}
