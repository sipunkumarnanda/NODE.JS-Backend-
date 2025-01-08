const user1 = {
  firstName: "Sipun",
  lastName: "Kumar",
  age: 23,
  getAgeYear: function (age) {
    return new Date().getFullYear() - this.age;
  },
};

const user2 = {
  firstName: "Ankita",
  lastName: "Kumari",
  age: 20,
};

//   user1.getAgeYear.call(user2)
console.log(user1.getAgeYear.call(user2));

//  console.log(user.getAgeYear());


// -----------------------------------------------------------------------------------------
// Factory Function
function createUser(firstName, lastName, age) {
    // const user = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    // }
  
    // If the property and value names are the same, we can write them like this:
    const user = {
      firstName,
      lastName,
      age,
      getAgeYear() {
          return new Date().getFullYear() - this.age;
      }
    };
  
    return user;
  }
  

  const newObj = createUser("Ankitaa", "Kumari", 20);
  console.log(newObj); // { firstName: 'Ankitaa', lastName: 'Kumari', age: 20 }
  console.log(newObj.getAgeYear());  // 2005 
  
  // If we want to create more objects:
  const newObj1 = createUser("Akankshya", "Nooo", 19);
  const newObj2 = createUser("Alisha", "Das", 22);
  console.log(newObj.getAgeYear(), newObj2.getAgeYear());
  
  // When we create more objects like this, every time a new `getAgeYear()` function is created 
  // for each object, which consumes more memory and becomes repetitive. 
  // This results in redundant function definitions for each new object.
  
  // Example of new objects being created:
  console.log(newObj1.getAgeYear());  // 2004
  console.log(newObj2.getAgeYear());  // 2003
  
  // Solution: This can be solved by using a constructor function, where the method is shared among all objects,
  // preventing the unnecessary creation of repetitive functions.
  
// ----------------------------------------------------------------------------------------------
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(arr1);
// Output: [1, 2]
// If we do console.log(arr1), we will see the original array [1, 2].

// Now, if we use array.pop(), we don't see the pop method directly on the array when logged.
// However, the `pop()` method is part of the Array prototype, which is inherited by all array instances.
arr1.pop();  // Removes the last element from arr1.

console.log(arr1);  // Output: [1] (After pop, arr1 becomes [1])

console.log(arr1.pop === arr2.pop);  // Output: true
// Why? Because the `pop` method is not directly added to each array instance, 
// but rather inherited from Array.prototype. Both arr1 and arr2 are objects 
// created from the Array constructor, so they share the same `pop` method from Array.prototype.

// We will learn prototype in next lec 