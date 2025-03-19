/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number ("5") - 2; //this works because the string "5" will now be a number
console.log("The result is: " + result);

let isValid = Boolean("false" === "true"); //This works because "false" is not equal to "true"
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number (age) + 5; //This works because "25" is now a number and not a string so it can be added properly
console.log("Total Age: " + totalAge);

// examples below:

let x;
console.log(x); //This will run as undefined since x doesn't have a value
let y = 25;
console.log (y);