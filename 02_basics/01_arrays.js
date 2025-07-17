//  ARRAYS

const myArr = [ 0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "iron man"]

const myArr2 = new Array(1, 12, 4)
console.log(myArr[0]);


//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
-/*[
  0, 1, 5, 4,
  7, 8, 6, 7
]*/

myArr.unshift(9)
//add at first position

myArr.shift(5)
//remove the unshift data by isinf shift and if we not  using unshift at that rime than remove the first data of the array

console.log(myArr.includes(9)); //boolean output false
console.log(myArr.indexOf(9));  //-1

console.log(myArr.indexOf(3)); //find at what position your data is

const newArr = myArr.join() 

console.log(myArr);
console.log(typeof newArr);//string

//slice slice

console.log("A" ,myArr);

const myn1 = myArr.slice(1, 3)//range not included like before 3 whatever array will be output

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)//range also included in aplice like 3
console.log(myn2);

/*A [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]*/