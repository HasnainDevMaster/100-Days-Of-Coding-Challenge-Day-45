"use strict";
// 100 Days Of Coding Challenge!
/** Question 133
Write a JavaScript object and convert it into a JSON string*/
//---------------------------------------------------------------------------
// Define a JavaScript object
const person = {
    name: "Mark Miller",
    age: 32,
    city: "Los Angeles"
};
// Convert the JavaScript object into a JSON string
const jsonString = JSON.stringify(person);
// Output the JSON string
console.log(jsonString); // {"name":"Mark Miller","age":32,"city":"Los Angeles"}
