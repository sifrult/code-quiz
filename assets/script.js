// Grab reference to elements
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn")

var timeLeft = document.getElementById("time-left");

var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title")
var choiceA = document.getElementById("btn1")
var choiceB = document.getElementById("btn2")
var choiceC = document.getElementById("btn3")
var choiceD = document.getElementById("btn4")

var scoreDiv = document.getElementById("score");

var scoreboardDiv = document.getElementById("scoreboard");

questionIndex = 0;

// Set of questions
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
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

    nextQuestion();
}

// Display questions and answer options

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// Event listeners
startQuizBtn.addEventListener("click", newQuiz)
