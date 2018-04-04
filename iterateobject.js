'use strict';

const myObj = {
  foo: 'fooFun',
  bar: 'barFun',
  fum: 'lamp',
  quux: 'waterbottle',
  spam: 'space heater!!!!!'
};

function iterateObject (obj){
  for (let key in obj){
    console.log(`${key}:${obj[key]}`);
  }
}

iterateObject(myObj);
