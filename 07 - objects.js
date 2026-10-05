const person1 = {
    firstName: "spongebob", 
    lastName: "squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("hi, im spongebob")},
    eat: function(){console.log("im eating a crabby patty")},
}

const person2 = {
    firstName: "patrick", 
    lastName: "star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("hey, im patrick...")},
    eat: () => console.log("im eating roast beef, chicken , and pizza"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();