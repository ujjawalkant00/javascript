const user = {
    username: "ujjawalsingh",
    price: 199,

    welcomemessage: function() {
        console.log((`${this.username}, welcome to website`));
        console.log(this);
        
    }
}
    /*user.welcomemessage()
     user.username = "golusingh"
     user.welcomemessage()*/

     //console.log(this);

     /*function tree() {
         let username = "aman"
         console.log(this.username);
         
     }
      tree()
     o/p: undefined*/

     /* const tree = function () {
        let username = "rohit"
        console.log(this.username);
        }

         tree()
         o/p: undefined*/

       /*  const tree =  () => {
        let username = "rohit"
        console.log(this.username);
        }

        tree()

        o/p: undefined*/

      /* const addtwo = (num1, num2)  => {
            return(num1 + num2)
        }
       console.log(addtwo(3, 4));*/
    
     /*  const addtwo = (num1, num2)  =>(num1 + num2)
        
        console.log(addtwo(3, 4));*/

        /* const addtwo = (num1, num2)  => num1 + num2
         console.log(addtwo(3, 4));*/

         const addtwo = (num1, num2)  => ({username: "ram"}) 
         
         console.log(addtwo(3, 4));