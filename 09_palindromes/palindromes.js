
const cleanUp = function (str) {

    // Detect existance of punctuation in string using regex
    if (!!str.match(/[!.'?,:_-]/)){
        console.log('Punctuation found, cleaning up: ' + str);
        let newStr = '';

        // Find letters and append them to new string
        [...str.toLowerCase().matchAll(/[a-z]/g)].forEach((e)=>{
            newStr += e;
        });

        console.log('After cleanup: ' + newStr);
        return newStr;
    };
    return str;
}

const palindromes = function (str) {
    // -- Cleanup first --
    str = cleanUp(str);

    if (str.length <= 1){
        return true
    } else if (str.endsWith(str[0])) {
        return palindromes(str.slice(1, -1));
    } else {
        return false;
    }
}

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
