var palinPermute = function(str) {
    
    let hash = {};
    let charCount = 0;


    for (let i = 0; i < str.length; i++){
        let currChar = str[i];

        if (currChar === ' '){
            continue;
        }
        
        if (hash[currChar]){
            delete hash[currChar];
        } else{
            hash[currChar] = true;
        }
        charCount++;
    }

    if (charCount % 2 === 0){
        return Object.keys(hash).length === 0;
    } else{
        return Object.keys(hash).length === 1;
    }

};

console.log(palinPermute('tact coa')); //true
console.log(palinPermute('taco cate')); //false
console.log(palinPermute('atco acta')); //false