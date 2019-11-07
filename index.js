// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Blueprint for creating Student objects
class Student {
  constructor(id, name, surname, mejor) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.mejor = mejor;
  }
  // Creating object method (anonymous function) and assigning it to a variable
  greeting = function() {
    console.log(`Welcome ${name} ${surname}. You were assigned ID ${id} and we have noted your mejor as ${mejor}.`)
  }
  // Named function functioning as object method need to use this before the parameters
  anotherGreeting() {
    console.log(`This is another greeting for ${this.name} ${this.surname}. You were assigned ID ${this.id} and we have noted your mejor as ${this.mejor}.`);
  }
}

// Creating new object that inherits Student properites - prototypal inheritance
const john = new Student('6612B', 'John', 'Smith', 'Science');
console.log(john);


// Adding new property which is not inherited from Student class
john.year = 2019;
console.log(john);
// Checks if the choosen property is inherited or not
console.log(john.hasOwnProperty('year')); // true

// Invoking object method
john.greeting();

john.anotherGreeting();

/*
// Iterate through object keys
Object.keys(john).forEach((key,index) => {
    // key: the name of the object key
    console.log(key);
    // index: the ordinal position of the key within the object 
    console.log(index);
});

for (const key of Object.entries(john)) { 
  console.log(key);
}

// Iterate through object values
Object.values(john).forEach(value => {
  console.log(value);
})

for (const value of Object.values(john)) { 
  console.log(value);
}
*/





