// Question 01

var positiveInteger = +prompt("Enter positive Integer: ");

var number = positiveInteger;
var roundOffValue = Math.round(positiveInteger);
var floorValue = Math.floor(positiveInteger);
var ceilValue = Math.ceil(positiveInteger);

document.write("Number: " + number + "<br>" + "round off value: " + roundOffValue + "<br>" + "floor value: " + floorValue + "<br>" + "ceil value: " + ceilValue);

document.write("<br>" + "<br>");

// Question 02

var negativeFloatingPoint = +prompt("Enter your negative floating point: ");

var numbers = negativeFloatingPoint;
var roundOffValues = Math.round(negativeFloatingPoint);
var floorValues = Math.floor(negativeFloatingPoint);
var ceilValues = Math.ceil(negativeFloatingPoint);

document.write("Number: " + numbers + "<br>" + "round off value: " + roundOffValues + "<br>" + "floor value: " + floorValues + "<br>" + "ceil value: " + ceilValues);

document.write("<br>" + "<br>");

// Question 03

var num = +prompt("Enter value for Absolute Number: ");

var absoluteValue = Math.abs(num);

document.write("The Absolute value is: " + absoluteValue);

document.write("<br>" + "<br>");

// Question 04

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("Random Dice Value is: " + diceValue);

document.write("<br>" + "<br>");

// Question 05

var coinValue = Math.random() < 0.5 ? 'Heads' : 'Tails';

document.write("you Got " + coinValue);

document.write("<br>" + "<br>");

// Question 06

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random Number " + randomNumber);

document.write("<br>" + "<br>");

// Question 07

var userWeight = +prompt("Enter your weight in kilograms: ");

var weight = parseFloat(userWeight);

if (!isNaN(weight)) {
  document.write("Your weight is: " + weight + " kg");
} else {
  document.write("please enter a valid weight.")
}

document.write("<br>" + "<br>");

// Question 08

userInput = +prompt("Enter a number betwwen 1 to 10");

var secretNumber = Math.floor(Math.random() * 10) + 1;

if (userInput === secretNumber) {
  document.write("Bingo! Correct answer.")
} else {
  document.write("Try again! The secret number was " + secretNumber);
}