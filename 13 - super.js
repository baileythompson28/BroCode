class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(){
        console.log(`the ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.runSpeed = swimSpeed;
    }

    swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.runSpeed = flySpeed;
    }

    fly(){
        console.log(`this ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Rabbit("fish", 3, 12);
const hawk = new Rabbit("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();