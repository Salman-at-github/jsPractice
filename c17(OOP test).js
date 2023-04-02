// //So we need to use super() in every class if we want to acess this.any property of any derived class
class Animal {
};

class Dog extends Animal {
    constructor() {
        super();                 //without this it will be reference error
        this.noise = "bark";
    }
    makeNoise() {
        return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}
var result = new Wolf();
console.log(result.makeNoise())


//other tests
const [a,b] = [1,2,3,4]
console.log(b)

let c = ['he','me',null]
console.log(c.length)