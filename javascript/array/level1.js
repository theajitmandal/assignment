const arr = [3,5,2];
const backupArr = [...arr];

//Q1 calculate length of array and console log
//expected output is 3
console.log(backupArr.length);

//Q2 reverse the array and console log
//expected output [2,5,3]
let reverse = backupArr.reverse();
console.log(backupArr);

///Q3 join the array and console log
// expected output 352
console.log(arr.join(''));