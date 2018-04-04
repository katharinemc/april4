'use strict';

function enrollInSummerSchool (data){
  // let result = [];
  data.forEach(function(student){
    student.status = 'In Summer school';
  });
  return data;
}

let students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

console.log(enrollInSummerSchool(students));