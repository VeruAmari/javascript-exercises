const sumAll = function(firstNum, lastNum) {
    // Setup variable to store updated result
    let result = 0;

    if ( !(Number.isInteger(lastNum)) || !(Number.isInteger(firstNum)) || firstNum < 0 || lastNum < 0 ) {
        return "ERROR"
    }

    if (firstNum < lastNum){ 
        // Sum all integer nums
        for (let i = firstNum; i <= lastNum; i++){
            result += i;
        };
    }
    else {
        for (let i = lastNum; i <= firstNum; i++){
            result += i;
        };
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
