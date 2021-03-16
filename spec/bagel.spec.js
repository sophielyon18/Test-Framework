let pass = 0, fail = 0;

const assertEquals = (val1, val2) => {
    if(Array.isArray(val1)) {
        if(val1[val1.length - 1] === val2) {
            print(true);
        } 
        else {
            print(false)
        }
    } 
    else {
        if(val1 === val2) {
            print(true);
        } 
        else {
            print(false);
        }
    }
}
const print = (ans) =>{
    count(ans);
    console.log(ans);
}

const count = (ans) =>{
    if(ans){
        pass++;
    }
    else{
        fail++;
    }
}

const result = () =>{
    console.log(`Number of passes: ${pass}. Number of fails: ${fail}.`);
}


module.exports.assertEquals = assertEquals;
module.exports.result = result;

