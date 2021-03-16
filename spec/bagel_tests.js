const assertEquals = require('./even-numbers.spec');
const Bagel_Order = require('../src/bagel_order');

const  first = new Bagel_Order();
const mes = 'Sorry bagel is not in stock.'

assertEquals(first.order(''), mes);
