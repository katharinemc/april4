'use strict'; 

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// function helperFunction(query) {
//   return queryKeys = Object.keys(query);
// }



function findOne(arr, query) {
  let result = arr.find(character => {for (let key in query) {
    if (query[key] !== character[key]) {
      return false;
    }
  }
/// Go over "for... in" in greater depth;
  return true;}   
  );

  if (result === undefined) {
    return null;
  }
  else {
    return result;
  }
}


console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));