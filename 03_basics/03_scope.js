const { useReducer } = require("react");


let a = 80

if (true) {
let a = 10
const b = 20
//console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "ujjawal"

    function two(){
        const website = "git"
     //   console.log(username);
        
    }
    //console.log(website);

    two()
    
}

//one()

if (true) {
    const username = "golu"
    if (username === "golu") {
        const website = " github"
       // console.log(username + website);
         }
    //console.log(website);
    
}
//console.log(username);


//____________INTERESTING____________

console.log(addone(6))
function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 2 
}
