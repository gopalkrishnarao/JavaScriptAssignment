//1. Create an empty array called "cars".
let cars=[];
console.log(cars);

// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2018
cars=[{make: "Toyota1", model: "Camry1",year: 2018},{make: "Toyota2", model: "Camry2",year: 2018},{make: "Toyota3", model: "Camry3",year: 2018}]
console.log("array after adding objects ",cars[0],cars[1],cars[2]);
// 3. Remove the first car object from the "cars" array.
delete cars[0];
console.log("array after removing one object ",cars[0],cars[1],cars[2]);
// 4. Add a new car object to the "cars" array with the following properties:
// - make: "Honda"
// - model: "Civic"
// - year: 2020
cars[0]={make: "Honda", model: "Civic",year: 2020};
console.log("array after adding honda object ",cars[0],cars[1],cars[2]);
// 5. Update the "model" property of the second car object in the array to "Accord".
cars[1].model="Accord";
console.log("array after modifying property of  one object ",cars[0],cars[1],cars[2]);
// 6. Print the final "cars" array after performing the above operations.
console.log("Final array of objects ",cars[0],cars[1],cars[2]);
// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.
