var oneAway = function(stringOne, stringTwo) {
   
    let editCounter = 0;

    if (stringOne == stringTwo){
        return true;
    }
    
    /*if (stringOne.length !== stringTwo.length) {
        editCounter++;          
    } */

    for (var i = 0; i < stringOne.length; i++){
        for (var j = 0; j < stringTwo.length; j++){
            
            if (stringOne[i] == stringTwo[j]){
                break;
            }              
        }   
            
        if (stringOne[i] !== stringTwo[j]){
            editCounter++;
        }         
    } 

    if (editCounter <= 1)
        return true;
    else
        return false;
}

console.log(oneAway('pales', 'pale')); //true
console.log(oneAway('pale', 'ple')); //true
console.log(oneAway('pale', 'bale')); //true
console.log(oneAway('pale', 'bake')); //false
console.log(oneAway('pale', 'bakes')); //false