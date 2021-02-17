function urlify(str, ln){
    
    var splitStr = str.split(''); 

    for (var i=0; i < ln; i++) { 
        if(splitStr[i] == " ") { 
            splitStr[i] = "%20";
        }        
      }

    return (splitStr).join('');
};


console.log(urlify('Mr John Smith      ', 13)); //Mr%20John%20Smith

