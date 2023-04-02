// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){
    for(item of dairy){
        console.log(item);
    }
}

logDairy();
// Task 2

const animal = {
    canJump: true
    };
    
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(){
    let data = Object.entries(bird)
    for(unit of data){
        console.log(`${unit[0]}:${unit[1]}`)
    }
}
birdCan();


// Task 3

function animalCan(){
    for(prop in  {...bird,...animal}){
        console.log(`${prop}:${{...bird,...animal}[prop]}`)
    }
}
animalCan();