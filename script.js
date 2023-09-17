//First I need to get a hanndle on my elements.
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('startBtn')
var questionsContainer = document.getElementById('questionsContainer')

//There needs to be event listeners.
startBtn.addEventListener('click', startQuiz)

//There should be a start button.
function startQuiz() {
  startBtn.classList.add('hide')
  questionsContainer.classList.remove('hide')
  setNextQuestion()
}


//I need to give the user  countdown.
function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer:  " + timeLeft;
        
        if(timeLeft <= 0) {
          timerEl.textContent = "Times up!  Good job! :)";
          // Stops execution of action at set interval
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    }
    //When the timer reaches 0, the game is over.
    function displayMessage() {
        var wordCount = 0;
        // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var msgInterval = setInterval(function () {
          if (words[wordCount] === undefined) {
            // Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
          } else {
            // Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
          }
        }, 1000);
      }
      countdown();
     

//I need to ask questions.
function setNextQuestion() {

}

//I need answers.
function selectAnswer() {

}
//I need to keep track of the questions and answers.

//I need to keep track of the rigt and wrong answers.

//I will need an array of objects to keep track.

//I need to display the time remaining.

//I need to display a button where we can view high scores.

//I need to create a box where user can enter initials at the end of the game.

//User should be able to save initials and score.

