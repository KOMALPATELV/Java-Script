// var c = 300
let a = 300 
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}




// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "komal"

    function two(){
        const website = "patel"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "komal"
    if (username === "komal") {
        const website = " patel"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++  interesting ++++++++++++++++


function addone(num){
    return num + 1
}

addone(5)

