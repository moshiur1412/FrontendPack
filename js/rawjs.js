// Variables -->
var name = "Abdur Rohim"; // String
var age = 20; // Intiger 
var children = ["M", "N", "O", "P"]; // Array [0]
var car = null; // Null
var salary = 20.50; // Float 
var obj = { 'name': "m", age : 20, car : 1 } // Object (Json)

// console.log(obj.car);



// Variable Declear type name --> 
// var = > 2015 // Reassign + ReDeclear 
// let = 2015 > 
// const = 2015 > 

// Reassign + ReDeclear --> 
var value = "Your first name here...";
var value = "Enter you second name...";

// ReDeclear --> 
// let value = "plz enter let value"; // SyntaxError: Identifier 'value' has already been declared
let let_value = "plz enter let value";
// let let_value = "plz enter 2nd let value";  // SyntaxError: Identifier 'let_value' has already been declared
let_value = "plz enter 2nd let value"; // 


// NOT Redecler Or Reassign 
// const value = "plz enter const value"; // SyntaxError: Identifier 'value' has already been declared
const constValue = "plz enter const value";
// const constValue = "plz enter const value"; // Identifier 'constValue' has already been declared
// constValue = "plz enter 2nd const value"; // TypeError: Assignment to constant variable



var num1 = 25;
var num2 = 55;


// var number = [1,2,3,4,5,6];

for(var i=0; i<=100; i++){
    // var array = i; // can print outside of the blog
    // const value_from_loop = [i]; // const not print outside of the blog


    if (i >= 0 && i <= 32){
        console.log("failed: " + i);
    }

    else if (i >= 33 && i < 50){
        console.log("Passed: " + i);
    }
    else if (i >= 50 && i < 70){
        console.log("Average: " + i);
    }
    else if (i >= 70 && i < 80){
        console.log("Good Student: " + i);
    }
    // else if (i >= 80 && i < 100){
    //     console.log("Great Student: " + i);
    // }

    else{
        console.log("Great Student: " + i);
    }
}
    // else if (i < 33 && i > 49){
    //     console.log("Passed : "+i);
    // }
    // else if (i < 49 && i > 79){
    //     console.log("Average : "+i);
    // }
    // else if (i < 79 && i > 100){
    //     console.log("Good Student: "+i);
    // }
    // else{
    //     console.log("Gread student: "+i);
    // }
        
     




function calculator(...$arg){
    return $arg;
}
console.log("=====================================================================================");
// console.log(value_from_loop);