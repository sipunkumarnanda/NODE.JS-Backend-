// Define an object obj1 with a property 'x' which is an array of two functions
const obj1 = {
    x : [
        function(){
            console.log("Hello-1");  // Logs "Hello-1" when called
        } ,
        function(){
            console.log("Hello-2");  // Logs "Hello-2" when called
        }
    ]
}

// A variable 'key' is defined with a string value "Name"
let key = "Name"

// A new empty array is assigned to the 'Name' property of obj1 dynamically
obj1[key] = []

// Push the string "Ankita" to the 'Name' array in obj1
obj1[key].push("Ankita")

// Push the string "Sagnika" to the 'Name' array in obj1
obj1[key].push("Sagnika")

// Log the obj1 object to see the changes made to it
console.log(obj1);

// Iterate over the 'x' array inside obj1 and execute each function
obj1.x.forEach((item)=>{
    item()  // Calls the functions in obj1.x, printing "Hello-1" and "Hello-2"
})
