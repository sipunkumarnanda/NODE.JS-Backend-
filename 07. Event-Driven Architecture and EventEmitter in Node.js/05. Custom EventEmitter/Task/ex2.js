function hello(name , func){
    func(name)
}

hello("Ankita", ((name)=>{
    console.log("Hello", name);
}))