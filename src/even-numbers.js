class Evens {
    constructor(num) {
        this.num = num;
    }
    even() {
        let check = this.arrayCheck(this.num)
        if(check) {
            let insideCheck = this.insideArrayCheck(this.num)
            if(insideCheck) {
            let count = 0;
             for (let i = 0; i < this.num.length; i++) {
                if (this.num[i] % 2 === 0) {
                    count++;
                }
            }
            return count;
        } else {
            console.error('Is not just numbers has other shit')
            return 'Is not just numbers has other shit'
            }
        } else {
            console.error('Is not an array')
            return 'Is not an array'
        }
    }
    
    arrayCheck(arr) {
        return Array.isArray(arr)
    }
    insideArrayCheck(arr) {
        let ans = true
        let re = /[^0-9]/
        for(let i = 0; i < arr.length; i++) {
            let temp = arr[i].toString()
            if(re.test(temp)) {
                ans = false
                break
            }
        } 
        return ans
    }
}

module.exports = Evens; 