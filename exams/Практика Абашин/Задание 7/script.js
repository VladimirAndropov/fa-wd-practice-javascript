function on_load() {
  let links = document.getElementsByClassName("simple-link");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", make_active);
  }
}

function make_active() {
  let links = document.getElementsByClassName("simple-link");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "";
  }
  this.style.backgroundColor = "red";
  document.getElementById("div-active-link").innerHTML = this.innerHTML;
}
