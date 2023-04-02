function showRoadMap(topic1, topic2, topic3, topic4) {
    console.log(`First learn ${topic1}`)
    console.log(`Then learn ${topic2}`)
    console.log(`Next learn ${topic3}`)
    console.log(`At last learn ${topic4}`)
}

let topicsList = ["JavaScript", 'Java', 'React', 'Python']

//without spread op
// showRoadMap(topicsList[0],topicsList[1],topicsList[2],topicsList[3]);

//with spread op
showRoadMap(...topicsList)

//so SO basically enters/unpacks all the elements of the array into anything
console.log(...topicsList)

//joinng arrays
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
const combinedArray = [...num1, ...num2]
console.log(combinedArray)

//Rest operator is same as spread, but it's used in the last param

let study = ['python', 'js', 'ML', 'DSA', 'Git'] //eg1
const [mon1, mon2, ...remainingSubList] = study;
console.log(mon1)
console.log(mon2)
console.log(remainingSubList)
const [subjectrandom] = study //returns first item of the list
console.log(subjectrandom)

//eg2 create list of taxprices after passing tax rate and the array elements to a func
function addTaxToAmount(taxRate,...pricesBought){
    return pricesBought.map(price=> taxRate*price)
};
const taxedPrices = addTaxToAmount(1.8,20,30,80,120) //so after the first arg, whatever comes next will become part of pricesbought
console.log(taxedPrices)



                                        //Using it on Obj

let objMain = {
    key: 1,
    value: 4,
    name:"Ryo"
}

let output = {...objMain} //copies the mainObj
console.log(output)
const {name,...remObj} = objMain //take these from objMain
console.log(name) //only the name attribute
console.log(remObj) //the remaining obj
