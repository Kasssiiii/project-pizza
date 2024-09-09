// Start of the project

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
// Asking for customer's name
let userName = prompt('Please enter your name');
//Greeting the customer 
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
let foodChoice = prompt('What would you like to order? Please enter the number:\n1 Pizza\n2 Pasta\n3 Salad');
// Determine the user's choice
let customerChoice;
if (foodChoice == 1) {
  customerChoice = 'Pizza';
} else if (foodChoice == 2) {
  customerChoice = 'Pasta';
} else if (foodChoice == 3) {
  customerChoice = 'Salad';
} else {
  alert('Invalid entry. Please refresh and try again.');
}
// Confirm the user's choice
if (customerChoice) {
  alert(`You have chosen ${customerChoice}.`);
}
// Step 3 - Subtype choice 

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
