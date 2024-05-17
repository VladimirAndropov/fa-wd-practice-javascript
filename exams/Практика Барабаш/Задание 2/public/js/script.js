async function getRate() {
  let mark = document.getElementById("mark-select").value;
  let url = "http://localhost:8085/get/" + mark;
  let response = await fetch(url);
  let data = await response.json();
  document.getElementById("price").innerText = data["price"];
  document.getElementById("change").innerText = data["change"];
}
