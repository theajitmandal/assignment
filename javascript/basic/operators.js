//Q1 create two constants, add them assign to a new constants
const p = 10;
const q = 5;
const r = p + q;
console.log(r);



//Check below code, output should be false by comparing. console.log the answer
const a = 10;
const b = '10';

console.log(a===b);

// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

let z = Math.random() * 6;
let f = Math.floor(z);
console.log(f);
if(f<3)
{
    console.log("Lesser than 3");
}else{
    console.log("Greater than 3");
}
