console.time()
console.log("A File Started.....!!");
for(let i=0 ; i<=1000000000 ; i++){
    if(i % 400000000 == 0){
        console.log(`Running loop 1 ${i}`);
    }
}

console.log("B File Started.....!!");

for(let i=0 ; i<=1000000000 ; i++){
    if(i % 400000000 == 0){
        console.log(`Running loop 1 ${i}`);
    }
}
console.log("C File Started.....!!");

for(let i=0 ; i<=1000000000 ; i++){
    if(i % 400000000 == 0){
        console.log(`Running loop 1 ${i}`);
    }
}

console.log("D File Started.....!!");

for(let i=0 ; i<=1000000000 ; i++){
    if(i % 400000000 == 0){
        console.log(`Running loop 1 ${i}`);
    }
}
console.timeEnd();