let inputArr = [1, 9, 2, 4, 1, 2]; //should print [1, 2, 4, 9]

function removeDup(inputArr) {
    
    inputArr.sort((a, b) => a-b); //sort the array
    let currIndex = 0;


    for (var i = 1; i < inputArr.length; i++){ 
        if (inputArr[i] !== inputArr[currIndex]){ //sort array, moving the duplicates to the end of the array
            currIndex++; //keep track of where last distinct element is
            inputArr[currIndex] = inputArr[i];            
        }
    }

    for (var i = currIndex; i < inputArr.length; i++){ //delete all elements after the last distinct element
        inputArr.pop();
    }
}

removeDup(inputArr);
console.log(inputArr);

