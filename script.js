// STEP 1 -> CREATE PERSON CLASS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// You create an instance of the Person class with the
// name "Alice" and age 25, and call the greet method.
// The expected console output is: Hello, my name is Alice, I am 25
//  years old.

const p1 = new Person("Alice", 25);
p1.greet();

// Next, you create an instance of the Employee class with the name "Bob",
// age 30, and job title "Manager", and call the jobGreet method.
// The expected console output is: Hello, my name is Bob, I am 30 years old,
// and my job title is Manager.

const Emp = new Employee("Bob", 30, "Manager");
Emp.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
