
var stringCompression = function(str) {

    let out = '';
    let count = 1;

    for (var i = 0; i < str.length; i++){
        let cur = str[i];
        let next = str[i + 1];

        if (cur === next){
            count++;
        } else{
            out += cur + count;
            count = 1;
        }
    }
    return out.length < str.length ? out : str;
};

console.log(stringCompression('aabcccccaaa')); //a2b1c5a3
console.log(stringCompression('ab')); //ab
