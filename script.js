//First I need to get a hanndle on my elements.
var timerEl = document.getElementById('countdown');
var button = document.querySelector('startBtn');
var nextButton = document.createElement('button');
var question = document.getElementById("question")
var options = document.getElementById("options")

//There should be a start button.
//There needs to be an event listener for the start quiz button.
nextButton.addEventListener('click', () => { alert('Great job! Hit the refresh button to try again!');});
startBtn.addEventListener('click', onButtonClick);


//There needs to be a function for the event listener.
function onButtonClick  () {
  alert('Better hurry!');
}

//There needs to be a next button
nextButton.textContent = 'Next!';
document.body.appendChild(nextButton);

//I need to display a button where we can view high scores.

//I need to create a box where user can enter initials at the end of the game.

//User should be able to save initials and score.


//I need to ask questions.  
//I will need an array of objects to keep track.
//I need answers.  
//I will need an array of objects to keep track.//I need to keep track of the questions and answers.
//I need to keep track of the rigt and wrong answers.
//I will need an array of objects to keep track.
var Questions = [{
  question: "What does DOM stand for?",
  answer: [
  { text: "Data online movement", isCorrect: false },
  { text: "Day of month", isCorrect: false },
  { text: "Document Object Model", isCorrect: true },
  { text: "None of the above", isCorrect: false }
 
  ]
},
{
  question: "Google is a:",
  answer: [
  { text: "Number in Math", isCorrect: false, isSelected: false },
  { text: "Chat service on the web", isCorrect: false },
  { text: "Directory of images", isCorrect: false },
  { text: "Search Engine", isCorrect: true }
  ]

},
{
  question: "Which of the following tag is used for inserting the largest heading in HTML?",
  answer: [
  { text: "h3", isCorrect: false },
  { text: "h5", isCorrect: false },
  { text: "h1", isCorrect: true },
  { text: "h6", isCorrect: false }
  ]

}

]




//I need to give the user countdown.
//I need to display the time remaining.
function countdown() {
  var timeLeft = 5;
  var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Timer:  " + timeLeft;
      
      if(timeLeft <= 0) {
        timerEl.textContent = "Times up!  Good job! :)";
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  
  function displayMessage() {
    timerEl.textContent = " Times up!  Good job! :)";    
  }
  countdown();
