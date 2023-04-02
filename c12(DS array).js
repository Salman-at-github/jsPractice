let veggies = ["potato", 'tomato','spinach','ladiesF']

//methods in array 

//forEach func based
veggies.forEach( function(item, number){
    console.log(`${number}.${item}`)
})

//using arrow func (i,j) will give item and index
veggies.forEach((i)=>{
    console.log(i)
})

//filter based on func: returns whatever satisfies the condition

let scores = [45,90,80,20,10,10,60,44]
scores = scores.filter((i)=>{
    return i>=45;
})
console.log(scores)

//map: map a func to an array

let c = [10,20,30,40,90,60]
c = c.map((i)=>{
    return i/10;
})
console.log(c)

//convert to int/str etc
let strings = ["10",'22','33','44']
let nums = strings.map((i)=>{
    return parseInt(i)
})
console.log(strings)
console.log(nums)