let mainArea = document.querySelector('#main-area');
let mainHeader = document.querySelector('#main-header');
let answerButtons = document.querySelector('.answer-buttons')
let quizStartButton = document.querySelector('#startQuizButton');
let mainParagraph = document.querySelector('#main-paragraph');
let answerSection = document.querySelector('#answer-buttons-section');
let rightOrWrong = document.querySelector('.right-or-wrong');
let timer = document.querySelector("#time-left");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let timeleft = 75;

function startQuiz() {
    // let timeleft = 75;
    let countdownTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(countdownTimer);
      }
      timer.innerHTML = timeleft;
      timeleft -= 1;
    }, 1000);

//Question 1
mainArea.style.width = '40%';
mainHeader.innerHTML = "Commonly used data types DO Not Include:"
mainParagraph.style.display = "none";
quizStartButton.style.display = "none";

answerSection.style.display = "block";

button1.innerHTML = "1. Strings";
button2.innerHTML = "2. Booleans";
button3.innerHTML = "3. Alerts";
button4.innerHTML = "4. Numbers";

button1.addEventListener("click", wrongAnswer1);
button2.addEventListener("click", wrongAnswer1);
button3.addEventListener("click", correctAnswer1);
button4.addEventListener("click", wrongAnswer1);
}


//Wrong or correct answer functions
//correct answers
function correctAnswer1() {
    rightOrWrong.style.display = "block";
    mainArea.style.borderBottom = "1px black solid";
    rightOrWrong.innerHTML = "Correct!";
    mainHeader.innerHTML = "The condition in an if / else statement is enclosed with ____:";
    button1.innerHTML = "1. Quotes";
    button2.innerHTML = "2. Curly Brackets";
    button3.innerHTML = "3. Parenthesis";
    button4.innerHTML = "4. Square Brackets";

button1.addEventListener("click", wrongAnswer2);
button2.addEventListener("click", wrongAnswer2);
button3.addEventListener("click", correctAnswer2);
button4.addEventListener("click", wrongAnswer2);
}

function correctAnswer2() {
    rightOrWrong.innerHTML = "Correct!"
    mainHeader.innerHTML = "Arrays in Javascript can be used to store ____";
    button1.innerHTML = "1. Numbers and Strings";
    button2.innerHTML = "2. Other Arrays";
    button3.innerHTML = "3. Booleans";
    button4.innerHTML = "4. All of the above";
    
    button1.addEventListener("click", wrongAnswer3);
    button2.addEventListener("click", wrongAnswer3);
    button3.addEventListener("click", wrongAnswer3);
    button4.addEventListener("click", correctAnswer3);
}

function correctAnswer3() {
    rightOrWrong.innerHTML = "Correct!"
    mainHeader.innerHTML = "String values must be enclosed within _____ when being assigned to variables.";
    button1.innerHTML = "1. Commas";
    button2.innerHTML = "2. Curley Brackets";
    button3.innerHTML = "3. Quotes";
    button4.innerHTML = "4. Parenthesis";
    
    button1.addEventListener("click", wrongAnswer4);
    button2.addEventListener("click", wrongAnswer4);
    button3.addEventListener("click", correctAnswer4);
    button4.addEventListener("click", wrongAnswer4);
}

function correctAnswer4() {
    rightOrWrong.innerHTML = "Correct!"
    mainHeader.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
    button1.innerHTML = "1. Javascript";
    button2.innerHTML = "2. Terminal/Bash";
    button3.innerHTML = "3. For loops";
    button4.innerHTML = "4. console.log";
    }

//Wrong answers
function wrongAnswer1() {
    rightOrWrong.style.display = "block";
    rightOrWrong.innerHTML = "Wrong!";
    mainArea.style.borderBottom = "1px black solid";
    timeleft -= 20;
    mainHeader.innerHTML = "The condition in an if / else statement is enclosed with ____:";
    button1.innerHTML = "1. Quotes";
    button2.innerHTML = "2. Curly Brackets";
    button3.innerHTML = "3. Parenthesis";
    button4.innerHTML = "4. Square Brackets";

    button1.addEventListener("click", wrongAnswer2);
    button2.addEventListener("click", wrongAnswer2);
    button3.addEventListener("click", correctAnswer2);
    button4.addEventListener("click", wrongAnswer2);
}

function wrongAnswer2() {
    rightOrWrong.innerHTML = "Wrong!"
    timeleft -= 20;
    mainHeader.innerHTML = "Arrays in Javascript can be used to store ____";
    button1.innerHTML = "1. Numbers and Strings";
    button2.innerHTML = "2. Other Arrays";
    button3.innerHTML = "3. Booleans";
    button4.innerHTML = "4. All of the above";
    
    button1.addEventListener("click", wrongAnswer3);
    button2.addEventListener("click", wrongAnswer3);
    button3.addEventListener("click", wrongAnswer3);
    button4.addEventListener("click", correctAnswer3);
}

function wrongAnswer3() {
    rightOrWrong.innerHTML = "Wrong!";
    timeleft -= 20;
    mainHeader.innerHTML = "Arrays in Javascript can be used to store ____";
    button1.innerHTML = "1. Numbers and Strings";
    button2.innerHTML = "2. Other Arrays";
    button3.innerHTML = "3. Booleans";
    button4.innerHTML = "4. All of the above";
    
    button1.addEventListener("click", wrongAnswer3);
    button2.addEventListener("click", wrongAnswer3);
    button3.addEventListener("click", correctAnswer3);
    button4.addEventListener("click", wrongAnswer3);
}

function wrongAnswer4() {
    rightOrWrong.innerHTML = "Wrong!";
    timeleft -= 20;
    mainHeader.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
    button1.innerHTML = "1. Javascript";
    button2.innerHTML = "2. Terminal/Bash";
    button3.innerHTML = "3. For loops";
    button4.innerHTML = "4. console.log";
    
    button1.addEventListener("click", wrongAnswer3);
    button2.addEventListener("click", wrongAnswer3);
    button3.addEventListener("click", correctAnswer3);
    button4.addEventListener("click", wrongAnswer3);
}

quizStartButton.addEventListener("click", startQuiz)