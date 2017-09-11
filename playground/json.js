/*
var obj = {
    name: 'Szabolcs'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

var personString = '{"name": "Szabolcs", "age": 22}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);