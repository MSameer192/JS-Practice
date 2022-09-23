
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