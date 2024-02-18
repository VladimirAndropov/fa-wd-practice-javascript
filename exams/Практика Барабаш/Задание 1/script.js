const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const { post } = require('request');
const app = express();
const port = 8085; // Порт для запуска сервера
var server = require('http').createServer(app);

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.static('public'));

app.get('/server', function(req, res) {
    res.sendFile('Путь к странице HTML')
})

/*Запуск БД .\mongod --port=3000 --dbpath="Путь к проекту\data" 
P.S. Папку "data" нужно сначала создать*/
app.post('/server', function(req, res) {
    const url = "mongodb://localhost:3000/"; // Путь к БД
    const client = new MongoClient(url);

    // Введенная почта в форме авторизации
    let searchEmail = req.body.login;
    let clientInfoSearch = "";
    let status = "";

    client.connect(function(err, client) {
        const db = client.db('clients');
        const collection = db.collection('info');

        collection.findOne({ "login": searchEmail }, { _id: 0 }, function(err, result) {
            if (err) throw err;
            clientInfoSearch = JSON.stringify(result)
            console.log(clientInfoSearch != 'null');

            // Проверяем есть ли такая почта в БД
            if (clientInfoSearch != 'null') {
                status = "success"
            } else {
                status = "fail"
            }
            console.log(status);
            client.close();

            // Добавляем если её нет
            if (status == "fail") {
                client.connect(function(err, client) {
                    const db = client.db('clients');
                    const collection = db.collection('info');
                    let clientInformation = req.body;
                    collection.insertOne(clientInformation, function(err_2, result_2) {
                        if (err_2) {
                            return console.log(err_2);
                        }
                        console.log(clientInformation);
                        client.close();
                    });
                });
            }

            res.send(`<form>
                <label>Ответ от сервера:</label>
                <p></p>
                <p>${status}</p>
            </form>`)
        })
    });
})

server.listen(port, function() {
    console.log(`Listening on : ${port}`);
})

