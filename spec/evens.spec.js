Evens = require('../src/evens')

let evens, result;

const check = (num, res) =>{
    return num === res;
}

evens = new Evens([]);

result = check(evens, 0)

console.log(result);

