'use strict'
// --- Exercise 1: Using == vs === ---
// Description: Compare the number 5 and the string "5" using both == and ===.
// 1. Use == to compare 5 and "5" and observe the result.
console.log(5 == "5"); // true
document.write(5 == "5");
// 2. Use === to compare 5 and "5" and observe the result.
console.log(5 === "5"); // false
document.write(5 === "5");
// 3. Explain the difference between the two.
console.log("== checks the value, not the type. === checks the value and the type.");


// --- Exercise 2: Using != and !== ---
// Description: Compare 10 and "10" using != and !==.
// 1. Use != to compare 10 and "10" and observe the result.
console.log(10 != "10"); // false
console.log("10" !== "10"); // true
// 2. Use !== to compare 10 and "10" and observe the result.
console.log(10 !== "10"); // true
console.log("10" != "10"); // false
// 3. Explain why the results differ.
console.log("!= checks the value, not the type. !== checks the value and the type.");


// --- Exercise 3: Greater than and Less than Comparisons ---
// Description: Compare the numbers 8 and 6 using >, <, >=, and <=.
// 1. Check if 8 is greater than 6.
console.log(8 > 6); // true
// 2. Check if 4 is less than 10.
console.log(4 < 10); // true
// 3. Check if 7 is greater than or equal to 7.
console.log(7 >= 7); // true
// 4. Check if 3 is less than or equal to 2.
console.log(3 <= 2); // false


// --- Exercise 4: Identifying Truthy and Falsy Values ---
// Description: Determine whether the following values are truthy or falsy in JavaScript.
console.log("Truthy Values:");
console.log("hello"); // truthy
console.log(1); // truthy
console.log("Falsy Values:");
console.log(0); // falsy
// 1. Check the Boolean value of 0.
console.log(Boolean(0)); // false
// 2. Check the Boolean value of "hello".
console.log(Boolean("hello")); // true
// 3. Check the Boolean value of an empty string "".
console.log(Boolean("")); // false
// 4. Check the Boolean value of null.
console.log(Boolean(null)); // false


// --- Exercise 5: Truthy/Falsy in Conditional Statements ---
// Description: Use a truthy or falsy value in an if statement.
console.log("Falsy Values:");
console.log("Truthy values:");
// 1. Declare a variable userName and assign it an empty string ("").
console.log({ username: "" });
// 2. Write an if statement that prints "User exists" if userName is truthy, otherwise print "No user found".



// --- Exercise 6: Using if, else if, and else ---
// Description: Write a function that takes a number and checks whether it's greater than, less than, or equal to 10.
function checkNumber(num) {
  if (num > 10) {
    console.log("Number is greater than 10");
  } else if (num < 10) {
    console.log("Number is less than 10");
  } else {
    console.log("Number is exactly 10");
  }
}
// 1. If the number is greater than 10, print "Number is greater than 10".
console.log(checkNumber(11)); // Number is greater than 10
// 2. If the number is less than 10, print "Number is less than 10".
console.log(checkNumber(5)); // Number is less than 10
// 3. Otherwise, print "Number is exactly 10".
console.log(checkNumber(10)); // Number is exactly 10




// --- Exercise 7: Even or Odd ---
// Description: Create a function that checks if a given number is even or odd.
// 1. Use the modulo operator (%) to determine whether a number is even or odd.
// 2. Print "Even" for even numbers and "Odd" for odd numbers.


// --- Exercise 8: Checking Multiple Conditions ---
// Description: Check if a number is between 5 and 15 (inclusive).
// 1. If the number is between 5 and 15 (including 5 and 15), print "Number is in range".
// 2. Otherwise, print "Number is out of range".


// --- Exercise 9-14: DOM Manipulation ---
// For these exercises, interact with the webpage elements in index.html.

// --- Exercise 9: Change Text Color on Button Click ---
// When the button is clicked, change the text color to red.
let changeColorBtn = document.getElementById("changeColorBtn");
if (changeColorBtn) {
  changeColorBtn.addEventListener("click", () => {
    changeColorBtn.style.color = "red";
  });
}


// --- Exercise 10: Show Alert on Button Click ---
// When the button is clicked, display an alert with the text "Button clicked!".
let alertBtn = document.getElementById("alertBtn");
if (alertBtn) {
  alertBtn.addEventListener("click", () => {
    alert("Button clicked!");
  });
}


// --- Exercise 11: Change Background Color ---
// When the button is clicked, toggle the background color between white and lightgray.
let button = document.getElementById("changeColorBtn");
let body = document.querySelector("body");
if (button) {
  button.addEventListener("click", () => {
    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "gray";
    } else {
      body.style.backgroundColor = "white";
    }
  });
}



// --- Exercise 12: Display Input Value ---
// When the user types in the input box, print the typed value to the console.
let input = document.getElementById("userInput");
if (input) {
  input.addEventListener("input", () => {
    console.log(input.value);
  });
}


// --- Exercise 13: Hide a Paragraph on Click ---
// When the paragraph with ID "result" is clicked, hide it.
let paragraph = document.getElementById("result");
if (paragraph) {
  paragraph.addEventListener("click", () => {
    paragraph.style.display = "none";
  });
}


// --- Exercise 14: Change Button Text on Click ---
// When the button is clicked, change its text to "Clicked!".
let changeTextBtn = document.getElementById("changeTextBtn");
if (changeTextBtn) {
  changeTextBtn.addEventListener("click", () => {
    changeTextBtn.innerText = "Clicked!";
});
}
