function sayMyname(){
console.log("U");
console.log("J");
console.log("J");
console.log("A");
console.log("W");
console.log("A");
console.log("L");
}

//sayMyname()

/*function addTwoNumbers(number1, number2){//here number1 and number2 are parameter
   console.log(number1 + number2);
    }*/

function addTwoNumbers(number1, number2){//here number1 and number2 are parameter
   return number1 + number2
}
   /* let result= number1 + number2
    return result
    }*/

//Result: 8
//addTwoNumbers(3, 4)// here 3 and 4 are argument

const result = addTwoNumbers(3, 5)

//console.log("Result:", result);
//8
//Result: undefined

function loginusermessage(username = "aman"){
    if(!username){  //(username === undefined (same))
        console.log("please enter a username");
        return
    }

    return`${username} just Logged in`
}

// console.log(loginusermessage("ujjawal"));
//ujjawaljust Logged in
console.log(loginusermessage("shubham"));
 //undefinedjust Logged in
 //shubham just Logged in