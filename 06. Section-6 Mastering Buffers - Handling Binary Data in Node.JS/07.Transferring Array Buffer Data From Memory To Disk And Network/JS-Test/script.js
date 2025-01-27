fetch("http://localhost:3000").then((res)=>{
    
    // res.text().then((data)=>{
    //     console.log(data);
    //    })

    res.arrayBuffer().then((data)=>{
        console.log(data);

        const uint8Array = new Uint8Array(data)
        console.log(uint8Array);

        const decoder = new TextDecoder("UTF-8")
        console.log(decoder.decode(data));
    })
})