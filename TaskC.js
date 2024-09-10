"use strict";
// 100 Days Of Coding Challenge!
/** Question 135
Explain how you can format a JSON string with proper indentation for readability*/
//--------------------------------------------------------------------------------
// Define a JavaScript object
const person_2 = {
    name: "Mark Miller",
    age: 32,
    city: "Los Angeles"
};
// Convert the JavaScript object into a JSON string with indentation
const jsonString_2 = JSON.stringify(person_2, null, 4);
// Output the formatted JSON string
console.log(jsonString_2);
/*
{
    "name": "Mark Miller",
    "age": 32,
    "city": "Los Angeles"
}
*/
