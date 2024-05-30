// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocalString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 4, 30);
// let myCreatedDate = new Date(2024, 4, 30, 5,3)
// let myCreatedDate = new Date("2024-05-29")

let myCurrentDate = new Date("2024-05-29");
// console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
})


newDate.toLocaleDateString


