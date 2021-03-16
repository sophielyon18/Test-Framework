const assertEquals = (val1, val2) => {
    if(Array.isArray(val1)) {
    if(val1[val1.length - 1] === val2) {
console.log(true)
return true
    } else {
        console.log(false)
        return false
    }
} else {
    if(val1 === val2) {
        console.log(true)
        return true
        } else {
            console.log(false)
            return false
        }
    }
}


module.exports = assertEquals;