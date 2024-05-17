function highlight_max() {
  let td = document.querySelectorAll("td");
  let max = -1;
  for (let i = 0; i < td.length; i++) {
    if (parseInt(td[i].innerHTML) > max) {
      max = parseInt(td[i].innerHTML);
      n = i;
    }
  }
  td[n].style.backgroundColor = "red";
}
