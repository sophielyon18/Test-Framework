const Evens = require('../src/evens');


let test, fail = 0, pass = 0, testcase = 0;

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

check(test.even(), 0);

test = new Evens([1, 3 ,5 , 7, 9]);

check(test.even(), 0);

test = new Evens('Hi');

check(test.even(), Error('Needs to be an array of numbers'));

test = new Evens(123);

check(test.even(), Error('Needs to be an array of numbers'));
console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)
