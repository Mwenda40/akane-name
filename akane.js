var birthday = "07 / 07 / 2015";
var arr1 = birthday.split(' ');
var arr2 = arr1[1].split(',');

console.log('date: ', arr1[0]);
console.log('month: ', arr2[0]);
console.log('year: ', arr2[1]);
