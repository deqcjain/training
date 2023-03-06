const arr=[1,2,3,4]

if(Array.prototype===arr.__proto__)
    console.log("equal");
    console.log(Array.prototype);
console.log(arr.__proto__);


/* Prototype is a property that exists on constructor functions.
 It refers to the prototype object that will be used as the 
 prototype for objects created using that constructor function.


 __proto__ is a property that exists on every object in JavaScript. 
It refers to the prototype object of that object, which provides 
properties and methods that can be inherited by other objects.*/