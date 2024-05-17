const express = require("express");
const cheerio = require("cheerio");
const rp = require("request-promise");
const app = express();
const port = 8085;
const server = require("http").createServer(app);
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const db = new sqlite3.Database("oils.db");

db.serialize(function () {
  db.run(
    "CREATE TABLE IF NOT EXISTS oils (id INTEGER PRIMARY KEY AUTOINCREMENT, dt TEXT, mark TEXT, price FLOAT, change FLOAT)"
  );
});

const insert_row = db.prepare(
  "INSERT INTO oils (dt, mark, price, change) VALUES (?,?,?,?)"
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname) + "/public"));

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/index.html");
});

app.get("/get/:val", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = mm + "." + dd + "." + yyyy;
  let data = {};
  db.get(
    `SELECT dt, mark, price, change FROM oils WHERE dt = ? and mark = ?`,
    [today, req.params.val],
    (err, results) => {
      if (typeof results !== "undefined") {
        res.send(results);
      } else {
        let url = `https://maanimo.ua/wp-json/exchange/v1/daily/chart?type=oil&base=USD&code=${req.params.val}&mean=1&lang=ru`;
        rp(url).then(function (html) {
          const $ = cheerio.load(html);
          let values = JSON.parse($.text());
          data["mark"] = req.params.val;
          data["dt"] = today;
          let prices = values["series"][0];
          data["price"] = prices[prices.length - 1];
          data["change"] = parseFloat(
            (data["price"] - prices[prices.length - 2]).toFixed(5)
          );
          insert_row.run(
            data["dt"],
            data["mark"],
            data["price"],
            data["change"]
          );
          res.send(data);
        });
      }
    }
  );
});

server.listen(port, function () {
  console.log(`listening on ${port}`);
});
