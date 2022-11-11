var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn")

var questionDiv = document.getElementById("questions");

var scoreDiv = document.getElementById("score");

var scoreboardDiv = document.getElementById("scoreboard");

const questions = [
    {
        question: "inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    }
]

function newQuiz() {
    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "none"

}

startQuizBtn.addEventListener("click", newQuiz)
