const express = require("express");
const axios = require("axios");
const app = express();
const port = 8085;
const server = require("http").createServer(app);
const path = require("path");
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname) + "/public"));

app.use(cors());

const values = ["USD", "EUR", "GBP", "BYN", "CNY", "JPY"];

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/index.html");
});

app.get("/get", (req, res) => {
  let response = null;
  new Promise(async (resolve, reject) => {
    try {
      response = await axios("https://www.cbr-xml-daily.ru/daily_json.js");
    } catch (error) {
      response = null;
    }
    if (response) {
      const json = response.data;

      let values_list = [];
      for (let i = 0; i < values.length; i++) {
        values_list.push(json["Valute"][values[i]]);
      }
      const json_response = {
        date: json["Date"],
        value: values_list,
      };
      res.send(json_response);
    }
  });
});

server.listen(port, function () {
  console.log(`listening on ${port}`);
});
