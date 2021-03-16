const test = require('./bagel.spec');
const Bagel_Order = require('../src/bagel_order');

const mes = 'Please order a bagel.'
const mistake = 'You never ordered this'
const already = 'You have already ordered this'
const serve = 'We don\'t serve that'
const full = 'Basket is full please proceed to checkout';

const  first = new Bagel_Order();
const remove = new Bagel_Order()
let order = remove.order('poppyseed')

test.assertEquals(order, 'poppyseed')
test.assertEquals(remove.remove('poppyseed'), undefined)
test.assertEquals(first.order(' '), mes);
test.assertEquals(first.order('chelsea bun'), serve);
test.assertEquals(first.order('poppyseed'), 'poppyseed');
test.assertEquals(first.order('poppyseed'), already);
test.assertEquals(first.remove('cinamon'), mistake);
test.assertEquals(first.order('cinamon'), 'cinamon');
test.assertEquals(first.order('blueberry'), 'blueberry');
test.assertEquals(first.order('onion'), 'onion');
test.assertEquals(first.order('plain'), 'plain');
test.assertEquals(first.order('seeded'), full);
test.assertEquals(first.total(), 24);
test.result();

