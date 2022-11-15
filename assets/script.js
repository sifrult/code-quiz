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
var lineBreak = document.getElementById("line-break");
var checkAnswer = document.getElementById("check-answer");

var scoreDiv = document.getElementById("score");
var finalScore = document.getElementById("final-score");
var submitInitialsBtn = document.getElementById("submit-initials");
var initialsInput = document.getElementById("initials-input");

var scoreboardDiv = document.getElementById("scoreboard");
var highscoreList = document.getElementById("highscore-list");
var goBackBtn = document.getElementById("go-back");
var clearScoresBtn = document.getElementById("clear-scores")
var viewHighscores = document.getElementById("view-highscores");

var questionIndex = 0;
var totalTime = 150;
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
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
]

// Resets the quiz
function reset() {
    totalTime = 150;
    questionIndex = 0;
    initialsInput.textContent = "";
    i = 0;
    correctAnswers = 0;
    highscoreList.textContent = "";
}

// Begins the quiz by grabbing questions and starting timer
function newQuiz() {
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
        if (totalTime <= 0 || questionIndex == questions.length - 1) {
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
    lineBreak.style.display = "block";
    checkAnswer.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        checkAnswer.textContent = "Correct!";
        correctAnswers++;
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        checkAnswer.textContent = "Incorrect! The correct answer was: " + questions[questionIndex].answer;
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

    if (initialsInput.value === "") {
        alert("Please enter your initials");
        return;
    }

    if (!/^[a-zA-Z]*$/g.test(initialsInput.value)) {
        alert("Invalid characters");
        initialsInput.focus();
        return false;
    }

    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "block";
    scoreboardDiv.style.display = "none";
    time.style.display = "none";
    timesUp.style.display = "block";

    var savedHighscores = localStorage.getItem("high scores")
    var scoresArray;

    if (savedHighscores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighscores)
    };

    var newScore = {
        initials: initialsInput.value,
        score: finalScore.textContent,
    }
    console.log(newScore);
    scoresArray.push(newScore);

    window.localStorage.setItem("high scores", JSON.stringify(scoresArray));

    showHighscores();
}

var i = 0;
// Show the Highscores page
function showHighscores() {
    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "none";
    scoreboardDiv.style.display = "block";
    time.style.display = "none";
    timesUp.style.display = "none";

    var savedScores = window.localStorage.getItem("high scores")
    if (savedScores !== null) {
        stored = savedScores;
    }

    console.log(savedScores);

    var storedScore = JSON.parse(stored)

    for (; i < storedScore.length; i++) {

        var printScore = document.createElement("p");
        printScore.textContent = storedScore[i].initials + ": " + storedScore[i].score;
        highscoreList.appendChild(printScore);
    }
}

// Event listeners
startQuizBtn.addEventListener("click", newQuiz);

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

viewHighscores.addEventListener("click", function() {
    showHighscores();
    timesUp.style.display = "none";
    time.style.display = "none";
})

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
    lineBreak.style.display = "none";
    reset();
});

clearScoresBtn.addEventListener("click", function() {
    localStorage.clear("high scores");
    highscoreList.textContent = "Scores cleared!";
})
