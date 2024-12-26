const wordsCount = { apple: 2, banana: 3 };
const key = "apple";



let v = "vegis"
let num = 5
wordsCount[v] = num
wordsCount[v] = num + 10
wordsCount[v] += 1  // Equivalent to num = num + 1

console.log(wordsCount);

wordsCount["Ankita"] = "Akku"
console.log(wordsCount);

// wordsCount["apple"] += 10
// console.log(wordsCount);

// if(wordsCount[key]){
//     wordsCount[key] += 2
// }
// console.log(wordsCount);