/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');
      
// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);
    console.log(guess);
    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // game over - won
        gameOver(true, `Congratulations!!! , ${winningNum} is correct`);
    }
    else{
        // Wrong number
        guessesLeft -=1;

        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game over, you lost, the winning number was ${winningNum}`);

        } else {
            // Game continues - wrong answer

            // Change border color
            UIguessInput.style.borderColor = 'red';
            // Tell user it is the wrong number.
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }

});

// Set message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
    // Play again
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';
}

// Get winning Num
function getWinningNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}
