// Grab reference to elements
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn")

var timeLeft = document.getElementById("time-left");

var questionDiv = document.getElementById("questions");

var scoreDiv = document.getElementById("score");

var scoreboardDiv = document.getElementById("scoreboard");

// Set of questions
const questions = [
    {
        question: "inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    }
]

// Begins the quiz by grabbing questions and starting timer
function newQuiz() {
    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "none"

    var totalTime = 20
    timeLeft.textContent = totalTime;

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
        }
    }, 1000);
}

startQuizBtn.addEventListener("click", newQuiz)
