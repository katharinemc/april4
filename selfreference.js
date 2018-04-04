'use strict';

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function nameConcatenator() {
      return `${this.firstName} ${this.lastName}`;
    }
    ,
  };
  return person;
}

let myObj =  personMaker();
console.log(myObj.fullName());

//Why if in the wild a dev didn't know that the key fullName had a value of function?  How would you know that it needs parentheticals?