function greet() {
    const obj = {
        name : "SIpun" ,
        funcName : greet.commonMethod.hello
    }
    return obj
    }
    
    
    greet.commonMethod = {
        hello(){
            return (`Hello My Name is ${this.name}`)
        }
    }
    
    
    // const obj2 = greet()
    // console.log(obj2.funcName());
    
    // console.log(greet.commonMethod);
    
    // 
    function hello(){
    
    }
    
    hello.p1 = "Ankita"
    
    hello.obj3 = {
        name : "Sipun" , 
        age : 22
    }
    
    hello.func = {
        greet() {
            console.log(`Hello iam Greet Function And Heyy Hello ${this.name1}`);
        }
    }
    
    // console.log(hello.p1);   // Ankita
    // console.log(hello.obj3);  // { name: 'Sipun', age: 22 }
    // console.log(hello.func);  // { greet: [Function: greet] }
    // console.log(hello.func.greet);  // [Function: greet]
    
    function abc(){
        return obj = {
            name1 : hello.p1 ,
            obj : hello.obj3 ,
            func : hello.func.greet
        }
    }
    
    const newObj = abc()
    console.log(newObj);
    console.log(newObj.func);
    console.log(newObj.func());
    
    
    // Behind the scene 
    /*
    function abc(){
        return obj = {
            name1 : hello.p1 ,  // Its mean 
            name1 : "Ankita"   , hello.p1 = "Ankita"
            obj : hello.obj3 ,   // its mean 
            obj : {
                name : "Sipun" , 
                age : 22
            }
            func : hello.func.greet  // Its mean 
            func :  greet() {
                console.log(`Hello iam Greet Function And Heyy Hello ${this.name1}`);
            }
    
        }
    }
        */