function on_load() {
  let countries = document.getElementsByClassName("p-country");
  for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener("click", expand);
  }
}

function expand() {
  this.nextElementSibling.style.display = "block";
  this.removeEventListener("click", expand);
  this.addEventListener("click", wrap);
}

function wrap() {
  this.nextElementSibling.style.display = "none";
  this.removeEventListener("click", wrap);
  this.addEventListener("click", expand);
}
