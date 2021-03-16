let testCases = 0, pass = 0, fail = 0;

/*let request = [];

process.argv.forEach((val) => {
    console.log(val);
  });*/

const assertEquals = (val1, val2) => {
    print(val1 === val2)
    passes(val1, val2)
}

const print = (result) => {
    console.log(`testCase ${testCases}; ${result}`)
    testCases++
}

const passes = (recieved, expected) => {
if(recieved === expected) {
    pass++
} else {
    fail++
}
}

//console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)

module.exports = assertEquals, fail, pass;