// Grab reference to elements
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-btn");

var timeLeft = document.getElementById("time-left");
var time = document.getElementById("time");
var timesUp = document.getElementById("times-up");

var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");
var checkAnswer = document.getElementById("check-answer");

var scoreDiv = document.getElementById("score");
var finalScore = document.getElementById("final-score");
var submitInitialsBtn = document.getElementById("submit-initials");
var initialsInput = document.getElementById("initials-input");

var scoreboardDiv = document.getElementById("scoreboard");
var highscoreList = document.getElementById("highscore-list");
var goBackBtn = document.getElementById("go-back");

var questionIndex = 0;
var totalTime = 10;
var correctAnswers = 0;
var startTimer;

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
    totalTime = 10;
    questionIndex = 0;
    timeLeft.textContent = totalTime;

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "none";
    timesUp.style.display = "none";
    time.style.display = "block";
    checkAnswer.style.display = "none";



    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0 && questionIndex <= questions.length - 1) {
            clearInterval(startTimer);
            endGame();
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
    checkAnswer.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        checkAnswer.textContent = "Correct!";
        correctAnswers++;
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        checkAnswer.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        endGame();
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

// What happens when the game ends
function endGame() {
    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "block";
    scoreboardDiv.style.display = "none";
    timesUp.style.display = "block";
    time.style.display = "none";

    finalScore.textContent = correctAnswers;
}

// Store initials in local storage
function storeHighscores(event) {
    event.preventDefault();

    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "block";
    scoreboardDiv.style.display = "none";
    time.style.display = "none";
    timesUp.style.display = "block";

    const newScore = {
        initials: initialsInput.value,
        score: finalScore.textContent,
    }

    window.localStorage.setItem("newScore", JSON.stringify(newScore));

    showHighscores();
}

// Show the Highscores page
function showHighscores() {
    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "block";
    time.style.display = "none";
    timesUp.style.display = "block";

    var savedScores = window.localStorage.getItem("newScore")
    console.log(savedScores);

   // highscoreList.innerHTML = "";
    highscoreList.style.display = "block"

    var storedScore = JSON.parse(savedScores)


    if (storedScore !== null) {
        highscoreList.innerHTML = storedScore.initials + " : " + storedScore.score;
    }

}

// Event listeners
startQuizBtn.addEventListener("click", newQuiz);

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialsBtn.addEventListener("click", function(event) {
    storeHighscores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "none";
    timesUp.style.display = "none";
    time.style.display = "none";
});
