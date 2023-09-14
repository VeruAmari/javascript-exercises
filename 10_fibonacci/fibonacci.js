const fibonacci = function(fib) {
    // Base cases
    fib = +fib;
    if (fib < 0) {
        return 'OOPS'
    } else if (fib === 1) {
        return 1;
    } else if (fib === 0) {
        return 0;
    }

    // Start recursion
    return fibonacci(fib - 1) + fibonacci(fib - 2);
};

// Do not edit below this line
module.exports = fibonacci;
