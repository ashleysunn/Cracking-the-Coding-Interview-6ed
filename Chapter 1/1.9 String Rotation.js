var stringRotation = function(stringOne, stringTwo) {

    if (stringOne.length !== stringTwo.length) {
        return false;          
    } 

    var combinedStrings = stringTwo + stringTwo;

    if (combinedStrings.includes(stringOne)) {
        return true;
    }else
        return false;
};
      
console.log(stringRotation('waterbottle', 'erbottlewat')); //true
console.log(stringRotation('waterbottle', 'ottlewaterb')); //true
console.log(stringRotation('waterbottle', 'otlewattebr')); //fasle
