//const tinderuser = new Object()
//console.log(tinderuser);
//{} empty
const tinderuser = {}
//console.log(tinderuser);
//{}
tinderuser.id = "123abc"
tinderuser.name = "crey"
tinderuser.isLoggedIn = false

//console.log(tinderuser);
const regularuser ={
    email: "sonme@gmail.com",
    fullname: {
        userfullname:{
            firstname:"ujjawal",
            lastname: "kant"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);
//ujjawal

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = Object.assign({}, obj1, obj2, obj4 )
//const obj3 = Object.assign( obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//all the above three const give the same value

const users = [
    {
        
    },
    {
        id: 1, 
        email: "hihf@gmail.com"
    },
    {
        id: 1, 
        email: "hihf@gmail.com"
    },
    {
        id: 1, 
        email: "hihf@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
/*{ id: '123abc', name: 'crey', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'crey', false ]
[ [ 'id', '123abc' ], [ 'name', 'crey' ], [ 'isLoggedIn', false ] ]
true*/