const reverseString = function(string) {
    if (!string) {return ""}
    string = String(string);
    
    let newString = "";

    for (let i = (string.length -1); i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};
console.log (reverseString("123"))
// Do not edit below this line
module.exports = reverseString;
