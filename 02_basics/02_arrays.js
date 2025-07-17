const marvel_heros = ["thor", "spiderman", "ironman"]
const Dc = ["superman", "flash", "batman"]

marvel_heros.push(Dc)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
/*[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]
flash*/

const alheros = marvel_heros.concat(Dc)

console.log(alheros);

//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]
//for this type of structured we need to remove the push opeartion
const all_new_heros= [...marvel_heros, ...Dc];
console.log(all_new_heros);

 //[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ] this is spread syntax

 const another_array = [1, 2, 3, [4, 5, 6] , 7,  [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
 
/*1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5*/


console.log(Array.isArray("ujjawal"))
console.log(Array.from("ujjawal")) 
/*false
[
  'u', 'j', 'j',
  'a', 'w', 'a',
  'l'
]*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//[ 100, 200, 300 ]