function create_ul() {
  let cities = document.getElementById("input-cities").value.split(",");
  let input_ul = "";
  if (cities[0] != "") {
    input_ul += "<ul>";
    for (let i = 0; i < cities.length; i++) {
      input_ul += "<li>" + cities[i] + "</li>";
    }
    input_ul += "</ul>";
  }

  document.getElementById("div-cities").innerHTML = input_ul;
}
