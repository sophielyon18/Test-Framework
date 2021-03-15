class Evens{
    constructor(num){
        this.num = num;
    }
    even(){
        let check = this.checkIfArray(this.num);
        if(check){
            let ans = 0;
            for(let i = 0; i<this.num.length; i++){
                if(this.num[i] % 2 === 0){
                    ans++;
                }
            }
            return ans;
        }
        else{
            throw new Error('Needs to be an array of numbers');
        }
    }
    checkIfArray(check){
        this.check = check;
        return Array.isArray(this.check);
    }
}

module.exports = Evens; 