// function Hello(num){
//     console.log(num);
//     if(num>1){
//         for(let i = num - 1 ; i > 1 ; i--){
//             Hello(i)
//         }
//     }
// }
// Hello(5)

function printNum(n , num) {
   if(n > num) return ; 
   console.log(n);
   printNum(n+1 , num)
}
printNum(0 , 10)
