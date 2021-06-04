let guessInput = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let againBtn = document.querySelector(".again")
let number = document.querySelector(".number")
let guessMessage = document.querySelector("h1")
let bodyColor = document.querySelector('body')

let scores = {
    scoreValue: 20,
    hscore: 0
}


let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)

function messageContent(msg) {
    message.textContent = msg
}
// 21,
checkBtn.addEventListener('click', () => {
    if (Number(guessInput.value) <= 0 || (guessInput.value) > 20) {
        message.textContent = 'incorrect input';
        guessInput.value = ' ';
    } else if (randomNumber === Number(guessInput.value)) {
        messageContent("you winner.....")
        number.textContent = randomNumber
        bodyColor.style.background = 'red'
        guessMessage.textContent = 'correct guesss............'
        if (scores.scoreValue > scores.hscore) {
            scores.hscore = scores.scoreValue;
            highscore.textContent = scores.hscore;

        }




    } else if (scores.scoreValue > 1) {
        randomNumber > Number(guessInput.value) ? messageContent('to low') : messageContent('to high')
        scores.scoreValue--;
        scores.textContent = scores.scoreValue;
    } else {
        scores.textContent = "try again...."
        bodyColor.style.background = 'yellow'
    }
});

againBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    score.textContent = 'start guessing ..';
    number.textContent = '?';
    bodyColor.style.background = 'black ';
    guessInput.value = ' ';
    guessInput.textContent = 'guess my number'
    score.scoreValue = 20

});