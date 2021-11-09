var scoreList = document.querySelector("#score-list");
var clearBtn = document.querySelector("#clear");

var ScoreBoard = [];

// The following function renders items in a todo list as <li> elements
function renderScores() {
  // Clear todoList element and update todoCountSpan
  scoreList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < ScoreBoard.length; i++) {
    var score = ScoreBoard[i];

    var li = document.createElement("li");
    li.textContent = score.initials + " - " + score.grade;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("ScoreBoard"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    ScoreBoard = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderScores();
}

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    renderScores()
});

init()