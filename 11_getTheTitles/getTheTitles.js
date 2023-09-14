const getTheTitles = function(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(element.title);
    });

    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
