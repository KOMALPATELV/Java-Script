
function sayMyName(){
    console.log("K");
    console.log("O");
    console.log("M");
    console.log("A");
    console.log("L");
}

// sayMyName()

//function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result:", result);

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please")
    return `${username} just logged in`
}

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("komal"))
console.log(loginUserMessage());