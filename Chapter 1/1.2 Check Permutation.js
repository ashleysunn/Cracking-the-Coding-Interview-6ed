var permute = function(stringOne, stringTwo) {

  if (stringOne.length !== stringTwo.length) {
    return false;
    
  } else {
    var sortStringOne = stringOne.split('').sort().join('');
    var sortStringTwo = stringTwo.split('').sort().join('');
    //console.log(sortStringOne);
    //console.log(sortStringTwo);
    return sortStringOne === sortStringTwo; //return true if stringOne equals stringTwo
  }
};

console.log(permute('good', 'gold')); //false
console.log(permute('daf', 'fda')); //true
console.log(permute('abaa', 'aba')); //fasle
