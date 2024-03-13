document.addEventListener('DOMContentLoaded', () => {
    const words = ['javascript', 'hangman', 'programming', 'computer', 'keyboard', 'developer', 'application'];
    let chosenWord = words[Math.floor(Math.random() * words.length)];
    let guessesLeft = 6;
    let lettersGuessed = [];
    
    const wordContainer = document.getElementById('word-container');
    const guessesSpan = document.getElementById('guesses');
    const letterInput = document.getElementById('letter-input');
    const guessButton = document.getElementById('guess-button');
    const messageDiv = document.getElementById('message');
    
    const displayWord = () => {
        let displayText = '';
        for (let letter of chosenWord) {
            if (lettersGuessed.includes(letter)) {
                displayText += letter + ' ';
            } else {
                displayText += '_ ';
            }
        }
        wordContainer.textContent = displayText;
    };
    
    const checkWin = () => {
        if (chosenWord.split('').every(letter => lettersGuessed.includes(letter))) {
            messageDiv.textContent = 'You win!';
            guessButton.disabled = true;
        }
    };
    
    const checkLoss = () => {
        if (guessesLeft === 0) {
            messageDiv.textContent = `You lose! The word was "${chosenWord}".`;
            guessButton.disabled = true;
        }
    };
    
    displayWord();
    
    guessButton.addEventListener('click', () => {
        const letter = letterInput.value.toLowerCase();
        letterInput.value = '';
        
        if (!lettersGuessed.includes(letter)) {
            lettersGuessed.push(letter);
            
            if (!chosenWord.includes(letter)) {
                guessesLeft--;
                guessesSpan.textContent = guessesLeft;
            }
            
            displayWord();
            checkWin();
            checkLoss();
        } else {
            messageDiv.textContent = 'You already guessed that letter!';
        }
    });
});
