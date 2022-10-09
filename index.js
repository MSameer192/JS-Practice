
// ----------------------tweeter----------------------

var tweet = prompt("write your tweet");
var tweetCalculate = tweet.length;
alert("you have written " + tweetCalculate + "charackters, and you " + (140-tweetCalculate) + "charackters ");

alert(prompt("write your email:").slice(0,10)) 

var name ="Sami";
name.toLowerCase();


// ----------------------charackter----------------------


var name = prompt("how are you") 
var firtchar = name.slice(0,1)
var firstUpperChar = firtchar.toUpperCase();
var restOfname = name.slice(1,name.length);
var restOfname = restOfname.toLowerCase();
var completeName = firstUpperChar + restOfname;
alert("Nice, " + completeName)


// ----------------------match ----------------------

var dogAge = prompt("what is you dOg age.");
var humanAge = (dogAge-5)*6+10
alert ("your don is " + humanAge + "years old in human Age" )

// ----------------------Putbeeper ----------------------


function main(){
    putBeeper();
    
    move();
    move();
    putBeeper();
    
    move();
    move();   
    putBeeper();
    
    turnLeft();
    move();
    turnRight();
    turnLeft();
    
    turnLeft();
    move();
    putBeeper();
    
    move();
    move();   
    putBeeper();
 
    turnRight();
    turnLeft();
    move();  
    turnRight();
    move(); 
    putBeeper();
    
    turnRight();
    move();
    move();   
    putBeeper();
    
    move();
    move();   
    putBeeper();
    
    turnLeft();
    move();
    turnRight();
    turnLeft();
    
    turnLeft();
    move();
    putBeeper();
 
    move();
    move();   
    putBeeper();
 
    turnRight();
    turnLeft();
    move();  
    turnRight();
    move(); 
    putBeeper();
    
    turnRight();
    move();
    move();   
    putBeeper();
    
    move();
    move();   
    putBeeper();
  
 }



// ----------------------Functions updated ----------------------

 function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of Milk of Rs " + bottles*1.5 )    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(3);

// ----------------------Age Calculator ----------------------


  function lifeInWeeks() {

   var x = (90*365) - (age*365);
   var y = (90*52) - (age*52);
   var z = (90*12) - (age*12)    
   
   console.log("You have  " + x + " days, " + y + " weeks, and " + z + " months left.") 
   alert("You have  " + x + " days, " + y + " weeks, and " + z + " months left.")    
   }
   
   var age = prompt("what is your age now");
   
   lifeInWeeks();
   
   

// ----------------------BML Calculator ----------------------



   function bmiCalculator(weight, height) {
      var bmi = weight / (height*height);
      return Math.round(bmi)
  }
  
  var bmi = bmiCalculator(65, 1.8) 
  console.log(bmi)


// ----------------------if else normal;----------------------

  let age = prompt("what is your age?")
if (age>10 & age<20){
  console.log("your age between 10 to 20")
}
else {
  console.log ("your age does not between 10 to 20")
}


// ----------------------switch stament;----------------------

let age = prompt("what is your age?")
switch(age) {
  case '12' : console.log("your age is 12")
    break
  case '13' : console.log("your age is 13")
    break
  case '14' : console.log("your age is 14")
    break
  case '15' : console.log("your age is 15")
    break
  case '16' : console.log("your age is 16")
    break
  case '17' : console.log("your age is 17")
    break
  default:
    console.log("your age is normal")
}

// ----------------------turnery operator;----------------------

let age = prompt("what is your age?")
let a = age > 18 ? "you can drive" : "you can not drive"
console.log(a)

// ----------------------Random Number Love calculator;----------------------


let yourName = prompt("what is your name?");
let partnerName = prompt("what is your partner name?");

let n = Math.random();
n = n * 100;
n = Math.floor(n) + 1; 

console.log("This is the result of the love between" +" "+ yourName + " and" + " "+ partnerName + " is " + n + "%")

alert("This is the result of the love between" +" "+ yourName + " and" + " "+ partnerName + " is " + n + "%")

// ----------------------Random Number Love calculator;----------------------

// ----------------------Leap Year Calculation;----------------------


function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

console.log(isLeap(2024))

// ----------------------Guest Invitation ----------------------
  
// console.log

let guestInvited = ["Angels", "Sameer", "Zaid", "Memon", "Basveer", "Sami"]
let guestName = prompt("what is yor name");

if (guestInvited.includes(guestName))  {
  'Welcome'
} else {"your are not invited for party"}  

// for alert

let guestInvited = ["Angels", "Sameer", "Zaid", "Memon", "Basveer", "Sami"]
let guestName = prompt("what is yor name");

if (guestInvited.includes(guestName))  {alert(guestName + ", Welcome Boss")} 
else {alert(guestName + ", sorry sir, your are not invited for party")}  




output.pop; //remove number from array
output.push; //add number in array
 

// ----------------------Fizz Buzz ----------------------



var output = [];
var count = 1;

function fizzBuzz() {

if  (count % 3 === 0 && count % 5 === 0 ) {
     output.push("FizzBuzz");
} 
else if (count % 3 === 0){
    output.push("Fizz");
} 
else if (count % 5 === 0){
    output.push("Buzz");
}
else {
    output.push(count);
}    
  
count++    
    
console.log(output);
}


// ----------------------Switch Cases -----------------------


const expr = prompt("your fvt fruite");

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// ----------------------Prompt string to number -----------------------


let age = prompt("your age ?")
age = Number.parseInt(age)

if (age>=10 && age<=20) {
    age + " your age is lies in 10 to 20"
} else {
   age + " your age does not between in 10 to 20"
}


// ----------------------Basic for loop -----------------------

for (let index = 0; index < 10; index++) {
  console.log(index+1)
}



// for loop

let sum = 0;
let num = prompt("Put any number")
n = Number.parseInt(n)
for (let index = 0; index < num; index++) {
    sum += (index+1);
}
console.log ("sum of first " + num + " natural number is " + sum )


let marks = {
  sameer:43,
  memon:42,
  basveer:24,
  ali:55
}

for (let index = 0; index < Object.keys(marks).length; index++) {
  console.log ("The marks of " + Object.keys(marks)[index] + " is " + marks[Object.keys(marks)[index]])
}


// for loop 2

let sum = 0;
let n = prompt("Put any number");
n = Number.parseInt(n)
for (let index = 0; index < n; index++) {
    sum += (index+1);
}
console.log ("sum of first " + n + " natural number is " + sum )



// for in loop

let Months = {
  Basveer: "80",
  Sameer: "100",
  Sidea: "70",
  Bushra:"10",
}

for (let Key in Months) {
 console.log ( a + " birthday month is " + Months[Key]) 
}



let marks = {
  sameer:43,
  memon:42,
  basveer:24,
  ali:55
}


for (let key in marks) {
  console.log("The marks of " + key + " is " + marks[key])
}


// for off loop


for (let b of "Months") {
  console.log (b)
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

// for in  loop

let Student = {
  Basveer: 80,
  Sameer: 100,
  Sidea: 70,
  Bushra:10,
}

for (let key in Student) {
 console.log ( key + " marks is " + Student[key]) 
}

// ----------------------While loop -----------------------


let newNum = prompt("Put any number")
newNum = Number.parseInt(newNum)


let iNum = 0;
while (iNum<newNum) {
    console.log(iNum)
    iNum = iNum + 1
}



let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")


// ----------------------DO While loop -----------------------


let newNum = prompt("Put any number")
newNum = Number.parseInt(newNum)


let iNum = 10;
do {
    console.log(iNum)
    iNum++
} while (iNum<newNum) 

// ----------------------Function -----------------------


function calFunction(x, y) {
  return (2 + (x + y)) * 2   
}

let a = 2
let b = 4
let c = 3

console.log("calculation is " + calFunction(a, b))


// ----------------------Arrow Function -----------------------


let calculation = (x, y) => {
  return (2 + (x + y)) * 2   
}

let a = 2
let b = 4
let x = 2
let y = 3


console.log("calculation is " + calculation(a, b))

calculation(x, y);


let mean = (a, b, c, d, e) => {
  return (a+b+c+d+e)/5
}

console.log(mean(2,3,4,5,6))


// ----------------------Arrow.... form  & reduc -----------------------

let name = "Harry"
let arr = Array.from(name)
console.log(arr)



let num = [1,2,3,4,5]

let sum = num.reduce((a, b) =>{
    return a + b
})
  
console.log(sum)






let num = [1,2,3,4,5]
let pushArr = num.push(prompt("put your any number in array"))

console.log(num)


let num = [1,2,3,4,5]

let pushArr
while (pushArr != 0) {
pushArr = prompt("put your any number in array")
}

num.push(pushArr)
console.log(num)

// while do loop

let num = [1,2,3,4,5]
let pushArr

do {
    pushArr = prompt("put your any number in array")
    num.push(pushArr)

   } while (pushArr != 0)

console.log(num)


let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})

let arr2 = [10,20,3,40,50,999, 1000]
let a2 = arr2.filter((a) => {
  return a % 10 ===0
})
console.log(a2)

let arr = [2,4,6,8,10]



let a = arr.map((value) => {
  // console.log(value, index, array)
  return Math.pow(value,2) 
})

console.log(a)



let arr = [2,4,6,8,10]

let a = arr.reduce((value1, value2) => {
  // console.log(value, index, array)
  return value1 * value2   
})

console.log(a)




let runAgain = true

while (runAgain) {
let age = prompt("what is your age?")
age = Number.parseInt(age)  
if(age){
let a = alert(age >= 18 ? "you can drive" : "you can not drive")
} if (age > 0 && age < 18 ) {
  console.error("you have entered small age, sorry")
} runAgain = confirm("You want to check again")
} 



// location url

let number = prompt("write a number")
number = Number.parseInt(number)  

if(number > 4){
  location.href ="https://www.facebook.com/"
} 

// backgroud with JS


let color = prompt("Enter the page background color")
document.body.style.background = color