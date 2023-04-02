let a = ['x','y','z','mme']

for(i of a){
    console.log(i)
}

let b ={
    name: "salman",
    age: 21
}
//we cant iterate on obj 
// console.log(b.name)
// for(i of b){
//     console.log(i)
// } will throw error

//A for loop on array can be used to iterate over the OBJ

let bkeys = Object.keys(b); //creates list of keys
let bvalues = Object.values(b); //... of values
let bentries = Object.entries(b); //.. 2D array of key and value inside each unit key = bentries[1][1], value = benties[1][2]

console.log(bkeys)
console.log(bvalues)
console.log(bentries)

//iterate over bentries
for(i of bentries){ //access each unit
    for(j of i){    //access whats inside the unit
        console.log(j)
    }
}

//for in is used for objects

let books = {
    science: "cbse",
    math:"arihant"
}
for(key in books){
    console.log(`${key}:${books[key]}`)
}
