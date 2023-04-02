// var global = 77;
// function scopeTest(){
//     var local = 88;
// }
// console.log(global)

function meal(animal){
    animal.food = animal.food + 10
};
var dog = {
    food:10
};
meal(dog); //so every time the func is called, dog.food will +10
meal(dog);
meal(dog);
console.log(dog.food)