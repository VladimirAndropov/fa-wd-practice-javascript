# WEB-development


## Практика студентов Финансового университета


- # Bootstrap - Hello World
____________________
## [Примеры](https://github.com/VladimirAndropov/scos-platform/tree/master/lms/static/sass/bootstrap)

Цель работы 

    Получить навыки работы подключения CSS- и JS-фреймворков, подготовки среды для верстки с Bootstrap.



### Задания для выполнения
Скачать файл  [frame.html](https://github.com/VladimirAndropov/wd/blob/main/bootstrap/frame.html)

Подключить стили.

Создать пустой файл main.js для будущих скриптов и подключить его.

Подключите используемые шрифты.

Проверить в браузере подключенные шаблоны

Загрузить созданную страницу на GitHub в репозиторий Student, используя формат в названии Фамилия(латинскими буквами)_1.

### Методические указания
Скачайте и разархивируйте файлы bootstrap  скомпилированные css и js по ссылке
https://getbootstrap.com/docs/4.5/getting-started/download/

Подключить локальную таблицу стилей можно с помощью:

    <link rel="stylesheet" href="bootstrap/css/style.js" > 
Предварительно создав папку css с файлом style.js.

Файл main.js для будущих скриптов можно подключить следующим образом:

    <script src="bootstrap/js/main.js" ></script>

Подключить используемые шрифты можно с сайта: https://fonts.google.com/

Проверить подключенные стиль можно с помощью браузера Chrome – правой кнопкой мыши – посмотреть код. 




### Контрольные вопросы
Для чего нужна эта строка: 

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

Можно ли работать с библиотеками локально?
______


- # Bootstrap.  Навигация на сайте
Цель работы

    Получить навыки создания базовых стилей и навигации на сайте.

### Задания для выполнения
Установите панель навигации на вашем будущем сайте.

В файле style.css опишите базовые стили для body, картинок и гиперссылок.

Уберите компонент form и вставьте нужные компоненты меню.

Измените ширину меню с помощью класса container.

Загрузить созданную страницу на GitHub в репозиторий 

### Методические указания
Перейдите на сайте Bootstrap на вкладку Navbar (https://getbootstrap.com/docs/4.5/components/navbar/) и вставьте базовый шаблон себе в документ html.

Описать базовые стили можно следующим образом:
    
    body {
	    min-width: 320px;
	    font-size: 14px;
	    font-family: 'Roboto', sans-serif;
	    color: #626262;
    }
    img {
	    max-width: 100%;
	    height: auto;
    }
    a{
	    color: #b4ad9e;
    }
    a:hover {
	    color: #898377;
    }

Компонент nav переместите в 

    <head>
    <div class="container">

    </div>
    </head>



### Контрольные вопросы
За что отвечает класс 

    navbar-expand-lg?

Как добавлять разделители во вложенное меню?

### Дополнительные задания

Поменять фон меню на странице.
_______

- # Bootstrap.  Базовые компоненты для сайта

Цель работы

    Получить навыки создания базовой разметки страницы и размещения основных компонент.

### Задания для выполнения
Перейдите на сайт https://getbootstrap.com/ (Get started – Components).

Разместите в своем html документе в разделе <body> поочередно компоненты – Carousel, Buttons, Card, Carousel, Forms.

Настройте эти компоненты и поменяйте их свойства в таблице стилей.

Загрузить созданную страницу на GitHub в репозиторий Student, используя формат в названии Фамилия(латинскими буквами)_3.

### Методические указания
Способ обращения к компоненту описан в документации на https://getbootstrap.com перед каждым компонентом.

### Контрольные вопросы
Как исправить данную строчку, чтобы выключка текста была влево 

    <ul class="navbar-nav mr-auto">?

Что позволяет сделать утилита Spacing?

### Дополнительные задания
Сверстать страницу по готовому дизайну, созданному в Figma.

# Ссылки на учебный материал:
  - title: "Лекция: Фреймворк Bootstrap" 
    overview: ""
    document:  # ссылка на методические указания
    youtube: # Видеозапись занятия
    slides: https://drive.google.com/open?id=1o2QyFWIDVOHH7dr5br9JIq_aI_JBZyb2FPv3UWjMzlM
    textbook: # ссылка на главу из учебника
    test: 
    additional: 
      - title: "Bootstrap 5 Crash Course | Website Build & Deploy"
        url: https://www.youtube.com/watch?v=4sosXZsdy-s

      - title: "Bootstrap"
        url: https://getbootstrap.com/

      - title: "Bootstrap. Документация на русском языке."
        url: https://bootstrap-4.ru/

  - title: "Практика: Hello World на Bootstrap" 
    overview: ""
    document: https://docs.google.com/document/d/1_IckXT5Y6g-vDBizEVtWtJCMjwSwG_tW/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 

  - title: "Практика: Навигация на сайте" 
    overview: ""
    document: https://docs.google.com/document/d/1cQLXqkIEbf69GCrDffEmTiET1psLAbw2/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 

  - title: "Практика: Основные компоненты Bootstrap" 
    overview: ""
    document: https://docs.google.com/document/d/1kA3sVGjS9vEc32OK4s0rGEtY0Vom25zz/edit?usp=sharing&ouid=116003821381017651142&rtpof=true&sd=true
    youtube: # Видеозапись занятия
    slides: 
    textbook: # ссылка на главу из учебника
    test: 
---