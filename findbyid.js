'use strict';

function findById (items, idNum) {
  return items.find(object => {
    return object.id === idNum;
//second return needed because we created a SECOND function

  });
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

console.log(findById(data, 2));