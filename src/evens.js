class Evens{
    constructor(num){
        this.num = num;
    }
    even(){
        let ans = 0;
        for(let i = 0; i<this.num.length; i++){
            if(num[i] % 2 === 0){
                ans++;
            }
        }
        return ans;
    }
}

module.exports = Evens; 