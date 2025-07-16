// DATES

let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 
 /*Wed Jul 16 2025 11:10:09 GMT+0000 (Coordinated Universal Time)
Wed Jul 16 2025
7/16/2025, 11:10:09 AM*/
 console.log(typeof myDate);
 //object

 //let myCreatedDate = new Date(2025 ,2 ,5)
 console.log(myCreatedDate.toDateString());
 //Wed Mar 05 2025

 //let myCreatedDate = new Date(2025 ,2 ,5 , 9 ,7)
  console.log(myCreatedDate.toLocaleString());
  //3/5/2025, 9:07:00 AM

  let myCreatedDate = new Date("2024-01-2")
console.log(myCreatedDate.toLocaleString());
//1/2/2024, 12:00:00 AM

// let myCreatedDate = new Date("2-01-2025")
 console.log(myCreatedDate.toLocaleString());
 //2/1/2025, 12:00:00 AM

 let mytimestamp = Date.now()
 console.log(mytimestamp);
 console.log(myCreatedDate.getTime());
 //1752665681357
//1738368000000
  console.log(Math.floor(Date.now()/1000));
 //1752665848

 let newdate = new Date()
 console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());
newdate.toLocaleDateString('default',{
    weekday: "long",
   })

/*2025-07-16T11:48:33.268Z
7
16*/