console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash'); 
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('babe'));

var filteredArray = _.uniq(['Szabi', 1, 2, 3, 4, 'Szabi']);
console.log(filteredArray);

//var res = notes.addNote();
//var name = notes.add(10, 12);

//console.log(res);
//console.log(name);

//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
