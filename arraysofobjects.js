'use strict';

let personA = {
  name: 'stephen',
  jobtitle: 'analyst',
};

let personB = {
  name: 'martha',
  jobtitle: 'admin',
};

let personC = {
  name: 'Gretchen',
  jobtitle: 'recruiter',
};

let peopleArray = [];

peopleArray.push(personA, personB, personC);



console.log(peopleArray.map(person => `${person.name} is a ${person.jobtitle}`));