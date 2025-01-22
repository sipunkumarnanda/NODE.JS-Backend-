// Here we send string
// fetch("http://localhost:3000" , {
//     method : "POST" ,
//     body : "Sipun Kumar Nanda"
// }).then((res)=>{
//     return res.text()
// }).then((data)=>{
//     console.log(data);
// })

// ShortCut
// fetch("http://localhost:3000").then(res => res.text()).then(data => console.log(data));

// Send An Array Buffer 
const a = new ArrayBuffer(4)
const uint8Array = new Uint8Array(a)

uint8Array[0] = 97
uint8Array[1] = 98
uint8Array[2] = 99
uint8Array[3] = 104

fetch("http://localhost:3000" , {
    method : "POST" ,
    body : a ,
}).then((res)=>{
    return res.text()
}).then((data)=>{
    console.log(data);
})