
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

// ----------------------turning stament;----------------------

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
