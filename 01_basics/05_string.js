const name = "golu"
const age = "20"

//console.log(name + age );

console.log(`hello my name is${name} and my age is ${age}`);

const collegename = new String('ujjawl-kan-singh');

console.log(collegename[0]);
//this o string is used for find the the letter at 0 position

console.log(collegename.__porto__);

console.log(collegename.length);
console.log(collegename.toUpperCase());
//touppercase is used to change in uppercase(capital)letter

console.log(collegename.charAt('3'));
//this is used to what character on given index 3

console.log(collegename.indexOf('l'));
//this is used to find the index with the help of the character

const newString = collegename.substring(0,4)
console.log(newString);
//here we give new string just for
//substring used to divide the string

const anotherString = collegename.slice(-7,4)
console.log(anotherString);
//this is same as substring but this also follow negative value

const anotherStringOne ="  dj  "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());
//trim is used dor remove and delete the extra space
//trimstr is used to starting space deletion and trimend id used for endind space deletion

const url = "https://golu.com/golu%20singh"
console.log(url.replace('%20','-'));
console.log(url.include('rathore'));
//replace is used for substitute
//include is used for check wheather it is present or not

const newone = "my name is singh"
console.log(newone.split(' '));
//split is used to split with the help of given like space



 

