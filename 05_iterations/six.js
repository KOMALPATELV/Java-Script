//const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( (item) => {
    // console.log(item);
//    return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const  newNums = myNums.filter( (num) => {
//    num > 4
// } )

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);


const books = [
    { title: 'book One', genre: 'Fiction', publish: 1981,
	edition: 2004 },
	{ title: 'book Two', genre: 'Non-Fiction', publish: 2001,
	edition: 2009 },
	{ title: 'book Three', genre: 'History', publish: 2005,
	edition: 2008 },
	{ title: 'book Four', genre: 'Non-Fiction', publish: 1999 ,
	edition: 2011 },
	{ title: 'book Five', genre: 'Science', publish: 2009,
	edition: 2013 },
	{ title: 'book Six', genre: 'Fiction', publish: 2008,
	edition: 2012 },
	{ title: 'book Seven', genre: 'History', publish: 2013,
	edition: 2016},
	{ title: 'book Eight', genre: 'Science', publish: 2015,
	edition: 2017 },
	{ title: 'book Nine', genre: 'Non-Fiction', publish: 2016,
	edition: 2018 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 2013 && bk.genre === "History" 
} )
console.log(userBooks);