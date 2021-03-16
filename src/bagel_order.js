class Bagel_Order{
    constructor(){
        this.basket = [];
    }
    order(bagel){
        if(/^\s+$/.test(bagel) || /^[^a-zA-Z]+$/.test(bagel)){
            return 'Sorry bagel is not in stock.';
        }
        else{
            this.basket.push(bagel);
        }
    }
}


module.exports = Bagel_Order;
