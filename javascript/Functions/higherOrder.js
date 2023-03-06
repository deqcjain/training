function x(y) {
    console.log("x called");
    y(x);
}

x(function y(x) {
    console.log("y called");
    // x(y) Callback hell
    // x() 

})

/*
Function declaration vs Function Statement


Use function declarations when you need to define a function that will be used multiple times 
throughout your code, or when you need to define a function that will be called before it 
is defined in the code.


Use function expressions when you need to define a function that will be used only once or that will be used 
as a parameter to another function, or when you want to create an anonymous function that can be assigned
 to a variable or a property of an object.
*/