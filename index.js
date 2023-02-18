//                                  *******************::JAVASCRIPT:: *************** 

//   "  JavaScript improves the user experience of web page by converting  it from static page into an interactive one ."   

//                                                           OR     

//                                          "JavaScript adds behaviour to web pages"       

//                                                         SECTION 1::    
//                                                  VALUES AND VARIABLES!   

//  NAMING VARIABLES:RULES ::  
// 1= The first character must be letter or an underscore(-) or an dollar($). You cant use number as first character.   
// 2= The rest of variable name can include any letter ,any number or the underscore.Can,t use any other characters,includimg spaces.    
// 3= Variable names are case sensitive.    
// 4= No limit to length of variable name.   
// 5= You Cant use one of the JavaScript reserved words as a variable name.      

//                          *********************************************************************** 

//                                                      SECTION 2:: 
//                                             DATA TYPES IN JAVASCRIPT!    

// Six data types that are primitives, 
// 1=Undefined     
// 2=Boolean   
// 3=Number
// 4=String
// 5=BigInt
// 6=Symbol 
    //  Data Types! 
// var myName='marium muaaz';      
// console.log(myName); 
// console.log(typeof(myName)); 
//  var myAge=27;  
//  console.log(myAge);    
//  console.log(typeof(myAge)); 
// var iAmMarium = true;   
// console.log(iAmMarium); 
// console.log(typeof(iAmMarium));  
// console.log(9-'5');  // bug 
// console.log(10+'20');  // concate    
// console.log('Java ' +'Script');  
// console.log('' +''); 
// console.log(''+0);   
// console.log('Marium' -'Muaaz');  // NaN  
// console.log(false-true);     

// Interview question no 1! 

// Difference b/w null vs undefined!   

// var iAmUseless=null 
// console.log(iAmUseless);     
// console.log(typeof(iAmUseless));    
// 2nd bug of Javascript

// var iAmStandby= undefined   
// console.log(iAmStandby); 

// Interview question no 2! 
// What is NaN  
// NaN is a property of global object   
// In other words, it is a variable in global Scope     
// The initial value of NaN is Not-A-Number     

// var myPhoneNumber=1234567 ;  
// var myName='Marium Muaaz' ; 
// console.log(isNaN(myPhoneNumber)); 
// console.log(isNaN(myName)); 

// if (isNaN(myName)){ 
//     console.log('Plz Enter Valid Phone no');
// }    

// Challenge Time !   
// NaN===NaN;  False
// Number.NaN===NaN; False  
// isNaN(NaN); True         
// isNaN(Number.NaN);    True   
// Number.isNaN(NaN); True 

//                                 *********************************************************************

//                                                            SECTION 3rd::   
//                                                     EXPRESSION AND OPERATORS!    

//   5  +   20
//   '5 and 20' are Operands while '+' is Operator and combination of both is' Expression '     

//  ===> Types::     

//  1=Assignment Operators 
//  2=Arithmetic Operators
//  3=Comparison Operators
//  4=Logical Operators
//  5=String Operators
//  6=Conditional (Ternary) Operators

// 1=ASSIGNMENT OPERATORS: 
// "An assignment operator assigns a value to its left operand based on the value of its right operand".    
// The simple assignment operator is equal(=)   

// var x=5;
// var y=5;    
// console.log(x==y);   True    

// 2=ARITHMETIC OPERATORS:  
// "An arithmetic operator takes numerical values (either literals or variables) as thier operands and return single numerical values." 
//  The arithmetic operators are:- 
//  "+" Plus
// "-" Minus 
// "/" Divide   
// "*" Multiply    
// "%" Module           

// INCREMENT AND DECREMENT OPERATORS:-        

// POSTFIX INCREMENT:- 
// If used "POSTFIX" , with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing. 
    
// var num = 15;   
// var newNum = num++; 
// console.log(num);     16
// console.log(newNum);      15 

// POSTFIX increment operator means the expression is evaluated    
// first using the original value of variable and then the 
//  variable is incremented(increase)
    //    -------------------------------       
// PREFIX INCREMENT:- 
// If used "PREFIX",with operator before operand (for example, ++x ), 
// the increment operator increments and returns the value after incrementing.  

// var num = 15;   
// var newNum = ++num; 
// console.log(num);    16
// console.log(newNum);     16

// PREFIX increment operator means the variable is incremented first and then   
// the expression is evaluated using the new value of the variable. 
    // --------------------------------------------     
//  POSTFIX DECREMENT:-     
// If used "POSTFIX", with operator after operand (for example, x--),  
// the decrement operator decrement and returns the value before decrementing.  

// var num = 15;   
// var newNum = num-- + 5; 
// console.log(num);          14   
// console.log(newNum);        20

// POSTFIX decrement operator means that expression is evaluated   
// first using the original value of variable and then the     
// variable is incremented(increased).      
//    ----------------------------------------------------  
// PREFIX DECREMENT:-   
// If used "PREFIX", with operator before operand (for example, --x),  
// the decrement operator decrement and returns the value after decrementing.   

// var num = 15;   
// var newNum = --num + 5; 
// console.log(num);                 14
// console.log(newNum);              19

// PREFIX decrement operator means the variable is decremented first and then      
// the expression is evaluated using new value of the variable.     
//    --------------------------------------------------------          

// 3= COMPARISON OPERATORS:     
//  A COMPARISON operator compares its operands and     
// return a logical value based on whether the comparison is true.  

// var a = 30; 
// var b = 10; 

// 1= EQUAL (==)       

// 2= NOT EQUAL (!=)     

// 3= GREATER THAN(>) 

// 4= GREATER THAN AND EQUAL (>=)   

// 5= LESS THAN (<) 

// 6= LESS THAN AND EQUAL (<=)  


// console.log(a<=b);

// 4= LOGICAL OPERATORS:    
//  Logical operators are typically used with Boolean (logical) values;     \
// when they are used , they return a Boolean value .    

// var a = 30; 
// var b = -20;    

//  i= LOGICAL AND (&&):-  
//  The logical AND (&&) operator (logical conjuction) for a set of         
// operands is true if and only if all of its operands are true.        

// ii= LOGICAL OR (||):-    
// The Logical OR (||) operator (logical disconjuction) for a set of    
// operands is true if and only if one or more of its operands is true .    

// iii= LOGICAL NOT (!):-      
// The logical NOT (!) operator (logical complement, negation)  
// takes truth to falsity and vice versa . 

    
// console.log(a > b && b > 0); 

// 5= STRING CONCATENATION OPERATORS:   
// The concatenation operator (+) concatenates two string values together,  
// returning another string that is the union of the two operand string.    

// console.log("Hello "  + " World");   

//  CHALLENGE TIME !    
//1= What is the output of 3**3? 
// sol:-   
// console.log(3**3);    27      Exponentiation operator**
// 2= what will be the output, when we add number and a String?     
// sol:-    
// console.log(5 + " Hello");  5Hello   
// 3=Write a program to swap two numbers?   
// sol:-    
// var a = 5;
// var b = 10; 
// var c = b;  
// b = a;  
// a = c;

// console.log("The value of a is "  + a);         10   
// console.log("The value of b is " + b);           5

// 4=Write a program to swap two numbers without using third variable?  
// sol:-    

// var a = 5;  
// var b = 10; 
// a = a+b;    
// b = a-b;    
// a = a-b;

// console.log("The value of a is "  + a);            10
// console.log("The value of b is " + b);              5    

// INTERVIEW QUESTION NO 3! 
// What is the difference b/w == vs === ?  
// sol:-    
// var num1 = 5;       
// var num2 = '5'; 
// console.log(num1 == num2);       True    
// var num1 = 5;   
// var num2 = '5'; 
// console.log(num1 === num2);   false  
// "==" check only the value where as "===" check value as well as data type of that value also .           

//                                ********************************************************************

//                                                            SECTION 4:: 
//                                                   CONTROL STATEMENT AND LOOPS! 

// 1=If ... Else :-

// The If statement executes a statement if a specified condition is truely.    
// If the statement is falsy, another statement can be executed.    

// var tomr ='rain';    

// if( tomr == 'rain'){       
//     console.log("take a raincoat");
// }else{  
//    console.log ( "No need to take a raincoat");
// }    

// CHALLENGE TIME!  
// What is truthy and falsy values in JavaScript?   
// We have total five falsy values in JavaScript   
// 0, " " , undefined, null, NaN, false** is falsy anyway 

// if (score = 0){ 
//     console.log("Yay, We Won the Game");
// }else{  
//     console.log("OMG, We loss the game");
// }    


// 2 = Conditional (Ternary) Operator:-     

// The Conditional (Ternary) Operator is the only JavaScript operator   
// that take three operands 
    
// variablename = (condition) ? value1:value2   
//  var age;       (age >18)   if true : if false    
    
// var age = 17;       
// console.log((age >= 18) ? "You can vote" : "You cant vote" );    

// 3 = Switch Statement:-   

// Evaluates an expression, matching the expression's value to a    
// case clause, and executes statements associated with that case.  

// var area = "circle";    
// var PI = 3.142, l=5, b= 4, r= 3;                                     
// switch (area) {
//     case 'circle':
//         console.log("the area of circle is : " + PI*r**2);   
//         break; 
//     case 'triangle':
//         console.log("the area of triangle is : " + (l*b)/2); 
//         break;
//     case 'rectangle':   
//         console.log("the area of rectangle is : " + (l*b));  
//         break;
//     default:    
//         console.log("please enter valid data");
// }    


// Break:-  
// Terminates the current loop, switch, or label statement and transfer     
// program control to the statement following the terminated statement. 

// 4 = While Loop Statement:-   

// The while statement creates a loop that executes a specified statement   
// as long as the test condition evaluates to true.     

// var num = 0;   
// // Block scope 
// while(num <=10){    
//     console.log(num);   
//     num++;
// }    

// 5 = Do-While Loop Statement:-    

// var num = 0;    

// do{ 
//     console.log(num);
//     num++;
// } while (num <=10);  

// 6 = For Loop:-       

//     var num       num<10      num++ 
// for(initializer; Condition; iteration)
// {   
    //Code to be executed
// }    

// for(var num = 0; num<=10; num++){  
//     console.log(num);
// }    

// CHALLENGE TIME:-                 
// JavaScript program to print table for given Number(8)?   
// for (var num = 1; num<=10; num ++){  
//       var tableOf = 8;  
//       console.log(tableOf + "*" + num + "=" +tableOf*num );
// }        

//                           **********************************************************************

//                                                           SECTION 5:: 
//                                                    FUNCTIONS IN JAVASCRIPT!     

// A JavaScript function is a block of code designed to perform a particular task.  

// 1 = Function Definition:-            

// Before we use a function, we need to define it .     

// A Function Definition(also called a function declaration, or function statement)    
// consist of function keyword, followed by:    

// The name of the function.    
// A list of parameters to the function, enclosed in paratheses and seperated by commas.    
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.   

// function functionName ()    
// {   
    //Statement
// }    

// function sum (){    
//     var a = 10, b = 20;   
//     var total = a+b; 
//     console.log(total);
// }    

// 2 = Calling Functions:-      

// Defining a function does not execute it .    
// A JavaScript function is executed when "something" invokes it (call it). 

// function sum (){    
    //     var a = 10, b = 20;   
    //     var total = a+b; 
    //     console.log(total);
    // }    

// sum ();  

// 3 = Function Parameter vs Function Arguments :-  

// Function Parameters are the names listed in the function's definition.   
// Function arguments are the real values passed to the function .  

//       (Parameters)
// function sum (a,b){        
//      var total = a+b; 
//      console.log(total);
//     }    

// sum ();         
// sum(20,30);             
// sum(50,50); 
// (Arguments)      

// INTERVIEW QUESTION!      

// Why Functions?       

// You can reuse code:Define the code once, and use it many times .     
// You can use the same code many times with different arguments,   
// to produce different result .    

//      OR  

//  A Function is a group of reusable code which can be called anywhere  
// in your program . This eliminates the need of writing the same code 
// again and again .    

// DRY => Do Not Repeat Yourself    

// 4 = Function Expressions:-   

// "Function Expressions simply means  
// create a function and put it into the variable"

// function sum(a,b){  
//     var total = a + b;  
//     console.log(total);
// }   

// var funExp = sum(5,10);         

// 5 = Return Keywords:-    

// When JavaScript reaches a return statement ,    
// the function will stop executing .   

// Function often compute a return value .  
// The return value "returned " back to the "caller".   

// function sum(a,b){  
//     return total = a + b;
// }   

// var funExp = sum(5,10); 

// console.log(funExp); 

// 6 = Anonymous Function:-     

// A Function expression is similar to and has the same syntax  
// as the function declaration One can define "named"   
// function expressions (where the name of the expressions might   
// be used in the call stack for example)   
// or "anonymous" function expressions .    

// var funExp = function(a,b){ 
//     return total = a + b;
// }   

// var sum = funExp(15,15);    

// console.log(sum);    

//                                    ***********************************************************   

//                                            Now its time for MODERN JAVASCRIPT::
//                                       Features of ECMASCRIPT 2015 also known as ES6 !    

// 1 = LET VS CONST VS VAR:-    
    
// var => Function Scope
// let and const => Block Scope     

// var myName = "Marium Muaaz"
// console.log(myName);    

// myName = "Marium Ejaz"
// console.log(myName);

// let myName = "Marium Muaaz"
// console.log(myName);    

// myName = "Marium Ejaz"
// console.log(myName);    


// const myName = "Marium Muaaz"
// console.log(myName);    

// myName = "Marium Ejaz"
// console.log(myName);     

// function biodata(){ 
//     const myFirstName = "Marium";    
//     console.log(myFirstName);

// if (true){  
//     const myLastName = "Rizvi" ;   
//   console.log("inner " + myLastName);
//   console.log("inner " + myFirstName);
// }   

// console.log("innerOuter " + myLastName);

// }   

// biodata();

// 2 = Template Literals (Template Strings):-   

// JavaScript program to print table for given Number(8)?   

// for(let num = 1; num<=10; num++){   
//     let tableOf = 8;    
//     console.log('${tableOf} * ${num} = ${tableOf * num}');
// }    

// 3 = Default Parameters :-    

// Default Function Parameters allow named parameters to be                                
// initialized with default values if no value or undefined is passed.  

// function mult (a,b=5){  
//     return a*b;
// }   
// console.log(mult(3));    

// 4 = Fat Arrow Function :-    

// Normal way of writing function :-   

// console.log(sum()); 

// function sum() { 
//     let a = 5; b = 6;   
//     let sum = a + b;    
//     return 'The sum of two number is ${sum}';
// }   

// How to convert in into Fat Arrow Function :-  

// const sum = () => 'The sum of two number is ${(a=5)+(b=6)}';

// console.log(sum());      


// 5: Destructuring in ES6:-    
// The destructuring assignment syntax is a JavaScript expression   
// that make it possible to unpack values from arrays,  
// or properties from objects, into distint variables.  

// => Array Destructuring:-     

// const myBioData = ['Marium', 'Rizvi', 27];  

// let myFName = myBioData[0]; 
// let myLName = myBioData[1]; 
// let myAge = myBioData[2];   

// let [myFName, myLName, myAge] = myBioData;
// console.log(myAge);  

// we can add values too    

// let [myFName, myLName, myAge, myDegree="MCS"] = myBioData;  
// console.log(myDegree);   

// => Object Destructuring:-    

// const myBioData = { 
//     myFName : 'Marium', 
//     myLName : 'Rizvi',  
//     myAge : 27
// }   

// let age = myBioData.age; 
// let {myFName, myLName, myAge, myDegree="MCS"} = myBioData;
// console.log(myAge);  

// 6: Object Properties:-   

// we can now use Dynamic Properties    

// let myName = "Marium";  
// const myBio = { 
//    [myName] : "hello how are you?", 
//    [20 + 7] : "is my age"
// }   

// console.log(myBio); 

// => no need to write key and value, if both are same  

// let myName = "Marium Rizvi";    
// let myAge = 27; 

// const myBio = { myName,myAge}   

// console.log(myBio);  

// 7: Spread Operators :-   

// const color = ['red', 'green', 'blue', 'white'];    
// const myColor = ['red', 'green', 'blue', 'white', 'yellow', 'black'];   

// 2nd time add one more color on top and tell we need to write it again    
// on myColor array too 

// const myFavColors = [...color, 'yellow', 'black'];    

// console.log(myFavColors);


//                                        ******************************************************    

//                                                           SECTION 6:: 
//                                                     ARRAYS IN JAVASCRIPT!    

// When we use var, we can stored only one value at a time.     
// var friend1 = 'Muaaz';
// var friend2 = 'Fazal';
// var friend3 = 'Karam' ; 

// When we feel like storing multiple values in one variable then   
// instead of var, we will use an Array.    

// var myFriends = ['Muaaz',22  ,male , 'Fazal', 'Karam', true , 26];    

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class.      

//           Lower Index/                   Upper Index/ 
//           Lower Boundry                  Upper Boundry 
// var Names = ['Karam' , 'Fazal' , 'Muaaz', 'Marium'];    
//   Index         0         1          2        3  
//                            Elements  

// 1 = Traversal In Array:- 
// navigate through an array    

// if we want to get the single data at a time and also 
// if we want to change the data    

// var myFriends = ['Fazal', 'Karam' , 'Muaaz' , 'Marium'];    
// console.log(myFriends[1]);  

// if we want to check the length of elements of an array   

// console.log(myFriends.length);   

// we use for loop to navigate  

// var myFriends = ['Fazal', 'Karam' , 'Muaaz' , 'Marium'];    

// for(var i = 0; i<myFriends.length; i++){ 
//   console.log(myFriends[i]);
// }    

// After ES6 we have for...in and for...of loop too     

// var myFriends = ['Fazal', 'Karam' , 'Muaaz' , 'Marium'];    

// For...in:-
// for(let elements in myFriends){ 
//     console.log(elements);
// }   

// For...of:-
// for(let elements of myFriends){ 
//     console.log(elements);
// }    
    
// Array.prototype.forEach()    

// Calls a function for each element in the Array.  
// its a combination of for...in and for...of loop 

// var myFriends = ['Fazal', 'Karam' , 'Muaaz' , 'Marium'];    

// Traditional Function:-
// myFriends.forEach(function(element, index, array){   
//    console.log(element + " index : " + index  + " " + array);
// }); 

// Fat Arrow Function:- 
// myFriends.forEach(( element, index, array )  => {    
// console.log(element + " index : " + index  + " " + array);
// });  

// 2 = Searching and Filter in an Array:-   

// i=Array.prototype.indexOf()        

// Return the first (least) index of an element within the array equal  
// to an element, or -1 if none is found. It search the element from the    
// 0th index number     


// var myFriendNames = ['Fazal', 'Karam' , 'Muaaz' , 'Marium' , 'Rizvi'];       

// console.log(myFriendNames(indexOf("rizvi")));

//ii= Array.prototype.lastIndexOf()    
// Return the last (greatest) index of an element within the array equal  
// to an element, or -1 if none is found. It search the element from the    
// last to first    

// var myFriendNames = ['Fazal', 'Karam' , 'Muaaz' , 'Marium' , 'Rizvi'];       

// console.log(myFriendNames(lastIndexOf("rizvi")));

// iii= Array.prototype.includes()
// Determines whether the array contains a value,   
// returning true or false as approprite.   

// var myFriendNames = ['Fazal', 'Karam' , 'Muaaz' , 'Marium' , 'Rizvi'];       

// console.log(myFriendNames.includes("rizvi"));    
    
// iv= Array.prototype.find()   

// Array.find(callback(element[, index [,array]]) [, thisArg])  

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.     
// Only problem is that it return only one element  

// const prices = [200,300,400,500,600];   

// const findElem = prices.find((currVal)  => {    
//   return currVal < 400;
// } );   

// console.log(findElem);   

// v=  Array.prototype.findIndex()     

// Returns the found index in the array, if an element in the   
// array satisfies the testing function, or -1 if not found.    

// const prices = [200,300,400,500,600];    

// console.log(prices.findIndex((currVal)  =>  currVal < 400) );

// vi= Array.prototype.filter()

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true. 

// const prices = [200,300,400,500,600];    

// const newPriceTag = prices.filter((elem, index )  =>  { 
//     return elem < 400;
// })  

// console.log(newPriceTag);

// 3 = How to Sort an Array:-   

// Array.prototype.sort()   

// The sort() method sorts the elements of an array in place and    
// returns the sorted array. The default sort order is ascending but    
// upon converting the elements into strings,   
// then comparing their sequences of UTF-16 code unit values.   

// const months = ['March' , 'Jan' , 'Feb' , 'April' , 'Dec' , 'Nov']; 
// console.log( months.sort());    

// const array1 = [1 , 30 , 4 , 21 , 10000 , 99];  
// console.log(array1.sort());

// 4 = Perform CRUD:-   

// Array.prototype.push()   

// The push() method adds one or more elements to the   
// end of an array and returns the new length of the array  

// const animals = ['pigs',  'goats',  'sheep'];   

// animals.push('chicken');    
// console.log(animals);    

// Array.prototype.unshift()    

// The unshift() method adds one or more elements to the    
// beginning of an array and returns the new length of the array    

// 1st example!
// const animals = ['pigs',  'goats',  'sheep'];   
// animals.unshift('chicken');    
// console.log(animals);        

// 2nd example!     
// const myNumber = [1, 2, 3, 4, 5];
// myNumber.unshift(4,6);  
// console.log(myNumber);

// Array.prototype.pop()    

// The pop() method removes the last elemnet from an array and returns  
// that element. This method changes the length of an array.    

// const plants = ['broccoli' , 'cauliflower' , 'kale' , 'tomato' , 'cabbage'];    
// console.log(plants.pop());   

// Array.prototype.shift()  

// The shift() method removes the first element from an array and returns   
// that removed element. This method changes the length of an array.    

// const plants = ['broccoli' , 'cauliflower' , 'kale' , 'tomato' , 'cabbage'];    
// console.log(plants.shift());     

// CHALLENGE TIME:- 

// Array.prototype.splice()     

// Add or removes elements from an array.   

// 1:Add DEC at the end of an array?   
// 2:What is the return value of splice method?     
// 3:update march to March(update)?     
// 4:Delete June from an array ?    

// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];   

// sol1:    
// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];   
// const newMonth = months.splice(5 , 0, 'Dec'); 
// console.log(months); 

// sol2:    
// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];    
// const newMonth = months.splice(5 , 0, 'Dec');
// console.log(newMonth);   

// sol3:        
// example1!
// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];       
// const updateMonth = months.splice(1 , 1, 'March');  
// console.log(months);     

// example2!    
// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];   
// const indexOfMonth = months.indexOf('march');   

// if (indexOfMonth != -1){    
//    const updateMonth = months.splice(indexOfMonth , 1, 'March');  
//    console.log(months);
// }else{   
//    console.log('No such data found');
// }

// sol4:    
// const months = ['Jan' , 'march' , 'April' , 'June' , 'July'];   
// const indexOfMonth = months.indexOf('June');   

// if (indexOfMonth != -1){    
//    const updateMonth = months.splice(indexOfMonth , 1);  
//    console.log(months); 
//    console.log(updateMonth);
// }else{   
//    console.log('No such data found');
// }    

// 5 = Map and Reduce Method:-  

// Array.prototype.map()    

// Syntax:  
// let newArray = arr.map(callback(currentValue[, index[ , array]]) {       
//     return element for newArray, after executing something
//   }[, thisArg]);    

// Returns a new array containing the results of calling a    
// function on every element in this array .    

// const array1 = [1, 4, 9, 16, 25];   
// num > 9  
// let newArr = array1.map((curElem, index,arr)   =>  {    
//      return curElem >9;
// })  
// console.log(array1);
// console.log(newArr); 

// let newArr = array1.map((curElem, index, arr)   => {   
//    return 'Index no = ${index} and the value is $ {curElem} belong to ${arr}'
// })  

// console.log(newArr); 

// It return new array without mutating the orignal array   

// CHALLENGE TIME:-     

// 1: Find the square root of each element in an array?     
// 2: Multiply each element by 2 and return only those  
// elements which are greater than 10?  

// sol1:    
//  let arr = [25, 36, 49, 64, 81];    
    
//  let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem)) 
//  console.log(arrSqr);    

// sol2:    
// let arr = [2, 3, 4, 6, 8];  

// let arr2 = arr.map((curElem) =>  {   
//     return curElem * 2;
// }).filter((curElem)   => {  
//      return curElem > 10;
// })  
// console.log(arr2);  

// let arr2 = arr.map((curElem) =>  curElem * 2).filter((curElem)   => curElem > 10);
// console.log(arr2);  


// let arr2 = arr.map((curElem) =>  curElem * 2).filter((curElem)   => curElem > 10).reduce((accumulator, curElem) =>  {  
//      return accumulator += curElem;
// });
// console.log(arr2);  


// we can use the chaining too                  

// Reduce Method:-  

// Flatten an array means to convert the 3d or 2d array into a  
// single dimensional array     

// The reduce() method executes a reducer function (that you provide)   
// on each element of the array, resulting in single output value.  

// The reducer function takes four arguments:   

// Accumulator  
// Current Value    
// Current Index    
// Source Array 

// let arr = [5, 6, 2];    

// let sum = arr.reduce((accumulator, curElem, index, arr) => {   
//     return accumulator += curElem;
// })  
// console.log(sum);    


// let arr = [5, 6, 2];    

// let sum = arr.reduce((accumulator, curElem, index, arr) => {   
//     return accumulator += curElem;
// },7)  
// console.log(sum);    

// How to flatten an array :-
// converting 2d and 3d array into one dimensional array    

// const arr = [   
//           ['zone_1',  'zone_2'],
//           ['zone_3',  'zone_4'],
//           ['zone_5',  'zone_6'],
//           ['zone_7',  'zone_8']
// ];  

// let flatArr = arr.reduce((accum, curVal) => {    
//      return accum.concat(curVal);
// })  
// console.log(flatArr);    

//                                       ***************************************************    

//                                                          SECTION 7::  
//                                                    STRINGS IN JAVASCRIPT!    

// A JavaScript Strings is zero or more characters written inside quotes.   

// JavaScript strings are used for storing and manipulating text.   
// You can use single or double quotes      

// Strings can be created as primitives,    
// from string literals, or as objects, using string constructor    
    
// let myName = "Marium Muaaz";    
// let myChannelName = 'Marium Muaaz'; 

// let ytName = new String("Rizvi Technical");  
// let ytName = 'Rizvi Technical';

// console.log(myName);
// console.log(ytName); 

// How to find the length of string ?   

// String.prototype.length      
// Reflect the length of string     

// let myName = "Marium Muaaz";    
// console.log(myName.length);

// 1 = Escape Character:-       

// let anysentence = "We are so-called  \"Vikings\"  from the north";    
// console.log(anysentence);   

//  //  if you dont want to mess, simply use the alternate quotes   

// let anysentence = '  We are so-called  "Vikings"  from the north.  ';    
// console.log(anysentence);   

// 2 = Finding a string in a string :-  

// String.prototype.indexOf(searchValue [ , fromIndex])        
// The indexOf() method returns the index of (the position of) the first     
// occurance of a specified text in a string    

// const myBioData = 'I am the Rizvi Technical';   

// console.log(myBioData.indexOf("Rizvi")); 

// JavaScript counts positions from zero.   
// 0 is the first position in a string, 1 is the second, 2 is the third.    

// String.prototype.lastIndexOf(searchValue [, fromIndex]) 
// Returns the index within the calling String object of the   
// last occurance of searchValue, or -1 if not found.   

// const myBioData = 'I am the Rizvi Technical';   
// console.log(myBioData.lastIndexOf("t", 6));

// 3 = Searching for a string in a string :-    

// String.prototype.search(regexp)
// The search() method searches a string for a specified    
// value and returns the position of the match  
    
// const myBioData = 'I am the Rizvi Technical';   

// let sData = myBioData.search("Rizvi");  
// console.log(sData);

// The search() method cannot take a second start position argument.

// 4 = Extracting String Parts:-    

// There are 3 methods for extracting a part of a string:   

// slice (start, end)
// substring (start, end)
// substr (start, length)

// i = The Slice() Method:-         
// slice() extracts a part of a string and returns the extracted part
// in a new string.     

// The method takes 2 parameters: the start position,   
// and the end position (end not included)  

// var str = "Apple, Banana, Kiwi";    

// let res = str.slice(0,4);    
// let res = str.slice(7, -2) 
// console.log(res);    

// The slice() method selects the elements starting at the  
// given start argument, and ends at, but does not include,     
// the given end argument.  

// Note: The original array will not be changed.        
// Remember: JavaScript counts positions from zero.   
// 0 is the first position in a string, 1 is the second, 2 is the third.    
    
// CHALLENGE TIME!  

// Display only 280 characters of a string like the     
// one used in Twitter? 

// let myTweets = "lorem ipsum is simply a dummy text of printing and ...a....................................................................................a.............................lorem is very important why dont u understand this thing bcoz we know it very better. how caan we use javascript in python when thats not possible   "  ;
// let myActualTweet = myTweets.slice(0,280);  
// console.log(myActualTweet); 
// console.log(myActualTweet.length);

// ii = The Substring() Method:-    
// substring() is similar to slice().   

// The difference is that substring() cannot accept     
// negative indexes.    

// var str = "Apple, Banana, Kiwi";    
// let res = str.substring(8,-4);   
// console.log(res);    

// // If we use negative value then the characters are  
// counted from the 0th position.   

// iii = The Substr() Method:-  
// substr() is similar to slice().  

// The difference is that the second parameter specifies the    
// length of the extracted part.    

// var str = "Apple, Banana, Kiwi";    
// let res = str.substr(7, -2); 
// let res = str.substr(-10);
// console.log(res);

// 5 = Replacing String Content():-     

// String.prototype.replace(searchFor, replaceWith) 

// The replace() method replaces a specified value  
// with another value in a string.  

// let myBioData = 'I am syeda Marium Rizvi syeda';    

// let replaceData = myBioData.replaceAll('syeda', 'Syeda');  
// console.log(replaceData);

// Points to remember:- 
// 1:The replace() method does not change the string    
// it is called on. It returns a new string.    
// 2:By default, the replace() method replaces only 
// the first match      
// 3:By default, the replace method is case sensitive.  
// Writing SYEDA (with upper case) will not work 

// 6 = Extracting String Characters :-  

//There are 3 methods for extracting string characters: 

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// i = The charAt() Method:-    
// The charAt() method returns the character at a   
// specified index (position) in a string   

// let str = "HELLO WORLD";    
// console.log(str.charAt(0));  

// ii = The charCodeAt() Method:-   
// The charCodeAt() method returns the unicode of the   
// character at a specified index in a string :     

// The method returns a UTF-16 code     
//  (an integer between 0 and 65535) .      
    
// The Unicode Standard provides a unique number for every  
// character, no matter the platform, device, application,  
// or language. UTF-8 is a popular Unicode encoding which   
// has 88-bit code units.   

// var str = "HELLO WORLD";    
// console.log(str.charCodeAt(0) ); 

// CHALLENGE TIME!  

// Return the Unicode of the last character in a string     

// let str = "HELLO WORLD";    
// let lastChar = str.length - 1;   
// console.log(str.charCodeAt(lastChar));

// iii = Property Access:-   
// ECMAScript 5 (2009) allows property access [ ] on strings    

// var str = "HELLO WORLD";    
// console.log(str[0]);

// 7 = Other Useful Methods:-   

//i = The Case() Method:-
// let myName = 'Marium Rizvi';    
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

//ii = The Concat() Method:-    
// concat () joins two or more strings  

// let fName = "Marium"
// let lName = "Rizvi"

// console.log(fName.concat(lName));
// console.log(fName.concat("", lName));    

// iii = String.trim()
// The trim() method removes whitespace from both   
// sides of a string 

// var str = "             Hello World                " ;  
// console.log(str.trim()); 

// iv = Converting a String to an Array     
// A string can be converted to an array with the   
// split() method   

// var txt = "a, b, c, d, e";           // String
// console.log(txt.split(","));         // Split on commas
// console.log(txt.split(" "));         // Split on spaces
// console.log(txt.split(" | "));       //Split on pipe

//                                      *******************************************************     

//                                                           SECTION::8  
//                                                  DATE & TIME IN JAVASCRIPT!

// JavaScript Date objects represent a single moment in time in a   
// platform-independent format. Date objects contain a Number   
// that represents milliseconds since 1 January 1970 UTC.   

// Creating Date Objects    
// There are 4 ways to create a new date object:    

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments 
// new Date(milliseconds)
// we cannot avoid month section    
// new Date(date string)    

// new Date()
// Date objects are created with the new Date() constructor. 

// let currDate = new Date();  
// console.log(currDate);  

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());  

// Date.now()
// Returns the numeric value corresponding to the current time-the number   
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC       

// console.log(Date.now());     

// new Date(year, month, ....)
// 7 numbers specify year, month,day, hour, minute, second,     
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.     

// January is 0. December is 11.    

// var d = new Date(2022, 0, 10, 10, 33, 30, 0)
// console.log(d.toLocaleString()); 

// new Date(dateString)
// new Date(dateString) creates a new date object from a date string 

// var d = new Date("October 13, 2014 11:13:00");  
// console.log(d.toLocaleString()); 

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds  

// var d = new Date(0);    
// var d = new Date(10000000000);  
// var d = new Date(8640000*2);    
// console.log(d.toLocaleString()); 

// => Dates Method :- 

// const curDate = new Date(); 

// How to get the indivisual date  :- 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());   

// How to set the indivisual date :- 
// console.log(curDate.setFullYear(2022));
// The setFullYear () method can optionally set month and day   
// console.log(curDate.setFullYear(20522, 10, ));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());   

// => Time Methods :-   

// How to get the indivisual Time:-     

// const curTime = new Date(); 
// console.log(curTime.getTime()); 
// The getTime() method returns the number of milliseconds  
// since January 1, 1970
// console.log(curTime.getHours());
// The getHours() method returns the hours of a date as a   
// number  (0-23)
// console.log(curTime.getMinutes()); 
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// How to set the indivisual Time:- 

// let curTime = new Date();   
// console.log(curTime.setTime());     
// The setTime() method returns the number of milliseconds  
// since January 1, 1970
// console.log(curTime.setHours(5));        
// The setHours() method returns the hours of a date as a   
// number (0-23)
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5)); 

//                                          **************************************************      

//                                                              SECTION::9  
//                                                      JAVASCRIPT MATH OBJECT! 

// The JavaScript Math object allows you to perform mathematical tasks on numbers.  

// 1= Math.PI():-
// console.log(Math.PI);    
    
// 2= Math.round():-   
// returns the value of x rounded to its nearest integer    

// let num = 10.2565;  
// console.log(Math.round(num));    

// 3= Math.pow():-   
// Math.pow(x, y) returns the value of x to the power of y  

// console.log(Math.pow(2,3));
// console.log(2**3);   

// 4= Math.sqrt():- 
// Math.sqrt(x) returns the square root of x    

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));  

// 5= Math.abs():-  
// Math.abs(x) returns the absolute (positive) value of x   

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955)); 

// 6= Math.ceil():- 
// Math.ceil(x) returns the value of x rounded up to its nearest integer    

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));    

// 7= Math.floor():-    
// Math.floor(x) returns the value of x rounded down to its nearest integer 

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));   

// 8= Math.min():-  
// Math.min() can be used to find the lowest value in a list of argument    

// console.log(Math.min(0, 150, 30, 20, -200)); 

// 9= Math.max():-  
// Math.max() can be used to find the highest value in a list of argument   

// console.log(Math.max(0, 150, 30, 20, -200 ));    

// 10= Math.random():-  
// Math.random() returns a random number between 0 (inclusive), and 1 ()    

// console.log(Math.floor(Math.random()*10));

// 11= Math.trunc():-   
// The trunc() method returns the integer part of a number  

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));  

// PRACTICE TIME:-  

// if the argument is a positive number, Math.trunc() is equivalent to  
// Math.floor() 
// otherwise Math.trunc() is equivalent to Math.ceil(). 

//                                        ************************************************  

//                                                          SECTION 10::    
//                                                      DOM IN JAVASCRIPT!  

// i= Window Vs Document:-  

//              WINDOW                                    VS                                  DOCUMENT
// 1:Window is the main container or                                          1:whereas the DOM is the child of window object
// we can say the global Object and     
// any operations related to entire     
// browser window can be a part of  
// window object    

// 2:All the members like object,                                             2:Where in the DOM we need to refer the document, 
// methods or properties if they                                                if we want to use the document object, methods
// are the part of window object                                                or properties
// then we dont refer the window    
// object   

// 3:Windows has methods, properties                                         3:Document is just the object of the global    
// and object. ex setTimeout() or setInterval()                                 object that is Window, which deals with
// are the methods, where as Document is the object                             the Document, the HTML elements themselves.
// of the Window and it also has a screen object    
// with properties describing the physical  
// display  

//                                       USE DIAGRAM TO EXPLAIN WINDOW GLOBAL OBJECT:-  

//                                                        Window    

//        DOM                                               BOM                                  JAVASCRIPT
//      document                                          navigator                                Object 
//       <HTML>                                           screen                                   Array 
//  <BODY>      <HEAD>                                    location                                Function   
//   <a>                                                   frames                                    .....    
//   <p>                                                   history    
//                                                      XMLhttpRequest    

// ii=                                               -: DOM  VS BOM:-  

// DOM:-
// The DOM is the Document Object Model,which deals with the document,  
// the HTML elements themselves, e.g. document and all traversal you    
// would do in instanceof, events, etc. 

// For Ex:  
// change the background color to red   
// document.body.style.background = "red";  

// BOM:-
// The BOM is the Browser Object Model, which deals with browser components     
// aside from the document, like history, location, navigator and screen    
// (as well as some others that vary by browser). OR    
// In simple meaning all the window operations which comes under BOM are    
// performed using BOM  
    
// lets see more practical on History object :-   

// Function alert/confirm/prompt are also a part of BOM     
// they are directly not related to the document,   
// but represent pure browser methods of communicating with the user.   

// alert(location.href);     // shows current URL  
// if (confirm("Want to Visit ThapaTechnical?")){  
//     location.href = "https://www.youtube.com/thapatechnical";
// }

// iii= Navigate through the Dom:-  

// 1:document.documentElement   
// returns the Elements that is the root element of the document.   
// 2:document.head  
// 3:document.body  
// 4:document.body.childNodes(include toolbar, enter, whiteSpace)   
// list of the direct children only 
// 5:document.children(without text nodes, only regular Elements)   
// 6:document.childNodes.length 

// => How to find or acccess the siblings:-     

// document.body.nextSibling    
// document.body.nextElementSibling 
// document.body.previousSibling    
// document.body.previousElementSibling

// => querySelector returns the first matching value whereas  
// querySelectorAll() will return all the elements  

//                                       ************************************************   

//                                                       SECTION 11::    
//                                                 EVENTS IN JAVASCRIPT!    

// HTML events are "things" that happen to HTML elements.   
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.   

// HTML Events:-    
// An HTML event can be something the browser does, or something a user does.   

// Here are some example of HTML events:    

// An HTML web page has finished loading    
// An HTML input field was changed  
// An HTML button was clicked   
// Often, when events happen, you may want to do something. 

// JavaScript lets you execute code when events are detected.   

// HTML allows event handler attributes, with JavaScript code,  
// to be added to HTML elements.    

// i= 4 ways of writing Events in JavaScript:-    

// 1: using inline events alert();  
// 1st Way of Writing Function:-
// alert("i am awesome but no one use me"); 

// 2: By Calling a function (We already seen and most common way of writing)    
// 2nd Way of Writing Function:-
// const callingFunction =  ()   =>  {
// alert("most common way of writing function");   
// }    

// 3: using Inline events (HTML onclick=""  property and element.onclick)       
// 3rd Way of Writing Function:-
// const thirdWay = document.getElementById('thirdWay');   
// thirdWay.onclick = function()  {  
//     alert('most common way of writing function again');
// }    

// 4: using Event Listeners (addEventListener and IE's attachEvent)     
// 4th Way of Writing Function:-
// const fourthWay = document.querySelector('#fourthWay'); 
// fourthWay.addEventListener('click', ()  => {    
//     console.log('I love this way of writing function');
// })   

// ii= What is Event Object?   
// Event Object is the parent object of the event object    
// for Example  
// MouseEvent, FocusEvent, KeyboardEvent etc    

// iii= MouseEvent in JavaScript:-  
// The MouseEvent Object    
// Events that occur when the mouse interacts with the HTML     
// document belongs to the MouseEvent Object.   

// iv= KeyboardEvent in JavaScript:-    
// Events that occur when user presses a key on the keyboard,   
// belongs to the KeyboardEvent Object .    
// https://www.w3schools.com/jsref/obj_keyboardevent.asap   

// v= InputEvents in JavaScript:-   
// The onchange event occur when the value of an element has been changed.  

// For radioButtons and checkboxes, the onchange event occurs when the  
// checked state has been changed.  

// Difference between Inline Event and Event Listener:- 
// addEventListener does not overwrite existing event handlers  
// whereas onclick overwrites any existing onclick = fn event handlers  

// The other significant difference, of course, is that onclick will always work,     
// whereas addEventListener does not work in Internet Explorer before version 9.    

//                                       ************************************************   

//                                                TIMING BASED EVENTS IN JS:-   

// The window object allows execution of code at specified time intervals.  
// These time intervals are called timing events.   
// The two Key methods to use with JavaScript are:  

// setTimeout(function, milliseconds)   
// Executes a function, after waiting a specified number of milliseconds    

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.    

// 1:setTimeout()
// 2:clearTimeout()
// 3:setInterval()
// 4:clearInterval()    

//                                        **********************************************    

//                                                       SECTION 12::    
//                                                   OOPS IN JAVASCRIPT!    

// 1: What is Object Literal?   

// Object Literal is simply a key:value pair data structure.    

// Storing variables and functions together in one container,   
// we can refer this as an Object.  

// object = school bag  

// How to create an Object?             

// 1st way  

// let bioData = { 
//     myName : "Marium Rizvi",    
//     myAge : 27, 
//     getData : function(){   
//         console.log('My name is ${bioData.myName} and my age is ${bioData.myAge} ');
//     }   
// }   
//     bioData.getData();  

// 2nd way no need to write function as well after es6  

// let bioData = { 
//     myName : "Marium Rizvi",    
//     myAge : 27, 
//     getData (){   
//         console.log('My name is ${bioData.myName} and my age is ${bioData.myAge} ');
//     }   
// }   
//     bioData.getData();   

// What if we want object as a value inside an Object   

// let bioData = { 
//     myName : {  
//      realName : "Marium",   
//      channelName : "code with rizvi"
//     },
//     myAge : 27, 
//     getData (){   
//         console.log('My name is ${bioData.myName} and my age is ${bioData.myAge} ');
//     }   
// }   
//     console.log(bioData.myName.channelName); 

// 2: What is "this" Object?    

// The definition of "this" Object is that it contain the current context.      

// The this Object can have different values depending on where it is placed    

// For Example 1:-  
// console.log(this.alert('Awesome'));  
// it refers to the current context and that is window global object    

// Example 2:-  
// function myName(){   
// console.log(this);
// }
// myName();    

// Example 3:-      
// let myNames = 'Marium';
// function myName(){   
//     console.log(this.myNames);
// }
// myName();

// Example 4:-  
// const obj = {   
//     myAge : 27, 
//     myName() {  
//         console.log(this);
//     }
// }   
// obj.myName();    

// Example 5:-      CHALLENGE TIME!
// this object is not work with arrow function 
// const obj = {   
//     myAge : 27, 
//     myName :() => {  
//         console.log(this);
//     }
// }   
// obj.myName();    

// Example 6:-       CHALLENGE TIME!    
// let bioData = { 
//     myName : {  
//         realName : "Marium Muaaz",  
//         channelName : 'Code with Rizvi'
//     },      
// things to remember is that the myName is the key and the object is act like a value
//     myAge : 27, 
//     getData (){ 
//         console.log('My name is ${this.myName.channelName} and my age is ${this.myAge} ');
//     }
// }   

// bioData.getData();       

//                                     ************************************************ 

//                                      FEATURES OF ECMASCRIPT 2016 ALSO KNOWN AS ES7:-     

// 1: Array include:-   
// const colors = ['red', 'green', 'blue', 'white', 'pink'];   
// const isPresent = colors.includes('red');   
// console.log(isPresent);  

// 2: Exponentiation Operator ** :- 
// console.log(2**4);   

//                                          ****************************************    

//                                      FEATURES OF ECMASCRIPT 2017 ALSO KNOWN AS ES8:-     

// 1: String Padding:-  
// The purpose of string padding is to add characters to a string, so it reaches a specific length.     

// const myName = "Marium";    
// console.log(myName.padStart(20));   
// console.log(myName.padEnd(30));

// 2: Object.values() :-    
// This method returns an array containing all the object own property values.  

// const person = {name: "Rizvi", age: 28};    

// console.log(Object.values(person));      

// 3: Object.entries() :-   
// This method returns an array containing all the object own properties, as an array of [key:value] pairs.     

// const person = {name: "Rizvi", age: 28};    
// console.log(Object.entries(person));     

//                                     *****************************************    

//                                  FEATURES OF ECMASCRIPT 2018 ALSO KNOWN AS ES9:- 

// 1: Rest/Spread Properties:-  
// Rest/Spread properties allow to create a new object by combining the properties of the object   
// passed after the spread operator.    

// const person = {name: "Rizvi", age: 27, degree:"mcs"};    
// const sPerson = {...person};

// console.log(person);    
// console.log(sPerson);    

//                                      **************************************  

//                                FEATURES OF ECMASCRIPT 2019 ALSO KNOWN AS ES10:-                      

// 1: Array.prototype{flat, flatMap}:-  
// flat() is a new array instance method that can create a one-dimensional array from a    
// multi-dimensional array.     

// const arr = [   
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_8', ['zone_9', 'zone_10']]
// ] ];  

// console.log(arr.flat(infinity)); 

// 2: Object.fromEntries() :-   

// const person = {name: 'Fred', age: 87}; 

// const arrObj = Object.entries(person);  
// console.log(Object.fromEntries(arrObj)); 

//                                        ******************************************    

//                                            FEATURES OF ECMASCRIPT 2020:- 

// 1: BigInt:-  

// let oldNum = Number.MAX_SAFE_INTEGER ;  

// const newNum = 9007199254740991n + 12n; 

// console.log(newNum);
// console.log(typeof newNum);  

//                                        ***************************************   

//                                                     SECTION::13 
//                                                 ADVANCED JAVASCRIPT! 

// 1: Event Propagation:-   
// The Event Propagation mode determines in which order the elements receive the event.     

//                                             The Event Propagation        
//                                                   window 
//                                                  document    
//                              Capture              <html>          Bubble
//                               phase               <body>           phase
//                                                    <div>         
//                                                  <button>    

//                                                Target phase

// Event bubbling and capturing are two ways of event propagation in the    
// HTML DOM API, when an event occurs in an element inside another element, 
// and both elements have registered a handle for that event.   

//                                  PROPAGATION IS BROADLY CATEGORIZED INTO 3 MAIN TYPES:-      
    
// The Capture Phase                                The Target Phase                                 The Bubble Phase    
// Going from the window                            It is the target                                 From the event target
// to the event target                              phase                                            parent back to the
// phase                                                                                             window 

// => EVENT BUBBLING:- 
// With Event Bubbling, the event is first captured and handled by the innermost element    
// and then propagated to outer elements.   
    
// => EVENT CAPTURING:- 
// With Event Capturing, the event is first captured by the outermost element   
// and propagated to the inner elements.    
// Capturing is also called "trickling", which helps remember the   
// propagation order.   

// 2: Higher Order Function:-   
// Function which takes another function as an arguments is called HOF.
// wo function jo dusre function ko as an argument accept karta hai use HOF 

// 3: CallBack Function:-
// Function which get passed as an argument to another function is called CBF.  
// A CallBack Function is a function that is passed as an argument to another   
// function , to be "called back" at a later time.  
// Jis bhi function ko hum kisi or function ke andar as an arguments passed     
// karte hai usko hum CallBack Function bolte hain  

// We need to create a calculate :-     

// const add = (a,b) => {  
//     return a + b;
// }   
// console.log(add(5,6));   

// const subs = (a,b) => { 
    // return Math.abs(a-b);
// }   
// console.log(subs(5,6));  

//     CBF
// const mult = (a,b) => { 
    // return a*b;
// }   
// console.log(mult(5,6)); 

// const calculator = (num1,num2, operator) => {  
//    return operator(num1,num2);  
// }   
//               HOF 
//  console.log(calculator(5,2, add));  

// I have to do the hardcoded for each operation which is bad   
// we will use the callback and the HOF to make it simple to use    

// 4: Function Currying:-   
// Currying is a technique of evaluating function with multiple arguments,  
// into sequence of function with single argument.  

// function sum (num1){      
//     return function (num2) { 
//     return function (num3) {    
//         console.log(num1,num2,num3);
//       }
//     }
// }

// sum (5)(3)(8)

// 2nd way: 

// const sum = (num1) => (num2)  => (num3)  => console.log(num1,num2,num3);

// sum (5)(3)(8);

// 5: CallBack Hell:-   

// setTimeout( () => { 
//       console.log('1 works is done');
//       setTimeout(  () => {  
//          console.log('2 works is done');       
//             setTimeout ( () => {    
//                  console.log('3 works is done');
//                      setTimeout (  () => {  
//                           console.log('4 works is done');
//                               setTimeout (  () => { 
//                                    console.log('5 works is done');
//                                        setTimeout ( () => { 
//                                             console.log('6 works is done');
//                                        },1000)
//                               },1000)
//                      },1000)
//             },1000)
//       },1000)
// },1000)

// 6: AJAX :-       

// Ajax which initially stood for Asynchronous JavaScript And XML, is a programming practice    
// of building complex, dynamic webpages using a technology known as XMLHttpRequest.    

// XMLHttpRequest (XHR):-
// XMLHttpRequest (XHR) objects are used to interact with servers. you can retrieve data from   
// a URL without having to do a full page refresh. This enables a Web page to update just part  
// of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in  
// AJAX programming.    

// 7: JSON:-    

// JSON.stringify turns a JavaScript object into JSON text and  
// stores that JSON text in a string, eg:   

// var my_object = {key_1: "some text", key_2: true, key_3: 5};    

// var object_as_string = JSON.stringify(my_object);   
//{"key_1":"some text","key_2":true,"key_3":5}

// typeof(object_as_string);   
// 'string' 

// JSON.parse turns a string of JSON text into a JavaScript object, eg: 

// var object_as_string_as_object = JSON.parse(object_as_string);   


//                                            *******************************   

//                                                    SECTION 14::    
//                                  HOW JAVASCRIPT WORKS AND ASYNCHRONOUS JAVASCRIPT!   

// 1: Hoisting in JavaScript:-  

// We have creation phase and execution phase.  

// Hoisting in JavaScript is a mechanism where variables and functions  
// declarations are moved to the top of their scope before the code execute.    

// For Example:-    
// console.log(myName);
// var myName; 
// myName = "Rizvi";   

// How it will be in output during creation phase   

// 1: var myName = undefined; 
// 2: console.log(myName);
// 3: myName = "Rizvi";     

// In ES6, hoisting is avoided by using the let keyword instead of var. 
// (The other difference is that variables declared with let are local  
// to the surrounding block, not the entire function.)  

// 2: What is Scope Chain and Lexical Scoping in JavaScript?    
// The Scope Chain is used to resolve the value of variable names in JS.    

// Scope chain in JS is lexically defined, which means that we can see what the     
// scope chain will be by looking at the code.  

// At the top, we have the Global Scope, which is the window Object 
// in the browser.  

// Lexical Scoping means Now, the inner function can get access to  
// their parent functions variables But the vice-versa is not true.     

// For Example :    

// let a = "Hello guys. ";   // global scope

// const first= () => {    
//     let b = " How are you?" 

//     const second = () => {  
//         let c = " Hii, I am fine thank you"
//         console.log(a+b+c);
//     }   
//     second();
// }   

// first();

// 3: What is Closures in JavaScript?   
// A closures is the combination of a function bundled together (enclosed) with references  
// to its surrounding state (the lexical environment).  

// In other words, a closure give you access to an outer function's scope   
// from an inner function.  

// In JavaScript, closures are created every time a function is created, at     
// function creation time.  

// For Example:-    

// const outerFun = (a) => {   
//     let b = 10; 
//     const innerFun = () => {    
//      let sum = a+b;  
//      console.log('the sum of the two no is ${sum}');
//     }   
//     innerFun();
// }
// outerFun(5);    

// it is same like lexical scope    

// One more Example 

// const outerFun = (a) => {   
//     let b = 10; 
//     const innerFun = () => {    
//      let sum = a+b;  
//      console.log('the sum of the two no is ${sum}');
//     }   
//     return innerFun;
// }   
// let checkClosure = outerFun(5);
// console.dir(checkClosure);   

// CHALLENGE TIME!  

//4: Synchronous JavaScript Program:- 

// const fun2 = () => {    
//     console.log('Function 2 is called');
// }

// const fun1 = () => {    
//     console.log('Function 1 is called');
//     fun2(); 
//     console.log('Function 1 is called Again');
// }   

// fun1();  

// Asynchronous JavaScript Program:-    

// const fun2 = () => {    
//     setTimeout( () => { 
//          console.log('Function 2 is called');
//     }, 2000);
// }   

// const fun1 = () => {    
//     console.log('Function 1 is called');
//     fun2(); 
//     console.log('Function 1 is called Again');
// }

// fun1();

//                                             ********************************


























