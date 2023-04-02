class Animal {
    constructor(name) {
        this.name = name;
    };
    eat() {
        console.log(`${this.name} eat animals/plants.`)
    }
};

class Carnivore extends Animal {
    eat() {
        console.log(` Carnivore ${this.name} eats other animals.`) //so we override the eat method of base class, however we get the different results for same eat method of sub classes. This means the same method was overridden, and is taking different values depending on the class. This is polymorphism
    }
};
class Herbivore extends Animal {
    eat() {
        console.log(` Herbivore ${this.name} eats only plants or fruits.`)
    }
}

const mammal = new Animal("Reptiles");
mammal.eat();

const lion = new Carnivore("Lion");
lion.eat();

const monkey = new Herbivore("Monkey");
monkey.eat();

const date = new Date();