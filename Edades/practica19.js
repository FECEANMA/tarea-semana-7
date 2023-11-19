'use strict'
function nacimiento (year) {
    let curreyYear = 2023;
    let age = curreyYear - year;
    alert (age);
}
let yearOfBirth = Number(prompt("Año de nacimiento"));
nacimiento (yearOfBirth);