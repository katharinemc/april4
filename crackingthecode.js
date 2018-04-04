'use strict';

let cipher = {
  a:	2-1,
  b:	3-1,
  c:	4-1,
  d:	5-1,

  //is there a more elegant way to find index?
};

const decode = str => str.split(' ').map(word => {
  switch (word[0]) {
  case 'a':
    return word[cipher.a];
  case 'b':
    return word[cipher.b];
  case 'c':
    return word[cipher.c];
  case 'd':
    return word[cipher.d];
  default:
    return ' ';  
  }
}).join('');

function decodeWords(str) {
  return decode(str);
}

let str ='craft block argon meter bells brown croon droop';
console.log(decodeWords(str));
