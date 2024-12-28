const calculate = function(a,b, callback){
    return callback(a,b)
}

function sum(a,b){
    // console.log(a+b);
    return a + b
}

const result = calculate(10,20,sum)
console.log(result);

 

//

function calculate2(a,b){
    function sum(param1 , param2){
        return param1 + param2
    }
    return sum(a,b)
}
// const res = calculate2(10,20)
// console.log(res);
// console.log(calculate2(10,20));
