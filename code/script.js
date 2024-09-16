// Start of the project - Kasia's Pizzeria

// Step 1 - Welcome and introduction
alert('Welcome to our Javascript Pizzeria. Ready to Start? - Click OK to begin.')
// Asking for customer's name
let userName = prompt('Please enter your name');
//Greeting the customer 
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
let foodChoice = prompt('What would you like to order? Please enter the number:\n1- Pizza\n2- Pasta\n3- Salad');
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
let subtypeChoice;
if (customerChoice == 'Pizza') {
    let pizzaType = prompt ('What type of pizza would you like to order? Please select the number:\n1- Pepperoni\n2- Hawaian\n3- Napolitano')
    if (pizzaType == 1) subtypeChoice = 'Pepperoni Pizza';
    else if (pizzaType == 2) subtypeChoice = 'Hawaiian Pizza';
    else if (pizzaType == 3) subtypeChoice = 'Napolitano Pizza';
} else if (customerChoice == 'Pasta') {
    let pastaType = prompt ('What type of pasta would you like to order? Please select the number:\n1- Spaghetti Carbonara\n2- Fetucini Alfredo\n3- Cheesy Tortelini');
    if (pastaType == 1) subtypeChoice = 'Spaghetti Carbonara';
    else if (pastaType == 2) subtypeChoice = 'Fettuccine Alfredo';
    else if (pastaType == 3) subtypeChoice = 'Cheese Tortellini';
} else if (customerChoice == 'Salad') {
    let saladType = prompt ('What type of pasta would you like to order? Please select the number:\n1- Cesar Salad\n2- Caprese Salad\n3- Greek Salad');
    if (saladType == 1) subtypeChoice = 'Cesar Salad';
    else if (saladType == 2) subtypeChoice = 'Caprese Salad';
    else if (saladType == 3) subtypeChoice = 'Greek Salad';
} else {
  alert ('Invalid choice, please select from given options. Refresh to start again.')
}
// Confirm the user's choice for Subtype choice
if (subtypeChoice) {
  alert(`You have chosen ${subtypeChoice}.`);
}

 
// Step 4 - Age
// order summary
let customerAge = prompt('Is this food for a child (under 18) or for an adult (18 and over)? Type your age here.');

if (customerAge < 0) {
    alert('Invalid age choice. Please refresh and try again.');
} else if (customerAge < 18) {
    alert(`One child size ${customerChoice} ${subtypeChoice} will be ready shortly.\n That will be $5.`);
} else {
  alert(`One adult size ${customerChoice} ${subtypeChoice} will be ready shortly.\n That will be $10.`)                                                                          
}

// Step 5 - Order confirmation
let confirmation = prompt('Confirm your order: \n1 - Yes, \n2 - No.');
if (confirmation == "1") {
  alert('Thank you for your order! Your order will be ready shortly!');
  } else if (confirmation == "2") {
  alert('No problem. Please visit us soon for some yummy pizza, pasta and salad.');
  } else {
    alert('Invalid confirmation choice. Refresh and try again!')
  }
