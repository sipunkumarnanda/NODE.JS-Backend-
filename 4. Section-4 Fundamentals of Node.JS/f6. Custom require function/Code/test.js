function hii(send){
    // console.log(send.a);
    return send
}
hii({a : 69})

let test = hii({b : 20})
console.log(test);


// ----------------------------------------

// (function(send){
//     // Module code goes here
//     send.a = 5
//     console.log(send);
// })({})