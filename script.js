let mainArea = document.querySelector('#main-area');
let mainHeader = document.querySelector('#main-header');
let quizStartButton = document.querySelector('#startQuizButton');
let mainParagraph = document.querySelector('#main-paragraph')

function startQuiz() {
mainArea.style.width = 'auto';
mainHeader.innerHTML = "Commonly used data types DO Not Include:"
mainParagraph.style.display = "none";
quizStartButton.style.float = "left";
}





quizStartButton.addEventListener("click", startQuiz)