//1. Create an empty object called "person".
let person ={}
console.log("craeting empty object person   "+person);

//2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"
person ={name:"john",age:30,city:"New York"}
console.log("object after creation is  ",person);
// 3. Remove the "age" property from the "person" object.
delete person.age
console.log("object after deleting age is   ",person);
// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job="Engineer";
console.log("object after job addition  is  ",person);
// 5. Update the "city" property of the "person" object to "San Francisco".
person.city="San Francisco";
console.log("object after city  modification  is  ",person);
// 6. Print the final "person" object after performing the above operations.
console.log("Finally object lloks like   ",person);