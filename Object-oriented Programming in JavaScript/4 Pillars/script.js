/*
Object-Oriented Programming (OOP) is an approach to software development that uses objects, 
or data structures consisting of data fields and methods together with their interactions, 
to design applications and computer programs. The four pillars of OOPs allow developers to 
better manage software complexity by organizing code into objects and allowing them to interact in a structured way.
*/

// #1 Encapsulation - Encapsulation is the process of wrapping data and related functions into a single unit (object).
// Encapsulation limits access to object data and methods, preventing their misuse and ensuring their proper functioning.

//"The best function are those with no parameters"
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

// #2 Abstraction -  is the process of hiding unnecessary details of an object’s internal structure.
//  By abstracting an object’s data, its structure and behavior can be kept separate and more easily understood.

/*
Benefits:
- Simple Interface
- Reduce the Impact of Change
*/

// #3 Inheritance - is the ability to create a new class (child class) from an existing one (parent class).
// The child class typically inherits the attributes (members and methods) of the parent class, although it can also redefine them.

// #4 Polymorphism -  is the ability of an object to take on multiple forms. This allows objects of different classes to be used interchangeably,
// as long as they implement a certain interface (have methods of the same name).

/**
 # BENEFITS OF OOP

 - Encapsulation : Reduce complexity + increase reusability
 - Abstraction : Reduce complexity + isolate impact of changes
 - Inheritance : Eliminate redundant code
 - Polymorphism : Refactor ugly switch/case statement
 **/
