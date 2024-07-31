const leapYears = function(year) {
    if (year % 4 === 0){
        if (year % 100 === 0 && !(year % 400 === 0)){
            return false;
        }
        return true;
    }
    return false;
};

// if div by 4:
//  if div by 100 but not by 400 : not leap year
//  else : leap year

// Do not edit below this line
module.exports = leapYears;


