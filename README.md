# Number-Guesser
A simple browser game to try to guess a number between a given range. This game in used mainly to practice binary search algorithm. THe winning road in this game is to choose numbers in binary search approach.

# Usage
* Put a number in the input field and press submit to see your guess is right or not.
* Press play again if you run out of guesses to try for another time.

# Development
The game is built with Javascript ES6 for the logic part, and Skeleton for the UI part.

# Run
The game could be run simply by opening index.html file in your browser.

# Useful functions and data fields in code
This functions are available in app.js file.

### setMessage(msg, color)
Used to get get a message and display it under the input field in the UI. we can also specify the color of this message as we want by passing the color as a second parameter for the function.

### gameOver(won, msg)
Used to specify if the state is a winning state or a losing state and doing what is necessary after the state. Like, changing the color to red and tell the use he lost if we pass it a losing state.

### getWinningNum(min, max)
Used to get a random number between a min and max number.

### min and max data fields
Used to specify the min and max range of numbers we will guess. note that, min should be less than or equal max.
