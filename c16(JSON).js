//JSON is basically a string containing an object without any functions or comments as json objects shouldn't have methods


                        // CONVERSION: JSON str to norman Obj (JSON.parse) 

let jsonStr = '{"greeting":"Hello there"}';
console.log(jsonStr)

const normalObj = JSON.parse(jsonStr)
console.log(normalObj)


                    //CONVERSION: normal obj to JSON string (JSON.stringify)

const normalObj2 = {
    Name : "Salman",
    Age: 21,
    Language: "Python" 
}
console.log(normalObj2)

const jsonStr2 = JSON.stringify(normalObj2)
console.log(jsonStr2)

//so json str also removes the \n from the obj