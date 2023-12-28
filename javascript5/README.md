# WEB-development


## Практика студентов Финансового университета


# javaScript
__________________________________________



# Java Script. Функции высшего порядка


### [Методичка](https://docs.google.com/document/d/1a1W9U7A7uupRxhvtzIGTZes8tVim8i2p/edit)


Цель работы

    Получить навыки работы со встроенными функциями высшего порядка в JS.

## Задания для выполнения

1. Сравните два варианта:

*Решение задачи без использования функций высшего порядка*

    const arr1 = [1, 2, 3];
    const arr2 = [];
    for(let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
    }
    // выводит [ 2, 4, 6 ]
    console.log(arr2);

*Решение задачи с помощью функции высшего порядка map*

    const arr1 = [1, 2, 3];
    const arr2 = arr1.map(function(item) {
    return item * 2;
    });
    console.log(arr2);

*Объём этого кода можно даже сократить, если воспользоваться стрелочной функцией:*

    const arr1 = [1, 2, 3];
    const arr2 = arr1.map(item => item * 2);
    console.log(arr2);


 Воспользовавшись методом map(), создайте новый массив из имеющегося, который содержит увеличенные элементы на 10 и в три раза.

2. Имеется массив «год рождения». Необходимо вывести их возраст.

3. Предположим, у нас имеется массив, содержащий объекты, в свойствах которых хранятся сведения об имени и возрасте представителей некой группы людей. 
Нам надо создать массив, в котором будут сведения только о совершеннолетних представителях этой группы (тех, чей возраст достиг 18 лет).

*Решение задачи без использования функций высшего порядка*

    const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
    ];
    const fullAge = [];
    for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >= 18) {
        fullAge.push(persons[i]);
    }
    }
    console.log(fullAge);

*Решение задачи с помощью функции высшего порядка filter*

    const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
    ];
    const fullAge = persons.filter(person => person.age >= 18);
    console.log(fullAge);

Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.

4. Используя синтаксис:

``

    const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    });

Вычислите средний балл студентов.

5. Используя синтаксис, создайте собственную функцию высшего порядка, которая из заданного массива возвращает массив, состоящий из нулей (для тех элементов длинна которых меньше либо равна 3) и единиц (в другом случае).

``

    const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

    function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(
        fn(arr[i])
        );
    }
    return newArray;
    }
    const lenArray = mapForEach(strArray, function(item) {
    return item.length;
    });
    // выводит [ 10, 6, 3, 4, 1 ]
    console.log(lenArray);



## Методические указания

Функцией высшего порядка называется такая функция, которая принимает функцию как аргумент или возвращает функцию в виде выходного значения. 

Например, встроенные функции *JavaScript Array.prototype.map, Array.prototype.filter и Array.prototype.reduce.*

Метод *map()* создаёт новый массив, вызывая, для обработки каждого элемента входного массива, коллбэк, переданный ему в виде аргумента. Этот метод берёт каждое возвращённое коллбэком значение и помещает его в выходной массив.

Метод *filter()* создаёт, на основе массива, новый массив, в которой попадают элементы исходного массива, соответствующие условию, заданному в переданной этому методу функции обратного вызова. Эта функция принимает, как и в случае с методом map(), 3 аргумента: element, index и array.

Метод *reduce()* обрабатывает каждый элемент массива с помощью коллбэка и помещает результат в единственное выходное значение. Этот метод принимает два параметра: коллбэк и необязательное начальное значение (initialValue).

## Контрольные вопросы

Функция Array.prototype.map какого порядка?

Проанализируйте код. Является ли функция lenArray высшего порядка?

    const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

    function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(
        fn(arr[i])
        );
    }
    return newArray;
    }
    const lenArray = mapForEach(strArray, function(item) {
    return item.length;
    });
    // выводит [ 10, 6, 3, 4, 1 ]
    console.log(lenArray);

## Дополнительные задания

Организовать симулятор в виде функции высшего порядка, который выдает только три случайных значения – красный, черный и белый (0, 1, 2). 
Запустить симуляцию 1000 000 раз. 
Узнать, какая последовательность из красных, черных или белых значений была самой короткой.

## Дополнительные материалы
https://habr.com/ru/company/ruvds/blog/428570/

# Тип данных Symbol. Конструкция "switch"

Цель работы

    Получить навыки работы с типом данных Symbol и конструкцией «Switch» в JS.

## Задания для выполнения

1. Создайте  объекты «Клиент банка», «Работник клиники», «Гражданин РФ» с символьными значениями в том числе. 

Выведите их свойства на экран. 

2. Перепишите условия "if" на "switch"

``
    
    const number = +prompt('Загадайте цифру до 9', '');
    if (number === 1) {
    alert('Вы ввели число 1');
    }

    if (number === 2) {
    alert('Вы ввели число 2');
    }
    …
    if (number === 8 || number === 9) {
    alert('Вы ввели число 8, а может и 9');
    }

3. Решите через swith. 
В переменной min лежит число от 0 до 59. 

Определите в какую четверть часа попадает это число.

4. Дана строка с цифрами. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
Если это так - выведите 'Первая цифра 1, 2 или 3', в противном случае выведите 'нет'. 
Проверьте наличие включения вашего номера телефона в строку.


## Методические указания

«Символ» представляет собой уникальный идентификатор, который хранит информацию, передающуюся при копировании, но не при обращении в *for*.

    let id = Symbol("id");
    let user = {
    name: "Вася",
    age: 30,
    [id]: 123
    };

    for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

    // хотя прямой доступ по символу работает
    alert( "Напрямую: " + user[id] );

Конструкция switch имеет один или более блок case и необязательный блок *default*.
Выглядит она так:

    let a = 2 + 2;

    switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( "Нет таких значений" );
    }

Включение строки в подстроку можно проверить следующим образом:

    > let str = 'stackabuse';
    > let substr = 'stack';
    > str.includes(substr);
    true

## Контрольные вопросы

В чем отличие строкового типа от символьного?

Как вывести символьное значение в цикле? 

## Дополнительные материалы
https://learn.javascript.ru/symbol

https://learn.javascript.ru/switch


# Java Script. Работа с формами


Цель работы

    Получить навыки работы с элементами формы в Java Script.

## Задания для выполнения

1. Ознакомьтесь с информацией на сайте: https://htmlweb.ru/java/forms.php
2. Создайте форму, которая будет запоминать параметры входа (ник и пароль) с валидацией пароля.
3. Оформите форму стилями.
4. Загрузить созданные программы на GitHub в репозиторий Student, используя формат в названии Фамилия(латинскими буквами)_4.

## Методические указания

Форму с валидайцией пароля можно создать следующем образом:

    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <script><!--
            function Complete1()
            {
                if(document.Sel3.Pwd.value==document.Sel3.Pwd1.value)
                    alert("Вас зарегистрировали\nID="+document.Sel3.Id.value+"\nPassword="+document.Sel3.Pwd.value);
                else
                    alert("Ошибка при вводе пароля\nПопробуйте еще раз");
            }
            //-->
        </script>
    </head>
    <body>
    <H1>Регистрация</H1>
    <FORM NAME="Sel3">
        <TABLE>
            <TR><TD><B>Идентификатор:<B></TD>
                <TD><INPUT NAME="Id" SIZE=20
                        onBlur="this.value=this.value.toUpperCase()"></TD></TR>
            <TR><TD><B>Пароль:<B></TD>
                <TD><INPUT TYPE="password" NAME="Pwd" SIZE=20
                        onFocus="this.select();"></TD></TR>
            <TR><TD><B>Проверка пароля:<B></TD>
                <TD><INPUT TYPE="password" NAME="Pwd1" SIZE=20
                        onFocus="this.select();"></TD></TR>
        </TABLE>
        <INPUT TYPE="button" VALUE="Готово" onClick="Complete1();">
        <INPUT TYPE="reset" VALUE="Сброс">
    </FORM>
    </body>
    </html>

Cтили можно создать внутри документа:

    <!DOCTYPE HTML>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Глобальные стили</title>
    <style>
    H1 { 
        font-size: 120%; 
        font-family: Verdana, Arial, Helvetica, sans-serif; 
        color: #333366; 
    }
    </style>
    </head>
    <body>
    <h1>Hello, world!</h1>
    </body>
    </html>

## Контрольные вопросы

1. Сколько наборов свойств имеет форма?
2. За что отвечает свойство length?
