function hello1(callback){
   
    setTimeout(()=>{
        const cheese = "Cheese-1"
        console.log("Here is Cheese : " , cheese);
        callback(cheese) // Here we passing value cheese to Called Function mean inside That func we can do anything with value of Cheese 
    },2000)
}
function abc(param , callback){
    setTimeout(()=>{
        callback(param)
    })
}

    // hello1(function(param){
    //     // console.log(param + " Now can do anything with cheese");
    //         abc(param , function(x){
    //             console.log(x , " Hyyy");
    //         })
    // })


// here its mean 

function hello(){
   
    setTimeout(()=>{
        const cheese = "Cheese-1"
        console.log("Here is Cheese : " , cheese);
        x(cheese)
    },2000)

    function x(parameter){  
        setTimeout(()=>{
            console.log("Here is value of parameter : " , parameter);
        abc(parameter , function(z){
            console.log(parameter);
            console.log("Value of Z : " , z);
        },2000)
        })
    }
    // The "parameter" here will hold the value that is passed to the function when someone calls this function, e.g., x(anything). The value of "anything" provided during the function call will be assigned to "parameter" inside the function.

    function abc(parameter , callback){
        setTimeout(()=>{
            callback(parameter)
        },2000)
    }
}

hello()