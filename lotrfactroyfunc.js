'use strict';

function createCharacter(charaName, charaNickname, charaRace, charaOrigin, charaAttack, charaDefense){
  return {
    name : charaName,
    nickname: charaNickname,
    race: charaRace,
    origin: charaOrigin,
    attack: charaAttack,
    defense: charaDefense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      let damageCaused = this.attack - character.defense;
      if (damageCaused < 0) damageCaused = 0;
      let damageReceived = character.attack - this.defense;
      if (damageReceived < 0) damageReceived = 0;
      console.log(`Your opponent takes ${damageCaused} and you receive ${damageReceived}`);
    }
  };
}

function addWeapon(character, charaWeapon){
  character.weapon = charaWeapon;
  character.describe = function(){
    console.log(`${this.name} is a ${this.race} from ${this.origin} and wields a ${this.weapon}.`);
  };
}
let characters = [createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth',10,6),createCharacter('Bilbo Baggins','bilbo', 'hobbit', 'the Shire',2,1), createCharacter('Frodo Baggins','frodo', 'hobbit', 'the shire',3,2), createCharacter('Aragorn son of Arathorn','aragorn', 'hooman', 'dunnedain',6,8), createCharacter('Legolas','legolas', 'elf', 'woodland realm',8,5)];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'rivendell', 50, 25));

let weaponArr = ['wizard staff','the Ring', 'String and Barrow Blade', 'Anduril', 'Bow and Arrow', 'Hadhafang'];

function completeWeapon (){
  for (let i = 0; i < weaponArr.length; i++){
    addWeapon(characters[i], weaponArr[i]);
  }
}
completeWeapon();

characters[2].describe();

characters.find( function(character) {return character.nickname === 'aragorn';}
).describe();

let hobbitsOnly = characters.filter(function (character){return character.race === 'hobbit';});
console.log(hobbitsOnly);

let mightyOnly = characters.filter(function (character){return character.attack > 5;});
console.log(mightyOnly);