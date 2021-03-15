const Evens = require('../src/evens');


let test, result, fail = 0, pass = 0, testcase = 0;

const check = (num, res) =>{
    passes(num, res);
    print(num === res); 
}

const passes = (recieved, expected) =>{
    if(recieved === expected){
        pass++;
    }
    else{
        fail++;
    }
}

const print = (res) =>{
    console.log(`Testcase ${testcase}: ${res}`);
    testcase++;
}

test = new Evens([]);

result = check(test.even(), 0);

test = new Evens([1, 3 ,5 , 7, 9]);

result = check(test.even(), 0);

console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)
