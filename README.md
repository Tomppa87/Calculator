Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:

add
subtract
multiply
divide

A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
Create a basic HTML calculator with buttons for each digit and operator (including =).
Don’t worry about making them functional just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.
Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.
Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.# Calculator