// Immediately Invoked Function Expression (IIFE)

/*function git(){
    console.log(`DB CONNECTED`)
}()
git();

op: DB CONNECTED*/

(function git(){
    //NMAED IIFE
    console.log(`DB CONNECTED`)
})();

( () =>{
    console.log(`DB CONNECTED TWO`);
    
})();

((name) => {
    ///SIMPLE IIFE
    console.log(`DB CONNECTED THREE ${name}`);
    
})("bipul")

//HERE NAME ARE THE PARAMETER
