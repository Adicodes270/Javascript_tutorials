// 1. Ways to print in Javascript
// console.log("Hello world",10); // normal
// alert("me");
// document.write("this is a website");
//2. JAVASCRIPT console API
// console.warn("this is a very serious problem"); // warns and yellow in color
// console.error("This is an error"); // serious red in color
// console.assert(4==(6-2)); // used for assertion to check things

// 3. JavaScript Variables
// What are variables? - Containers to store data values

/*
multi 
line 
comment
*/
// var number = 34;
// var number2 = 56;
// console.log(number + number2);

// // 4. Data Types in Javascript
// //number
// var num1 = 455;
// var num2=56.76;

// //String
// var str1 ="This is a string";
// var str2 = 'This is another string'

// var marks= {
//     ravi:34,
//     shubham: 78,
//     harry: 99.977
// }

// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a , b);

// // var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// at a very high level, there are two types of data types in Javascript
// 1. Primitive : undefined,null,number,number,string,boolean,symbol
// 2. Reference : Arrays and Objects

// var arr= [1,2,'string',4,5]
// console.log(arr);

// Opeators in Java
// Arthimetic Operators
// var a = 100;
// var b = 10;
// console.log("The value of a + b is ",a+b);
// console.log("The value of a - b is ",a-b);
// console.log("The value of a * b is ",a*b);
// console.log("The value of a / b is ",a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c /= 2;
// c *= 2;
// c -= 2;
// console.log(c);

// // Comparision Operators
// var x= 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// console.log(true && true); // All are false except true and true
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);


// console.log(true || true); // All are true except false and false
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical not

// console.log(!false);
// console.log(!true);

// Function in JavaScript
// DRY = DO NOT REPEAT YOURSELF
function avg(a,b){
    c = (a+b)/2;
    return c;
}

c = avg(4,6);
c1 = avg(5,10);
console.log(c,c1)

// If u see something in blue in console its number
// If u see something in black in console its string