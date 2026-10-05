const person1 = {
    name: "spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`hi, i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`hi, i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

