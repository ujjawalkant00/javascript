//singleton

//object literals

const mySym = Symbol("key1")

const jsuser = {
 name: "ujjwal",
mySym: "mykey1",
 age : 21,
 location : "bihar",
 email :  "ukant864@google.com",
isloggedIn : false,
LastLoginDays: ["Monday", "wednesday"]
}


console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["name"]);
console.log(jsuser["mySym"]);
console.log(typeof jsuser.mySym);

/*ukant864@google.com
ukant864@google.com
ujjwal
mykey1
string*/ 
//if we add square bracker[] in line 9 than value chaged(o/p)

jsuser.email = "ujawl@myai.com"
//Object.freeze(jsuser)
jsuser.email = "ujawl@homies.com"
//console.log(jsuser);

/*{
  name: 'ujjwal',
  mySym: 'mykey1',
  age: 21,
  location: 'bihar',
  email: 'ujawl@myai.com',
  isloggedIn: false,
  LastLoginDays: [ 'Monday', 'wednesday' ]
}*/

jsuser.greeting = function(){
    console.log("hello JS user")
    };
jsuser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`)
};
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
/*hello JS user
undefined
hello JS user ujjwal
undefined*/
//we need to comment the freeze line line no 32