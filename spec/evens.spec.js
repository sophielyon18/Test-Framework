const Evens = require('../src/evens');


let test, result, fail = 0, pass = 0;

const check = (num, res) =>{
    passes(num, res);
    return num === res;
}

const passes = (recieved, expected) =>{
    if(recieved === expected){
        pass++;
    }
    else{
        fail++;
    }
}
test = new Evens([]);

result = check(test.even(), 0);

console.log(result);

test = new Evens([1, 3 ,5 , 7, 9]);

result = check(test.even(), 0);

console.log(result);

console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)