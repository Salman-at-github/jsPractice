//object n destructuring

// const man = {}
// man.age = 21;
// man.hobby = "Bowling"

// const {age} = man;
// console.log(age)

let count = 5
function recur() {
    console.log(count)
    count--
    if (count === 0) {
        return //return will terminate the recursion
    }
    else {
        recur();
    }
}

recur();