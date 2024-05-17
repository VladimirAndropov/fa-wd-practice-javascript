async function getRate() {
  let url = "http://localhost:8085/get";
  let row_class = "one";

  let response = await fetch(url);
  let data = await response.json();
  let course = data["value"];
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  document.getElementById("main-table").appendChild(thead);
  document.getElementById("main-table").appendChild(tbody);
  let h_row = document.createElement("tr");
  let head_1 = document.createElement("th");
  head_1.innerHTML = "Валюта";
  let head_2 = document.createElement("th");
  head_2.innerHTML = "Курс сегодня";
  let head_3 = document.createElement("th");
  head_3.innerHTML = "Курс вчера";
  h_row.appendChild(head_1);
  h_row.appendChild(head_2);
  h_row.appendChild(head_3);
  h_row.classList.add("header");
  h_row.classList.add("one");
  thead.appendChild(h_row);
  let table_output = "";
  for (let i = 0; i < course.length; i++) {
    if (i % 2 == 0) {
      row_class = "two";
    } else {
      row_class = "one";
    }

    table_output +=
      '<tr class="' +
      row_class +
      '"><td>' +
      course[i]["Name"] +
      "</td><td>" +
      String(course[i]["Value"] / course[i]["Nominal"]) +
      "</td><td>" +
      String(course[i]["Previous"] / course[i]["Nominal"]) +
      "</td></tr>";
  }
  tbody.innerHTML = table_output;
}

window.onload = async () => {
  await getRate();
  console.log("onload");
};
