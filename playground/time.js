var moment = require('moment');
//
// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY HH:MM:ss a'));

// 10:35 am

var createdAt = 2343323143212;
var date = moment(createdAt);
console.log(date.format('h:MM a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
