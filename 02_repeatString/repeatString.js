const repeatString = function(string, num) {
    let stringUpdated = '';
    if (num < 0){
        return "ERROR";
    }
    for(let i=0; i<num ; i++){
        stringUpdated = stringUpdated.concat(string) ;
    }

    return stringUpdated;

};

// Do not edit below this line
module.exports = repeatString;
