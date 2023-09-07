const removeFromArray = function(arguments1, arguments2) {

    let array = [];
    let toSkip = [];
    let toReturn = [];

    for (item of arguments[0]){
        array.push(item);
    }

    for (let i = 1; i < arguments.length; i++){
        toSkip.push(arguments[i]);
    }
    
    for (item of array) {
        
        let shouldSkip = false;
        console.log("Resetting skip status: " + shouldSkip);

        for (skip of toSkip) {
            if (item === skip){
                console.log("Skipping: " + item)
                shouldSkip = true;
                console.log("Changing skip status: " + shouldSkip);
                continue;
            }
        };

        console.log("Current skip status: " + shouldSkip);
        if (shouldSkip === false){
            console.log("Adding: " + item)
            toReturn.push(item);
        };
    }

    return toReturn;
    
};
console.log("New array: " + removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
