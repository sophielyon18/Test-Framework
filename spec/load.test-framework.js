const Evens = require('../src/even-numbers');
const assertEquals = require('./even-numbers.spec')
const pass = require('./even-numbers.spec')
const fail = require('./even-numbers.spec')

const evens = new Evens([])

const odds = new Evens([1, 3, 5, 7, 9])
const random = new Evens(123456789)
const string = new Evens('hello my name is sophie')
const mixedValues = new Evens([1, 'hi', 2])
const countsEvens = new Evens([2, 4, 6, 8, 10])
const n = new Evens(null)

assertEquals(n.even(), 'Is not an array')
assertEquals(countsEvens.even(), 5)
assertEquals(mixedValues.even(), 'Is not just numbers has other shit')
assertEquals(string.even(), 'Is not an array')
assertEquals(random.even(), 'Is not an array')
assertEquals(odds.even(), 0)
assertEquals(evens.even(), 0) 

console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)