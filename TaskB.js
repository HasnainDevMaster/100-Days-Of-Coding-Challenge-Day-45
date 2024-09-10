"use strict";
// 100 Days Of Coding Challenge!
/** Question 134
Take a JSON string and parse it into a JavaScript object*/
//--------------------------------------------------------
// Define a JSON string
const jsonString_1 = '{"name":"Mark Miller","age":32,"city":"Los angeles"}';
// Parse the JSON string into a JavaScript object
const person_1 = JSON.parse(jsonString_1);
// Output the JavaScript object
console.log(person_1); // { name: 'Mark Miller', age: 32, city: 'Los angeles'}
