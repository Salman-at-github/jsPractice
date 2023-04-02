//Getters n Setters mainly used for accessing private (this._whatever) properties of a class, getter allows access while setter can add validation [this.property is the field while this.property=(property) is the parameter]
//By using a getter and setter for age, we can ensure that any updates to the age property are done in a controlled way, and that we can perform additional validation or manipulation on the data before setting the property. This helps ensure the integrity of the object's data and prevents unauthorized access or modification.

//In short, set get works only when modifying the obj data, not during creation through constructor, so we can create an instance = new Class with name as number, but we cant 'instance.name = number'

class SecretAgent {
    constructor(name, age, location) {
        this._name = name;
        this._age = age;
        this._location = location;
    };
    indentifyOne() {
        console.log(`Agent ${this._name} is ${this._age} years old, operating in ${this._location}.`)
    };
    get name() { //get is like a func method, only diff is that we can call it without (), eg, instance.greet is better than instance.greet() which is method.
        return this._name;
    }
    set name(name) { //added validator so that name != number
        if (typeof (name) === 'string') {
            this._name = name;
        }
        else {
            console.log("Name must be a string!")
        }
    }
};
const agent1 = new SecretAgent("Tiger", 55, "Bangalore")
// console.log(agent1.name)

const agent2 = new SecretAgent(55, 22, "Delhi");
agent2.name = 445 //In short, set get works only when modifying the obj data, not during creation through constructor, so we can create an instance = new Class with name as number, but we cant 'instance.name = number'

console.log(agent2.name)