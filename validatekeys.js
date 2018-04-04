'use strict';

function validateKeys (object, expectedKeys) {
  let currentKeys = Object.keys(object);
  if (currentKeys.length !== expectedKeys.length) return false;
  expectedKeys.map(function(key){
    if (!(key in object)) return false;
  });
  return true;
}



const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};


const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys=['id','name','age','city'];

console.log(validateKeys(objectB, expectedKeys));