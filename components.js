class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    getDetails()
    {
        console.log(`Hi my name is ${this.name} and iam ${this.age} years old.`);
    }
}

module.exports = Person;