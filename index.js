
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
