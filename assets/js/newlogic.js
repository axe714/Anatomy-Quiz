//global scope variables DOM elements
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var endScreenElement = document.querySelector("#end-screen");
var endScoreElement = document.querySelector("#end-score");
var endTimeElement = document.querySelector("#end-time");
var endButton = document.querySelector("#end-button");
var submitButton = document.querySelector("#submit");
var startScreenElement = document.querySelector("#start-screen");
var hideElements = document.querySelectorAll(".hide");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    //hides the start screen
    startScreenElement.setAttribute("class", "hide");
    questionsElement.removeAttribute("class", "hide");
    timerElement.textContent = time;
    showQuestions();
}




