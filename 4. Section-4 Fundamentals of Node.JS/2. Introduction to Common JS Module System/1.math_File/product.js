function product(...nums) {
    return nums.reduce((curr , acc) => curr * acc)
}

console.log("Running Product.js......");
module.exports = product ;

