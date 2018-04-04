'use strict';

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

keyDeleter(sampleObj);
console.log(sampleObj);