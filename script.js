// ===============================
// Part 1: Variable Declarations & Conditionals
// ===============================

// Variables
let userName = "Zeddy";
let userAge = 22;

// Conditional
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Greet user
function greetUser(name) {
    return "Hello, " + name + "! Welcome to the JS Project.";
}

// Function 2: Calculate square of a number
function squareNumber(num) {
    return num * num;
}

// Example usage
console.log(greetUser(userName));
console.log("Square of 5 is: " + squareNumber(5));

// ===============================
// Part 3: Loop Examples
// ===============================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop iteration: " + i);
}

// Loop 2: While loop
let count = 1;
while (count <= 3) {
    console.log("While Loop iteration: " + count);
    count++;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// Interaction 1: Change text of a paragraph
const messagePara = document.getElementById("message");
messagePara.textContent = "This text was updated using JavaScript.";

// Interaction 2: Change heading text on button click
const changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.addEventListener("click", function() {
    const title = document.getElementById("main-title");
    title.textContent = "Title Changed!";
});

// Interaction 3: Add new item to list on button click
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function() {
    const list = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);

    // Use custom function inside DOM interaction
    alert("Square of 4 is " + squareNumber(4));
});
