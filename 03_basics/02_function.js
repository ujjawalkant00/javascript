function calculatecartprice(val1, val2, ...num1){
    return num1
}
console.log(calculatecartprice(200, 400, 500, 2000));
//[500, 2000]
const user = {
    username: "golu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
//username is golu and price is undefined

handleObject({
    username: "sam",
    price: 1999
})
//username is sam and price is 1999

const mynewarray = [200, 400, 700]

function returnsecondvalue(getarray){
    return getarray[1]
}

//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200, 400, 700]));
//400