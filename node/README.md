# WEB-development


## Практика студентов Финансового университета


# React



- # Компилятор Babel. Способы описания компонентов
Цель работы

    Познакомить со способами описания компонент в React, а также с компилятором для них Babel.
## Задания для выполнения
1. Подключите компилятор Babel  к html-странице. 
2. Определите один и тот же компонент тремя способами: функционально, используя классы ES6, с помощью стрелочной функции.
3. Поместите на страницу таймер с помощью компонента React.
4. Загрузить созданную страницу на GitHub в репозиторий Student, используя формат в названии Фамилия (латинскими буквами)_4.
## Методические указания
1. Чтобы подключить Babel:
В ``<head>`` укажите 

        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>

А также элемент *script*, который содержит основной код приложения, должен иметь атрибут type="text/babel":

        <script type="text/babel">
            ReactDOM.render(
                <h1>Hello React</h1>,
                document.getElementById("app")
            )
        </script>


2. Чтобы задать компонент функционально:

        function Hello() {
        return <h1>Привет</h1>;
        }

Чтобы задать компонент с помощью стрелочной функции:

    var Hello =() => {
        return (<h1>Привет</h1>);
    }
Чтобы задать компонент с помощью классов ES6:

    class Hello extends React.Component {
    render() {
        return <h1>Привет</h1>;
    }
    }
Также нужно задать метод render , который возвращает создаваемый элемент на JSX.

    ReactDOM.render(
                <Hello />,
                document.getElementById("container")
            )
3. Компонент с таймером:

        class Timer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { seconds: 0 };
        }

        tick() {
            this.setState(state => ({
            seconds: state.seconds + 1
            }));
        }

        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return (
            <div>
                Seconds: {this.state.seconds}
            </div>
            );
        }
        }

        ReactDOM.render(
        <Timer />,
        document.getElementById('timer-example')
        );

Примеры компонент представлены здесь:
https://reactjs.org/

## Контрольные вопросы
Зачем подключать Babel?

Что плохого в описании компонентов с использованием механизма классов?
## Дополнительные задания
Дополнительно: изменить стиль реакт-компонентов и добавьте новые на html-страницу.

- # Сервер. Node.js

Цель работы

  Познакомить со способом подключения внешнего файла с React-компонентами.

## Задания для выполнения

1. Для работы также необходимо установить Node.js (https://nodejs.org/en/)

2. Создайте в одной папке три файла:

index.html

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Hello React</title>
    </head>
    <body>
        <div id="app"></div>
          
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>
        <script type="text/babel" src="index.jsx"></script>
    </body>
    </html>

index.jsx

    class Hello extends React.Component {
        render() {
            return <h1>Hello, React</h1>;
        }
    }
    ReactDOM.render(
        <Hello></Hello>,
        document.getElementById("app")
    )

package.json

 *(это файл конфигурации проекта, который в данном случае определяет название проекта - "helloapp", его версию - 1.0.0. Секция "devDependencies" устанавливает зависимости, которые будут использоваться при разработке проекта. В частности, нам необходим мини-вебсервер для запуска веб-страницы, поэтому здесь определена зависимость "lite-server".)*

    {
        "name": "helloapp",
        "version": "1.0.0",
        "scripts": {
            "start": "lite-server"
        },
        "devDependencies": {
            "lite-server": "^2.2.1"
        }
    }

3. Откройте командную строку/терминал и перейдите с помощью команды cd к папке где лежат эти три файла. 
Затем для установки зависимости lite-server выполним команду: ``npm install`` и затем запустите приложение с помощью команды: ``npm start``.
Замените компонент на список дел (https://reactjs.org/), добавив оформление.
4. Загрузить созданную страницу на GitHub в репозиторий Student, используя формат в названии Фамилия (латинскими буквами)_5.

## Методические указания
В итоге компилятор Babel при запуске страницы подгрузит файл index.jsx и скомпилирует из него код JavaScript, который будет применяться к странице.

## Контрольные вопросы
Можно ли использовать другой веб-сервер?

## Дополнительные задания
Добавьте другие компоненты со страницы (https://reactjs.org/)


# Ссылки:

  - title: "Практика: Компилятор babel" 
    overview: ""
    document: https://docs.google.com/document/d/1ABMBmofGiYXJYRmt3pIJLCm4nhvYr6eg/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 

  - title: "Практика: Сервер node.js" 
    overview: ""
    document: https://docs.google.com/document/d/1xp0kLSsXWkk8JhNPPcfMo1XhCTMbEf3z/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 


  - title: "Лекция: Серверный JavaScript - node.js, npm" 
    overview: ""
    document: /text/wd41/ # ссылка на методические указания
    youtube: # Видеозапись занятия
    slides: /pres/wd41/
    textbook: /text/wd41/
    test: 
    additional: 
      - title: "Node.js Crash Course"
        url: https://www.youtube.com/watch?v=fBNz5xF-Kx4

      - title: "NPM Crash Course"
        url: https://www.youtube.com/watch?v=jHDhaSSKmB0

      - title: "Node.js официальная страница"
        url: https://nodejs.org/en/

      - title: "Справочник Node.js"
        url: https://nodejsdev.ru/

      - title: "Введение в Node JS"
        url: https://metanit.com/web/nodejs/1.1.php

  - title: "Практика: Установка и настройка node.js" 
    overview: ""
    document: # https://docs.google.com/document/d/1TStHOJUeD9kZKXOBOF4qyXEyJmVf1BuS/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 
---