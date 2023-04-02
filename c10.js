// Task 1: Code a Person class
class Person{
    constructor(name="Tom",age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy
    };
    sleep(){
        return this.energy+=10
    };
    doSomethingFun(){
        return this.energy-=10
    }
};

const person1 = new Person("Ryo",21,80)
console.log(person1.energy);
person1.sleep();
console.log(person1.energy);
person1.doSomethingFun();
console.log(person1.energy);

const person2 = new Person();
console.log(person2.energy);



// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name,age,energy,xp=0,hourlyWage=10){
        super(name,age,energy)
        this.xp=xp;
        this.hourlyWage = hourlyWage
    };
    goToWork(){
        return this.xp+=10
    }
};
const person3 = new Worker();
person3.goToWork();
console.log(person3.xp)

// Task 3: Code an intern object, run methods
function intern() {
    const internObj = new Worker("Bob",21,110);
    internObj.goToWork();
    return internObj
}
intern();
console.log(intern())

// // Task 4: Code a manager object, methods
function manager() {
    const managerObj = new Worker("Alice",30,120,100,30);
    managerObj.doSomethingFun();
    return managerObj
}
manager();
console.log(manager())




//ADD OPTIONAL params/ remove in sub class
//suppose baseclass params = constructor(name,age,hobby)
//of based class = constructor(degree,college, name)
//then: super(name)
//this.degree = degree;
//this.college = college