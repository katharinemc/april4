'use strict';

function makeStudentReport(data) {
  let personGradeArray=[];
  data.forEach( function(person)
  {personGradeArray.push(`${person.name}: ${person.grade}`);
//Why can't we use "this.name" and "this.grade?"

  });
  return personGradeArray;
}


console.log(makeStudentReport([{name: 'Johnny Robot', grade: 'C'}, {name: 'Marina D', grade: 'A+'}, {name: 'Katharine M', grade: 'A+'} ]));
// [{name: 'Johnny Robot', grade: 'C'} ] 

// Iterate over array of objects;
// For each object create string with key and value
// Push string into new array
// Return new array