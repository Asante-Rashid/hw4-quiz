// var questionNumberEl = document.getElementById("Question-Number")

var timerElement = document.querySelector(".timer-count");
var questionEl = document.querySelector(".question")
var questionN = document.getElementById("Question-Number")
var buttonA = document.getElementById("Button-A")
var buttonB = document.getElementById("Button-B")
var buttonC = document.getElementById("Button-C")
var buttonD = document.getElementById("Button-D")

var questionBank = [
    {
        number: "Question 1/5",
        question: "sample question 1",
        answers: {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
        },
        correctAnswer: "A"
    },

    {
        number: "Question 2/5",
        question: "sample question 2",
        answers: {
            A: "5",
            B: "6",
            C: "7",
            D: "8",
        },
        correctAnswer: "B"
    },

];

// startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 60;
    renderQuestion()
    startTimer()
}

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        // if (timerCount >= 0) {
        //     // Tests if win condition is met
        //     if (isWin && timerCount > 0) {
        //         // Clears interval and stops timer
        //         clearInterval(timer);
        //         winGame();
        //     }
        // }
        // // Tests if time has run out
        if (timerCount === 0) {
            clearInterval(timer);
          
        }
    }, 1000);
}

function renderQuestion() {
    // Randomly picks word from words array
    chosenQuestion = questionBank[0];
    questionN.textContent = chosenQuestion.number
    questionEl.textContent = chosenQuestion.question
    Choice = chosenQuestion.answers
    buttonA.textContent = Choice.A
    buttonB.textContent = Choice.B
    buttonC.textContent = Choice.C
    buttonD.textContent = Choice.D
  }

startQuiz();