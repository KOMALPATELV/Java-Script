class User {
    constructor(name, age) {
        this.name = name;
    }

    // Correct method syntax
    getUserDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const user = new User('komal');
console.log(user.getUserDetails());

console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

const promiseOne = new Promise()
const date = new Date()

function User(username,loginCount, isLoggedIN) {
     this.username = username;
     this.loginCount = loginCount;
     this.isLoggedIN = isLoggedIN;

     return this
}

const userOne = user("komal",12, true)
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne);

