const assertEquals = require('./bagel.spec');
const Bagel_Order = require('../src/bagel_order');

const  first = new Bagel_Order();
const mes = 'Sorry bagel is not in stock.'
const mistake = 'You never ordered this'
const remove = new Bagel_Order()
let order = remove.order('poppyseed')

assertEquals(order, 'poppyseed')
console.log(order)
assertEquals(remove.remove('poppyseed'), undefined)
assertEquals(first.order(' '), mes);