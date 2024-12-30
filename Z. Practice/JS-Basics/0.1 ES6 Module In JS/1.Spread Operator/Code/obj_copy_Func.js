function objCopy(originalObj) {
  if (originalObj === null || typeof originalObj !== "object") {
    return originalObj; // Return primitive values as is
  }
  // Create a new array or object based on the type of originalObj
  let newObj = Array.isArray(originalObj) ? [] : {};
  for (const key in originalObj) {
    newObj[key] = originalObj[key];
  }
  return newObj;
}

const obj = {
  name: "alice",
  address: { city: "London", zip: "12345" },
  hobbies: ["reading", "traveling"],
  greet() {
    console.log(`Hello ${this.name}`);
  },
  addresses: {
    city: {
      villageName: "Xyz",
    },
  },
};

const newObj = objCopy(obj);
console.log(newObj);

console.log(obj === newObj);
