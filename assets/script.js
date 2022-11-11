// Grab reference to elements
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn")

var timeLeft = document.getElementById("time-left");

var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title")
var choiceA = document.getElementById("btnA")
var choiceB = document.getElementById("btnB")
var choiceC = document.getElementById("btnC")
var choiceD = document.getElementById("btnD")
var checkAnswer = document.getElementById("check-answer")

var scoreDiv = document.getElementById("score");

var scoreboardDiv = document.getElementById("scoreboard");

questionIndex = 0;
var totalTime = 200;

// Set of questions
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    }
]


// Begins the quiz by grabbing questions and starting timer
function newQuiz() {
    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "none";


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

// Check if questions are correct
function checkCorrect (answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        checkAnswer.textContent = "Correct!";
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        checkAnswer.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    }
}

function chooseA() {
   checkCorrect(0);
}

function chooseB() {
    checkCorrect(1);
}

function chooseC() {
    checkCorrect(2);
}

function chooseD() {
    checkCorrect(3);
}

// Event listeners
startQuizBtn.addEventListener("click", newQuiz)

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);
