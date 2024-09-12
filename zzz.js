// console.log("mahesh zabade")
// fullname="maheshhhhhh"
// age=24;
// price=333;
// x=null;
// y=undefined;
// console.log(fullname);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);
// // correct way to declare the variablesis using (let(for value updation),(const(for no updation of value))
// let age=12;
// console.log(age);
// // datatypes  1.primitive datatypes  
// //            2.non-primitive datatypes
// // example for primitive datatype
//  let fullName1="mahesh";    //datatype is primitive (string)

// //  example for non-primitive datatype
//  const student={
//     Name:"raja",
//     age:24,
//     cgpa:7.8,
//     isPass:true
// };

//creating the product and storing the values

// const product = {
//     name:"Ball pen",
//     price:270,
//     offer:5,
//     isDeal:true,
//     rating:4.2
// };
// console.log(product);

// arithmetic operations 
// let a = 5;
// let b = 2;
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);
// console.log("a / b = ", a/b);
// console.log("a / b = ", a/b);

//unary operators
// a++;
// b--;
// console.log("a =",a);
// console.log("b =",b)

// Assignment operator 
// a = 5;
// b = 4;
// a += 1; // a = a+1;
// console.log("a +=",a)

// comparison operator
// a = 5;
// b = 4;
// console.log("a == b;", a == b); // returns false as 5 not equal to 4;


// // Logical operator
// let a = 5;
// let b = 6;
// let condt1 = a != b; // returns true;
// let condt2 = a > b;  // returns false;
// console.log("condt1 || condt2", condt1||condt2); // returns true   as  (true or false = true;)

// conditional statement 
// let  age = 2;
// if (age > 18){
//     console.log("can vote");
// }
// if(age < 18){
//     console.log("you cannot vote")
// }

// if-else statement 
// let mode = "dark-mode";
// let color;
// if(mode === "dark-mode"){
//     console.log(color="black");
// } else{
//     console.log(color="white");
// }
// // console.log(color);  // returns black


// else-if statement
// let age = 24;
// if(age<18){
//     console.log("junior");
// } else if (age>60) {
//     console.log("senior");
// }else{
//     console.log("middle")
// }

// ternary operator( "shorthand of if-else statement" )
// let age = 25;
// let result = age > 18 ? "adult": "not adult";
// console.log(result);

//uses of alert
// alert("hello!");

// prompt function
// let name = prompt("hello");
// console.log(name);

// Question:take input from user and check it is divisible by 5 or not
// let number = prompt("enter a number:");
// result = number % 5 ===0 ?"divisible":"undivisible";
// console.log(result);

// Question:2
// let score = 50;
// let grade;
// if(score <=100 && score >=85){
//     grade = "A";
// }else if( score<85 && score>=75){
//     grade = "B";
// }else{
//     grade = "C";
// }
// console.log(grade);

// LOOPS
//for loop
// for(let i=1;i<=5;i++){
//     console.log("mahesh");  //executed 5 times
// }

// calculate the sum of n numbers
// let sum=0;
// let n=100;
// for(i=1;i<=n;i++){
//    sum=sum+i;          // if we wanted to print whole loop process then use console.log inside the block instead of using outside the block
// }
// console.log("sum:", sum);   //print after looping all the values (total sum);
// console.log("loop has ended");


// while loop
// let i = 1;
// while(i<=5){
//    console.log("i=",i);
//    i++;
// }


//do-while loop
// let i = 1;
// do{
//    console.log("apna college");   //note: output print atleast once if teh condition doesn't met or false,but not prints in while and for loops
//    i++;
// }while(i<=5);


//for-of loop
// const fruits=['mango','nimbu','orange'];
// for(const fruit of fruits){
//    console.log(fruits);
// }
//  let name="apnacollege";
//  for(let i of name){
//    console.log("i=",i);
//  }

//Q:print all even number in between 1 to 100;
// let i;
// for(i=0;i<=100;i++){
//   if(i%2==0){
//       console.log(i);
//    }
// }


//guessing numner game
// let gamenum = 5;
// let guessnum = prompt("guess the correct numer:");
// while (gamenum != guessnum) {
//    guessnum = prompt("wrong num,guess again");
// }
// console.log("conjajulation brother,you entered the correct number");

// let str="mahesh";
// console.log(str.length);  //prints 6
// console.log(str[0]);  //prints "m"

//Template literals

// let object={
//     item:"pen",
//     price:20,
// };
// let output=`the cost of ${object.item} is ${object.price} Rupees`;  
// console.log(output);

// console.log("the cost of",object.item,"is",object.price,"rupees");
// console.log(`hi the sum of ${2+2+2}`);

//escape characters(\n,\t,\r,\\,\',\")===
//  console.log("hi i am \n mahesh");

//  string methods
// let str="01234567";
// console.log(str.slice(1,6));
// let fname="mahesh";
// console.log(fname.toUpperCase());
// console.log(fname.trim());
// console.log(fname.concat(str));
// console.log(fname.replace("mahesh","zabade"));
// console.log(3+false);

//arrays
// let heros=["hulk","ironman","thor","batman"];
// let marks=[67,89,98,78,90];
// let info=["rahul",86,"delhi"];
// console.log(heros);
// console.log(marks);
// console.log(info);

// arrays for loop example
//  let animals=["dog","cat","fish","veggie","girahffe"];
//  for(let i=0;i<animals.length;i++){
//     console.log(animals[i]);

//  }


//for-of loop
// let beasts=["dog","cat","fish","veggie","girahffe"];
// for(let beast of beasts){
//     console.log(beast.toUpperCase());
// }

// let mark=[200,300,500,700,200,100];
// let sum=0;
// for(let val of mark){
//  sum=sum+val;
// }
// let avg=sum/6;
// console.log(avg);




// let marks=[200,300,500,700,200,100];
// let offer;
// let value;
// for(let val of marks){

//   offer =val/10;
//   console.log("value:",value =val-offer);
// }

// let mark=[200,300,500,700,200,100];
// let sum=0;
// for(let i=0;i<=mark.length;i++){
//  sum+=i;
// }
// let avg=sum/6;
// console.log(avg);


//assignment opearator
// let a = 10;
// console.log("a++ =",a++);
// console.log("++a =",++a);
// console.log("a-- =",a--);
// console.log("--a =",--a);
// console.log(a);


//conversion of datatypes
// let z = prompt("hey enter your age");
// console.log(z);
// z = Number.parseInt(z);
// console.log(z);

// let grade = "b";
// switch(grade){
//     case "a" : console.log("grade is a");
//     break;
//     case "c": console.log("grade is c");
//     break;
//     default: console.log("grade is not found"); 
// }

// let age =18;
// if(age>=18){
//     console.log("you can drive")
// }
// else{
//     console.log("you cannot drive")
// }

// let fruit="mango";
// switch(fruit){
//     case"papaya":console.log("rs 12");
//     break;
//     case"hannsu":console.log("rs 56");
//     break
//     case"nimbu":console.log("rs 45");
//     break;
//     case"mano":console.log("rs 44");
//     break;
//     default:
//         console.log("out of stock");

// }

/*
// code for a age lies btw 10 & 20 using logical operator
let perage = prompt("enter your age");
if (perage>10 && perage<20){
    console.log("age lies btw 10 and 20");
}
else{
    console.log("age not lies btw 10 and 20");
    }

*/

/*
// above code using switch statement
let agee = prompt("Enter Your Age");
switch(agee){
    case 12:console.log("your age is 12")
    break;
    case 13:console.log("your age is 13")
    break;
    case 14:console.log("your age is 14")
    break;
    case 15:console.log("your age is 15")
    break;
    default:
    console.log("your age is not speacial")
    break;
} 
*/

/*    
// code for a number divisible by 2 & 3
let num = prompt("enter your number");
num = Number.parseInt(num);
if (num%2 == 0 && num%3 ==0){
    console.log("number is div by 2 & 3");
    }
    else{
        console.log("number is not by 2 & 3");
        
    }
*/

// code for a number divisible by 2 or 3
// let num = prompt("enter your number");
// num = Number.parseInt(num);
// if (num%2 == 0 || num%3 ==0){
//     console.log("number is div by 2 or 3");
//     }
//     else{
//         console.log("number is not by 2 or 3");

//     }

// let age = prompt("enter age")  
// let a = age>18? "drive":"not drive"
// console.log(a);


// let sum=0;
// for (let i=0;i<=10;i++){
//     sum=sum+i;
//     // console.log(sum);
// }
// console.log(sum);


//using of do while
// let password;
// do{
//     password = prompt("Enter your password");
// }while(password !== "harr");
//     console.log("password is correct");
    

//Functions in js




// function onePlusAvg(x,y){
//     console.log("done")
//     return 1+(x+y)/2;
// }
// let a=2;
// let b=3;
// let c=4;
// console.log("avg value of a & b is", onePlusAvg(a,b));
// console.log("avg value of b & c is", onePlusAvg(b,c));
// console.log("avg value of a & c is", onePlusAvg(a,c));


//using function 
/*function hello() 
instead we can use */

// let hello = () =>{
// return "hi jagg"
// }
// let v = hello()
// console.log(v);

// write a program to print marks of a student in an object
// let obj={
//     "harry":74,
//     "Rohan":39,
//     "ferry":45
// }
// for (let i in obj){
//     console.log("marks of " +  i  + " are " + obj[i]);
// }

// let cn = 4;
// let i;
// while(i!=cn){
//     console.log("try again")
//     i=prompt("enter the correct number")
// }
// console.log("you entered the correct number")



// write a code using function to find the mean of five(5) Number

// function mean(x,y,z,w,r){
//     return (x+y+z+w+r)/5;
// }
// let a=5;
// let b=5;
// let c=5;
// let d=5;
// let e=5;
// console.log("mean of a,b,c,d,e " + " is ", mean(a,b,c,d,e));


// //Escape Sequence
// let m= 'hello\tbanana'
// console.log(m);

//Template Literal

// let name = "mahesh";
// let sn = "zabade"
// console.log(`hi this is ${name}`);
// console.log(`hi this is ${name} and surname is ${sn}`)
// console.log(3+false);

//printing all srtings characters using for loop
// let n ="mahesh";
// for (i=0;i<n.length;i++){
//     console.log(n[i])
// }


// let sentence = "this is a fox lives in forest";
// let word = "FOX";
// console.log(`the word ${word} ${sentence.includes(word)?"is":"is not"} present in the sentence`)

// console.log(word.startsWith("F"));
// console.log(word.endsWith("x"));
// console.log(word.toLowerCase());


//uses of replace method in string
// let price = "please give me RS 1000";
// console.log(price.slice(18));   //removing characters from number 1000 using slice.
// console.log(price.replace(1000,"thousand"));


//printing  arrays using for loop
// let marks = [10,20,30,40,50];
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// changing array value
// marks[3]=4995;
// console.log(marks); //prints[10,20,30,4995,50]
//adding new value to array
// marks[6]=100;
// console.log(marks);//prints [10,20,30,4995,50,empty,100] //as marks[5] is undefined as we have not assigned any value to index 5 of an array of marks

//Array methods

let num = [1,2,3,4,5];
console.log(num);
console.log(num.toString());
console.log(num.pop());
console.log(num.join("<"));
console.log(num.toString());
delete num[2]
console.log(num.length,num);
let num2 = [6,7,8,9];
let numt = num.concat(num2); //using concatination it doesn't change existing array as it creates a new array existing arrays remains same
console.log(numt.length,numt);
console.log(num);
console.log(num2);










