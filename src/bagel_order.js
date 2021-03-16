class Bagel_Order{
    constructor(){
        this.basket = [];
    }
    order(bagel){
        this.bagel = bagel
        if(/^\s+$/.test(this.bagel)){
            return 'Sorry bagel is not in stock.';
        }
        else{
            this.basket.push(this.bagel);
            return this.basket
        }
    }
    remove(bagel) {
        this.bagel = bagel
        let index = this.basket.indexOf(this.bagel)
        if(index === undefined) {
            console.error('You never ordered this')
            return 'You never ordered this'
        } else {
            this.basket.splice(index, 1)
            return this.basket
        }
    }
}

module.exports = Bagel_Order;
