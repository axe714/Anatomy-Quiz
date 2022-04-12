//global scope variables DOM elements
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var endButton = document.querySelector("#end-button");
var startScreenElement = document.querySelector("#start-screen");
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    //hides the start screen
    startScreenElement.setAttribute("class", "hide");
    questionsElement.removeAttribute("class", "hide");
    startTimer();
    showQuestions();
}

//GOOD TO GO - WORKING AS INTENDED
function startTimer() {
    //set the timer to 15 seconds per question
    var timeLeft = questions.length * 15;
    var timer = setInterval(function () {
        //decreases timer each second
        timeLeft--;
        //display the time remaining
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            //displays time remaining on HTML
            timerElement.innerHTML = timeLeft;
        }
        //decreases timer at a 1 second interval
    }, 1000);
}


//showQuestions function [INCOMPLETE - to be added to the startQuiz function]
function showQuestions () {
    var currentQuestionIndex = 0;
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;
}





