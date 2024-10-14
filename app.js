//NUMBER
//STRING
//BOOLEAN
//NULL/UNDEFINED
//BIGINT
//SYMBOL

// let a = 10;
// let b = a;

// b = 20;

// console.log(a);
// console.log(b);


//REFERENCE TYPES: STORE A REFERENCE(MEMORY ADDRESS) TO THE LOCATION WHERE THE OBJECT OR ARRAY IS STORED.
//PRIMITIVE TYPES: STORE THE ACTUAL VALUES DIRECTLY IN THE VARIABLE.

// let num1 = 42;
// let num2 = num1;

// num2 = 100;
// console.log(num1);
// console.log(num2);


//REFERENCE TYPE EXAMPLE(OBJECTS)

// let obj1 = { name: "Alice" };
// let obj2 = obj1;

// obj2.name = "Bob";

// console.log(obj1.name);
// console.log(obj2.name);


//MORE EXAMPLES IN REFERENCE TYPE
// let x = [1, 2, 3];
// let y = x;
// y.push(4);
// console.log(x);

// const words = ["hello", "world", "welcome!"];
// console.log(words[2]);

// let fruits = ["apples", "mango"];
// fruits.push("banana");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("orange");
// console.log(fruits);

// const moreFruits = ["strawberries", "pineapple"];
// const totalFruits = fruits.concat(moreFruits);
// console.log(totalFruits);

// console.log(totalFruits.join(",  "));

// console.log(totalFruits.reverse());

// console.log(totalFruits.sort());

  
// const selectedFruits = totalFruits.slice(1, 4);
// console.log(selectedFruits);

let person = {
    firstName: "John",
    age: 30,
    location:["Candon", "City"]

};

console.log(person.firstName);
console.log(person["location"]);

person.age = 31;
console.log(person.age);

person.middleName = "Doe";  // Add new property
console.log(person.middleName);  // Output: "Doe"

delete person.age; //Remove age property
console.log(person.age);
