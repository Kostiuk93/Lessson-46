"use strict";
// Контекст
// Вызов функции
/* function showThis() {
    console.log(this);
}
showThis(); */

// 1) Обычная функция: this = window, но если стоит use struct - undefined
//Выведет undefined
/* function showThis(a, b) {
    console.log(this);
    function sum () {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
}
showThis(4, 2); */


// Выведет 6
/* function showThis(a, b) {
    console.log(this);
    function sum () {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 2);
 */

// 2) Контекст у методов объекта это будет сам объект


// Выведет объект
/* const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum(); */

//Выведет undefined
/* const obj = {
    a: 20,
    b: 15,
    sum: function () {
        function shout () {
            console.log(this);
        }
        shout();
    }
};
obj.sum(); */

// 3) this в конструкторах и классах - это новый экземпляр объекта

/* function User(name,id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello" + this.name);
    }
}
let alex = new User('Alex', 28); */

// 4) Ручная привязка this: call, apply, bind

/* function sayName(surename) {
    console.log(this);
    console.log(this.name + surename);
}

const user = {
    name: 'John'
};

// Эти 2 метода делают одно и то же, разница только в ситнтаксисе
sayName.call(user, 'Smith'); // аргументы задаются через запятую
sayName.apply(user, ['Smith']); // аргументы задаются в массиве */


// Этот метод буде встречаться очень часто
/* function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3)); */

// This в обработчике событий
const btn = document.querySelector('button');

// Данный пример работает только при объявлении классической функции, при стрелочной функции будет ошибка или undefined
// this в некоторых случаях может приравниваться в event.target
// ПРАВИЛО: Если мы используем синтаксис классической функции, то мы имеем доступ к this. 
//          Если используем стрелочную функцию, то контекст вызова (this) теряется. this = undefined
btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});
// при стрелочной функции использовать event.target!!!!
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

// у стрелочной функции нет своего контекста вызова, она всегда берет контекст у своего родителя
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};
obj.sayNumber();


// сокращение стрелочной функции

/* const double = (a) => {
    return a * 2;
}; */

// если тело функции помещается в одну строку, то фигурные скобки ставить не нужно.
// так же слово return ставить не нужно
// const double = (a) => a * 2;

//стрелчная функция, если применяет один аргумент может написана без круглых скобок
const double = a => a * 2;
console.log(double(4));