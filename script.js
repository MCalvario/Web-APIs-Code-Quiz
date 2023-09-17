//First I need to get a hanndle on my elements.
var timerEl = document.getElementById('countdown');




//There should be a start button.



//I need to give the user  countdown.
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer:  " + timeLeft;
        
        if(timeLeft <= 0) {
          timerEl.textContent = "";
          // Stops execution of action at set interval
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    }
    
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

//When the timer reaches 0, the game is over.

//I need to ask questions.

//I need answers.

//I need to keep track of the questions and answers.

//I need to keep track of the rigt and wrong answers.

//I will need an array of objects to keep track.

//I need to display the time remaining.

//I need to display a button where we can view high scores.

//I need to create a box where user can enter initials at the end of the game.

//User should be able to save initials and score.

