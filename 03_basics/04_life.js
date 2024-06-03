// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO $(name)`);
} )('komal')

