var scoreList = document.querySelector("#score-list");

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

// Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       ScoreBoard.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storeTodos();
//       renderTodos();
//     }
//   });

init()