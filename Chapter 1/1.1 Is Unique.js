var checkUnique = function(checkString){

    for (var i = 0; i < checkString.length; i++){
        for (var j = i + 1; j < checkString.length; j++){
            if (checkString[i] === checkString[j]){
                return false;
            }
        }
    }
    return true;
};


console.log(checkUnique('asdfg')); //true
console.log(checkUnique('asdag')); //false
console.log(checkUnique('aa')); //false
