 function createPerson(name, age) {
    const person = {
        name ,
        age ,
        greet : createPerson.personMethods.greet
    }
    return person;
  }
  

  createPerson.personMethods = {
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };

  
  const person1 = createPerson('Alice', 25);
  const person2 = createPerson('Bob', 30);
  
  person1.greet(); // Hi, I'm Alice and I'm 25 years old.
  person2.greet(); // Hi, I'm Bob and I'm 30 years old.
  
  console.log(person1.greet === person2.greet); // true (shared function instance)
  