/* Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
 Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return. */
'use strict';

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function divide(a, b) {
    return a / b
};

function multiply(a, b) {
    return a * b
};

let res_1 = add(2, 5);
let res_2 = subtract(5, 2);
let res_3 = divide(10, 2);
let res_4 = multiply(20, 20);