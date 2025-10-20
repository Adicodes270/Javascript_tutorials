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
// function avg(a,b){
//     c = (a+b)/2;
//     return c;
// }

// c = avg(4,6);
// c1 = avg(5,10);
// console.log(c,c1)

// If u see something in blue in console its number
// If u see something in black in console its string

// Conditionals in JavaScript

// var age = 34;

// if - else statement
// if (age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

// Single IF
// if (age > 18){
//     console.log('You can drink rasna water');
// }

// if-else ladder

// if (age > 32){
//     console.log('You are not a kid');
// }

// else if(age>26){
//     console.log("You are mature")
// }
// else if(age>18){
//     console.log('You cannot drink rasna water');
// }

// else{
//     console.log("You are noob")
// }

// console.log("If else ladder ended")

// function rasnawater(age){
//     if (age>18){
//         console.log("You can drink a glass of rasna water");
//     }

//     else if (age>13){
//         console.log("You can drink half glass of rasna water");   
//     }

//     else {
//         console.log("You cannot drink rasna water");
//     }

// }

// age = rasnawater(13);
// console.log(age);

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(elemenet){
//     console.log(element);
// })

// let j = 0;
// // const ac = 0;
// // ac++
// // ac = ac + 1

// // while (j<arr.length){
// //     console.log(arr[j]);
// //     j ++;
// // }

// // runs the code then checks condition instead of checking condition first
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length) {

// }

// let myArr = ["Fan","Camera",32,null,true]
// // Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift();
// myArr.toString()
// myArr.sort()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
// let mystring = "harry is a good boy";
// // console.log(mystring.length);
// // console.log(mystring.indexOf("good"));
// // console.log(mystring.lastIndexOf("good"));

// // console.log(mystring.slice(1,3));
// d = mystring.replace("Harry",Rohan)
// console.log(d)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM Manipulation

let elemclick = document.getElementById('click');
// console.log(elemclick);


let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].style.background = 'yellow';
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// // console.log(elemclick.innerHTML);
// // console.log(elemclick.innerText);
// // console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createElement = document.createElement('p')
// createElement.innerText = 'new child element'
// createElement2 = document.createElement('b')
// createElement2.innerText = 'new child element 3'
// tn[0].appendChild(createElement);
// tn[0].replaceChild(createElement2,createElement);
// tn[0].removeChild(createElement2);

// documents.links
// document.images
// document.forms
// document.domain
// document.URL
// document.scripts  Used for DOM MANIPULATION

// Query Selector
// sel = document.querySelector('.container');
// console.log(sel);
// selall = document.querySelectorAll('.container');
// console.log(selall);

// Events in JavaScript

// function clicked(){
//     document.querySelectorAll('.container')[1].innerHTML = <b>We have clicked bro</b>
//     console.log("Button is clicked");
//     return true;
// }

// window.onload = function(){
//     console.log("The page was reloaded")
// }

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b>We have clicked bro</b>'
//     console.log("Button is clicked");
//     return true;
    
// })

// firstcontainer.addEventListener('mouseover',function(){
 
//         console.log("Mouse on container");
// })
// firstcontainer.addEventListener('mouseout',function(){
 
//         console.log("Mouse out of container");
// })

// const prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//         document.querySelectorAll('.container')[1].innerHTML = prevHTML
//         console.log("Pressed off");
// })

// firstcontainer.addEventListener('mousedown',function(){
//         document.querySelectorAll('.container')[1].innerHTML = '<b>We have clicked bro</b>'
//         console.log("Pressed on");
// })


// Arrow Functions
sum = (a,b)=>{
    return a+b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> I AM IRON MAN </b>"
}

// logkaro2 = ()=>{
//     console.log("I");
// }

// logkaro3 = ()=>{
//     console.log("am");
// }

// logkaro4 = ()=>{
//     console.log("Iron MAN");
// }

// setTimeout and setinterval
clr1 = setTimeout(logkaro, 2000);
clearTimeout(clr1);
// setTimeout(logkaro2, 7000);
// setTimeout(logkaro3, 12000);
// setTimeout(logkaro4, 18000);

clr = setInterval(logkaro,2000);
clearInterval(clr)
setInterval(logkaro,2000);

// localstorage

// localStorage.setItem();
// localStorage.getItem();
// localStorage.clear();
// localStorage.removeItem('name')

// About JSON

// obj = {name:"harry", length:1, a :{this: "that"}};
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(obj);
// parsed = JSON.parse(jso);
// console.log(parsed);