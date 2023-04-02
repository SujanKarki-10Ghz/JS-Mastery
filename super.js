//Super
//The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modified Eat: ${this.name} is eating`;
  }
  run() {
    return `${this.name} is running at ${this.speed}km/hr`;
  }
}

const d = new Dog("tommy", 7, 35);
console.log(d.run()); // tommy is running at 35km/hr => here name is inherited from super class
console.log(d.eat()); // Modified Eat: tommy is eating => its own method gets called
