'use strict';

function createMyObject() {
  let obj= {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'hello';
    },
  };
  
  console.log(obj); 
  return obj;
}


createMyObject();