let options = {'cinamon': 9, 'poppyseed': 1, 'onion': 3, 'plain': 6, 'seeded': 1, 'blueberry': 5}


class Bagel_Order{
    constructor(basket_capacity = 4){
        this.basket = [];
        this.basket_capacity = basket_capacity;
        console.log('We have: cinamon bagel: 9, poppyseed: 1, onion 3, plain 6, seeded: 1 or blueberry: 5')
    }
    
    order(bagel){
        this.bagel = bagel
        if(/^\s+$/.test(this.bagel)){
            return 'Please order a bagel.';
        }
        else{
            if(this.check(this.bagel)){
                if(this.basketsize()){
                    for(let i = 0; i<this.basket.length; i++){
                        if(this.basket[i] === this.bagel){
                            console.error('You have already ordered this');
                            return 'You have already ordered this';
                        }
                    }
                    this.basket.push(this.bagel);
                    return this.basket;
                }
                else{
                    console.error('Basket is full please proceed to checkout');
                    return 'Basket is full please proceed to checkout';
                }
            }
            else{
                console.error('We don\'t serve that');
                return 'We don\'t serve that';
            }
        }
    }
    
    remove(bagel) {
        this.bagel = bagel
        if(this.basket.includes(this.bagel)){
            let index = this.basket.indexOf(this.bagel);
            this.basket.splice(index, 1)
            return this.basket
        }
        else {
            console.error('You never ordered this')
            return 'You never ordered this'
        }
    }
    
    total(){
        let price = 0;
        for(let i = 0; i<this.basket.length; i++){
            price += options[this.basket[i]];
        }
        return price;
    }
    
    check(bagelorder){
        this.checking = bagelorder;
        if(this.checking in options){
            return true;
        }
        return false;
    }

    basketsize(){
        if(this.basket.length <= this.basket_capacity){
            return true;
        }
        return false;
    }
    
}

module.exports = Bagel_Order;
