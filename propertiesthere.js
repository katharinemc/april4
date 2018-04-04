'use strict';

let personA = {
  name: 'stephen',
  jobtitle: 'analyst',
  boss: 'martha',
};

let personB = {
  name: 'martha',
  jobtitle: 'admin',
  boss: 'Gretchen',
};

let personC = {
  name: 'Gretchen',
  jobtitle: 'recruiter',
};

let peopleArray = [personA, personB, personC];

function whoIsYourBoss (arr){
  arr.map(function(person){ if (!person.hasOwnProperty('boss')) {
    console.log(`${person.jobtitle} ${person.name} doesnt report to anybody.`);
  }
  else {
    console.log(`${person.jobtitle} ${person.name} reports to ${person.boss}`);
  }
  });
}
whoIsYourBoss(peopleArray);
//console.log(peopleArray.map(person => `${person.name} is a ${person.jobtitle}`));