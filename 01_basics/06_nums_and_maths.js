const score = 400
console.log(score);

//400
const balance = new Number(100.00)
console.log(balance);
//[Number : 100]

console.log(balance.toString().length);
//3

console.log(balance.toFixed(2));

const othernumber = 23.545
console.log(othernumber.toPrecision (3));
//23.5

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); 
//1,00,000
console.log(hundreds.toLocaleString()); 
//100,000

//____________MATHS______________

console.log(Math);
console.log(Math.abs(-4));
//4
console.log(Math.round(4,6));
//6
console.log(Math.ceil(4,9));
//4
console.log(Math.floor(4,8));
//4
console.log(Math.max(2,4,5,57,8));
//57
console.log(Math.min(15,8,54,5,5,45));
//5


console.log(Math.random());
//value lies between 0 and 1 like 0.554545747457
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);
//0.3675764064789335
10.875527157935348
7
10