const originalObj = {
    name: "alice",
    address: { city: "London", zip: "12345" },
    hobbies: ["reading", "traveling"]
};

for (const key in originalObj) {
    if (typeof originalObj[key] !== "object" || originalObj[key] === null) {
        // Print the key and value if it's not an object or if it's null
        console.log(`${key} : ${originalObj[key]}`);
    } else {
        console.log(`${key} : {`);
        for (const innerKey in originalObj[key]) {
            console.log(`  ${innerKey} : ${originalObj[key][innerKey]}`);
        }
        console.log(`}`);
    }
}
