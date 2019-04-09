// doc
// https://momentjs.com/guides/
// https://stackoverflow.com/questions/17493309/how-do-i-change-the-language-of-moment-js

var moment = require('moment');

let now = new Date('2019-03-01');

let a = moment('2019-03-15');
moment.locale('it_IT');

let b = moment('2019-03-15');

console.log('moment:', b.format('MMMM'));
console.log('moment:', b.format('ddd D'));  // una sola D riduce al volo la dimensione del numero (01 -> 1)

