class Programmer{
    //constuctor to add params
    constructor(name,age,language,skills) {
        this.name = name;
        this.age = age;
        this.language = language;
        this.skills = skills
    };
    //eg of a class method (a func)
    giveIntro(){
        console.log(`${this.name} is ${this.age} years old and has ${this.skills} skills with ${this.language} language.`)
    }
}

//create new instances
const person1 = new Programmer("Salman",21,"Python",4);
const person2 = new Programmer("Harry",21,"Java",20);

//calling the class method
person1.giveIntro();
person2.giveIntro();

//comparing
if(person1.skills>person2.skills){
    console.log(`${person1.name} is more proficient than ${person2.name}`)
}
else{
    console.log(`${person2.name} is more proficient than ${person1.name}`)

}

